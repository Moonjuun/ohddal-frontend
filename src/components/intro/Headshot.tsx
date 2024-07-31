import React from 'react';
import styled from 'styled-components';
import { Button, Typography, Grid } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px;

  @media (max-width: 600px) {
    padding: 20px;
  }
`;

const Title = styled(Typography)`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const Subtitle = styled(Typography)`
  font-size: 18px;
  color: #666;
  margin-bottom: 32px;
  text-align: center;
  max-width: 600px;

  @media (max-width: 600px) {
    font-size: 16px;
    margin-bottom: 24px;
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 4px;
    margin-bottom: 20px;
    &:hover {
      background-color: #0056b3;
    }

    @media (max-width: 600px) {
      width: 100%;
      font-size: 14px;
    }
  }
`;

const SignInLink = styled.a`
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 10px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const HeadshotGrid = styled(Grid)`
  margin-top: 32px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 900px) {
    margin-top: 24px;
  }
`;

const HeadshotItem = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadshotImage = styled.img`
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: cover;
`;

const Headshot: React.FC = () => {
  return (
    <Container>
      <Title variant="h1">사진을 통해 인사이트를 발견하세요</Title>
      <Subtitle variant="body1">
        사진을 업로드하고 최신 Google 및 OpenAI 기술을 통해 분석해 보세요. 즉시 사진에 대한 자세한
        정보를 얻을 수 있습니다.
      </Subtitle>
      <StyledButton variant="contained">사진 분석하기</StyledButton>
      <Typography variant="body2" color="textSecondary">
        AI의 힘을 이용해 이미지를 이해하고 탐색하세요. 빠르고 신뢰할 수 있는 인사이트를 손쉽게
        얻으실 수 있습니다.
      </Typography>
      <SignInLink>회원이신가요? 로그인</SignInLink>
      <HeadshotGrid container spacing={3} justifyContent="center">
        {[
          '/images/Ciba1.png',
          '/images/Ciba1.png',
          '/images/Ciba1.png',
          '/images/Ciba1.png',
          '/images/Ciba1.png',
          '/images/Ciba1.png',
        ].map((src, index) => (
          <HeadshotItem item key={index} xs={6} sm={4} md={4} lg={2}>
            <HeadshotImage src={src} alt={`샘플 이미지 ${index + 1}`} />
          </HeadshotItem>
        ))}
      </HeadshotGrid>
    </Container>
  );
};

export default Headshot;
