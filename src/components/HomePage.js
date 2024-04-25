import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, CssBaseline, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GmailLogo from './gmail-logo.png'; // Adjust path as needed
import YouTubeLogo from './youtube-logo.png'; // Adjust path as needed
import ChromeLogo from './chrome-logo.png'; // Adjust path as needed
import { Avatar } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h5: {
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1.2rem',
    },
  },
});

const HomePage = () => {
  const openService = (url) => {
    window.open(url, '_blank');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ mt: 4, mb: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Your Dashboard
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your personal hub for quick access to all essential tools.
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {[
            "Always use meaningful variable names to enhance code readability.",
            "Keep functions focused on a single task to improve maintainability.",
            "Document your code consistently and clearly.",
            "Utilize version control systems to track changes and collaborate effectively.",
            "Refactor regularly to keep the codebase clean and manageable.",
            "Write tests to ensure your code works as expected and to prevent future issues."
          ].map((tip, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Typography variant="h6">Coding Tip #{index + 1}</Typography>
              <Typography variant="body2">
                {tip}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2 }}>
            <Avatar src={GmailLogo} sx={{ width: 56, height: 56 }} />
            <Button variant="contained" color="primary" onClick={() => openService('https://mail.google.com/')}>
              Open Gmail
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2 }}>
            <Avatar src={YouTubeLogo} sx={{ width: 56, height: 56 }} />
            <Button variant="contained" color="primary" onClick={() => openService('https://www.youtube.com/')}>
              Open YouTube
            </Button>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar src={ChromeLogo} sx={{ width: 56, height: 56 }} />
            <Button variant="contained" color="primary" onClick={() => openService('https://www.google.com/chrome/')}>
              Open Chrome
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
