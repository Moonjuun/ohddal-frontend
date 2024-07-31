'use client';
import * as React from 'react';
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
  Button,
  Tooltip,
  Fade,
  TooltipProps,
  tooltipClasses,
} from '@mui/material';
import Find from './find/page';
import MarqueeComponent from '../components/intro/marquee';
import Image from 'next/image';
import styled from 'styled-components';
import MoodIcon from '@mui/icons-material/Mood';
import { useRouter } from 'next/navigation';
import Headshot from '@/components/intro/Headshot';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();

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
          sx={{ mt: isMobile ? 10 : 12, mb: 2, fontWeight: 'bold', textAlign: 'center' }}
        >
          무엇이든!
        </Typography>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          sx={{ mb: 8, color: '#2D9CDB', fontWeight: 'bold', textAlign: 'center' }}
        >
          사진만 올려보세요
        </Typography>
      </Box>
      <MarqueeComponent />

      <Box
        sx={{
          mt: 10,
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
          variant={isMobile ? 'h5' : 'h3'}
          sx={{ mt: isMobile ? 10 : 15, mb: 2, fontWeight: 'bold', textAlign: 'center' }}
        >
          다양한 결과를 확인해보세요
        </Typography>
        <Typography
          variant={isMobile ? 'h5' : 'h4'}
          sx={{ mb: 10, color: '#2D9CDB', fontWeight: 'bold', textAlign: 'center' }}
        >
          다양하고 간편해요!
        </Typography>
      </Box>

      <Box
        sx={{
          mt: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          padding: isMobile ? '20px' : '0',
        }}
      >
        <Image
          src={'/images/intro-002.png'}
          width={isMobile ? 350 : 500}
          height={isMobile ? 700 : 900}
          priority
          alt="wiwi-intro"
        />
        <Tooltip
          title={
            <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: '18px' }}>
              <MoodIcon fontSize="large" />
              Click Me~
            </Typography>
          }
          placement="top"
        >
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 10, width: isMobile ? '80%' : '40%', fontSize: isMobile ? '18px' : '20px' }}
            onClick={() => {
              router.push('/find');
            }}
          >
            찾아보기
          </Button>
        </Tooltip>
      </Box>
    </>
  );
}
