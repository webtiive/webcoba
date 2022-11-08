import styled from '@emotion/styled';
import { Grid, Link, Menu, MenuItem, Typography } from '@mui/material';
import { alpha, ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// file import
import Theme from '../../style/NavbarStyle';
import React from 'react';

const CustomizedLink = styled(Link)(
  ({ theme }) => `
  color:inherit;
  font-size:1.2rem;
  padding:5px 10px 5px 10px;
  color:${theme.pallete.primary.gold};


  :hover{
    background:${theme.pallete.secondary.main};
    border-radius:99px;
  }
`
);

export default function NavDekstop() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    console.log(setAnchorEl(event.currentTarget));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      backgroundColor: '#171717',
      color: theme.pallete.primary.gold,
    },
  }));

  return (
    <Grid container columnSpacing={3} style={{ marginTop: '1.3rem', fontSize: '1.2rem' }}>
      <ThemeProvider theme={Theme}>
        <Grid item>
          <CustomizedLink href="#" underline="none">
            Home
          </CustomizedLink>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <CustomizedLink href="#" underline="none">
                About Us
              </CustomizedLink>
            </Grid>
            <Grid item id="aboutUs-button" aria-controls={open ? 'about-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} style={{ cursor: 'pointer' }}>
              <ExpandMoreIcon style={{ marginTop: '5px' }} sx={{ color: '#f7b716' }} />
            </Grid>
            <StyledMenu
              id="about-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'aboutUs-button',
              }}
            >
              <MenuItem onClick={handleClose}>Team Profile</MenuItem>
              <MenuItem onClick={handleClose}>Activity</MenuItem>
              <MenuItem onClick={handleClose}>Tetimony</MenuItem>
            </StyledMenu>
          </Grid>
        </Grid>
        {/* our service */}
        <Grid item>
          <Grid container>
            <Grid item>
              <CustomizedLink href="#" underline="none">
                Our Service
              </CustomizedLink>
            </Grid>
            <Grid item id="service" aria-controls={open ? 'service-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} style={{ cursor: 'pointer' }}>
              <ExpandMoreIcon style={{ marginTop: '5px' }} sx={{ color: '#f7b716' }} />
            </Grid>
            <StyledMenu
              id="service-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'service',
              }}
            >
              <MenuItem onClick={handleClose}>Project Managament Plan</MenuItem>
              <MenuItem onClick={handleClose}>Building Construction</MenuItem>
            </StyledMenu>
          </Grid>
        </Grid>
        <Grid item>
          <CustomizedLink href="#" underline="none">
            Contact
          </CustomizedLink>
        </Grid>
      </ThemeProvider>
    </Grid>
  );
}
