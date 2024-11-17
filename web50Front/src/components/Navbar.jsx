import React from 'react';
import { Calendar, Trophy, Users, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <header className="index-navbar">
      <div className="index-container">
        {/* H1 redirige a /index */}
        <Link to="/index" className="index-title-link">
          <h1 className="index-title">SportHub</h1>
        </Link>

        <div className="index-button-group">
          <Link
            to="/calendar"
            className={`index-btn-ghost ${location.pathname === '/calendar' ? 'active' : ''}`}
          >
            <Calendar className="index-icon" />
            Calendario
          </Link>

          <Link
            to="/rankings"
            className={`index-btn-ghost ${location.pathname === '/rankings' ? 'active' : ''}`}
          >
            <Trophy className="index-icon" />
            Rankings
          </Link>

          <Link
            to="/tournaments"
            className={`index-btn-ghost ${location.pathname === '/tournaments' ? 'active' : ''}`}
          >
            <Users className="index-icon" />
            Torneos
          </Link>

          <Link
            to="/about-us"
            className={`index-btn-ghost ${location.pathname === '/about-us' ? 'active' : ''}`}
          >
            <Info className="index-icon" />
            About us
          </Link>

          <button className="index-btn-login">Iniciar Sesión</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
