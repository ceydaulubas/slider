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
import { render, screen } from '@testing-library/react';
import Slider from './components/Slider';
describe('Slider Component Test', function () {
    // Adım 2: Slider bileşeniyle ilgili bir test
    test('renders correct number of slider', function () {
        render(_jsxs(Slider, __assign({ visibleSlides: 1 }, { children: [_jsx("div", { children: "Slide 1" }), _jsx("div", { children: "Slide 2" }), _jsx("div", { children: "Slide 3" })] })));
        // Ekranda görünen slide'ları seçiyoruz
        var slide1 = screen.getByText("Slide 1");
        var slide2 = screen.getByText("Slide 2");
        // // Expect: Slide'ların dokümanda olup olmadığını kontrol ediyoruz
        // expect(slide1).toBeInTheDocument();
        // test('arrows navigate slides correctly', () => {
        //   render(
        //     <Slider visibleSlides={1}>
        //       <div>Slide 1</div>
        //       <div>Slide 2</div>
        //       <div>Slide 3</div>
        //     </Slider>
        //   );
    });
});
