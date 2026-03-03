import React, { useEffect } from "react";
import { useSlider } from "../../context/SliderContext";
import { SlideTrack, Slide } from "./SliderStyles.styles";

const SliderTrack: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentIndex, direction, visibleSlides, setTotalSlides, gap } =
    useSlider();

  const isHorizontal = direction === "horizontal";
  const count = React.Children.count(children);

  useEffect(() => {
    setTotalSlides(count);
  }, [count, setTotalSlides]);

  if (count === 0) return null;

  const trackWidth = (count / visibleSlides) * 100;

  const transformPercentage = (currentIndex / count) * 100;
  const transformValue = isHorizontal
    ? `translateX(-${transformPercentage}%)`
    : `translateY(-${transformPercentage}%)`;

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        height: isHorizontal ? "auto" : "100%",
      }}
    >
      <SlideTrack
        style={{
          transform: transformValue,
          flexDirection: isHorizontal ? "row" : "column",
          width: isHorizontal ? `${trackWidth}%` : "100%",
          height: isHorizontal ? "auto" : `${trackWidth}%`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <Slide
            key={index}
            visibleSlides={visibleSlides}
            style={{
              flex: `0 0 ${100 / count}%`,
              padding: isHorizontal ? `0 ${gap / 2}px` : `${gap / 2}px 0`,
            }}
          >
            {child}
          </Slide>
        ))}
      </SlideTrack>
    </div>
  );
};

export default SliderTrack;
