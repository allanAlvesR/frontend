import React from 'react';
import { ThemeProvider, createTheme} from '@mui/material/styles';
import {Toolbar, CssBaseline} from '@mui/material';
import Header from "./pages/AppBar";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import User from './pages/User';
import Profile from './pages/Profile';


const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Source Code Pro, monospace',
      fontSize: '9',
    },
  },
  palette: {
    background: {
      default: '#3b5287',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <Header/>
      <Toolbar/>
          <Routes>
              <Route exact path="/" element={<User/>}/>
              <Route exact path="/create" element={<Profile/>}/>
              <Route exact path="/update/:id" element={<Profile/>}/>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
