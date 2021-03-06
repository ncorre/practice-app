import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100px;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;
const ImageSvg = styled.svg`
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;
const Circle = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes color {
    100%,
    0% {
      stroke: #d62d20;
    }
    40% {
      stroke: #0057e7;
    }
    66% {
      stroke: #008744;
    }
    80%,
    90% {
      stroke: #ffa700;
    }
  }
`;

interface IProps {
  isLoading: boolean;
}

export const Loader = ({ isLoading }: IProps) => {
  if (!isLoading) {
    return null;
  }
  return (
    <Wrapper>
      <ImageSvg viewBox="25 25 50 50">
        <Circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </ImageSvg>
    </Wrapper>
  );
};
