/**
 * rehype-image-dimensions
 *
 * A build-time rehype plugin that fetches the width and height of every <img>
 * in the processed MDX/Markdown that doesn't already have explicit dimensions.
 *
 * Dimensions are stored in .image-dimensions-cache.json at the repo root so
 * subsequent builds skip all network requests. Commit that file to avoid
 * re-fetching in CI.
 *
 * The injected width/height attributes let the browser reserve exact space for
 * each image before it loads, eliminating layout shift (CLS) completely.
 */

import probe from 'probe-image-size';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CACHE_PATH = path.join(__dirname, '../.image-dimensions-cache.json');

// Load once at module level so all concurrent page transforms share the same
// in-memory object and don't redundantly re-fetch the same URLs.
let cache = {};
try {
  cache = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));
} catch {
  // Cache doesn't exist yet — starts empty.
}

function saveCache() {
  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
}

// Docs contain two kinds of <img>:
//   1. Markdown images `![alt](url)`  -> HAST element nodes (node.tagName === 'img',
//      attributes under node.properties).
//   2. JSX images `<img className="img-md" src="…" />` -> MDX nodes
//      (node.type === 'mdxJsxFlowElement'/'mdxJsxTextElement', node.name === 'img',
//      attributes as an array under node.attributes).
// We handle both so dimensions get injected regardless of authoring style.

function isMdxJsxImg(node) {
  return (
    (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') &&
    node.name === 'img'
  );
}

function isImgNode(node) {
  return node.tagName === 'img' || isMdxJsxImg(node);
}

/** Read the src of an <img> node, or undefined if it isn't a plain string. */
function getImgSrc(node) {
  if (node.tagName === 'img') {
    const src = node.properties?.src;
    return typeof src === 'string' ? src : undefined;
  }
  const attr = (node.attributes || []).find(
    (a) => a.type === 'mdxJsxAttribute' && a.name === 'src'
  );
  // Skip expression values like src={foo}; only static strings are probeable.
  return typeof attr?.value === 'string' ? attr.value : undefined;
}

/** Whether the node already declares width or height (so we leave it alone). */
function hasExplicitDimensions(node) {
  if (node.tagName === 'img') {
    return node.properties?.width != null || node.properties?.height != null;
  }
  return (node.attributes || []).some(
    (a) => a.type === 'mdxJsxAttribute' && (a.name === 'width' || a.name === 'height')
  );
}

/** Set width/height on either an HAST element or an MDX JSX element. */
function setImgDimensions(node, width, height) {
  if (node.tagName === 'img') {
    node.properties.width = width;
    node.properties.height = height;
    return;
  }
  node.attributes.push({ type: 'mdxJsxAttribute', name: 'width', value: String(width) });
  node.attributes.push({ type: 'mdxJsxAttribute', name: 'height', value: String(height) });
}

/** Recursively collect all <img> nodes (markdown + JSX) from the tree. */
function collectImgNodes(tree) {
  const nodes = [];
  function walk(node) {
    if (isImgNode(node)) {
      nodes.push(node);
    }
    if (node.children) {
      for (const child of node.children) walk(child);
    }
  }
  walk(tree);
  return nodes;
}

export default function rehypeImageDimensions() {
  return async function transformer(tree) {
    const candidates = collectImgNodes(tree).filter((node) => {
      // Skip if dimensions are already set, or if the URL isn't fetchable.
      if (hasExplicitDimensions(node)) return false;
      const src = getImgSrc(node);
      return (
        typeof src === 'string' &&
        (src.startsWith('http://') || src.startsWith('https://'))
      );
    });

    if (candidates.length === 0) return;

    await Promise.all(
      candidates.map(async (node) => {
        const src = getImgSrc(node);
        try {
          if (!cache[src]) {
            const result = await probe(src, { timeout: 10000 });
            cache[src] = { width: result.width, height: result.height };
          }
          setImgDimensions(node, cache[src].width, cache[src].height);
        } catch {
          // Couldn't fetch — leave without dimensions, LazyImage 16:9 default applies.
        }
      })
    );

    saveCache();
  };
}
