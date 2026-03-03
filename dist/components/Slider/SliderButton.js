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
import { Arrow } from "./SliderStyles.styles";
var SliderButton = function (_a) {
    var type = _a.type, children = _a.children, _b = _a.style, style = _b === void 0 ? "minimal" : _b;
    var _c = useSlider(), goToNext = _c.goToNext, goToPrev = _c.goToPrev, direction = _c.direction;
    var isHorizontal = direction === "horizontal";
    var handleClick = type === "next" ? goToNext : goToPrev;
    var defaultIcon = type === "next" ? (isHorizontal ? ">" : "˅") : isHorizontal ? "<" : "˄";
    return (_jsx(Arrow, __assign({ direction: type === "next"
            ? isHorizontal
                ? "right"
                : "down"
            : isHorizontal
                ? "left"
                : "up", arrowStyle: style, arrowColor: "black", onClick: handleClick }, { children: children || defaultIcon })));
};
export default SliderButton;
