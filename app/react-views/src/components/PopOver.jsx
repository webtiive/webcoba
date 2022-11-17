import * as React from 'react';
import { Button, Fade, Grid, Paper, Popper, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function PopOver() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const handleClose = () => {
    setOpen(!open);
  };

  const customizedTypography = styled(Typography)`
    background: linear-gradient(45deg, rgba(215, 191, 127, 1) 0%, rgba(152, 122, 82, 1) 46%, rgba(152, 122, 82, 1) 100%);
  `;

  return (
    <Box sx={{ position: 'fixed', right: 0, bottom: 20 }}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{ p: 2, mr: 3 }} style={{ backgroundColor: 'none', width: '50vw', maxWidth: 300 }}>
              <Grid container direction={'column'}>
                <Grid item onClick={handleClose} sx={{ textAlign: 'right' }}>
                  <CloseIcon fontSize={'medium'} />
                </Grid>
                <Grid item>
                  <Box className="top-popUp">
                    <Typography
                      variant="h5"
                      textAlign={'center'}
                      color={'#fff'}
                      style={{ widht: '500px', background: 'linear-gradient(45deg, rgba(215, 191, 127, 1) 0%, rgba(152, 122, 82, 1) 46%, rgba(152, 122, 82, 1) 100%)', borderRadius: '5px' }}
                      padding={1}
                    >
                      Consult & Order
                    </Typography>
                    <Typography textAlign={'center'} variant="body2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, totam?
                    </Typography>
                  </Box>
                  <Box className="admin" style={{ textAlign: 'center', margin: '10px 0px 10px 0px' }}>
                    <img src style={{ borderRadius: '100%' }}></img>
                    <Typography variant="body2">test</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justifyContent="center">
        <Grid item style={{ background: 'linear-gradient(45deg, rgba(215, 191, 127, 1) 0%, rgba(152, 122, 82, 1) 46%, rgba(152, 122, 82, 1) 100%)', marginRight: '20px' }}>
          <Button onClick={handleClick('top')} color="info">
            <WhatsAppIcon /> ASK Me!
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
