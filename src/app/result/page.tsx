'use client';
import * as React from 'react';
import { useEffect } from 'react';
import { Box, Container, Tooltip, Typography } from '@mui/material';
import BubbleComponent from './PieChart';
import CoverFlowContainer from './CoverFlow';
import Image from 'next/image';

import styled from 'styled-components';
import Divider from '@/common/Divider';

//icon
import AutoHeightFileImage from '@/components/AutoHeightFileImage';
import SearchIcon from '@mui/icons-material/Search';
import PhotoIcon from '@mui/icons-material/Photo';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

// store
import useResultStore from '@/store/useResultStore';

//effect
import { confettiEffect } from '@/effect/confetti';
import { ConfettiCustomShapesEffect } from '@/effect/CustomShape';
import TextTypingAnimation from '@/effect/text/TextTypingAnimation';

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

      <AlignCenterBox>
        <SearchIcon fontSize="large" />
        <BoldText>
          <TextTypingAnimation text={result.bestGuess[0]?.label} />
        </BoldText>
      </AlignCenterBox>

      {result.file && (
        <Box sx={{ width: '100%', maxWidth: '400px' }}>
          <AutoHeightFileImage file={result.file} width={0} height={0} />
        </Box>
      )}

      <Divider direction="horizontal" thickness="3px" color="#ececec" length="80%" />

      {result.scoreNoneZeroResult.length === 0 ? (
        <>
          <Box sx={{ width: '100%', maxWidth: '400px', mt: 5 }}>
            <Image
              src={'/images/no-data-cat1.png'}
              alt="No data available"
              layout="responsive"
              width={300}
              height={300}
            />
          </Box>
          <Divider direction="horizontal" thickness="3px" color="#ececec" length="80%" />
        </>
      ) : (
        <>
          <AlignCenterBox>
            <DonutLargeIcon fontSize="large" />
            <BoldText>
              <TextTypingAnimation text="Score" />
            </BoldText>
          </AlignCenterBox>
          <BubbleComponent data={result.scoreNoneZeroResult} />
          <Divider direction="horizontal" thickness="3px" color="#ececec" length="80%" />
        </>
      )}

      <AlignCenterBox>
        <PhotoIcon fontSize="large" />
        <BoldText>
          {' '}
          <TextTypingAnimation text="Other Pic." />
        </BoldText>
      </AlignCenterBox>
      <CoverFlowContainer images={result.scoreZeroResult} />
    </Container>
  );
};

export default Result;

const AlignCenterBox = styled(Box)`
  display: flex;
  align-items: center;
  width: 400px;
  min-height: 84px;
  justify-content: start;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

const BoldText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
