import { Box, Collapse, Divider, Drawer, Grid, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import navItem from './navBarData.json';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { styled } from '@mui/material/styles';
import Theme from '../../style/NavbarStyle';

export default function NavMobile() {
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  const StyledListButton = styled((props) => <ListItemButton {...props} />)(({ theme }) => ({
    color: theme.pallete.primary.gold,
    cursor: 'pointer',
    borderRadius: '99px',
    width: 'max-content',
    margin: '5px 0px 5px 5px',
  }));

  // open drawer
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  // open child items
  const [openChild, setOpenChild] = React.useState(null);
  const [openElem, setOpenElem] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const childOpen = (I) => (event) => {
    setOpenChild(event.currentTarget);
    setOpenElem(I);
  };

  return (
    <Grid container style={{ height: '100%' }} alignItems={'center'}>
      <IconButton onClick={handleDrawerOpen} style={{ color: '#f7b716' }}>
        <MenuIcon fontSize={'large'} style={{ cursor: 'pointer' }} />
      </IconButton>
      <Grid item>
        <Drawer
          position="absolute"
          PaperProps={{
            sx: { width: '100%', background: '#171717' },
          }}
          open={openDrawer}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose} style={{ color: '#f7b716' }}>
              <CloseIcon fontSize={'large'} />
            </IconButton>
          </DrawerHeader>
          <List>
            {navItem.map((item, index) =>
              item.childMenu ? (
                <Box>
                  <StyledListButton theme={Theme} key={index}>
                    <Grid container>
                      <Grid item>
                        <Link underline="none" href={item.link} variant="h5" style={{ textAlign: 'center', width: '100%', color: '#f7b716' }}>
                          {item.page}
                        </Link>
                      </Grid>
                      <Grid item onClick={childOpen(item)}>
                        <StyledListButton theme={Theme}>
                          <ExpandMoreIcon />
                        </StyledListButton>
                      </Grid>
                    </Grid>
                  </StyledListButton>
                  <Collapse in={openElem === item} timeout="auto" unmountOnExit style={{ color: '#f7b716' }}>
                    {item.childMenu.map((child, index) =>
                      child.childNested ? (
                        <List component="div" disablePadding key={index}>
                          <ListItemButton sx={{ pl: 4 }}>
                            <Grid container>
                              <Grid item>
                                <Link underline="none" variant="h5" style={{ textAlign: 'center', width: '100%', color: '#f7b716', marginLeft: '1' }}>
                                  {child.page}
                                </Link>
                              </Grid>
                              <Grid item onClick={handleClick}>
                                <StyledListButton theme={Theme}>
                                  <ExpandMoreIcon />
                                </StyledListButton>
                              </Grid>
                            </Grid>
                          </ListItemButton>
                          <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              {child.childNested.map((nChild, index) => (
                                <ListItemButton sx={{ pl: 4 }} key={index}>
                                  <Link underline="none" variant="h5" href={nChild.link} style={{ textAlign: 'center', width: '100%', color: '#f7b716', marginLeft: '1' }}>
                                    {nChild.page}
                                  </Link>
                                </ListItemButton>
                              ))}
                            </List>
                          </Collapse>
                        </List>
                      ) : (
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 4 }}>
                            <Link underline="none" href={child.link} variant="h5" style={{ width: '100%', color: '#f7b716' }}>
                              {child.page}
                            </Link>
                          </ListItemButton>
                        </List>
                      )
                    )}
                  </Collapse>
                  <Divider sx={{ background: '#f7b716' }} />
                </Box>
              ) : (
                <Box>
                  <StyledListButton theme={Theme} key={item} onClick={childOpen}>
                    <Grid container>
                      <Grid item>
                        <Link underline="none" href={item.link} variant="h5" style={{ textAlign: 'center', width: '100%', color: '#f7b716' }}>
                          {item.page}
                        </Link>
                      </Grid>
                    </Grid>
                  </StyledListButton>
                  <Divider sx={{ background: '#f7b716' }} />
                </Box>
              )
            )}
          </List>
        </Drawer>
      </Grid>
    </Grid>
  );
}
