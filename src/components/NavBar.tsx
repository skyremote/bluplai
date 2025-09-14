import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-gray-900/70 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/bluplai-logo-white.png" alt="BluplAI" className="h-6 w-auto" />
          <span className="sr-only">BluplAI Home</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <NavLink
            to="/offerings"
            className={({ isActive }) =>
              `transition-colors hover:text-cyan-300 ${isActive ? 'text-cyan-300' : 'text-gray-300'}`
            }
          >
            Offerings
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors hover:text-cyan-300 ${isActive ? 'text-cyan-300' : 'text-gray-300'}`
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;

