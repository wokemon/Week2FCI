import * as React from 'react'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, Stack } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const theme = createTheme({
  palette: {
    color: {
      text: "white"
    }
  }
});

export default function AppNav() {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, border: 0 }}>
      <AppBar position="static" sx={{background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1}} color={'#1976D2'}>
            
          </Typography>
          <Stack direction={{xs: 'column', md: 'row'}} spacing={'0.5'} alignContent={'flex-end'}>
            <Button sx={{ color: 'color.text'}} variant='text' component= {RouterLink} to='/'>{t('home')}</Button>
            <Button sx={{ color: 'color.text'}} variant='text' /*component= {RouterLink} to="/login"*/>{t('services')}</Button>
            <Button sx={{ color: 'color.text'}} variant='text' component= {RouterLink} to="/login/signup">{t('sign_up')}</Button>
            <Button sx={{ color: 'color.text'}} variant='text' component= {RouterLink} to="/login">{t('sign_in')}</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}

