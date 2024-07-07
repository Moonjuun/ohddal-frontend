'use client';
import * as React from 'react';
import { Container, Button } from '@mui/material';

import useResultStore from '@/store/useResultStore';

const Result: React.FC = () => {
  const result = useResultStore((state) => state?.result);

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
