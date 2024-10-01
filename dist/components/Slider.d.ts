import React from "react";
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
declare const Slider: React.FC<SliderProps>;
export default Slider;
