import { createContext, useContext } from "react";
import { SliderContextProps } from "../types/Slider.types";

export const SliderContext = createContext<SliderContextProps | undefined>(
  undefined,
);

export const useSlider = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error("Slider sub-components must be used within a <Slider />");
  }
  return context;
};
