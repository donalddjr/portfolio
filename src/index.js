import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rationale from "./components/Rationale";
import RationaleTailwind from "./components/RationaleTailwind";
import RationaleComGal from "./components/RationaleComGal";
import RationaleGridLayout from "./components/RationaleGridLayout";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/rationale' element={<Rationale />} />
          <Route path='/rationaleTailwind' element={<RationaleTailwind />} />
          <Route path='/rationaleComGal' element={<RationaleComGal />} />
          <Route path='/rationaleGridLayout' element={<RationaleGridLayout />} />
      </Routes>
      
      </BrowserRouter>
  </React.StrictMode>,
    document.getElementById('root')
);