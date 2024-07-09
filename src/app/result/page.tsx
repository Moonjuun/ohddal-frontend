'use client';
import * as React from 'react';
import { useEffect } from 'react';
import { Container, Button } from '@mui/material';

import useResultStore from '@/store/useResultStore';

const Result = () => {
  const result = useResultStore((state) => state?.result);

  useEffect(() => {
    console.log('resultresult', result);
  }, []);

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <>{JSON.stringify(result)}</>
    </Container>
  );
};

export default Result;
