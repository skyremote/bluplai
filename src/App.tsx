import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './animations.css';
import Home from './pages/Home';
import Offerings from './pages/Offerings';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
