import React, { useState } from "react";
import {
  SliderWrapper,
  SlideTrack,
  Slide,
  DotsWrapper,
  Dot,
  Arrow,
} from "./SliderStyles.styles";

interface SliderProps {
  children: React.ReactNode;
  visibleSlides?: number;
  showDots?: boolean;
  showArrows?: boolean;
  dotsPosition?: "top" | "bottom" | "left" | "right";
  slideStep?: number;
  direction?: "horizontal" | "vertical";
  arrowStyle?: "minimal" | "filled" | "outlined";
  arrowColor?: "black" | "white";
}

const Slider: React.FC<SliderProps> = ({
  children,
  visibleSlides = 1,
  showDots = true,
  showArrows = true,
  dotsPosition = "bottom",
  slideStep = 1,
  direction = "horizontal",
  arrowStyle = "minimal",
  arrowColor = "black",
}) => {
  // Hooks must always be called unconditionally
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!children || React.Children.count(children) === 0) {
    return null; // Return null if children is null, avoiding rendering anything
  }

  const totalSlides = React.Children.count(children); 

  // Maximum index value, preventing overflow when navigating through slides.
  const maxIndex = totalSlides - visibleSlides;

  // Calculate the number of dots based on the total number of slides and the number of visible slides.
  const numberOfDots = Math.ceil((totalSlides - visibleSlides + 1) / slideStep);

  const isHorizontal = direction === "horizontal";

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + slideStep, maxIndex));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - slideStep, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const slidePercentage = isHorizontal
    ? 100 / visibleSlides
    : 100 / totalSlides;

  return (
    <SliderWrapper
      direction={direction}
      style={{
        height: isHorizontal ? "auto" : `${visibleSlides * 200}px`,
        display: isHorizontal ? "block" : "flex",
        flexDirection: isHorizontal ? "row" : "column",
      }}
    >
      {showArrows && (
        <Arrow
          direction={isHorizontal ? "left" : "up"}
          arrowStyle={arrowStyle}
          arrowColor={arrowColor}
          onClick={goToPrev}
        >
          {isHorizontal ? "<" : "˄"}
        </Arrow>
      )}

      <SlideTrack
        style={{
          transform: isHorizontal
            ? `translateX(-${currentIndex * slidePercentage}%)`
            : `translateY(-${(currentIndex * slideStep * 100) / totalSlides}%)`,
          display: "flex",
          flexDirection: isHorizontal ? "row" : "column",
          width: isHorizontal ? "100%" : "100%",
          height: isHorizontal ? "auto" : `${totalSlides * 100}%`,
          transition: "transform 0.3s ease-in-out",
          boxSizing: "border-box",
        }}
      >
        {React.Children.map(children, (child, index) => (
          <Slide
            key={index}
            visibleSlides={visibleSlides}
            style={{
              flex: isHorizontal ? `0 0 ${slidePercentage}%` : "1",
              width: isHorizontal ? `${slidePercentage}%` : "100%",
              height: isHorizontal ? "auto" : `${100 / totalSlides}%`,
              boxSizing: "border-box",
              margin: "0",
              padding: "0",
            }}
          >
            {child}
          </Slide>
        ))}
      </SlideTrack>

      {showArrows && (
        <Arrow
          direction={isHorizontal ? "right" : "down"}
          arrowStyle={arrowStyle}
          arrowColor={arrowColor}
          onClick={goToNext}
        >
          {isHorizontal ? ">" : "˅"}
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
