import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from "react";
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
  infinite: boolean;
  gap: number;
  setTotalSlides: (count: number) => void; // Added to update total slides from Track
  goToNext: () => void;
  goToPrev: () => void;
  goToSlide: (index: number) => void;
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
  infinite?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  gap?: number;
  breakpoints?: {
    [key: number]: {
      visibleSlides: number;
    };
  };
}

const SliderMain: React.FC<SliderProps> & {
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

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let activeVisibleSlides = defaultVisibleSlides;
      if (breakpoints) {
        const sorted = Object.keys(breakpoints).map(Number).sort((a, b) => a - b);
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

  const maxIndex = useMemo(() => Math.max(0, totalSlides - visibleSlides), [totalSlides, visibleSlides]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (infinite ? (prev >= maxIndex ? 0 : prev + 1) : Math.min(prev + 1, maxIndex)));
  }, [maxIndex, infinite]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (infinite ? (prev <= 0 ? maxIndex : prev - 1) : Math.max(prev - 1, 0)));
  }, [maxIndex, infinite]);

  const goToSlide = useCallback((index: number) => setCurrentIndex(index), []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay && totalSlides > visibleSlides) interval = setInterval(goToNext, autoplaySpeed);
    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed, goToNext, totalSlides, visibleSlides]);

  return (
    <SliderContext.Provider value={{ currentIndex, totalSlides, setTotalSlides, visibleSlides, direction, infinite, gap, goToNext, goToPrev, goToSlide }}>
      <SliderWrapper direction={direction}>{children}</SliderWrapper>
    </SliderContext.Provider>
  );
};

// --- Sub-Components ---

const SliderTrack: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentIndex, direction, visibleSlides, setTotalSlides, gap, goToNext, goToPrev } = useSlider();
  const isHorizontal = direction === "horizontal";
  const count = React.Children.count(children);

  // Sync totalSlides count back to context
  useEffect(() => {
    setTotalSlides(count);
  }, [count, setTotalSlides]);

  if (count === 0) return null;

  const transformPercentage = (currentIndex / count) * 100;
  const transformValue = isHorizontal ? `translateX(-${transformPercentage}%)` : `translateY(-${transformPercentage}%)`;
  const trackWidth = (count / visibleSlides) * 100;

  return (
    <div style={{ overflow: "hidden", width: "100%", height: isHorizontal ? "auto" : "100%" }}>
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

interface ButtonProps {
  type: "prev" | "next";
  children?: React.ReactNode;
  style?: "minimal" | "filled" | "outlined" | "plain";
}

const SliderButton: React.FC<ButtonProps> = ({ type, children, style = "minimal" }) => {
  const { goToNext, goToPrev, direction } = useSlider();
  const isHorizontal = direction === "horizontal";
  const handleClick = type === "next" ? goToNext : goToPrev;
  const defaultIcon = type === "next" ? (isHorizontal ? ">" : "˅") : (isHorizontal ? "<" : "˄");
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

const SliderDots: React.FC<{ position?: "top" | "bottom" | "left" | "right" }> = ({ position = "bottom" }) => {
  const { totalSlides, visibleSlides, currentIndex, goToSlide } = useSlider();
  const numberOfDots = Math.max(0, totalSlides - visibleSlides + 1);
  if (numberOfDots <= 1) return null;
  return (
    <DotsWrapper position={position}>
      {Array.from({ length: numberOfDots }).map((_, index) => (
        <Dot key={index} active={index === currentIndex} onClick={() => goToSlide(index)} />
      ))}
    </DotsWrapper>
  );
};

SliderMain.Track = SliderTrack;
SliderMain.Button = SliderButton;
SliderMain.Dots = SliderDots;

export default SliderMain;
