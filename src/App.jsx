import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Repositories from './components/repositories';
import SignIn from './components/login';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1a4da1',
    },
    secondary: {
      main: '#1A4DA1',
    },
    background: {
      default: '#0D1117',
      paper: '#161B22',
    },
    text: {
      primary: 'rgba(243,239,239,0.87)',
      secondary: 'rgba(212,210,210,0.54)',
      disabled: 'rgba(131,131,131,0.38)',
      hint: 'rgba(127,127,127,0.38)',
    },
    divider: '#2f3643',
    info: {
      main: '#fafafa',
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#161B22',
        color: '#fff',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
  },
  }
);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <div className="App">
      <SignIn/>
    </div>
    </ThemeProvider>
  );
}

export default App;
