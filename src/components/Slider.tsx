import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
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
  breakpoints,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [visibleSlides, setVisibleSlides] = useState(defaultVisibleSlides);
  const totalSlides = React.Children.count(children);

  // Ekran genişliğine göre visibleSlides değerini güncelle
  React.useEffect(() => {
    if (!breakpoints) return;

    const handleResize = () => {
      const width = window.innerWidth;
      let activeVisibleSlides = defaultVisibleSlides;

      if (breakpoints) {
        // Breakpoint'leri küçükten büyüğe sıralayalım
        const sortedBreakpoints = Object.keys(breakpoints)
          .map(Number)
          .sort((a, b) => a - b);

        // En uygun (ekranın içinde kaldığı en büyük kuralı) bulalım
        for (const breakpoint of sortedBreakpoints) {
          if (width >= breakpoint) {
            activeVisibleSlides = breakpoints[breakpoint].visibleSlides;
          }
        }
      }

      setVisibleSlides(activeVisibleSlides);
    };

    handleResize(); // İlk yüklemede çalıştır
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoints, defaultVisibleSlides]);

  const maxIndex = useMemo(() => Math.max(0, totalSlides - visibleSlides), [totalSlides, visibleSlides]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      if (infinite) {
        // Eğer sona geldiysek (maxIndex'i geçtiysek veya oradaysak), 0'a dön.
        return prev >= maxIndex ? 0 : prev + 1;
      }
      return Math.min(prev + 1, maxIndex);
    });
  }, [maxIndex, infinite]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (infinite) {
        // Eğer baştaysak, en sona (maxIndex'e) git.
        return prev <= 0 ? maxIndex : prev - 1;
      }
      return Math.max(prev - 1, 0);
    });
  }, [maxIndex, infinite]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const slidePercentage = useMemo(() => 100 / visibleSlides, [visibleSlides]);

  const value = {
    currentIndex,
    totalSlides,
    visibleSlides,
    direction,
    infinite,
    goToNext,
    goToPrev,
    goToSlide,
    slidePercentage,
  };

  return (
    <SliderContext.Provider value={value}>
      <SliderWrapper direction={direction}>{children}</SliderWrapper>
    </SliderContext.Provider>
  );
};

// --- Sub-Components ---

const SliderTrack: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    currentIndex,
    direction,
    slidePercentage,
    totalSlides,
    goToNext,
    goToPrev,
  } = useSlider();
  const isHorizontal = direction === "horizontal";
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  // Kaydırma hassasiyeti (piksel cinsinden)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(
      isHorizontal ? e.targetTouches[0].clientX : e.targetTouches[0].clientY,
    );
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(
      isHorizontal ? e.targetTouches[0].clientX : e.targetTouches[0].clientY,
    );
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  const transformValue = isHorizontal
    ? `translateX(-${currentIndex * slidePercentage}%)`
    : `translateY(-${(currentIndex * 100) / totalSlides}%)`;

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
        }}
      >
        {React.Children.map(children, (child, index) => (
          <Slide
            key={index}
            visibleSlides={1}
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

const SliderButton: React.FC<ButtonProps> = ({
  type,
  children,
  style = "minimal",
}) => {
  const { goToNext, goToPrev, direction } = useSlider();
  const isHorizontal = direction === "horizontal";

  const handleClick = type === "next" ? goToNext : goToPrev;

  const defaultIcon =
    type === "next" ? (isHorizontal ? ">" : "˅") : isHorizontal ? "<" : "˄";

  return (
    <Arrow
      direction={
        type === "next"
          ? isHorizontal
            ? "right"
            : "down"
          : isHorizontal
            ? "left"
            : "up"
      }
      arrowStyle={style}
      arrowColor="black"
      onClick={handleClick}
    >
      {children || defaultIcon}
    </Arrow>
  );
};

const SliderDots: React.FC<{
  position?: "top" | "bottom" | "left" | "right";
}> = ({ position = "bottom" }) => {
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
