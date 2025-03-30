/**
 * Guardian Angel - Call to Action Section
 * 
 * This section contains the main call-to-action for lead generation
 * Content from landing-page-copy.md
 * Added background image for CTA section
 * Updated text to all lowercase style
 */

import React, { useState } from 'react';
import { Container, Section, Button, GlassCard } from '../components/ui';
import { useIntersectionObserver } from '../utils/animations';

const CTASection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  
  const [ref, isIntersecting] = useIntersectionObserver();
  
  const animationClass = isIntersecting 
    ? 'opacity-100 translate-y-0 transition-all duration-700' 
    : 'opacity-0 translate-y-8 transition-all duration-700';
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! A Guardian Angel representative will contact you shortly.');
  };
  
  return (
    <Section 
      id="cta" 
      backgroundClassName="bg-gradient-to-b from-secondary-200 to-secondary-300 relative"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute right-10 top-20 w-48 h-48 bg-primary-100 rounded-full opacity-20"></div>
        <div className="absolute left-10 bottom-20 w-32 h-32 bg-accent-100 rounded-full opacity-20"></div>
      </div>
      
      <div ref={ref as React.RefObject<HTMLDivElement>} className={animationClass}>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left side - Content with background image */}
              <div className="relative">
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                    alt="Guardian Angel protecting your home"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-800 bg-opacity-80"></div>
                </div>
                <div className="relative p-8 md:p-12 text-white">
                  <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight lowercase">
                    secure your power today
                  </h2>
                  <p className="text-lg mb-8 lowercase">
                    limited 2025 installations available. priority placement for early adopters.
                  </p>
                  
                  <div className="mb-8">
                    <p className="font-semibold text-xl mb-4 lowercase">why act now?</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent-400 mr-2">•</span>
                        <span className="lowercase">early adopter pricing incentives</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-400 mr-2">•</span>
                        <span className="lowercase">priority installation scheduling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-400 mr-2">•</span>
                        <span className="lowercase">extended premium support package</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-secondary-200 font-medium italic lowercase">
                    don't wait for the next outage to prove your vulnerability.
                  </p>
                </div>
              </div>
              
              {/* Right side - Form */}
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-semibold text-primary-800 mb-6 lowercase">
                  request information
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1 lowercase">
                      full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1 lowercase">
                      email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-1 lowercase">
                      phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                    />
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      variant="primary" 
                      size="large"
                      type="submit"
                      fullWidth
                      className="tracking-wider lowercase"
                    >
                      reserve now
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;