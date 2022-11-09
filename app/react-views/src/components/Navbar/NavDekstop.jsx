import styled from '@emotion/styled';
import { Box, Grid, Link, Menu, MenuItem } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NestedMenuItem } from 'mui-nested-menu';

// file import
import Theme from '../../style/NavbarStyle';
import React, { Children } from 'react';
import navItem from './navBarData.json';

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
  // first child menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openElem, setOpenElem] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (item) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpenElem(item);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenElem(null);
  };

  // second child menu
  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const [openMenu, setOpenMenu] = React.useState(null);
  const openChild = Boolean(anchorMenu);

  const handleClickChild = (childItem) => (event) => {
    setAnchorMenu(event.currentTarget);
    setOpenMenu(childItem);
  };

  const handleCloseChild = () => {
    anchorMenu(null);
    openMenu(null);
  };

  // styling

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
        {navItem.map((item, index) => (
          <Grid item key={index}>
            <Grid container>
              <Grid item>
                <CustomizedLink href="#" underline="none">
                  {item.page}
                </CustomizedLink>
              </Grid>
              {item.childMenu ? (
                <Box>
                  <Grid item id={item.idButton} aria-controls={open ? item.idMenu : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick(item)} style={{ cursor: 'pointer' }}>
                    <ExpandMoreIcon style={{ marginTop: '5px' }} sx={{ color: '#f7b716' }} />
                  </Grid>
                  <StyledMenu
                    id={item.idMenu}
                    anchorEl={anchorEl}
                    open={openElem === item}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': item.idButton,
                    }}
                  >
                    {/* menu child */}

                    {item.childMenu.map((childItem, index) =>
                      childItem.childMenu ? (
                        <Box>
                          <Grid
                            item
                            id={childItem.idButton}
                            aria-controls={openChild ? childItem.idMenu : undefined}
                            aria-haspopup="true"
                            aria-expanded={openChild ? 'true' : undefined}
                            onClick={handleClickChild(childItem)}
                            style={{ cursor: 'pointer' }}
                          >
                            {childItem.page} <ExpandMoreIcon style={{ marginTop: '5px' }} sx={{ color: '#f7b716' }} />
                          </Grid>

                          {/* menu */}
                          <StyledMenu
                            id={childItem.idMenu}
                            anchorMenu={anchorMenu}
                            openChild={openMenu === childItem}
                            onClose={handleCloseChild}
                            MenuListProps={{
                              'aria-labelledby': childItem.idButton,
                            }}
                          >
                            <MenuItem>test</MenuItem>
                          </StyledMenu>
                        </Box>
                      ) : (
                        /*
                            
                            Menu CHild
                            
                            */
                        <MenuItem key={index}>{childItem.page}</MenuItem>
                      )
                    )}
                  </StyledMenu>
                </Box>
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
        ))}

        {/* <Grid item>
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
        </Grid> */}
      </ThemeProvider>
    </Grid>
  );
}
