var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var SliderWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  height: ", "; // Ensure full height for vertical sliders\n\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  height: ", "; // Ensure full height for vertical sliders\n\n  ", "\n"])), function (_a) {
    var direction = _a.direction;
    return (direction === 'vertical' ? '100%' : 'auto');
}, function (_a) {
    var direction = _a.direction;
    return direction === 'vertical' && "\n    display: flex;\n    flex-direction: column;\n  ";
});
export var SlideTrack = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  transition: transform 0.3s ease-in-out;\n"], ["\n  display: flex;\n  transition: transform 0.3s ease-in-out;\n"])));
export var Slide = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  margin: 0; \n  padding: 0; \n"], ["\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  margin: 0; \n  padding: 0; \n"])));
export var DotsWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  flex-direction: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n"], ["\n  display: flex;\n  justify-content: center;\n  flex-direction: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n  margin-left: ", ";\n  margin-right: ", ";\n"])), function (_a) {
    var position = _a.position;
    return (position === 'left' || position === 'right' ? 'column' : 'row');
}, function (_a) {
    var position = _a.position;
    return (position === 'top' ? '10px' : '0');
}, function (_a) {
    var position = _a.position;
    return (position === 'bottom' ? '10px' : '0');
}, function (_a) {
    var position = _a.position;
    return (position === 'left' ? '10px' : '0');
}, function (_a) {
    var position = _a.position;
    return (position === 'right' ? '10px' : '0');
});
export var Dot = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: ", ";\n  margin: 0 5px;\n  cursor: pointer;\n"], ["\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: ", ";\n  margin: 0 5px;\n  cursor: pointer;\n"])), function (_a) {
    var active = _a.active;
    return (active ? 'black' : 'lightgray');
});
export var Arrow = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  font-size: 24px;\n  cursor: pointer;\n  z-index: 1;\n  user-select: none;\n\n  // Horizontal arrows\n  ", "\n  ", "\n\n  // Vertical arrows\n  ", "\n  ", "\n\n  // Minimal style: no background or border\n  ", "\n\n  // Filled style: solid background and white arrow\n  ", "\n\n  // Outlined style: transparent background with colored border and arrow\n  ", "\n"], ["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  font-size: 24px;\n  cursor: pointer;\n  z-index: 1;\n  user-select: none;\n\n  // Horizontal arrows\n  ", "\n  ", "\n\n  // Vertical arrows\n  ", "\n  ", "\n\n  // Minimal style: no background or border\n  ", "\n\n  // Filled style: solid background and white arrow\n  ", "\n\n  // Outlined style: transparent background with colored border and arrow\n  ", "\n"])), function (_a) {
    var direction = _a.direction;
    return direction === 'left' && 'left: 10px; top: 50%; transform: translateY(-50%);';
}, function (_a) {
    var direction = _a.direction;
    return direction === 'right' && 'right: 10px; top: 50%; transform: translateY(-50%);';
}, function (_a) {
    var direction = _a.direction;
    return direction === 'up' && 'top: 10px; left: 50%; transform: translateX(-50%);';
}, function (_a) {
    var direction = _a.direction;
    return direction === 'down' && 'bottom: 10px; left: 50%; transform: translateX(-50%);';
}, function (_a) {
    var arrowStyle = _a.arrowStyle;
    return arrowStyle === 'minimal' && "\n    background-color: transparent;\n    border: none;\n  ";
}, function (_a) {
    var arrowStyle = _a.arrowStyle, arrowColor = _a.arrowColor;
    return arrowStyle === 'filled' && "\n    background-color: ".concat(arrowColor === 'white' ? 'white' : 'black', ";\n    color: ").concat(arrowColor === 'white' ? 'black' : 'white', ";\n  ");
}, function (_a) {
    var arrowStyle = _a.arrowStyle, arrowColor = _a.arrowColor;
    return arrowStyle === 'outlined' && "\n    background-color: transparent;\n    border: 2px solid ".concat(arrowColor === 'white' ? 'white' : 'black', ";\n    color: ").concat(arrowColor === 'white' ? 'white' : 'black', ";\n  ");
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
