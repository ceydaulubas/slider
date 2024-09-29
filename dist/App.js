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
import Slider from './components/Slider';
var App = function () {
    return (_jsx("div", { children: _jsxs(Slider, __assign({ visibleSlides: 2, showDots: true, showArrows: true, dotsPosition: "bottom", slideStep: 1, direction: "horizontal", arrowStyle: "minimal" }, { children: [_jsx("div", __assign({ style: { backgroundColor: 'red', height: '200px' } }, { children: "Slide 1" })), _jsx("div", __assign({ style: { backgroundColor: 'blue', height: '200px' } }, { children: "Slide 2" })), _jsx("div", __assign({ style: { backgroundColor: 'green', height: '200px' } }, { children: "Slide 3" })), _jsx("div", __assign({ style: { backgroundColor: 'yellow', height: '200px' } }, { children: "Slide 4" })), _jsx("div", __assign({ style: { backgroundColor: 'red', height: '200px' } }, { children: "Slide 5" })), _jsx("div", __assign({ style: { backgroundColor: 'blue', height: '200px' } }, { children: "Slide 6" })), _jsx("div", __assign({ style: { backgroundColor: 'green', height: '200px' } }, { children: "Slide 7" })), _jsx("div", __assign({ style: { backgroundColor: 'yellow', height: '200px' } }, { children: "Slide 8" }))] })) }));
};
export default App;
