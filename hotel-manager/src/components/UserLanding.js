import { styled } from '@mui/system';
import bg from '../assets/bg.jpg';
import AppNav from './Navbar';
import StickyFooter from './Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { colors } from '@mui/material';

const MyComponent = styled('div')({
    minHeight: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    justifyContent: 'center',
    alignItems: 'center',
});
  
const darkTheme = createTheme({
    palette: {
        color: {
        text: "white"
    },
        mode: 'dark',
    }
});

function Welcome() {
    return (
        <Typography variant='h3' sx={{textAlign: 'right', color: 'color.text', minHeight: '100%'}}>Welcome to Hotel Manager</Typography>
    )
}

export default function Landing() {
    return (
        <ThemeProvider theme={darkTheme}>
            <MyComponent>
                <AppNav></AppNav>
                <Welcome></Welcome>
                <StickyFooter></StickyFooter>
            </MyComponent>
        </ThemeProvider>
    )
}