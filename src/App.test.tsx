import React from 'react';
import { render, screen } from '@testing-library/react';
import Slider from './components/Slider';

describe('Slider Component Test', () => {

  // Step 2: Test for the Slider component
  test('renders correct number of slides', () => {
    render(
      <Slider visibleSlides={1}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Slider>
    );

    // Selecting the slides by their text content
    const slide1 = screen.getByText("Slide 1");
    const slide2 = screen.getByText("Slide 2");

    // Expect: Checking if the slides are present in the document
    expect(slide1).toBeInTheDocument();
    expect(slide2).toBeInTheDocument();
  });
});
