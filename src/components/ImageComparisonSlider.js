import React, { useRef, useState, useEffect } from 'react';
import './ImageComparisonSlider.css';

export default function ImageComparisonSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After"
}) {
  const sliderRef = useRef(null);
  const [sliderPosition, setSliderPosition] = useState(50); // Start at 50% for centered
  const [containerHeight, setContainerHeight] = useState('auto');
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const beforeImg = new Image();
    beforeImg.src = beforeImage;
    beforeImg.onload = () => {
      if (sliderRef.current) {
        setContainerHeight(beforeImg.naturalHeight * (sliderRef.current.offsetWidth / beforeImg.naturalWidth));
      }
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [beforeImage]);

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
      {/* Before and After labels */}
      <div className="image-comparison-header before-label">{beforeLabel}</div>
      <div className="image-comparison-header after-label">{afterLabel}</div>

      {/* "After" image is now on top with clipping */}
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
      ></div>
    </div>
  );
}