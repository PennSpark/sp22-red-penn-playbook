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
import UnderButtonAbout from './components/UnderButtonAbout';
import PenninTouchAbout from './components/PennInTouchAbout';
import ClassXAbout from './components/ClassXAbout';
import PennWrapped from './components/PennWrapped';
import PennWrappedAbout from './components/PennWrappedAbout';
import HomeAbout from './components/HomeAbout';
import MainLayout from './components/MainLayout';

export function App() {
  return (
    <ErrorBoundary>

      <BrowserRouter>
        <Routes>

          <Route path='/'>
            <Route index element={<Navigate replace to='home' />} />
            <Route path='home' element={<Home />} />
            <Route path='penn-in-touch' element={<Canvas />} />
          </Route>
          <Route path='/under-the-button'>
            <Route path=":qId" element={<UnderButton />} />
            <Route index element={<UnderButton />} />
          </Route>
          <Route path='/penn-wrapped'>
            <Route index element={<PennWrapped />} />
          </Route>
          <Route path='/about'>
            <Route path='under-the-button' element={
              <MainLayout>
                <UnderButtonAbout />
              </MainLayout>
            }/>
            <Route path='penn-in-touch' element={
              <MainLayout>
                <PenninTouchAbout />
              </MainLayout>
            }/>
            <Route path='class-x' element={
              <MainLayout>
                <ClassXAbout />
              </MainLayout>
            }/>
            <Route path='penn-wrapped' element={
              <MainLayout>
                <PennWrappedAbout />
              </MainLayout>
            }/>
            <Route path='penn-playbook' element={
              <MainLayout>
                <HomeAbout />
              </MainLayout>
            }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App; 