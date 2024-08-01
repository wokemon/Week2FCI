import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import LanguageSwitcher from './LanguageSwitcher';

function Copyright() {
  return (
    <Typography variant="body2" sx={{color: 'white'}} textAlign={"center"}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/wokemon">
        AlecPhan
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '93.2vh',
          width: '100%'
        }}
      >
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 0,
            px: 2,
            mt:'auto',
            backgroundColor: '#383b38',
            textAlign: 'center',
            position: 'dynamic',
            width: '100%',
            }}
        >
            <LanguageSwitcher></LanguageSwitcher>
            <Copyright />
          </Box>
        </Box>
    </ThemeProvider>
  );
}