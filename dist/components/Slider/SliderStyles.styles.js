var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
export var SliderWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  height: ", ";\n\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  height: ", ";\n\n  ", "\n"])), function (_a) {
    var direction = _a.direction;
    return (direction === 'vertical' ? '100%' : 'auto');
}, function (_a) {
    var direction = _a.direction;
    return direction === 'vertical' && "\n    display: flex;\n    flex-direction: column;\n  ";
});
export var SlideTrack = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  transition: transform 0.3s ease-in-out;\n  /* Track width will be set dynamically via inline styles */\n"], ["\n  display: flex;\n  transition: transform 0.3s ease-in-out;\n  /* Track width will be set dynamically via inline styles */\n"])));
export var Slide = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n  flex-shrink: 0; /* Important: prevents slides from squeezing */\n  width: 100%;\n  height: 100%;\n"], ["\n  box-sizing: border-box;\n  flex-shrink: 0; /* Important: prevents slides from squeezing */\n  width: 100%;\n  height: 100%;\n"])));
export var DotsWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  z-index: 5;\n  flex-direction: ", ";\n  \n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  z-index: 5;\n  flex-direction: ", ";\n  \n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var position = _a.position;
    return (position === 'left' || position === 'right' ? 'column' : 'row');
}, function (_a) {
    var position = _a.position;
    return position === 'top' && "top: 10px; left: 50%; transform: translateX(-50%);";
}, function (_a) {
    var position = _a.position;
    return position === 'bottom' && "bottom: 10px; left: 50%; transform: translateX(-50%);";
}, function (_a) {
    var position = _a.position;
    return position === 'left' && "left: 10px; top: 50%; transform: translateY(-50%);";
}, function (_a) {
    var position = _a.position;
    return position === 'right' && "right: 10px; top: 50%; transform: translateY(-50%);";
});
export var Dot = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: ", ";\n  margin: 5px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n"], ["\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: ", ";\n  margin: 5px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n"])), function (_a) {
    var active = _a.active;
    return (active ? 'black' : 'lightgray');
});
export var Arrow = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n  user-select: none;\n  transition: all 0.2s ease-in-out;\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n  user-select: none;\n  transition: all 0.2s ease-in-out;\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (_a) {
    var direction = _a.direction;
    return direction === 'left' && 'left: 15px; top: 50%; transform: translateY(-50%);';
}, function (_a) {
    var direction = _a.direction;
    return direction === 'right' && 'right: 15px; top: 50%; transform: translateY(-50%);';
}, function (_a) {
    var direction = _a.direction;
    return direction === 'up' && 'top: 15px; left: 50%; transform: translateX(-50%);';
}, function (_a) {
    var direction = _a.direction;
    return direction === 'down' && 'bottom: 15px; left: 50%; transform: translateX(-50%);';
}, function (_a) {
    var arrowStyle = _a.arrowStyle;
    return arrowStyle !== 'plain' && "\n    width: 45px;\n    height: 45px;\n    border-radius: 50%;\n    font-size: 20px;\n    box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n    &:hover { transform: scale(1.1) ".concat(function (props) { return props.direction === 'left' || props.direction === 'right' ? 'translateY(-45%)' : 'translateX(-45%)'; }, "; }\n  ");
}, function (_a) {
    var arrowStyle = _a.arrowStyle, arrowColor = _a.arrowColor;
    return arrowStyle === 'minimal' && "\n    background-color: rgba(255, 255, 255, 0.8);\n    backdrop-filter: blur(4px);\n    color: ".concat(arrowColor === 'white' ? 'white' : '#333', ";\n  ");
}, function (_a) {
    var arrowStyle = _a.arrowStyle, arrowColor = _a.arrowColor;
    return arrowStyle === 'filled' && "\n    background-color: ".concat(arrowColor === 'white' ? '#fff' : '#222', ";\n    color: ").concat(arrowColor === 'white' ? '#222' : '#fff', ";\n  ");
}, function (_a) {
    var arrowStyle = _a.arrowStyle, arrowColor = _a.arrowColor;
    return arrowStyle === 'plain' && "\n    background: none;\n    font-size: 32px;\n    font-weight: bold;\n    color: ".concat(arrowColor === 'white' ? '#fff' : '#222', ";\n    &:hover { opacity: 0.7; transform: scale(1.2) ").concat(function (props) { return props.direction === 'left' || props.direction === 'right' ? 'translateY(-42%)' : 'translateX(-42%)'; }, "; }\n  ");
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
