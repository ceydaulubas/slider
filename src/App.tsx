import React from 'react';
import Slider from './components/Slider';

const App: React.FC = () => {
  return (
    <div style={{ padding: '50px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Slider Component Test Lab</h1>
      
      {/* Test 1: Full Width Hero Slider */}
      <section style={{ marginBottom: '80px' }}>
        <h3>1. Full Width Hero (1 slide at a time)</h3>
        <Slider visibleSlides={1} infinite={true} autoplay={true} autoplaySpeed={4000} gap={0}>
          <Slider.Button type="prev" style="minimal" />
          <Slider.Track>
            <div style={{ width: '100%', height: '400px' }}>
              <img src="https://picsum.photos/1200/400?random=11" alt="1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '100%', height: '400px' }}>
              <img src="https://picsum.photos/1200/400?random=12" alt="2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ width: '100%', height: '400px' }}>
              <img src="https://picsum.photos/1200/400?random=13" alt="3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </Slider.Track>
          <Slider.Button type="next" style="minimal" />
          <Slider.Dots position="bottom" />
        </Slider>
      </section>

      {/* Test 2: Multi-Item Carousel */}
      <section style={{ marginBottom: '80px' }}>
        <h3>2. Multi-Item Carousel (8 items total)</h3>
        <Slider 
          visibleSlides={1} 
          infinite={true} 
          gap={20}
          breakpoints={{
            768: { visibleSlides: 2 },
            1024: { visibleSlides: 4 }
          }}
        >
          <Slider.Button type="prev" style="filled" />
          <Slider.Track>
            <div style={{ height: '200px', background: '#FFD700', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>Item 1</div>
            <div style={{ height: '200px', background: '#FF8C00', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>Item 2</div>
            <div style={{ height: '200px', background: '#FF4500', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>Item 3</div>
            <div style={{ height: '200px', background: '#FF0000', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>Item 4</div>
            <div style={{ height: '200px', background: '#C71585', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>Item 5</div>
            <div style={{ height: '200px', background: '#8B008B', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>Item 6</div>
            <div style={{ height: '200px', background: '#483D8B', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>Item 7</div>
            <div style={{ height: '200px', background: '#2F4F4F', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>Item 8</div>
          </Slider.Track>
          <Slider.Button type="next" style="filled" />
          <Slider.Dots position="bottom" />
        </Slider>
      </section>

      {/* Test 3: Vertical Slider */}
      <section style={{ marginBottom: '80px' }}>
        <h3>3. Vertical Slider (2 slides visible)</h3>
        <div style={{ height: '500px', border: '1px solid #ddd', borderRadius: '12px', padding: '20px' }}>
          <Slider direction="vertical" visibleSlides={2} infinite={true} gap={10}>
            <Slider.Button type="prev" style="outlined" />
            <Slider.Track>
              <div style={{ height: '200px', backgroundColor: '#f0f0f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Vertical 1</div>
              <div style={{ height: '200px', backgroundColor: '#e0e0e0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Vertical 2</div>
              <div style={{ height: '200px', backgroundColor: '#d0d0d0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Vertical 3</div>
              <div style={{ height: '200px', backgroundColor: '#c0c0c0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Vertical 4</div>
            </Slider.Track>
            <Slider.Button type="next" style="outlined" />
            <Slider.Dots position="right" />
          </Slider>
        </div>
      </section>

      <footer style={{ textAlign: 'center', paddingBottom: '50px' }}>
        <p>All sliders are working with the same component logic!</p>
      </footer>
    </div>
  );
};

export default App;
