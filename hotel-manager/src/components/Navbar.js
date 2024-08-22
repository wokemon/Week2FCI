import * as React from 'react'; 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, Stack } from '@mui/material';
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

const theme = createTheme({
  palette: {
    color: {
      text: "black"
    }
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
        <ListItem disablePadding component= {RouterLink} to='/'>
          <ListItemIcon>
            <HomeIcon/>
          </ListItemIcon>
          <ListItemText primary={i18next.t('home')}/>
        </ListItem>
      </List>
      <List>
        <ListItem disablePadding component= {RouterLink} to='/service'>
          <ListItemIcon>
            <RoomServiceIcon/>
          </ListItemIcon>
          <ListItemText primary={i18next.t('services')}/>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1, border: 0 }}>
      <AppBar position="static" sx={{background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1}} color={'#1976D2'}>
            <Button onClick={toggleDrawer(true)} sx={{ color: 'color.text'}}>Menu</Button>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
          </Typography>
          <Stack direction={{xs: 'column', md: 'row'}} spacing={'0.5'} alignContent={'flex-end'}>
            <Button sx={{ color: 'color.text'}} variant='text' component= {RouterLink} to="/login/signup">{t('sign_up')}</Button>
            <Button sx={{ color: 'color.text'}} variant='text' component= {RouterLink} to="/login">{t('sign_in')}</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}