import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  font: {
    family: {
      main: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
    },
  },
  palette: {
    primary: {
      main: '#016735',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

export default theme;
