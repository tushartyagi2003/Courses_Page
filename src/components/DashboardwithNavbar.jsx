import React from 'react'
import { Link } from 'react-router-dom';
import './DashboardWithNavbar.css';

const DashboardwithNavbar = () => {
  return (
    <>
     <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-item">
          <span className="nav-text">Courses</span>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/dashboard_bar" className="nav-item">
          <span className="nav-text">Dashboard</span>
        </Link>
      </div>
    </nav>
  
    </>
  )
}

export default DashboardwithNavbar;