import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleAuthProvider } from '../config/firebase'; // Correct the path based on your setup
import { signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Button, TextField, Typography, Container, Box, Grid, Link, CssBaseline, Alert } from '@mui/material';

export const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </Box>
        <Button
          type="button"
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleGoogleSignIn}
          style={{ marginTop: '20px' }}
        >
          Sign in with Google
        </Button>
        <Button
          type="button"
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleLogout}
          style={{ marginTop: '10px' }}
        >
          Logout
        </Button>
      </Box>
    </Container>
  );
};

export default Auth;