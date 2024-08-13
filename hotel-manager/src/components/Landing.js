import { styled } from '@mui/system';
import bg from '../assets/bg.jpg';
import AppNav from './Navbar';
import StickyFooter from './Footer';
import Owner from './ImageCard';
import Concierge from './ImageCard2';
import { Box, Grid } from '@mui/material';

const MyComponent = styled('div')({
  minHeight: '100vh',
  backgroundImage: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  overflow: 'hidden',
});

const WelcomeText = styled('div')({
    textAlign: 'right',
    marginRight: '30px',
    textSizeAdjust: 'auto',
});

export default function Landing() {
    return (
        <MyComponent>
            <AppNav></AppNav>
            <Grid container spacing={4} sx={{ml: '105vh', mt: 'auto'}} columnSpacing={2}>
                <Grid item xs={3}>
                    <Owner/>
                </Grid>
                <Grid item xs={3}>
                    <Concierge/>
                </Grid>
            </Grid>
            <StickyFooter></StickyFooter>
        </MyComponent>
    )
}