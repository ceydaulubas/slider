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
import { render, screen } from "@testing-library/react";
import { Slider } from "./components/Slider";
describe("Slider Component Test", function () {
    // Step 2: Test for the Slider component
    test("renders correct number of slides", function () {
        render(_jsxs(Slider, __assign({ visibleSlides: 1 }, { children: [_jsx("div", { children: "Slide 1" }), _jsx("div", { children: "Slide 2" }), _jsx("div", { children: "Slide 3" })] })));
        // Selecting the slides by their text content
        var slide1 = screen.getByText("Slide 1");
        var slide2 = screen.getByText("Slide 2");
        // Expect: Checking if the slides are present in the document
        expect(slide1).toBeInTheDocument();
        expect(slide2).toBeInTheDocument();
    });
});
