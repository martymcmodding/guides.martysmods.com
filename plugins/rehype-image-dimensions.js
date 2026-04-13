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

/** Recursively collect all <img> element nodes from a HAST tree. */
function collectImgNodes(tree) {
  const nodes = [];
  function walk(node) {
    if (node.tagName === 'img' && node.properties?.src) {
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
      const { src, width, height } = node.properties;
      // Skip if dimensions are already set, or if the URL isn't fetchable.
      return (
        !width &&
        !height &&
        typeof src === 'string' &&
        (src.startsWith('http://') || src.startsWith('https://'))
      );
    });

    if (candidates.length === 0) return;

    await Promise.all(
      candidates.map(async (node) => {
        const src = node.properties.src;
        try {
          if (!cache[src]) {
            const result = await probe(src, { timeout: 10000 });
            cache[src] = { width: result.width, height: result.height };
          }
          node.properties.width = cache[src].width;
          node.properties.height = cache[src].height;
        } catch {
          // Couldn't fetch — leave without dimensions, LazyImage 16:9 default applies.
        }
      })
    );

    saveCache();
  };
}
