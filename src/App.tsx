import React from 'react';
import Slider from './components/Slider';

const App: React.FC = () => {
  return (
    <div style={{ padding: '50px' }}>
      <h2>Yeni Nesil Slider (Compound Components)</h2>
      
      <Slider visibleSlides={3} direction="horizontal">
        {/* Okları ve noktaları istediğimiz yere koyabiliriz */}
        <Slider.Button type="prev" style="filled" />
        
        <Slider.Track>
          <div style={{ backgroundColor: '#ccc', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Slide 1</div>
          <div style={{ backgroundColor: '#bbb', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Slide 2</div>
          <div style={{ backgroundColor: '#aaa', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Slide 3</div>
          <div style={{ backgroundColor: '#999', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Slide 4</div>
          <div style={{ backgroundColor: '#888', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Slide 5</div>
        </Slider.Track>

        <Slider.Button type="next" style="filled" />
        
        <Slider.Dots position="bottom" />
      </Slider>
    </div>
  );
};

export default App;
