import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        '.mobile-menu',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Services', href: '/services' },
    { title: 'Case Studies', href: '/case-studies' },
    { title: 'Jobs', href: '/jobs' },
    { title: 'Contact', href: '/contact' }
  ];

  const handleLogoClick = () => {
    // If we're on the home page, scroll to top
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
    // If we're on another page, Link will handle navigation to home
  };

  return (
    <nav className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container flex items-center justify-between h-20">
        <Link
          to="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300"
          onClick={handleLogoClick}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
            <span className="font-heading text-xl font-bold">I</span>
          </div>
          <span className="font-heading text-2xl font-bold">Innoventra</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className={`text-white/80 hover:text-white transition-colors duration-300 ${
                location.pathname === link.href ? 'text-white' : ''
              }`}
            >
              {link.title}
            </Link>
          ))}
          <Link to="/consultation" className="btn btn-primary">
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="mobile-menu md:hidden bg-background/95 backdrop-blur-md">
          <div className="container py-5 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className={`text-white/80 hover:text-white py-2 transition-colors duration-300 ${
                  location.pathname === link.href ? 'text-white' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <Link 
              to="/consultation" 
              className="btn btn-primary w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}

      <div className="scroll-progress h-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 w-full transform scale-x-0 origin-left"></div>
    </nav>
  );
};

export default Navbar;