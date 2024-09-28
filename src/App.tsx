import React from 'react';
import Slider from './components/Slider';

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
