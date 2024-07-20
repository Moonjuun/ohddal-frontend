'use client';
import * as React from 'react';
import { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import BubbleComponent from './PieChart';
import CoverFlowContainer from './CoverFlow';
import Image from 'next/image';
import AutoHeightFileImage from '@/components/AutoHeightFileImage';
import styled from 'styled-components';
// store
import useResultStore from '@/store/useResultStore';

//effect
import { confettiEffect } from '@/effect/confetti';
import { ConfettiCustomShapesEffect } from '@/effect/CustomShape';

const Result = () => {
  const result = useResultStore((state) => state?.result);

  useEffect(() => {
    console.log('resultresult', result);
    confettiEffect();
    ConfettiCustomShapesEffect();
  }, [result]);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '700px' }}>
        <Image
          src={'/images/logo-baner.png'}
          alt="who-is-what-is"
          layout="responsive"
          width={1000}
          height={200}
        />
      </Box>

      {result.file && (
        <Box sx={{ width: '100%', maxWidth: '400px' }}>
          <AutoHeightFileImage file={result.file} width={0} height={0} />
          {result.bestGuess[0]?.label}
        </Box>
      )}

      {result.scoreNoneZeroResult.length === 0 ? (
        <Box sx={{ width: '100%', maxWidth: '400px' }}>
          <Image
            src={'/images/no-data-cat1.png'}
            alt="No data available"
            layout="responsive"
            width={300}
            height={300}
          />
        </Box>
      ) : (
        <BubbleComponent data={result.scoreNoneZeroResult} />
      )}
      <CoverFlowContainer images={result.scoreZeroResult} />
    </Container>
  );
};

export default Result;
