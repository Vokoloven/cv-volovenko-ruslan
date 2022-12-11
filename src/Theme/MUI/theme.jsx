import { createTheme } from '@mui/material';
import colors from '../colors';

export const theme = createTheme({
  palette: {
    background: {
      paper: `${colors.appBarDark}`,
    },
    // action: {
    //   hover: 'inherit',
    // },
  },
});
