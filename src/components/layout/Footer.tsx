/**
 * Guardian Angel - Footer Component
 * 
 * Footer component for the landing page
 * Updated to match new color scheme from design guidelines
 * Updated text to all lowercase style
 */

import React from 'react';
import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-800 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8" />
              <span className="ml-2 font-bold text-xl">Guardian Angel</span>
            </div>
            <p className="text-secondary-200 mb-4 lowercase">
              premium eco-friendly energy storage solutions for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary-200 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary-200 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary-200 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary-200 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 lowercase">quick links</h4>
            <ul className="space-y-2">
              <li><a href="#solution" className="text-secondary-200 hover:text-white transition-colors lowercase">technology</a></li>
              <li><a href="#benefits" className="text-secondary-200 hover:text-white transition-colors lowercase">benefits</a></li>
              <li><a href="#value-proposition" className="text-secondary-200 hover:text-white transition-colors lowercase">value</a></li>
              <li><a href="#social-proof" className="text-secondary-200 hover:text-white transition-colors lowercase">validation</a></li>
              <li><a href="#faq" className="text-secondary-200 hover:text-white transition-colors lowercase">faq</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-xl font-bold mb-4 lowercase">legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-200 hover:text-white transition-colors lowercase">privacy policy</a></li>
              <li><a href="#" className="text-secondary-200 hover:text-white transition-colors lowercase">terms of service</a></li>
              <li><a href="#" className="text-secondary-200 hover:text-white transition-colors lowercase">warranty information</a></li>
              <li><a href="#" className="text-secondary-200 hover:text-white transition-colors lowercase">shipping policy</a></li>
              <li><a href="#" className="text-secondary-200 hover:text-white transition-colors lowercase">returns & refunds</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4 lowercase">contact us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1" />
                <span className="lowercase">1234 Eco Boulevard, Sustainable City, SC 98765</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>info@guardianangel.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-700 text-center text-secondary-200">
          <p className="lowercase">&copy; {currentYear} Guardian Angel Energy Systems. all rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;