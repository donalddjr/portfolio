import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rationale from '../src/components/Rationale';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      {/* <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/rationale' element={<Rationale />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />

      </Routes> */}


      <App />

    </BrowserRouter>,
    document.getElementById('root')
);