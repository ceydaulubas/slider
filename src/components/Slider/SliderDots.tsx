import React from "react";
import { useSlider } from "../../context/SliderContext";
import { DotsWrapper, Dot } from "./SliderStyles.styles";
import { DotsPosition } from "../../types/Slider.types";

const SliderDots: React.FC<{
  position?: DotsPosition;
}> = ({ position = "bottom" }) => {
  const { totalSlides, visibleSlides, currentIndex, goToSlide } = useSlider();
  const numberOfDots = Math.max(0, totalSlides - visibleSlides + 1);
  if (numberOfDots <= 1) return null;
  return (
    <DotsWrapper position={position}>
      {Array.from({ length: numberOfDots }).map((_, index) => (
        <Dot
          key={index}
          active={index === currentIndex}
          onClick={() => goToSlide(index)}
        />
      ))}
    </DotsWrapper>
  );
};

export default SliderDots;
