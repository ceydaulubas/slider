import React, { useState } from 'react';
import { SliderWrapper, SlideTrack, Slide, DotsWrapper, Dot, Arrow } from './SliderStyles.styles';

interface SliderProps {
  children: React.ReactNode[];
  visibleSlides?: number;
  showDots?: boolean;
  showArrows?: boolean;
  dotsPosition?: 'top' | 'bottom';
}

const Slider: React.FC<SliderProps> = ({
  children,
  visibleSlides = 1,
  showDots = true,
  showArrows = true,
  dotsPosition = 'bottom',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = children.length;
  const maxIndex = Math.ceil(totalSlides / visibleSlides) - 1;

  // Kaydırma fonksiyonları
  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const goToSlide = (index: number) => {
    console.log('index', index)
    setCurrentIndex(index);
  };

  // Görünür slaytların genişliği
  const slideWidthPercentage = 100 / visibleSlides;

  return (
    <SliderWrapper>
      {showArrows && (
        <Arrow direction="left" onClick={goToPrev}>
          {'<'}
        </Arrow>
      )}

      <SlideTrack
        style={{
          transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,  // Her slayt grubunu kaydırmak için doğru hesaplama
          display: 'flex',
          width: `100%`,
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {children.map((child, index) => (
          <Slide
            key={index}
            visibleSlides={visibleSlides}  // Her slaytın genişliğini ayarlamak için
            style={{
              flex: `0 0 ${slideWidthPercentage}%`,  // Her slaytın genişliği
              width: `${slideWidthPercentage}%`,
              boxSizing: 'border-box',
            }}
          >
            {child}
          </Slide>
        ))}
      </SlideTrack>

      {showArrows && (
        <Arrow direction="right" onClick={goToNext}>
          {'>'}
        </Arrow>
      )}

      {showDots && (
        <DotsWrapper position={dotsPosition}>
          {Array.from({ length: Math.ceil(totalSlides / visibleSlides) }).map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
            />
          ))}
        </DotsWrapper>
      )}
    </SliderWrapper>
  );
};

export default Slider;
