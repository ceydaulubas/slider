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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import { SliderWrapper, SlideTrack, Slide, DotsWrapper, Dot, Arrow, } from "./SliderStyles.styles";
var Slider = function (_a) {
    var children = _a.children, _b = _a.visibleSlides, visibleSlides = _b === void 0 ? 1 : _b, _c = _a.showDots, showDots = _c === void 0 ? true : _c, _d = _a.showArrows, showArrows = _d === void 0 ? true : _d, _e = _a.dotsPosition, dotsPosition = _e === void 0 ? "bottom" : _e, _f = _a.slideStep, slideStep = _f === void 0 ? 1 : _f, _g = _a.direction, direction = _g === void 0 ? "horizontal" : _g, _h = _a.arrowStyle, arrowStyle = _h === void 0 ? "minimal" : _h, _j = _a.arrowColor, arrowColor = _j === void 0 ? "black" : _j;
    // Hooks must always be called unconditionally
    var _k = useState(0), currentIndex = _k[0], setCurrentIndex = _k[1];
    if (!children || React.Children.count(children) === 0) {
        return null; // Return null if children is null, avoiding rendering anything
    }
    var totalSlides = React.Children.count(children);
    // Maximum index value, preventing overflow when navigating through slides.
    var maxIndex = totalSlides - visibleSlides;
    // Calculate the number of dots based on the total number of slides and the number of visible slides.
    var numberOfDots = Math.ceil((totalSlides - visibleSlides + 1) / slideStep);
    var isHorizontal = direction === "horizontal";
    var goToNext = function () {
        setCurrentIndex(function (prevIndex) { return Math.min(prevIndex + slideStep, maxIndex); });
    };
    var goToPrev = function () {
        setCurrentIndex(function (prevIndex) { return Math.max(prevIndex - slideStep, 0); });
    };
    var goToSlide = function (index) {
        setCurrentIndex(index);
    };
    var slidePercentage = isHorizontal
        ? 100 / visibleSlides
        : 100 / totalSlides;
    return (_jsxs(SliderWrapper, __assign({ direction: direction, style: {
            height: isHorizontal ? "auto" : "".concat(visibleSlides * 200, "px"),
            display: isHorizontal ? "block" : "flex",
            flexDirection: isHorizontal ? "row" : "column",
        } }, { children: [showArrows && (_jsx(Arrow, __assign({ direction: isHorizontal ? "left" : "up", arrowStyle: arrowStyle, arrowColor: arrowColor, onClick: goToPrev }, { children: isHorizontal ? "<" : "˄" }))), _jsx(SlideTrack, __assign({ style: {
                    transform: isHorizontal
                        ? "translateX(-".concat(currentIndex * slidePercentage, "%)")
                        : "translateY(-".concat((currentIndex * slideStep * 100) / totalSlides, "%)"),
                    display: "flex",
                    flexDirection: isHorizontal ? "row" : "column",
                    width: isHorizontal ? "100%" : "100%",
                    height: isHorizontal ? "auto" : "".concat(totalSlides * 100, "%"),
                    transition: "transform 0.3s ease-in-out",
                    boxSizing: "border-box",
                } }, { children: React.Children.map(children, function (child, index) { return (_jsx(Slide, __assign({ visibleSlides: visibleSlides, style: {
                        flex: isHorizontal ? "0 0 ".concat(slidePercentage, "%") : "1",
                        width: isHorizontal ? "".concat(slidePercentage, "%") : "100%",
                        height: isHorizontal ? "auto" : "".concat(100 / totalSlides, "%"),
                        boxSizing: "border-box",
                        margin: "0",
                        padding: "0",
                    } }, { children: child }), index)); }) })), showArrows && (_jsx(Arrow, __assign({ direction: isHorizontal ? "right" : "down", arrowStyle: arrowStyle, arrowColor: arrowColor, onClick: goToNext }, { children: isHorizontal ? ">" : "˅" }))), showDots && (_jsx(DotsWrapper, __assign({ position: dotsPosition }, { children: Array.from({ length: numberOfDots }).map(function (_, index) { return (_jsx(Dot, { active: index * slideStep === currentIndex, onClick: function () { return goToSlide(index * slideStep); } }, index)); }) })))] })));
};
export default Slider;
