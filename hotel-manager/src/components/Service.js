import { styled } from '@mui/system';
import bg from '../assets/bg.jpg';
import AppNav from './Navbar';
import StickyFooter from './Footer';
import { Grid } from '@mui/material';

const MyComponent = styled('div')({
    minHeight: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    overflow: 'hidden',
});

export default function Services() {
    return (
        <MyComponent>
            <AppNav/>
            <Grid container spacing={4} sx={{mt: 'auto'}} columnSpacing={2}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={3}>

                </Grid>
            </Grid>
            <StickyFooter/>
        </MyComponent>
    )
}