import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);