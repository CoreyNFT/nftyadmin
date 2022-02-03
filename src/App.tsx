import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ThemeProvider from './theme';
import Login from "./pages/auth/Login"
// editor
import 'react-quill/dist/quill.snow.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';

// components

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ThemeProvider>
          <HelmetProvider>
            <Router>
              <Routes>
                <Route path="/login" element={<Login />} />
              </Routes>
            </Router>
          </HelmetProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
