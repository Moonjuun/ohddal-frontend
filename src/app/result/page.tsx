'use client';
import * as React from 'react';
import { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import useResultStore from '@/store/useResultStore';
import BubbleComponent from './PieChart';
import CoverFlowContainer from './CoverFlow';
import Image from 'next/image';

const Result = () => {
  const result = useResultStore((state) => state?.result);

  useEffect(() => {
    console.log('resultresult', result);
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
