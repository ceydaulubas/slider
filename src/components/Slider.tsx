import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import {
  SliderWrapper,
  SlideTrack,
  Slide,
  DotsWrapper,
  Dot,
  Arrow,
} from "./SliderStyles.styles";

// --- Context ---
interface SliderContextProps {
  currentIndex: number;
  totalSlides: number;
  visibleSlides: number;
  direction: "horizontal" | "vertical";
  goToNext: () => void;
  goToPrev: () => void;
  goToSlide: (index: number) => void;
  slidePercentage: number;
}

const SliderContext = createContext<SliderContextProps | undefined>(undefined);

export const useSlider = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error("Slider sub-components must be used within a <Slider />");
  }
  return context;
};

// --- Main Slider Component ---
interface SliderProps {
  children: React.ReactNode;
  visibleSlides?: number;
  direction?: "horizontal" | "vertical";
  initialIndex?: number;
}

const SliderMain: React.FC<SliderProps> & {
  Track: typeof SliderTrack;
  Button: typeof SliderButton;
  Dots: typeof SliderDots;
} = ({
  children,
  visibleSlides = 1,
  direction = "horizontal",
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const totalSlides = React.Children.count(children);
  const maxIndex = Math.max(0, totalSlides - visibleSlides);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  }, [maxIndex]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const slidePercentage = useMemo(() => 100 / visibleSlides, [visibleSlides]);

  const value = {
    currentIndex,
    totalSlides,
    visibleSlides,
    direction,
    goToNext,
    goToPrev,
    goToSlide,
    slidePercentage,
  };

  return (
    <SliderContext.Provider value={value}>
      <SliderWrapper direction={direction}>
        {children}
      </SliderWrapper>
    </SliderContext.Provider>
  );
};

// --- Sub-Components ---

const SliderTrack: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentIndex, direction, slidePercentage, totalSlides } = useSlider();
  const isHorizontal = direction === "horizontal";

  const transformValue = isHorizontal
    ? `translateX(-${currentIndex * slidePercentage}%)`
    : `translateY(-${(currentIndex * 100) / totalSlides}%)`;

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <SlideTrack
        style={{
          transform: transformValue,
          flexDirection: isHorizontal ? "row" : "column",
          display: "flex",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {React.Children.map(children, (child, index) => (
          <Slide
            key={index}
            visibleSlides={1} // context'ten gelen slidePercentage ile yönetiliyor
            style={{
              flex: isHorizontal ? `0 0 ${slidePercentage}%` : "1",
              width: isHorizontal ? `${slidePercentage}%` : "100%",
              boxSizing: "border-box",
            }}
          >
            {child}
          </Slide>
        ))}
      </SlideTrack>
    </div>
  );
};

interface ButtonProps {
  type: "prev" | "next";
  children?: React.ReactNode;
  style?: "minimal" | "filled" | "outlined";
}

const SliderButton: React.FC<ButtonProps> = ({ type, children, style = "minimal" }) => {
  const { goToNext, goToPrev, direction } = useSlider();
  const isHorizontal = direction === "horizontal";

  const handleClick = type === "next" ? goToNext : goToPrev;
  
  const defaultIcon = type === "next" 
    ? (isHorizontal ? ">" : "˅") 
    : (isHorizontal ? "<" : "˄");

  return (
    <Arrow
      direction={type === "next" ? (isHorizontal ? "right" : "down") : (isHorizontal ? "left" : "up")}
      arrowStyle={style}
      arrowColor="black"
      onClick={handleClick}
    >
      {children || defaultIcon}
    </Arrow>
  );
};

const SliderDots: React.FC<{ position?: "top" | "bottom" | "left" | "right" }> = ({ 
  position = "bottom" 
}) => {
  const { totalSlides, visibleSlides, currentIndex, goToSlide } = useSlider();
  const numberOfDots = totalSlides - visibleSlides + 1;

  if (numberOfDots <= 1) return null;

  return (
    <DotsWrapper position={position}>
      {Array.from({ length: numberOfDots }).map((_, index) => (
        <Dot
          key={index}
          active={index === currentIndex}
          onClick={() => goToSlide(index)}
        />
      ))}
    </DotsWrapper>
  );
};

// Bileşenleri ana nesneye bağlayalım
SliderMain.Track = SliderTrack;
SliderMain.Button = SliderButton;
SliderMain.Dots = SliderDots;

export default SliderMain;
