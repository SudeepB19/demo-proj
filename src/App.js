import React from 'react';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import './App.css';

// const theme = createTheme({
//   palette: {
//     type: "dark"
//   }
// });

const theme = createTheme({

  palette: {
    mode: 'dark',
    primary: {
      text: {
        primary: 'pink'
      },
      main: '#ffbf00'
    },

  },

});





function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>

        <TextField id="outlined-basic" label="Outlined" variant="outlined"
          className='textfield' required  />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />

      </ThemeProvider>
    </div>

  )
}


export default App
