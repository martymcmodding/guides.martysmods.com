import React, { useRef, useState, useEffect, useMemo } from 'react';
import './ImageComparisonSlider.css';

export default function ImageComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  showLabels = true
}) {
  const sliderRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerHeight, setContainerHeight] = useState('auto');
  const [isDragging, setIsDragging] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowSize, setWindowSize] = useState(
    typeof window !== 'undefined' ? { w: window.innerWidth, h: window.innerHeight } : { w: 0, h: 0 }
  );
  const expandedRef = useRef(null);

  useEffect(() => {
    const onResize = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

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

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) {
        observer.unobserve(sliderRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const beforeImg = new Image();
    const afterImg = new Image();
    
    let loadedCount = 0;
    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === 2) {
        setImagesLoaded(true);
        if (sliderRef.current) {
          const calculatedHeight = beforeImg.naturalHeight * (sliderRef.current.offsetWidth / beforeImg.naturalWidth);
          const minHeight = 300;
          const finalHeight = Math.max(calculatedHeight, minHeight);
          setContainerHeight(finalHeight);
          setImageDimensions({
            width: beforeImg.naturalWidth,
            height: beforeImg.naturalHeight
          });
        }
      }
    };

    beforeImg.onload = checkAllLoaded;
    afterImg.onload = checkAllLoaded;
    
    beforeImg.src = beforeImage;
    afterImg.src = afterImage;

    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);
    
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [beforeImage, afterImage, isInView]);

  const moveSlider = (position) => {
    const boundedPosition = Math.max(0, Math.min(position, 100));
    setSliderPosition(boundedPosition);
  };

  const getActiveContainer = () => (isExpanded ? expandedRef.current : sliderRef.current);

  const handleDrag = (e) => {
    const container = getActiveContainer();
    if (!container || !isDragging) return;

    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
    const position = (offsetX / rect.width) * 100;
    moveSlider(position);
  };

  useEffect(() => {
    if (!isExpanded) return;
    const handleEscape = (e) => { if (e.key === 'Escape') setIsExpanded(false); };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isExpanded]);

  const startDrag = (e) => {
    e.preventDefault();
    setIsDragging(true);

    const container = getActiveContainer();
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
    const position = (offsetX / rect.width) * 100;
    moveSlider(position);
  };

  const expandedSize = useMemo(() => {
    if (!isExpanded || !imageDimensions.width || !imageDimensions.height || !windowSize.w || !windowSize.h) return null;
    const maxW = windowSize.w * 0.96;
    const maxH = windowSize.h * 0.94;
    const ar = imageDimensions.width / imageDimensions.height;
    if (maxW / maxH > ar) {
      return { width: maxH * ar, height: maxH };
    }
    return { width: maxW, height: maxW / ar };
  }, [isExpanded, imageDimensions.width, imageDimensions.height, windowSize.w, windowSize.h]);

  const getLoadingStyle = () => {
    if (imageDimensions.width && imageDimensions.height) {
      const aspectRatio = imageDimensions.height / imageDimensions.width;
      const containerWidth = sliderRef.current ? sliderRef.current.offsetWidth : window.innerWidth;
      const calculatedHeight = containerWidth * aspectRatio;
      const minHeight = 300;
      const finalHeight = Math.max(calculatedHeight, minHeight);
      
      return {
        height: `${finalHeight}px`,
        maxWidth: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666',
        fontSize: '14px',
        position: 'relative'
      };
    }
    
    return {
      height: '300px',
      maxWidth: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#666',
      fontSize: '14px',
      position: 'relative'
    };
  };

  if (!isInView || !imagesLoaded) {
    return (
      <div
        className="image-comparison-slider"
        ref={sliderRef}
        style={getLoadingStyle()}
      >
        {!isInView ? 'Loading...' : 'Preparing images...'}
      </div>
    );
  }

  const sliderContent = (
    <>
      {showLabels && (
        <>
          <div className="image-comparison-header before-label">
            {beforeLabel || 'Before'}
          </div>
          <div className="image-comparison-header after-label">
            {afterLabel || 'After'}
          </div>
        </>
      )}
      <img src={beforeImage} alt="Before" className="image-before" />
      <img
        src={afterImage}
        alt="After"
        className="image-after"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      />
      <div className="slider-handle" style={{ left: `${sliderPosition}%` }} />
    </>
  );

  return (
    <>
      <div
        className="image-comparison-slider"
        ref={sliderRef}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onMouseMove={handleDrag}
        onTouchMove={handleDrag}
        style={{ height: containerHeight || 'auto', maxWidth: '100%' }}
      >
        {sliderContent}
        <button
          type="button"
          className="image-comparison-expand-btn"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsExpanded(true); }}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          aria-label="Expand comparison"
          title="Expand"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3" />
          </svg>
        </button>
      </div>

      {isExpanded && (
        <div
          className="image-comparison-overlay"
          onClick={() => setIsExpanded(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image comparison"
        >
          <div
            className="image-comparison-overlay-backdrop"
            aria-hidden="true"
          />
          <div
            ref={expandedRef}
            className="image-comparison-overlay-content image-comparison-slider"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={startDrag}
            onTouchStart={startDrag}
            onMouseMove={handleDrag}
            onTouchMove={handleDrag}
            style={expandedSize ? {
              width: expandedSize.width,
              height: expandedSize.height
            } : { width: '96vw', maxHeight: '94vh', aspectRatio: imageDimensions.width && imageDimensions.height ? `${imageDimensions.width} / ${imageDimensions.height}` : 'auto' }}
          >
            {sliderContent}
            <button
              type="button"
              className="image-comparison-close-btn"
              onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
              onMouseDown={(e) => e.stopPropagation()}
              aria-label="Close expanded view"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}