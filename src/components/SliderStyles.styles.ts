import styled from 'styled-components';

export const SliderWrapper = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: ${({ direction }) => (direction === 'vertical' ? '100%' : 'auto')}; // Ensure full height for vertical sliders

  ${({ direction }) => direction === 'vertical' && `
    display: flex;
    flex-direction: column;
  `}
`;


export const SlideTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;


export const Slide = styled.div<{ visibleSlides: number }>`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0; 
  padding: 0; 
`;



export const DotsWrapper = styled.div<{ position: 'top' | 'bottom' | 'left' | 'right' }>`
  display: flex;
  justify-content: center;
  flex-direction: ${({ position }) => (position === 'left' || position === 'right' ? 'column' : 'row')};
  margin-top: ${({ position }) => (position === 'top' ? '10px' : '0')};
  margin-bottom: ${({ position }) => (position === 'bottom' ? '10px' : '0')};
  margin-left: ${({ position }) => (position === 'left' ? '10px' : '0')};
  margin-right: ${({ position }) => (position === 'right' ? '10px' : '0')};
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'black' : 'lightgray')};
  margin: 0 5px;
  cursor: pointer;
`;
export const Arrow = styled.div<{ direction: 'left' | 'right' | 'up' | 'down', arrowStyle: 'minimal' | 'filled' | 'outlined', arrowColor: 'black' | 'white' }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;
  user-select: none;

  // Horizontal arrows
  ${({ direction }) => direction === 'left' && 'left: 10px; top: 50%; transform: translateY(-50%);'}
  ${({ direction }) => direction === 'right' && 'right: 10px; top: 50%; transform: translateY(-50%);'}

  // Vertical arrows
  ${({ direction }) => direction === 'up' && 'top: 10px; left: 50%; transform: translateX(-50%);'}
  ${({ direction }) => direction === 'down' && 'bottom: 10px; left: 50%; transform: translateX(-50%);'}

  // Minimal style: no background or border
  ${({ arrowStyle }) => arrowStyle === 'minimal' && `
    background-color: transparent;
    border: none;
  `}

  // Filled style: solid background and white arrow
  ${({ arrowStyle, arrowColor }) => arrowStyle === 'filled' && `
    background-color: ${arrowColor === 'white' ? 'white' : 'black'};
    color: ${arrowColor === 'white' ? 'black' : 'white'};
  `}

  // Outlined style: transparent background with colored border and arrow
  ${({ arrowStyle, arrowColor }) => arrowStyle === 'outlined' && `
    background-color: transparent;
    border: 2px solid ${arrowColor === 'white' ? 'white' : 'black'};
    color: ${arrowColor === 'white' ? 'white' : 'black'};
  `}
`;
