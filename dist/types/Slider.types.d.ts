/// <reference types="react" />
export type SliderDirection = "horizontal" | "vertical";
export type ArrowStyle = "minimal" | "filled" | "outlined" | "plain";
export type DotsPosition = "top" | "bottom" | "left" | "right";
export interface Breakpoints {
    [key: number]: {
        visibleSlides: number;
    };
}
export interface SliderProps {
    children: React.ReactNode;
    visibleSlides?: number;
    direction?: SliderDirection;
    initialIndex?: number;
    infinite?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    gap?: number;
    breakpoints?: Breakpoints;
}
export interface SliderContextProps {
    currentIndex: number;
    totalSlides: number;
    visibleSlides: number;
    direction: SliderDirection;
    infinite: boolean;
    gap: number;
    setTotalSlides: (count: number) => void;
    goToNext: () => void;
    goToPrev: () => void;
    goToSlide: (index: number) => void;
}
export interface ButtonProps {
    type: "prev" | "next";
    children?: React.ReactNode;
    style?: ArrowStyle;
}
