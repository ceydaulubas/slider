import styled from 'styled-components';

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const SlideTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

export const Slide = styled.div<{ visibleSlides: number }>`
  flex: 0 0 ${({ visibleSlides }) => 100 / visibleSlides}%;
  width: ${({ visibleSlides }) => 100 / visibleSlides}%;
  box-sizing: border-box;
`;

export const DotsWrapper = styled.div<{ position: 'top' | 'bottom' }>`
  display: flex;
  justify-content: center;
  margin-top: ${({ position }) => (position === 'top' ? '10px' : '0')};
  margin-bottom: ${({ position }) => (position === 'bottom' ? '10px' : '0')};
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'black' : 'lightgray')};
  margin: 0 5px;
  cursor: pointer;
`;

export const Arrow = styled.div<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ direction }) => (direction === 'left' ? 'left: 10px;' : 'right: 10px;')}
  transform: translateY(-50%);
  font-size: 24px;
  cursor: pointer;
  z-index: 1;
  user-select: none;
`;
