import styled from 'styled-components';

export const SliderWrapper = styled.div<{ direction: 'horizontal' | 'vertical' }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: ${({ direction }) => (direction === 'vertical' ? '100%' : 'auto')};

  ${({ direction }) => direction === 'vertical' && `
    display: flex;
    flex-direction: column;
  `}
`;

export const SlideTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  /* Track width will be set dynamically via inline styles */
`;

export const Slide = styled.div<{ visibleSlides: number }>`
  box-sizing: border-box;
  flex-shrink: 0; /* Important: prevents slides from squeezing */
  width: 100%;
  height: 100%;
`;

export const DotsWrapper = styled.div<{ position: 'top' | 'bottom' | 'left' | 'right' }>`
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 5;
  flex-direction: ${({ position }) => (position === 'left' || position === 'right' ? 'column' : 'row')};
  
  ${({ position }) => position === 'top' && `top: 10px; left: 50%; transform: translateX(-50%);`}
  ${({ position }) => position === 'bottom' && `bottom: 10px; left: 50%; transform: translateX(-50%);`}
  ${({ position }) => position === 'left' && `left: 10px; top: 50%; transform: translateY(-50%);`}
  ${({ position }) => position === 'right' && `right: 10px; top: 50%; transform: translateY(-50%);`}
`;

export const Dot = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? 'black' : 'lightgray')};
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
`;

export const Arrow = styled.div<{ direction: 'left' | 'right' | 'up' | 'down', arrowStyle: 'minimal' | 'filled' | 'outlined' | 'plain', arrowColor: 'black' | 'white' }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  user-select: none;
  transition: all 0.2s ease-in-out;

  ${({ direction }) => direction === 'left' && 'left: 15px; top: 50%; transform: translateY(-50%);'}
  ${({ direction }) => direction === 'right' && 'right: 15px; top: 50%; transform: translateY(-50%);'}
  ${({ direction }) => direction === 'up' && 'top: 15px; left: 50%; transform: translateX(-50%);'}
  ${({ direction }) => direction === 'down' && 'bottom: 15px; left: 50%; transform: translateX(-50%);'}

  ${({ arrowStyle }) => arrowStyle !== 'plain' && `
    width: 45px;
    height: 45px;
    border-radius: 50%;
    font-size: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    &:hover { transform: scale(1.1) ${ (props: any) => props.direction === 'left' || props.direction === 'right' ? 'translateY(-45%)' : 'translateX(-45%)' }; }
  `}

  ${({ arrowStyle, arrowColor }) => arrowStyle === 'minimal' && `
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    color: ${arrowColor === 'white' ? 'white' : '#333'};
  `}

  ${({ arrowStyle, arrowColor }) => arrowStyle === 'filled' && `
    background-color: ${arrowColor === 'white' ? '#fff' : '#222'};
    color: ${arrowColor === 'white' ? '#222' : '#fff'};
  `}

  ${({ arrowStyle, arrowColor }) => arrowStyle === 'plain' && `
    background: none;
    font-size: 32px;
    font-weight: bold;
    color: ${arrowColor === 'white' ? '#fff' : '#222'};
    &:hover { opacity: 0.7; transform: scale(1.2) ${ (props: any) => props.direction === 'left' || props.direction === 'right' ? 'translateY(-42%)' : 'translateX(-42%)' }; }
  `}
`;
