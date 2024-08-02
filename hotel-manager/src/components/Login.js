import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { Link as RouterLink} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Lock from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppNav from './Navbar';
import StickyFooter from './Footer';
import { useTranslation } from 'react-i18next';

const defaultTheme = createTheme();

export default function SignIn() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      alert("User login succesfully")
      setEmail('')
      setPassword('')
    } else {
      alert("User failed to login")
    }

  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppNav></AppNav>
      <Container maxWidth='sm' component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'grey' }}>
            <Lock />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t('sign_in')}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={t('email')}
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={t("password")}
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t('remember_me')}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {t('sign_in')}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component={RouterLink} to="reset" variant="body2">
                  {t('forgot_password')}
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="signup" variant="body2">
                  {t('no_account')}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box sx={{
          width: '100%',
          maxHeight: '10px',
        }}>
        </Box>
        <StickyFooter/>
      </Container>
    </ThemeProvider>
  );
}