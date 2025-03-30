/**
 * Guardian Angel - Premium Experience Promise Section
 * 
 * This section highlights the premium customer journey and service
 * Content from landing-page-copy.md
 * Added image for premium customer experience
 * Updated text to all lowercase style
 */

import React from 'react';
import { Container, Section, GlassCard } from '../components/ui';
import { ClipboardList, Ruler, Wrench, Power, Headphones } from 'lucide-react';
import { useIntersectionObserver, useSequentialAnimation } from '../utils/animations';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description }) => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  const animationClass = isIntersecting 
    ? 'opacity-100 translate-y-0 transition-all duration-700'
    : 'opacity-0 translate-y-8 transition-all duration-700';
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>} 
      className={`flex flex-col items-center text-center ${animationClass}`}
    >
      <div className="bg-accent-500 w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary-800 lowercase mb-2">{title}</h3>
      <p className="text-primary-700 lowercase text-sm">
        {description}
      </p>
    </div>
  );
};

const ProcessSteps: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } transition-all duration-700`}
    >
      <Step
        icon={<ClipboardList className="w-6 h-6" />}
        title="assessment"
        description="we analyze your power needs with precision and care, ensuring a solution that fits your exact requirements."
      />
      <Step
        icon={<Ruler className="w-6 h-6" />}
        title="design"
        description="our engineers create a custom system configuration tailored to your property and energy usage patterns."
      />
      <Step
        icon={<Wrench className="w-6 h-6" />}
        title="installation"
        description="our expert team handles everything with minimal disruption to your property and routine."
      />
      <Step
        icon={<Power className="w-6 h-6" />}
        title="activation"
        description="experience seamless integration with existing systems and comprehensive system testing."
      />
      <Step
        icon={<Headphones className="w-6 h-6" />}
        title="support"
        description="enjoy 24/7 monitoring and premium service throughout the lifetime of your system."
      />
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  const animationClass = isIntersecting 
    ? 'opacity-100 translate-y-0 transition-all duration-700' 
    : 'opacity-0 translate-y-8 transition-all duration-700';
  
  return (
    <Section 
      id="experience" 
      backgroundClassName="bg-white"
    >
      <div ref={ref as React.RefObject<HTMLDivElement>} className={animationClass}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-800 mb-6 tracking-tight lowercase">
            white glove. green impact.
          </h2>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto lowercase">
            your journey to premium, sustainable energy storage
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg shadow-xl overflow-hidden">
            <img 
              src="/implementation-process.png"
              alt="Guardian Angel Implementation Process"
              className="w-full h-auto"
            />
          </div>
          
          <ProcessSteps />
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;