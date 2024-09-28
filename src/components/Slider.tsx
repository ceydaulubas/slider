import React, { useState } from 'react';
import { SliderWrapper, SlideTrack, Slide, DotsWrapper, Dot, Arrow } from './SliderStyles.styles';

interface SliderProps {
  children: React.ReactNode[];
  visibleSlides?: number;
  showDots?: boolean;
  showArrows?: boolean;
  dotsPosition?: 'top' | 'bottom' | 'left' | 'right';
  slideStep?: number;
  direction?: 'horizontal' | 'vertical';
  arrowStyle?: 'minimal' | 'filled' | 'outlined';
  arrowColor?: 'black' | 'white';
}

const Slider: React.FC<SliderProps> = ({
  children,
  visibleSlides = 1,
  showDots = true,
  showArrows = true,
  dotsPosition = 'bottom',
  slideStep = 1,
  direction = 'horizontal',
  arrowStyle = 'minimal',  // Default to 'minimal'
  arrowColor = 'black',    // Default arrow color is black
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = children.length;
  const maxIndex = totalSlides - visibleSlides;

  const numberOfDots = Math.ceil((totalSlides - visibleSlides + 1) / slideStep);

  const isHorizontal = direction === 'horizontal';

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + slideStep, maxIndex));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - slideStep, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const slidePercentage = isHorizontal ? 100 / visibleSlides : 100 / totalSlides;

  return (
    <SliderWrapper style={{ height: isHorizontal ? 'auto' : `${visibleSlides * 200}px` }}>
      {showArrows && (
        <Arrow direction={isHorizontal ? 'left' : 'up'} arrowStyle={arrowStyle} arrowColor={arrowColor} onClick={goToPrev}>
          {isHorizontal ? '<' : '˄'}
        </Arrow>
      )}

      <SlideTrack
        style={{
          transform: isHorizontal
            ? `translateX(-${currentIndex * slidePercentage}%)`
            : `translateY(-${currentIndex * 100 / totalSlides}%)`,
          display: 'flex',
          flexDirection: isHorizontal ? 'row' : 'column',
          width: isHorizontal ? '100%' : '100%',
          height: isHorizontal ? 'auto' : '100%',
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {children.map((child, index) => (
          <Slide
            key={index}
            visibleSlides={visibleSlides}
            style={{
              flex: `0 0 ${slidePercentage}%`,
              width: isHorizontal ? `${slidePercentage}%` : '100%',
              height: isHorizontal ? 'auto' : `${100 / visibleSlides}%`,
              boxSizing: 'border-box',
            }}
          >
            {child}
          </Slide>
        ))}
      </SlideTrack>

      {showArrows && (
        <Arrow direction={isHorizontal ? 'right' : 'down'} arrowStyle={arrowStyle} arrowColor={arrowColor} onClick={goToNext}>
          {isHorizontal ? '>' : '˅'}
        </Arrow>
      )}

      {showDots && (
        <DotsWrapper position={dotsPosition}>
          {Array.from({ length: numberOfDots }).map((_, index) => (
            <Dot
              key={index}
              active={index * slideStep === currentIndex}
              onClick={() => goToSlide(index * slideStep)}
            />
          ))}
        </DotsWrapper>
      )}
    </SliderWrapper>
  );
};

export default Slider;
