import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './animations.css';
import Home from './pages/Home';
import Offerings from './pages/Offerings';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offerings" element={<Offerings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
