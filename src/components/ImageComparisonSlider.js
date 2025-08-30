import React, { useRef, useState, useEffect } from 'react';
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

  const handleDrag = (e) => {
    if (!sliderRef.current || !isDragging) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = e.clientX ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
    const position = (offsetX / rect.width) * 100;
    moveSlider(position);
  };

  const startDrag = (e) => {
    e.preventDefault();
    setIsDragging(true);

    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = e.clientX ? e.clientX - rect.left : e.touches[0].clientX - rect.left;
    const position = (offsetX / rect.width) * 100;
    moveSlider(position);
  };

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

  return (
    <div
      className="image-comparison-slider"
      ref={sliderRef}
      onMouseDown={startDrag}
      onTouchStart={startDrag}
      onMouseMove={handleDrag}
      onTouchMove={handleDrag}
      style={{ height: containerHeight || 'auto', maxWidth: '100%' }}
    >
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
      
      <div
        className="slider-handle"
        style={{ left: `${sliderPosition}%` }}
      />
    </div>
  );
}