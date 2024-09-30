# React Styled Slider Component

A customizable and reusable slider component built with React and styled-components. This component allows developers to easily implement a slider/carousel with various configuration options, such as the number of visible slides, navigation arrows, dots, and different directions.

## Installation

To install the package, use npm or yarn:

```bash
npm install react-styled-slider-component
```

## Usage

Here's how to use the slider component in your React application:

```tsx
import React from 'react';
import {Slider} from 'react-styled-slider-component';

const App: React.FC = () => {
  return (
    <div>
      <Slider
        visibleSlides={2}
        showDots={true}
        showArrows={true}
        dotsPosition="bottom"
        slideStep={1}
        direction="horizontal"
        arrowStyle="minimal"
      >
        <div style={{ backgroundColor: 'red', height: '200px' }}>Slide 1</div>
        <div style={{ backgroundColor: 'blue', height: '200px' }}>Slide 2</div>
        <div style={{ backgroundColor: 'green', height: '200px' }}>Slide 3</div>
        <div style={{ backgroundColor: 'yellow', height: '200px' }}>Slide 4</div>
        <div style={{ backgroundColor: 'red', height: '200px' }}>Slide 5</div>
        <div style={{ backgroundColor: 'blue', height: '200px' }}>Slide 6</div>
        <div style={{ backgroundColor: 'green', height: '200px' }}>Slide 7</div>
        <div style={{ backgroundColor: 'yellow', height: '200px' }}>Slide 8</div>
      </Slider>
    </div>
  );
};

export default App;
```

## Props

The `Slider` component accepts the following props:

| Prop Name       | Type                                               | Default   | Description                                                                 |
| --------------- | -------------------------------------------------- | --------- | --------------------------------------------------------------------------- |
| `children`      | `React.ReactNode[]`                                | -         | The slides to be displayed in the slider.                                   |
| `visibleSlides` | `number`                                           | `1`       | Number of slides visible at one time.                                       |
| `showDots`      | `boolean`                                          | `true`    | Whether to show navigation dots below the slider.                           |
| `showArrows`    | `boolean`                                          | `true`    | Whether to show navigation arrows on the slider.                            |
| `dotsPosition`  | `'top' ,'bottom' , 'left' , 'right'`              | `'bottom'` | Position of the navigation dots.                                            |
| `slideStep`     | `number`                                           | `1`       | Number of slides to move on each navigation action.                         |
| `direction`     | `'horizontal' , 'vertical'`                        | `'horizontal'` | Direction of the slider, either horizontal or vertical.                    |
| `arrowStyle`    | `'minimal' , 'filled' , 'outlined'`                | `'minimal'` | Style of the navigation arrows.                                             |
| `arrowColor`    | `'black' , 'white'`                                | `'black'` | Color of the navigation arrows.                                             |


## Customization

The slider component uses `styled-components` for styling, making it highly customizable. You can override the styles by extending the styled components used in the slider.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.


