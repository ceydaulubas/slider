import React from "react";
import { SliderProps } from "../../types/Slider.types";
import SliderTrack from "./SliderTrack";
import SliderButton from "./SliderButton";
import SliderDots from "./SliderDots";
declare const Slider: React.FC<SliderProps> & {
    Track: typeof SliderTrack;
    Button: typeof SliderButton;
    Dots: typeof SliderDots;
};
export default Slider;
