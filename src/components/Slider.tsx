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
  const totalSlides = React.Children.count(children);

  // Responsive logic: update visibleSlides based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let activeVisibleSlides = defaultVisibleSlides;

      if (breakpoints) {
        // Sort breakpoints in ascending order
        const sortedBreakpoints = Object.keys(breakpoints)
          .map(Number)
          .sort((a, b) => a - b);

        // Find the best matching breakpoint for the current width
        for (const breakpoint of sortedBreakpoints) {
          if (width >= breakpoint) {
            activeVisibleSlides = breakpoints[breakpoint].visibleSlides;
          }
        }
      }
      setVisibleSlides(activeVisibleSlides);
    };

    handleResize(); // Initial check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints, defaultVisibleSlides]);

  // Calculate the maximum scrollable index
  const maxIndex = useMemo(() => Math.max(0, totalSlides - visibleSlides), [totalSlides, visibleSlides]);

  // Navigate to the next slide
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (infinite) {
        // Loop back to start if at the end in infinite mode
        return prev >= maxIndex ? 0 : prev + 1;
      }
      return Math.min(prev + 1, maxIndex);
    });
  }, [maxIndex, infinite]);

  // Navigate to the previous slide
  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (infinite) {
        // Loop back to the end if at the start in infinite mode
        return prev <= 0 ? maxIndex : prev - 1;
      }
      return Math.max(prev - 1, 0);
    });
  }, [maxIndex, infinite]);

  // Directly navigate to a specific slide index
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Autoplay logic: automatically slide at a set interval
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(goToNext, autoplaySpeed);
    }
    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed, goToNext]);

  // Percentage width/height for each slide
  const slidePercentage = useMemo(() => 100 / visibleSlides, [visibleSlides]);

  const value = {
    currentIndex,
    totalSlides,
    visibleSlides,
    direction,
    infinite,
    gap,
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
  const { currentIndex, direction, slidePercentage, gap, goToNext, goToPrev } = useSlider();
  const isHorizontal = direction === "horizontal";
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Swipe support: tracking touch start and move positions
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(isHorizontal ? e.targetTouches[0].clientX : e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(isHorizontal ? e.targetTouches[0].clientX : e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Minimum distance to trigger a swipe

    if (distance > minSwipeDistance) goToNext();
    else if (distance < -minSwipeDistance) goToPrev();
  };

  // CSS transform value for sliding
  const transformValue = isHorizontal
    ? `translateX(-${currentIndex * slidePercentage}%)`
    : `translateY(-${currentIndex * slidePercentage}%)`;

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <SlideTrack
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          transform: transformValue,
          flexDirection: isHorizontal ? "row" : "column",
          display: "flex",
          transition: "transform 0.3s ease-in-out",
          margin: isHorizontal ? `0 -${gap / 2}px` : `-${gap / 2}px 0`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <Slide
            key={index}
            visibleSlides={1}
            style={{
              flex: `0 0 ${slidePercentage}%`,
              width: isHorizontal ? `${slidePercentage}%` : "100%",
              height: isHorizontal ? "auto" : `${slidePercentage}%`,
              padding: isHorizontal ? `0 ${gap / 2}px` : `${gap / 2}px 0`,
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
  
  // Default icons for next/prev depending on direction
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
  const numberOfDots = totalSlides - visibleSlides + 1;
  if (numberOfDots <= 1) return null;

  return (
    <DotsWrapper position={position}>
      {Array.from({ length: numberOfDots }).map((_, index) => (
        <Dot key={index} active={index === currentIndex} onClick={() => goToSlide(index)} />
      ))}
    </DotsWrapper>
  );
};

// Attach sub-components to the main Slider component
SliderMain.Track = SliderTrack;
SliderMain.Button = SliderButton;
SliderMain.Dots = SliderDots;

export default SliderMain;
