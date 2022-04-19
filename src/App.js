//libraries
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//components
import ErrorBoundary from "./components/ErrorHandling/ErrorBoundary";

//pages
import Form from './components/Form';
import Canvas from './components/Canvas';
import Home from './components/Home';
import UnderButton from './components/UnderButton';
import Navbar from "./components/Navbar.js";


export function App() {
  return (
    <ErrorBoundary>

      <BrowserRouter>
        <Routes>

          <Route path='/'>
            <Route index element={<Navigate replace to='home' />} />
            <Route path='home' element={<Home />} />
            <Route path='canvas' element={<Canvas />} />
          </Route>
          <Route path='/under-the-button'>
            <Route path=":qId" element={<UnderButton />} />
            <Route index element={<UnderButton />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App; 