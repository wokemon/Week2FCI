import { styled } from '@mui/system';
import bg from '../assets/bg.jpg';
import AppNav from './Navbar';
import StickyFooter from './Footer';
import { Grid } from '@mui/material';
import FB from './FBcard';
import Tailor from './TailorCard';
import Laundry from './LaundryCard';
import Cleaning from './CleaningCard';
import Valet from './ValetCard';

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
            <Grid container spacing={3} sx={{ml: '20vh', mt: 'auto'}}>
                <Grid item xs={2}>
                    <FB/>
                </Grid>
                <Grid item xs={2}>
                    <Tailor/>
                </Grid>
                <Grid item xs={2}>
                    <Laundry/>
                </Grid>
                <Grid item xs={2}>
                    <Cleaning/>
                </Grid>
                <Grid item xs={2}>
                    <Valet/>
                </Grid>
            </Grid>
            <StickyFooter/>
        </MyComponent>
    )
}