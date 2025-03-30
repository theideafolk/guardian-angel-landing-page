/**
 * Guardian Angel - Header Component
 * 
 * Main navigation header for the landing page
 * Updated to match new color scheme from design guidelines
 * Updated text to all lowercase style
 * Updated to use Poppins font
 * Updated text color to white when header is transparent
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Shield className={`w-8 h-8 ${isScrolled ? 'text-primary-800' : 'text-white'}`} />
            <span className={`ml-2 font-bold text-xl ${isScrolled ? 'text-primary-800' : 'text-white'} font-poppins`}>Guardian Angel</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#problem" className={`${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-200'} font-medium lowercase`}>problem</a>
            <a href="#solution" className={`${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-200'} font-medium lowercase`}>solution</a>
            <a href="#benefits" className={`${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-200'} font-medium lowercase`}>benefits</a>
            <a href="#value-proposition" className={`${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-200'} font-medium lowercase`}>value</a>
            <a href="#experience" className={`${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-200'} font-medium lowercase`}>experience</a>
            <a href="#faq" className={`${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-200'} font-medium lowercase`}>faq</a>
            <Button variant="primary" size="medium" onClick={() => document.getElementById('cta')?.scrollIntoView()} className="lowercase">get in touch</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-primary-800' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#problem" 
                className={`${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-200'} font-medium lowercase`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                problem
              </a>
              <a 
                href="#solution" 
                className={`${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-200'} font-medium lowercase`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                solution
              </a>
              <a 
                href="#benefits" 
                className={`${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-200'} font-medium lowercase`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                benefits
              </a>
              <a 
                href="#value-proposition" 
                className={`${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-200'} font-medium lowercase`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                value
              </a>
              <a 
                href="#experience" 
                className={`${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-200'} font-medium lowercase`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                experience
              </a>
              <a 
                href="#faq" 
                className={`${isScrolled ? 'text-primary-800 hover:text-primary-600' : 'text-white hover:text-secondary-200'} font-medium lowercase`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                faq
              </a>
              <Button 
                variant="primary" 
                size="medium" 
                fullWidth
                className="lowercase"
                onClick={() => {
                  document.getElementById('cta')?.scrollIntoView();
                  setIsMobileMenuOpen(false);
                }}
              >
                get in touch
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;