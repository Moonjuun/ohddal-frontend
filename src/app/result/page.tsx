'use client';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import styled from 'styled-components';

import useResultStore from '@/store/useResultStore';
import BubbleComponent from './BubbleComponent';
import CoverFlowContainer from './CoverFlow';

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
      <BubbleComponent data={result.scoreNoneZeroResult} />
      <CoverFlowContainer images={result.scoreZeroResult} />
    </Container>
  );
};

export default Result;
