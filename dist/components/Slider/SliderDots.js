var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useSlider } from "../../context/SliderContext";
import { DotsWrapper, Dot } from "./SliderStyles.styles";
var SliderDots = function (_a) {
    var _b = _a.position, position = _b === void 0 ? "bottom" : _b;
    var _c = useSlider(), totalSlides = _c.totalSlides, visibleSlides = _c.visibleSlides, currentIndex = _c.currentIndex, goToSlide = _c.goToSlide;
    var numberOfDots = Math.max(0, totalSlides - visibleSlides + 1);
    if (numberOfDots <= 1)
        return null;
    return (_jsx(DotsWrapper, __assign({ position: position }, { children: Array.from({ length: numberOfDots }).map(function (_, index) { return (_jsx(Dot, { active: index === currentIndex, onClick: function () { return goToSlide(index); } }, index)); }) })));
};
export default SliderDots;
