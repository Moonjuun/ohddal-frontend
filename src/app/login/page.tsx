'use client';

import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  TextField,
  Button,
  Link,
  Container,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';
import { useInput } from '@/hooks/useInput';

const Login: React.FC = () => {
  const [userEmail, setUserEmail] = useInput('');
  const [userPassword, setUserPassword] = useInput('');

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: 5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 3, lg: 4 },
          py: 6,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 400, mx: 'auto' }}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Sign in to your account
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
            Don&apos;t have an account?{' '}
            <Link href="#" underline="hover" color="primary.main">
              Sign up
            </Link>{' '}
            for free.
          </Typography>
          <Card>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Email"
                type="email"
                placeholder="m@example.com"
                fullWidth
                required
                value={userEmail}
                onChange={setUserEmail}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                value={userPassword}
                onChange={setUserPassword}
              />
            </CardContent>
            <CardActions>
              <Button variant="contained" fullWidth>
                Sign in
              </Button>
            </CardActions>

            <CardActions>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                fullWidth
                // onClick={handleGoogleLogin}
              >
                Sign in with Google
              </Button>
            </CardActions>
            <CardActions>
              <Button
                variant="outlined"
                startIcon={<MicrosoftIcon />}
                fullWidth
                // onClick={handleMicrosoftLogin}
              >
                Sign in with Microsoft
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
