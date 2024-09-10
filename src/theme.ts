// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1D8C6E', 
    },
    secondary: {
      main: '#E2E2E2', 
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;
