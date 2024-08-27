import * as React from 'react'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Badge, createTheme, IconButton, Stack } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import i18next from 'i18next'
import HomeIcon from '@mui/icons-material/Home';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import RoomIcon from '@mui/icons-material/Room';
import FeedIcon from '@mui/icons-material/Feed';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import QuizIcon from '@mui/icons-material/Quiz';

const theme = createTheme({
  palette: {
    color: {
      text: "white"
    },
    mode: 'dark'
  }
});

export default function AppNav() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const { t } = useTranslation();

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem component= {RouterLink} to='/'>
          <ListItemIcon>
            <HomeIcon/>
          </ListItemIcon>
          <ListItemText primary={i18next.t('home')} sx={{color: 'white'}}/>
        </ListItem>
      <Divider/>
        <ListItem component= {RouterLink} to='/room'>
          <ListItemIcon>
            <RoomIcon/>
          </ListItemIcon>
          <ListItemText primary={i18next.t('room')} sx={{color: 'white'}}/>
        </ListItem>
      <Divider/>
        <ListItem component= {RouterLink} to='/service'>
          <ListItemIcon>
            <RoomServiceIcon/>
          </ListItemIcon>
          <ListItemText primary={i18next.t('services')} sx={{color: 'white'}}/>
        </ListItem>
      <Divider/>
        <ListItem component= {RouterLink} to='/service'>
          <ListItemIcon>
            <FeedIcon/>
          </ListItemIcon>
          <ListItemText primary={i18next.t('news')} sx={{color: 'white'}}/>
        </ListItem>
      <Divider/>
        <ListItem component={RouterLink} to='/service'>
          <ListItemIcon>
            <LoyaltyIcon/>
          </ListItemIcon>
          <ListItemText primary={i18next.t('promotion')} sx={{color: 'white'}}/>
        </ListItem>
      <Divider/>
        <ListItem component={RouterLink} to='/faqs'>
          <ListItemIcon>
            <QuizIcon/>
          </ListItemIcon>
          <ListItemText primary={i18next.t('faq')} sx={{color: 'white'}} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, border: 0 }}>
      <AppBar position="static" sx={{background: '#4d4646', boxShadow: 'none', borderBottom: '1px solid white'}}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, color: 'color.text'}} color={'#1976D2'}>
            <Button onClick={toggleDrawer(true)} sx={{ color: 'color.text'}}><MenuIcon/></Button>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
              Dashboard
          </Typography>
          <Stack direction={{xs: 'column', md: 'row'}} spacing={'0.5'} alignContent={'flex-end'}>
            <Button sx={{ color: 'color.text'}} variant='text' component= {RouterLink} to="/login/signup">{t('sign_up')}</Button>
            <Button sx={{ color: 'color.text'}} variant='text' component= {RouterLink} to="/login">{t('sign_in')}</Button>
          </Stack>
          <IconButton>
            <Badge badgeContent={4} color='white'>
              <NotificationsIcon sx={{marginLeft: '5px'}}/>
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}