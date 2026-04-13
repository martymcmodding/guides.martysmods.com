import React, { useRef, useState, useEffect } from 'react';

export default function LazyImage({ src, alt, className, style, width, height, ...props }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  const { maxWidth, ...imgStyle } = style || {};

  const hasDimensions = !!(width && height);
  const aspectRatio = hasDimensions ? `${width} / ${height}` : '16 / 9';
  const wrapperWidth = width ? (typeof width === 'number' ? `${width}px` : width) : undefined;

  const wrapperStyle = {
    // aspectRatio is only applied while loading to reserve space (prevents CLS).
    // Removed after load so the wrapper collapses to the image's natural height
    // instead of maintaining a minimum 16:9 gap below short/wide images.
    ...(!loaded && { aspectRatio }),
    ...(wrapperWidth ? { width: wrapperWidth } : {}),
    ...(maxWidth ? { maxWidth } : {}),
  };

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <span
      className={`lazy-image-wrapper${loaded ? ' lazy-image-loaded' : ' lazy-image-placeholder'}`}
      style={wrapperStyle}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={className}
        style={{
          ...imgStyle,
          display: 'block',
          width: '100%',
          height: hasDimensions ? '100%' : 'auto',
          objectFit: hasDimensions ? 'contain' : undefined,
          opacity: loaded ? 1 : 0,
          transition: loaded ? 'opacity 0.25s ease' : 'none',
        }}
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        {...props}
      />
    </span>
  );
}
