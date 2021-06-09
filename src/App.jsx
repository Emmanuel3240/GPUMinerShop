import React from 'react';
import Button from '@material-ui/core/Button'

import Typography from "@material-ui/core/Typography";

import {ThemeProvider} from '@material-ui/styles'
import theme from './temaConfig' 

import NavBar from './components/NavBar'

function App() {
  return (
  <NavBar/>
  );
}

export default App;
