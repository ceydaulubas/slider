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
import { Slider } from "./components/Slider";
var App = function () {
    return (_jsxs("div", __assign({ style: {
            padding: "50px",
            maxWidth: "1200px",
            margin: "0 auto",
            fontFamily: "Arial, sans-serif",
        } }, { children: [_jsx("h1", __assign({ style: { textAlign: "center", marginBottom: "50px" } }, { children: "Slider Component Test Lab" })), _jsxs("section", __assign({ style: { marginBottom: "80px" } }, { children: [_jsx("h3", { children: "1. Full Width Hero (1 slide at a time)" }), _jsxs(Slider, __assign({ visibleSlides: 1, infinite: true, autoplay: true, autoplaySpeed: 4000, gap: 0 }, { children: [_jsx(Slider.Button, { type: "prev", style: "minimal" }), _jsxs(Slider.Track, { children: [_jsx("div", __assign({ style: { width: "100%", height: "400px" } }, { children: _jsx("img", { src: "https://picsum.photos/1200/400?random=11", alt: "1", style: { width: "100%", height: "100%", objectFit: "cover" } }) })), _jsx("div", __assign({ style: { width: "100%", height: "400px" } }, { children: _jsx("img", { src: "https://picsum.photos/1200/400?random=12", alt: "2", style: { width: "100%", height: "100%", objectFit: "cover" } }) })), _jsx("div", __assign({ style: { width: "100%", height: "400px" } }, { children: _jsx("img", { src: "https://picsum.photos/1200/400?random=13", alt: "3", style: { width: "100%", height: "100%", objectFit: "cover" } }) }))] }), _jsx(Slider.Button, { type: "next", style: "minimal" }), _jsx(Slider.Dots, { position: "bottom" })] }))] })), _jsxs("section", __assign({ style: { marginBottom: "80px" } }, { children: [_jsx("h3", { children: "2. Multi-Item Carousel (8 items total)" }), _jsxs(Slider, __assign({ visibleSlides: 1, infinite: true, gap: 20, breakpoints: {
                            768: { visibleSlides: 2 },
                            1024: { visibleSlides: 4 },
                        } }, { children: [_jsx(Slider.Button, { type: "prev", style: "filled" }), _jsxs(Slider.Track, { children: [_jsx("div", __assign({ style: {
                                            height: "200px",
                                            background: "#FFD700",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "8px",
                                        } }, { children: "Item 1" })), _jsx("div", __assign({ style: {
                                            height: "200px",
                                            background: "#FF8C00",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "8px",
                                        } }, { children: "Item 2" })), _jsx("div", __assign({ style: {
                                            height: "200px",
                                            background: "#FF4500",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "8px",
                                        } }, { children: "Item 3" })), _jsx("div", __assign({ style: {
                                            height: "200px",
                                            background: "#FF0000",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "8px",
                                        } }, { children: "Item 4" })), _jsx("div", __assign({ style: {
                                            height: "200px",
                                            background: "#C71585",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "8px",
                                        } }, { children: "Item 5" })), _jsx("div", __assign({ style: {
                                            height: "200px",
                                            background: "#8B008B",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "8px",
                                        } }, { children: "Item 6" })), _jsx("div", __assign({ style: {
                                            height: "200px",
                                            background: "#483D8B",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "8px",
                                        } }, { children: "Item 7" })), _jsx("div", __assign({ style: {
                                            height: "200px",
                                            background: "#2F4F4F",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "8px",
                                        } }, { children: "Item 8" }))] }), _jsx(Slider.Button, { type: "next", style: "filled" }), _jsx(Slider.Dots, { position: "bottom" })] }))] })), _jsxs("section", __assign({ style: { marginBottom: "80px" } }, { children: [_jsx("h3", { children: "3. Vertical Slider (2 slides visible)" }), _jsx("div", __assign({ style: {
                            height: "500px",
                            border: "1px solid #ddd",
                            borderRadius: "12px",
                            padding: "20px",
                        } }, { children: _jsxs(Slider, __assign({ direction: "vertical", visibleSlides: 2, infinite: true, gap: 10 }, { children: [_jsx(Slider.Button, { type: "prev", style: "outlined" }), _jsxs(Slider.Track, { children: [_jsx("div", __assign({ style: {
                                                height: "200px",
                                                backgroundColor: "#f0f0f0",
                                                borderRadius: "8px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            } }, { children: "Vertical 1" })), _jsx("div", __assign({ style: {
                                                height: "200px",
                                                backgroundColor: "#e0e0e0",
                                                borderRadius: "8px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            } }, { children: "Vertical 2" })), _jsx("div", __assign({ style: {
                                                height: "200px",
                                                backgroundColor: "#d0d0d0",
                                                borderRadius: "8px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            } }, { children: "Vertical 3" })), _jsx("div", __assign({ style: {
                                                height: "200px",
                                                backgroundColor: "#c0c0c0",
                                                borderRadius: "8px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            } }, { children: "Vertical 4" }))] }), _jsx(Slider.Button, { type: "next", style: "outlined" }), _jsx(Slider.Dots, { position: "right" })] })) }))] })), _jsx("footer", __assign({ style: { textAlign: "center", paddingBottom: "50px" } }, { children: _jsx("p", { children: "All sliders are working with the same component logic!" }) }))] })));
};
export default App;
