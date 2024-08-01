import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
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
          height: '88.5vh',
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
            }}
        >
            <EmailIcon></EmailIcon>
            <PhoneEnabledIcon></PhoneEnabledIcon>
            <FacebookIcon></FacebookIcon>
            <InstagramIcon></InstagramIcon>
            <Copyright />
            <LanguageSwitcher></LanguageSwitcher>
          </Box>
        </Box>
    </ThemeProvider>
  );
}