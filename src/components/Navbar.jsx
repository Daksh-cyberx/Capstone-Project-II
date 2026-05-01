import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo-img.png"
import "../Styles/Navbar.css"
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change / outside click
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>

      {/* ── Logo ── */}
      <NavLink to="/" className="logo" onClick={closeMenu}>
        <img src={logo} alt="MediCare Logo" className='logo-img' />
        <div className='logo-text'>
          <span className="m">M</span>
          <span className="edi">edi</span>
          <span className="c">C</span>
          <span className="are">are</span>
        </div>
      </NavLink>

      {/* ── Nav Links ── */}
      <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}>
        {[
          { to: "/", label: "Home" },
          { to: "/About", label: "About" },
          { to: "/Facilities", label: "Facilities" },
          { to: "/Departments", label: "Departments" },
          { to: "/Doctors", label: "Doctors" },
          { to: "/Appointment", label: "Appointment" },
          { to: "/Contact", label: "Contact" },
        ].map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link--active' : ''}`
              }
              onClick={closeMenu}
            >
              {label}
              <span className="nav-link__underline" />
            </NavLink>
          </li>
        ))}
      </ul>

      {/* ── Right Side ── */}
      <div className="nav-right">
        <FaUserCircle className="profile-icon" />

        {/* Hamburger toggle (mobile only) */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile overlay backdrop */}
      {menuOpen && (
        <div className="nav-backdrop" onClick={closeMenu} />
      )}

    </nav>
  );
};

export default Navbar;