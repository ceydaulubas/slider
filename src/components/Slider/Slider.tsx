import React, { useState, useCallback, useMemo, useEffect } from "react";
import { SliderContext } from "../../context/SliderContext";
import { SliderWrapper } from "./SliderStyles.styles";
import { SliderProps } from "../../types/Slider.types";

import SliderTrack from "./SliderTrack";
import SliderButton from "./SliderButton";
import SliderDots from "./SliderDots";

const Slider: React.FC<SliderProps> & {
  Track: typeof SliderTrack;
  Button: typeof SliderButton;
  Dots: typeof SliderDots;
} = ({
  children,
  visibleSlides: defaultVisibleSlides = 1,
  direction = "horizontal",
  initialIndex = 0,
  infinite = false,
  autoplay = false,
  autoplaySpeed = 3000,
  gap = 0,
  breakpoints,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [visibleSlides, setVisibleSlides] = useState(defaultVisibleSlides);
  const [totalSlides, setTotalSlides] = useState(0);

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let activeVisibleSlides = defaultVisibleSlides;
      if (breakpoints) {
        const sorted = Object.keys(breakpoints)
          .map(Number)
          .sort((a, b) => a - b);
        for (const b of sorted) {
          if (width >= b) activeVisibleSlides = breakpoints[b].visibleSlides;
        }
      }
      setVisibleSlides(activeVisibleSlides);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints, defaultVisibleSlides]);

  const maxIndex = useMemo(
    () => Math.max(0, totalSlides - visibleSlides),
    [totalSlides, visibleSlides],
  );

  const goToNext = useCallback(() => {
    setCurrentIndex((prev: number) =>
      infinite
        ? prev >= maxIndex
          ? 0
          : prev + 1
        : Math.min(prev + 1, maxIndex),
    );
  }, [maxIndex, infinite]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev: number) =>
      infinite ? (prev <= 0 ? maxIndex : prev - 1) : Math.max(prev - 1, 0),
    );
  }, [maxIndex, infinite]);

  const goToSlide = useCallback((index: number) => setCurrentIndex(index), []);

  // Autoplay effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay && totalSlides > visibleSlides)
      interval = setInterval(goToNext, autoplaySpeed);
    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed, goToNext, totalSlides, visibleSlides]);

  return (
    <SliderContext.Provider
      value={{
        currentIndex,
        totalSlides,
        setTotalSlides,
        visibleSlides,
        direction,
        infinite,
        gap,
        goToNext,
        goToPrev,
        goToSlide,
      }}
    >
      <SliderWrapper direction={direction}>{children}</SliderWrapper>
    </SliderContext.Provider>
  );
};

Slider.Track = SliderTrack;
Slider.Button = SliderButton;
Slider.Dots = SliderDots;

export default Slider;
