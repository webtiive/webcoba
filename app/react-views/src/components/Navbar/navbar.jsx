import React from 'react';
import { useTheme, useMediaQuery, ThemeProvider, Container, AppBar, Toolbar, Grid } from '@mui/material';
import NavDekstop from './NavDekstop';
import NavMobile from './NavMobile';

// import file
import logo from '../../img/favicon.ico';
import logoName from '../../img/logo_anucarapt.png';

export default function Navbar() {
  const theme = useTheme();
  const responsive = useMediaQuery(theme.breakpoints.down('md'));
  const smartPhone = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="static"
        maxWidth="xl"
        sx={{
          background: '#171717',
          color: '#fff',
        }}
      >
        <Grid container columnSpacing={{ md: 1, lg: 6 }} justifyContent={'space-evenly'}>
          <Grid item xs={{ md: 6, lg: 4 }}>
            {smartPhone ? <img src={logoName} alt="logo anucara" style={{ width: '200px', marginTop: '10px' }} /> : <img src={logoName} alt="logo anucara" style={{ maxWidth: '300px', marginLeft: '1.5rem' }} />}
          </Grid>
          <Grid item xs={{ md: 6, lg: 6 }}>
            {responsive ? <NavMobile /> : <NavDekstop />}
          </Grid>
        </Grid>
      </AppBar>
    </ThemeProvider>
  );
}
