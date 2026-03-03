import React from 'react';
import Slider from './components/Slider';

const App: React.FC = () => {
  return (
    <div style={{ padding: '50px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Profesyonel Yatay Slider</h2>
      
      <Slider 
        visibleSlides={1} 
        direction="horizontal" 
        infinite={true}
        autoplay={true}
        autoplaySpeed={3000}
        gap={20}
        breakpoints={{
          768: { visibleSlides: 2 },  // Tablette 2
          1024: { visibleSlides: 4 }  // Masaüstünde 4
        }}
      >
        <Slider.Button type="prev" style="filled" />
        
        <Slider.Track>
          <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '12px' }}>
            <img 
              src="https://picsum.photos/800/400?random=1" 
              alt="Slide 1" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '12px' }}>
            <img 
              src="https://picsum.photos/800/400?random=2" 
              alt="Slide 2" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '12px' }}>
            <img 
              src="https://picsum.photos/800/400?random=3" 
              alt="Slide 3" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '12px' }}>
            <img 
              src="https://picsum.photos/800/400?random=4" 
              alt="Slide 4" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '12px' }}>
            <img 
              src="https://picsum.photos/800/400?random=5" 
              alt="Slide 5" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
        </Slider.Track>

        <Slider.Button type="next" style="filled" />
        
        <Slider.Dots position="bottom" />
      </Slider>

      <div style={{ marginTop: '50px', textAlign: 'center', color: '#666' }}>
        <p>Masaüstünde 4, tablette 2, mobilde 1 resim görünür.</p>
        <p>Slider'ı parmağınızla kaydırabilir veya okları kullanabilirsiniz.</p>
      </div>
    </div>
  );
};

export default App;
