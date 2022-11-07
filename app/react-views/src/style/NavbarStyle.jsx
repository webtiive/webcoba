import { createMuiTheme, createTheme } from '@mui/material';

export const Colors = {
  bodyColor: '#171717',
  navColor: 'rgba(0, 0, 0, 0.4);',
  gold: '#f7b716',
  brown: '#a04d19',
  textColor: '#fff',
};

const Theme = createTheme({
  pallete: {
    primary: {
      gold: Colors.gold,
      brown: Colors.brown,
      navbar: Colors.navColor,
    },
    secondary: {
      main: Colors.textColor,
    },
    type: 'dark',
  },
});

export default Theme;
