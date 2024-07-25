import * as React from 'react'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
//import { Link as RouterLink } from 'react-router-dom';

export default function AppNav() {
  return (
    <Box sx={{ flexGrow: 1, outline: 'none' }}>
      <AppBar position="static" color='transparent'>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1}} color={'#1976D2'}>
            Continental
          </Typography>
          <Stack direction={'row'} spacing={'0.5'} alignContent={'flex-end'}>
            <Button color="primary" variant='text' /*component= {RouterLink} to="/login"*/>About us</Button>
            <Button color="primary" variant='text' /*component= {RouterLink} to="/login"*/>Services</Button>
            <Button color="primary" variant='text' /*component= {RouterLink} to="/login"*/>Blog</Button>
            <Button color="primary" variant='text' /*component= {RouterLink} to="/login"*/>Contact us</Button>
            <Button color="primary" variant='text' /*component= {RouterLink} to="/login"*/>Sign up</Button>
            <Button color="primary" variant='text' /*component= {RouterLink} to="/login"*/>Sign in</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

