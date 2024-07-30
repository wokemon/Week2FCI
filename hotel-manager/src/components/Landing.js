import { styled } from '@mui/system';
import bg from '../assets/bg.jpg';
import AppNav from './Navbar';
import StickyFooter from './Footer';
import useTranslation from 'react-i18next';

const MyComponent = styled('div')({
  minHeight: '100vh',
  backgroundImage: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  overflow: 'hidden',
});

export default function Landing() {
    return (
        <MyComponent>
            <AppNav></AppNav>
            <StickyFooter></StickyFooter>
        </MyComponent>
    )
}