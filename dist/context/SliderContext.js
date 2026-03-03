import { createContext, useContext } from "react";
export var SliderContext = createContext(undefined);
export var useSlider = function () {
    var context = useContext(SliderContext);
    if (!context) {
        throw new Error("Slider sub-components must be used within a <Slider />");
    }
    return context;
};
