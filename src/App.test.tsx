import React from 'react';
import { render, screen , fireEvent} from '@testing-library/react';
import Slider from './components/Slider';

describe('Slider Component Test', () => {

  // Adım 2: Slider bileşeniyle ilgili bir test
  test('renders correct number of slider', () => {
    render(
      <Slider visibleSlides={1}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Slider>
    );

    // Ekranda görünen slide'ları seçiyoruz
    const slide1 = screen.getByText("Slide 1");
    const slide2 = screen.getByText("Slide 2");

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

