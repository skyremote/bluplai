import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './animations.css';
import Home from './pages/Home';
import About from './pages/About';
import David from './pages/David';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/david" element={<David />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
