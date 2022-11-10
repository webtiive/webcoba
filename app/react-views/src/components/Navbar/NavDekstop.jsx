import styled from '@emotion/styled';
import { Box, Collapse, Grid, Link, List, ListItem, ListItemText, Menu, MenuItem } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NestedMenuItem } from 'mui-nested-menu';

// file import
import Theme from '../../style/NavbarStyle';
import React, { Children } from 'react';
import navItem from './navBarData.json';
import { useState } from 'react';

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
  const [menuPosition, setMenuPosition] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (I) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpenElem(I);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenElem(null);
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

  const StyledNestedMenu = styled((props) => (
    <NestedMenuItem
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-paper': {
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
                  <Grid item onMouseEnter={handleClick(item)} style={{ cursor: 'pointer' }}>
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
                      /*
                            
                            Menu CHild
                            
                            */
                      childItem.childNested ? (
                        <NestedMenuItem label={childItem.page} parentMenuOpen={open}>
                          {childItem.childNested.map((item, index) => (
                            <MenuItem key={index} sx={{ marginTop: '-8px', marginBottom: '-8px', backgroundColor: '#171717', color: '#f7b716' }}>
                              {item.page}
                            </MenuItem>
                          ))}
                        </NestedMenuItem>
                      ) : (
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
      </ThemeProvider>
    </Grid>
  );
}
