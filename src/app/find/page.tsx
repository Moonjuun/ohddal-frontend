'use client';
import React, { useState, useEffect } from 'react';
import { Container, Button } from '@mui/material';
import FileUpload from './FileUpload';

const Find: React.FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: 10,
      }}
    >
      <FileUpload />
    </Container>
  );
};

export default Find;
