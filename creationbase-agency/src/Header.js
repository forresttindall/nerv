import React, { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluesky, faGithub, faInstagram, faThreads } from '@fortawesome/free-brands-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useScrollToSection } from './hooks/useScrollToSection';

const logo = process.env.PUBLIC_URL + '/Images/dot-triangle.png';

const gradientStyle = {
  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 20%, #dc2743 40%, #cc2366 60%, #bc1888 80%, #7b3fff 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block'
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialDropdownOpen, setIsSocialDropdownOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const scrollToSection = useScrollToSection();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSocialDropdown = () => {
    setIsSocialDropdownOpen(!isSocialDropdownOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);  // Close menu when link is clicked
    setIsSocialDropdownOpen(false);  // Also close social dropdown
    scrollToSection(sectionId, '/');
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);  // Close menu when logo is clicked
    setIsSpinning(true);
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => setIsSpinning(false), 1000);
  };

  return (
    <header className="header">
      <nav className="floating-nav">
        <Link to="/" className="nav-brand" onClick={handleLogoClick}>
          <img 
            className={`logo ${isSpinning ? 'spin' : ''}`} 
            src={logo} 
            alt="Logo" 
          />
        </Link>
        
        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
        >
          ☰
        </button>

        <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <Link 
            to="#" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('development');
            }}
          >
            Development
          </Link>
          <Link 
            to="#" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('design');
            }}
          >
            Design
          </Link>
          <Link 
            to="#" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
          >
            About
          </Link>
          <Link 
            to="/blog" 
            onClick={() => {
              setIsMenuOpen(false);
              setIsSocialDropdownOpen(false);
            }}
          >
            Blog
          </Link>
          <Link 
            to="/contact" 
            onClick={() => {
              setIsMenuOpen(false);
              setIsSocialDropdownOpen(false);
            }}
          >
            Contact
          </Link>
          
          <div className="social-dropdown">
            <button 
              className="dropdown-trigger"
              onClick={toggleSocialDropdown}
              aria-expanded={isSocialDropdownOpen}
            >
              <FontAwesomeIcon icon={faShareNodes} size="lg" style={gradientStyle} />
            </button>
            {isSocialDropdownOpen && (
              <div className="dropdown-menu">
                <a href="https://www.threads.net/@creationbase.io" className="dropdown-item" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faThreads} style={gradientStyle} /> Threads
                </a>
                <a href="https://www.instagram.com/creationbase.io/" className="dropdown-item" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} style={gradientStyle} /> Instagram
                </a>
                <a href="https://bsky.app/profile/creationbase.io" className="dropdown-item" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faBluesky} style={gradientStyle} /> Bluesky
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="20%" stopColor="#e6683c" />
            <stop offset="40%" stopColor="#dc2743" />
            <stop offset="60%" stopColor="#cc2366" />
            <stop offset="80%" stopColor="#bc1888" />
            <stop offset="100%" stopColor="#7b3fff" />
          </linearGradient>
        </defs>
      </svg>
    </header>
  );
};

export default Header;
