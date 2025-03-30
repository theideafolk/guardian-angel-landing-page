/**
 * Guardian Angel - Target Audience Benefits Section
 * 
 * This section highlights the specific benefits for each target audience
 * Content from landing-page-copy.md
 * Added images for each target audience segment
 * Updated text to all lowercase style
 * Updated Tech Innovators card to use local image
 */

import React from 'react';
import { Container, Section, GlassCard } from '../components/ui';
import { Home, Building, Leaf, Lightbulb, Zap } from 'lucide-react';
import { useIntersectionObserver, useSequentialAnimation } from '../utils/animations';

const AudienceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  delay?: number;
}> = ({ title, description, icon, imageSrc, imageAlt, delay = 0 }) => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  const animationClass = isIntersecting 
    ? `opacity-100 translate-y-0 transition-all duration-700 delay-${delay}`
    : 'opacity-0 translate-y-8 transition-all duration-700';
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className={`bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden ${animationClass}`}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 -mt-12 border-4 border-white">
          <div className="text-primary-800">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-primary-800 mb-3 lowercase">{title}</h3>
        <p className="text-primary-700 lowercase">{description}</p>
      </div>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver();
  const animations = useSequentialAnimation(5, 100);
  
  return (
    <Section 
      id="benefits" 
      backgroundClassName="bg-gradient-to-b from-secondary-100 to-white relative"
    >
      <div 
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={isSectionVisible ? 'opacity-100 transition-opacity duration-700' : 'opacity-0 transition-opacity duration-700'}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-800 mb-6 tracking-tight lowercase">
            who needs a Guardian Angel?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AudienceCard
            title="for homeowners"
            description="premium protection for your solar investment. seamless integration. elegant design. peace of mind during outages."
            icon={<Home className="w-8 h-8" />}
            imageSrc="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80"
            imageAlt="Premium home with solar and energy storage"
            delay={animations[0].delay}
          />
          
          <AudienceCard
            title="for commercial properties"
            description="uninterrupted operations. lower downtime costs. reduced energy expenses. enhanced property value."
            icon={<Building className="w-8 h-8" />}
            imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            imageAlt="Modern commercial building with sustainable energy"
            delay={animations[1].delay}
          />
          
          <AudienceCard
            title="for sustainability champions"
            description="reduced carbon footprint. recyclable components. ethical supply chain. future-proof technology."
            icon={<Leaf className="w-8 h-8" />}
            imageSrc="/sustainability.jpg"
            imageAlt="Eco-friendly energy solutions"
            delay={animations[2].delay}
          />
          
          <AudienceCard
            title="for tech innovators"
            description="cutting-edge sodium-ion chemistry. smart home integration. performance analytics. remote control capabilities."
            icon={<Lightbulb className="w-8 h-8" />}
            imageSrc="/tech-innovation.jpg"
            imageAlt="Advanced energy technology interface"
            delay={animations[3].delay}
          />
          
          <AudienceCard
            title="for energy security"
            description="instant backup activation. extended power duration. critical systems protection. weather-resistant design."
            icon={<Zap className="w-8 h-8" />}
            imageSrc="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
            imageAlt="Protected, reliable energy for critical systems"
            delay={animations[4].delay}
          />
        </div>
      </div>
    </Section>
  );
};

export default BenefitsSection;