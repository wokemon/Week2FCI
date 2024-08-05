import { styled } from '@mui/system';
import bg from '../assets/bg.jpg';
import AppNav from './Navbar';
import StickyFooter from './Footer';

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
            <WelcomeText>Welcome to the site</WelcomeText>
            <StickyFooter></StickyFooter>
        </MyComponent>
    )
}