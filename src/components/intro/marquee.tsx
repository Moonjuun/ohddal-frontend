import React from 'react';
import { Box, Card, CardContent, Typography, Container } from '@mui/material';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const avatars = [
  { name: '동물' },
  { name: '음식' },
  { name: '자동차' },
  { name: '이미지' },
  { name: '드라마' },
  { name: '패션' },
  { name: '영화' },
  { name: '음악' },
  { name: '여행' },
  { name: '스포츠' },
  { name: '과학' },
  { name: '기술' },
  { name: '건강' },
  { name: '역사' },
  { name: '문학' },
  { name: '미술' },
  { name: '철학' },
  { name: '정치' },
  { name: '경제' },
  { name: '사회' },
  { name: '환경' },
  { name: '교육' },
  { name: '심리학' },
  { name: '인류학' },
  { name: '지리' },
  { name: '우주' },
  { name: '기후 변화' },
  { name: '생태계' },
  { name: '요리' },
  { name: '애완동물' },
  { name: '자연' },
  { name: '사진' },
  { name: '비즈니스' },
  { name: '마케팅' },
  { name: '부동산' },
  { name: '패션 트렌드' },
  { name: '게임' },
  { name: '만화' },
  { name: '애니메이션' },
  { name: '웹툰' },
  { name: '자원봉사' },
  { name: '자아 개발' },
  { name: '명상' },
  { name: '운동' },
  { name: '요가' },
  { name: '취미' },
  { name: '문화 행사' },
  { name: '축제' },
];

const MarqueeComponent: React.FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        gap: 2,
      }}
    >
      <Marquee pauseOnHover={true} speed={50}>
        {avatars.map((avatar, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ margin: '0 16px' }}
          >
            <Typography variant="h5" component="div">
              {avatar.name}
            </Typography>
          </motion.div>
        ))}
      </Marquee>
      <Marquee pauseOnHover={true} speed={50} direction="right">
        {avatars.map((avatar, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ margin: '0 16px' }}
          >
            <Typography variant="h5" component="div">
              {avatar.name}
            </Typography>
          </motion.div>
        ))}
      </Marquee>
    </Container>
  );
};

export default MarqueeComponent;
