'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Container, Button, Typography } from '@mui/material';
import styled from 'styled-components';

import useResultStore from '@/store/useResultStore';
import Image from 'next/image';

interface ImageData {
  url: string;
  score: number;
}

const CoverFlowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  height: 400px;
  margin: 20px 0;
  width: 100%;
`;

const CoverFlowInner = styled.div`
  position: relative;
  width: 80%;
  max-width: 600px;
  height: 300px;
  transform-style: preserve-3d;

  @media (max-width: 600px) {
    width: 10%;
    height: 200px;
  }
`;

interface CoverFlowItemProps {
  $index: number;
  $currentIndex: number;
}

const CoverFlowItem = styled.div<CoverFlowItemProps>`
  position: absolute;
  top: 0;
  left: 50%;
  width: 300px;
  height: 300px;
  margin-left: -150px;
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
  z-index: ${({ $index, $currentIndex }) => 100 - Math.abs($index - $currentIndex)};
  opacity: ${({ $index, $currentIndex }) => ($index === $currentIndex ? 1 : 0.7)};
  box-shadow: ${({ $index, $currentIndex }) =>
    $index === $currentIndex ? '0 0 15px rgba(0, 0, 0, 0.5)' : 'none'};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 200px;
    margin-left: -100px;
  }
`;

const NavigationButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 101; /* Make sure buttons are always on top */
  @media (max-width: 600px) {
    top: 40%;
  }
`;

const Result = () => {
  const result = useResultStore((state) => state?.result);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log('resultresult', result);
  }, [result]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, result.scoreZeroResult.length - 1));
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <CoverFlowContainer>
        <NavigationButton onClick={handlePrev} disabled={currentIndex === 0} sx={{ left: 0 }}>
          Previous
        </NavigationButton>
        <CoverFlowInner>
          {result.scoreZeroResult.map((image: ImageData, index: number) => (
            <CoverFlowItem key={index} $index={index} $currentIndex={currentIndex}>
              <img src={image.url} alt={`Cover ${index}`} />
            </CoverFlowItem>
          ))}
        </CoverFlowInner>
        <NavigationButton
          onClick={handleNext}
          disabled={currentIndex === result.scoreZeroResult.length - 1}
          sx={{ right: 0 }}
        >
          Next
        </NavigationButton>
      </CoverFlowContainer>
      {result.scoreZeroResult[currentIndex] && (
        <Typography variant="h6" component="div" sx={{ marginTop: 2 }}>
          {result.scoreZeroResult[currentIndex].url}
        </Typography>
      )}
    </Container>
  );
};

export default Result;
