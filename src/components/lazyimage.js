import React, { useRef, useState, useEffect } from 'react';

export default function LazyImage({
  src,
  alt,
  className,
  style,
  width,
  height,
  ...props
}) {
  const imgRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    img.onload = () => {
      setImageDimensions({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
      setImageLoaded(true);
    };
    img.src = src;
  }, [src, isInView]);

  const getPlaceholderDimensions = () => {
    if (width && height) {
      return { width, height };
    }
    
    if (style?.width && style?.height) {
      return { width: style.width, height: style.height };
    }
    
    if (imageDimensions.width && imageDimensions.height) {
      return { width: imageDimensions.width, height: imageDimensions.height };
    }
    
    return { width: '32px', height: '32px' };
  };

  const placeholderStyle = {
    ...style,
    ...getPlaceholderDimensions(),
    backgroundColor: 'transparent',
    display: 'inline-block'
  };

  if (!isInView || !imageLoaded) {
    return (
      <div
        ref={imgRef}
        className={`${className} lazy-image-placeholder`}
        style={placeholderStyle}
        aria-label={`Loading ${alt || 'image'}`}
      />
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      {...props}
    />
  );
}