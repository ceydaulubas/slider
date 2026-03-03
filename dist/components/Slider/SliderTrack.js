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
import React, { useEffect } from "react";
import { useSlider } from "../../context/SliderContext";
import { SlideTrack, Slide } from "./SliderStyles.styles";
var SliderTrack = function (_a) {
    var children = _a.children;
    var _b = useSlider(), currentIndex = _b.currentIndex, direction = _b.direction, visibleSlides = _b.visibleSlides, setTotalSlides = _b.setTotalSlides, gap = _b.gap;
    var isHorizontal = direction === "horizontal";
    var count = React.Children.count(children);
    useEffect(function () {
        setTotalSlides(count);
    }, [count, setTotalSlides]);
    if (count === 0)
        return null;
    var trackWidth = (count / visibleSlides) * 100;
    var transformPercentage = (currentIndex / count) * 100;
    var transformValue = isHorizontal
        ? "translateX(-".concat(transformPercentage, "%)")
        : "translateY(-".concat(transformPercentage, "%)");
    return (_jsx("div", __assign({ style: {
            overflow: "hidden",
            width: "100%",
            height: isHorizontal ? "auto" : "100%",
        } }, { children: _jsx(SlideTrack, __assign({ style: {
                transform: transformValue,
                flexDirection: isHorizontal ? "row" : "column",
                width: isHorizontal ? "".concat(trackWidth, "%") : "100%",
                height: isHorizontal ? "auto" : "".concat(trackWidth, "%"),
            } }, { children: React.Children.map(children, function (child, index) { return (_jsx(Slide, __assign({ visibleSlides: visibleSlides, style: {
                    flex: "0 0 ".concat(100 / count, "%"),
                    padding: isHorizontal ? "0 ".concat(gap / 2, "px") : "".concat(gap / 2, "px 0"),
                } }, { children: child }), index)); }) })) })));
};
export default SliderTrack;
