import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { 500: '#FFF' },
  },
  typography: {
    h2: {
      fontFamily: '"nyt-cheltenham,georgia,times new roman,times,serif"',
    },
    body3: {
      fontSize: '16px',
      fontWeight: 'bold',
      fontFamily: '"nyt-cheltenham,georgia,times new roman,times,serif"',
    },
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"nyt-cheltenham"',
      '"georgia"',
      '"times new roman"',
      '"times,serif"',
    ].join(','),
  },
});
export default theme;
