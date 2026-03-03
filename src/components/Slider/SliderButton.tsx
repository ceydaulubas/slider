import React from "react";
import { useSlider } from "../../context/SliderContext";
import { Arrow } from "./SliderStyles.styles";
import { ButtonProps } from "../../types/Slider.types";

 const SliderButton: React.FC<ButtonProps> = ({
  type,
  children,
  style = "minimal",
}) => {
  const { goToNext, goToPrev, direction } = useSlider();
  const isHorizontal = direction === "horizontal";
  const handleClick = type === "next" ? goToNext : goToPrev;
  const defaultIcon =
    type === "next" ? (isHorizontal ? ">" : "˅") : isHorizontal ? "<" : "˄";
  return (
    <Arrow
      direction={
        type === "next"
          ? isHorizontal
            ? "right"
            : "down"
          : isHorizontal
            ? "left"
            : "up"
      }
      arrowStyle={style}
      arrowColor="black"
      onClick={handleClick}
    >
      {children || defaultIcon}
    </Arrow>
  );
};

export default SliderButton;