import { styled } from '@mui/system';
import bg from '../assets/bg.jpg';
import AppNav from './Navbar';
import StickyFooter from './Footer';
import { Grid } from '@mui/material';
import Rook from './RookCard';
import Pawn from './PawnCard';
import Queen from './QueenCard';
import King from './KingCard';

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
            <Grid container spacing={3} sx={{ml: '40vh', mt: 'auto'}}>
                <Grid item xs={2}>
                    <Pawn/>
                </Grid>
                <Grid item xs={2}>
                    <Rook/>
                </Grid>
                <Grid item xs={2}>
                    <Queen/>
                </Grid>
                <Grid item xs={2}>
                    <King/>
                </Grid>
            </Grid>
            <StickyFooter/>
        </MyComponent>
    )
}