import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1a4da1',
      dark: '#161b22',
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
}
);
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
