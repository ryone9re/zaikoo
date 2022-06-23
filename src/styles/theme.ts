import { createTheme } from '@mui/material/styles';

// TODO Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#1565c0',
    },
    secondary: {
      main: '#f06292',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ffeb3b',
    },
    info: {
      main: '#1e88e5',
    },
  },
});

export default theme;
