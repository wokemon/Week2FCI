import { styled } from '@mui/system';
import bg from '../assets/bg.jpg';
import AppNav from './Navbar';
import StickyFooter from './Footer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

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
        mode: 'dark'
    }
});

export default function Landing() {
    return (
        <ThemeProvider theme={darkTheme}>
            <MyComponent>
                <AppNav></AppNav>
                
                <StickyFooter></StickyFooter>
            </MyComponent>
        </ThemeProvider>
    )
}