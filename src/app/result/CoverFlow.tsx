'use client';
import * as React from 'react';
import { useState } from 'react';
import { Button, Typography, Container } from '@mui/material';
import styled from 'styled-components';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
interface ImageData {
  url: string;
  score: number;
}

interface CoverFlowProps {
  images: ImageData[];
}

const CoverFlow: React.FC<CoverFlowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fallbackImage = '/images/go-to-url.png';

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  return (
    <ResponsiveContainer>
      <CoverFlowContainerWrapper>
        <NavigationButton onClick={handlePrev} disabled={currentIndex === 0} sx={{ left: 0 }}>
          <ArrowBackIosIcon />
        </NavigationButton>
        <CoverFlowInner>
          {images.map((image, index) => (
            <CoverFlowItem key={index} $index={index} $currentIndex={currentIndex}>
              <a href={image.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={image.url}
                  alt={`Cover ${index}`}
                  onError={(e) => (e.currentTarget.src = fallbackImage)}
                />
              </a>
            </CoverFlowItem>
          ))}
        </CoverFlowInner>
        <NavigationButton
          onClick={handleNext}
          disabled={currentIndex === images.length - 1}
          sx={{ right: 0 }}
        >
          <ArrowForwardIosIcon />
        </NavigationButton>
      </CoverFlowContainerWrapper>
    </ResponsiveContainer>
  );
};

export default CoverFlow;

const ResponsiveContainer = styled(Container)`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  overflow: hidden;
`;

const CoverFlowContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  height: 400px;
  margin: 20px 0;
  width: 100%;
  overflow: hidden;
`;

const CoverFlowInner = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 300px;
  transform-style: preserve-3d;
  overflow: hidden;

  @media (max-width: 600px) {
    width: 100%;
    height: 200px;
  }
`;

interface CoverFlowItemProps {
  $index: number;
  $currentIndex: number;
}

const CoverFlowItem = styled.div<CoverFlowItemProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ $index, $currentIndex }) => ($index === $currentIndex ? '350px' : '250px')};
  height: ${({ $index, $currentIndex }) => ($index === $currentIndex ? '350px' : '250px')};
  margin-left: ${({ $index, $currentIndex }) => ($index === $currentIndex ? '-200px' : '-150px')};
  margin-top: ${({ $index, $currentIndex }) => ($index === $currentIndex ? '-200px' : '-150px')};
  transition: all 0.5s ease;
  transform: ${({ $index, $currentIndex }) => {
    const offset = $index - $currentIndex;
    const rotateY = offset * 30;
    const translateX = offset * 120;
    const translateZ = -Math.abs(offset) * 200;

    return `
      translateX(${translateX}px)
      translateZ(${translateZ}px)
      rotateY(${rotateY}deg)
    `;
  }};
  background-color: white;
  z-index: ${({ $index, $currentIndex }) => 100 - Math.abs($index - $currentIndex)};
  opacity: ${({ $index, $currentIndex }) => ($index === $currentIndex ? 1 : 0.7)};
  box-shadow: ${({ $index, $currentIndex }) =>
    $index === $currentIndex ? '0 0 20px rgba(0, 0, 0, 0.7)' : 'none'};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: ${({ $index, $currentIndex }) => ($index === $currentIndex ? '300px' : '200px')};
    height: ${({ $index, $currentIndex }) => ($index === $currentIndex ? '300px' : '200px')};
    margin-left: ${({ $index, $currentIndex }) => ($index === $currentIndex ? '-150px' : '-100px')};
    margin-top: ${({ $index, $currentIndex }) => ($index === $currentIndex ? '-150px' : '-100px')};
  }
`;

const NavigationButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 101;
  @media (max-width: 600px) {
    top: 40%;
  }
`;
