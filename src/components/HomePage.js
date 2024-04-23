import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, CssBaseline, Card, CardContent, Avatar, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GmailLogo from './gmail-logo.png'; // Adjust path as needed

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
              <Card>
                <CardContent>
                  <Typography variant="h6">Coding Tip #{index + 1}</Typography>
                  <Typography variant="body2">
                    {tip}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar src={GmailLogo} sx={{ width: 56, height: 56, mt: 2, mb: 2 }} />
          <Button variant="contained" color="primary" onClick={() => window.open('https://mail.google.com/', '_blank')} sx={{ mt: 3 }}>
            Open Gmail
          </Button>
          <Typography variant="caption" sx={{ mt: 2 }}>
            Quickly access your Gmail to manage your emails efficiently.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;