//libraries
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//components
import Form from './components/Form'
import Home from './components/Home'

export function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<Navigate replace to='Home'/>} />
              <Route path='Home' element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
    );
}

export default App; 