'use client';
import * as React from 'react';
import { Box, Typography, Container, useMediaQuery, useTheme } from '@mui/material';
import Find from './find/page';
import MarqueeComponent from './intro/marquee';
import Image from 'next/image';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E7F3FF',
          width: '100%',
          padding: isMobile ? '20px' : '0',
        }}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          sx={{ mt: isMobile ? 5 : 10, mb: 2, fontWeight: 'bold', textAlign: 'center' }}
        >
          무엇이든 궁금할 때!
        </Typography>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          sx={{ mb: 5, color: '#2D9CDB', fontWeight: 'bold', textAlign: 'center' }}
        >
          가장 빠르고 편리하게
        </Typography>
        <Image
          src={'/images/intro-001.png'}
          width={isMobile ? 200 : 300}
          height={isMobile ? 200 : 300}
          priority
          alt="wiwi-intro"
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          padding: isMobile ? '20px' : '0',
        }}
      >
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          sx={{ mt: isMobile ? 10 : 15, mb: 2, fontWeight: 'bold', textAlign: 'center' }}
        >
          무엇이든!
        </Typography>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          sx={{ mb: 5, color: '#2D9CDB', fontWeight: 'bold', textAlign: 'center' }}
        >
          사진만 올려보세요
        </Typography>
      </Box>
      <MarqueeComponent />
      <Find />
    </>
  );
}
