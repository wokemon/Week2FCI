import * as React from 'react'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, Stack } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';

const theme = createTheme({
  palette: {
    color: {
      text: "white"
    }
  }
});

export default function AppNav() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, border: 0 }}>
      <AppBar position="static" sx={{background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1}} color={'#1976D2'}>
            
          </Typography>
          <Stack direction={'row'} spacing={'0.5'} alignContent={'flex-end'}>
            <Button sx={{ color: 'color.text'}} variant='text' /*component= {RouterLink} to="/login"*/>About us</Button>
            <Button sx={{ color: 'color.text'}} variant='text' /*component= {RouterLink} to="/login"*/>Services</Button>
            <Button sx={{ color: 'color.text'}} variant='text' /*component= {RouterLink} to="/login"*/>Contact us</Button>
            <Button sx={{ color: 'color.text'}} variant='text' /*component= {RouterLink} to="/login"*/>Sign up</Button>
            <Button sx={{ color: 'color.text'}} variant='text' component= {RouterLink} to="/login">Sign in</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}

