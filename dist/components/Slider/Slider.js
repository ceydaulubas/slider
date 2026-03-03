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
import { useState, useCallback, useMemo, useEffect } from "react";
import { SliderContext } from "../../context/SliderContext";
import { SliderWrapper } from "./SliderStyles.styles";
import SliderTrack from "./SliderTrack";
import SliderButton from "./SliderButton";
import SliderDots from "./SliderDots";
var Slider = function (_a) {
    var children = _a.children, _b = _a.visibleSlides, defaultVisibleSlides = _b === void 0 ? 1 : _b, _c = _a.direction, direction = _c === void 0 ? "horizontal" : _c, _d = _a.initialIndex, initialIndex = _d === void 0 ? 0 : _d, _e = _a.infinite, infinite = _e === void 0 ? false : _e, _f = _a.autoplay, autoplay = _f === void 0 ? false : _f, _g = _a.autoplaySpeed, autoplaySpeed = _g === void 0 ? 3000 : _g, _h = _a.gap, gap = _h === void 0 ? 0 : _h, breakpoints = _a.breakpoints;
    var _j = useState(initialIndex), currentIndex = _j[0], setCurrentIndex = _j[1];
    var _k = useState(defaultVisibleSlides), visibleSlides = _k[0], setVisibleSlides = _k[1];
    var _l = useState(0), totalSlides = _l[0], setTotalSlides = _l[1];
    // Handle responsive breakpoints
    useEffect(function () {
        var handleResize = function () {
            var width = window.innerWidth;
            var activeVisibleSlides = defaultVisibleSlides;
            if (breakpoints) {
                var sorted = Object.keys(breakpoints)
                    .map(Number)
                    .sort(function (a, b) { return a - b; });
                for (var _i = 0, sorted_1 = sorted; _i < sorted_1.length; _i++) {
                    var b = sorted_1[_i];
                    if (width >= b)
                        activeVisibleSlides = breakpoints[b].visibleSlides;
                }
            }
            setVisibleSlides(activeVisibleSlides);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return function () { return window.removeEventListener("resize", handleResize); };
    }, [breakpoints, defaultVisibleSlides]);
    var maxIndex = useMemo(function () { return Math.max(0, totalSlides - visibleSlides); }, [totalSlides, visibleSlides]);
    var goToNext = useCallback(function () {
        setCurrentIndex(function (prev) {
            return infinite
                ? prev >= maxIndex
                    ? 0
                    : prev + 1
                : Math.min(prev + 1, maxIndex);
        });
    }, [maxIndex, infinite]);
    var goToPrev = useCallback(function () {
        setCurrentIndex(function (prev) {
            return infinite ? (prev <= 0 ? maxIndex : prev - 1) : Math.max(prev - 1, 0);
        });
    }, [maxIndex, infinite]);
    var goToSlide = useCallback(function (index) { return setCurrentIndex(index); }, []);
    // Autoplay effect
    useEffect(function () {
        var interval;
        if (autoplay && totalSlides > visibleSlides)
            interval = setInterval(goToNext, autoplaySpeed);
        return function () { return clearInterval(interval); };
    }, [autoplay, autoplaySpeed, goToNext, totalSlides, visibleSlides]);
    return (_jsx(SliderContext.Provider, __assign({ value: {
            currentIndex: currentIndex,
            totalSlides: totalSlides,
            setTotalSlides: setTotalSlides,
            visibleSlides: visibleSlides,
            direction: direction,
            infinite: infinite,
            gap: gap,
            goToNext: goToNext,
            goToPrev: goToPrev,
            goToSlide: goToSlide,
        } }, { children: _jsx(SliderWrapper, __assign({ direction: direction }, { children: children })) })));
};
Slider.Track = SliderTrack;
Slider.Button = SliderButton;
Slider.Dots = SliderDots;
export default Slider;
