import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { grey, teal } from '@material-ui/core/colors'
import { ProductProvider } from './context'
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: grey[900]
      },
      secondary: {
        main: teal.A200,
        light: teal[200],
        dark: teal[400]
      },
    }
  });

ReactDOM.render(
    <ProductProvider>
      <Router>
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
      </Router>
    </ProductProvider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
