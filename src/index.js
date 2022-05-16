import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider, createTheme} from '@mui/material';

import App from './components/app/App';

import './index.scss';

const theme = createTheme({
  palette: {
      primary: {
        main: "#515b70"
      },
    secondary: {
      main: '#d29634'
    }}

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    
  </React.StrictMode>
);



