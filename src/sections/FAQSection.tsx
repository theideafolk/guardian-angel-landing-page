/**
 * Guardian Angel - FAQ & Trust Elements Section
 * 
 * This section provides quick answers to common questions and trust-building elements
 * Content from landing-page-copy.md
 * Added trust badges and additional styling
 * Updated text to all lowercase style
 */

import React, { useState } from 'react';
import { Container, Section } from '../components/ui';
import { ChevronDown, ChevronUp, Award, Shield, Award as Trophy, Leaf } from 'lucide-react';
import { useIntersectionObserver } from '../utils/animations';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-primary-800 lowercase">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-primary-700">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      
      {isOpen && (
        <div className="mt-3 text-primary-700">
          <p className="lowercase">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  
  const animationClass = isIntersecting 
    ? 'opacity-100 translate-y-0 transition-all duration-700' 
    : 'opacity-0 translate-y-8 transition-all duration-700';
  
  const faqs = [
    {
      question: "how does it compare to lithium?",
      answer: "equal performance. better safety. lower environmental impact. comparable cost."
    },
    {
      question: "installation timeline?",
      answer: "from approval to activation: 2-4 weeks."
    },
    {
      question: "system lifespan?",
      answer: "15+ years with minimal maintenance."
    },
    {
      question: "warranty?",
      answer: "10-year comprehensive coverage standard."
    },
    {
      question: "what sizes are available?",
      answer: "Guardian Angel systems are available in 10kWh, 15kWh, and 20kWh configurations, with the ability to stack multiple units for larger capacity needs."
    },
    {
      question: "can it be integrated with existing solar systems?",
      answer: "yes, Guardian Angel is designed to integrate seamlessly with all major solar inverters and energy management systems."
    }
  ];
  
  return (
    <Section 
      id="faq" 
      backgroundClassName="bg-white"
    >
      <div ref={ref as React.RefObject<HTMLDivElement>} className={animationClass}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-800 mb-6 tracking-tight lowercase">
              quick answers
            </h2>
          </div>
          
          <div className="bg-secondary-100 rounded-lg p-8 shadow-md mb-16">
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
          
          {/* Trust Elements with enhanced styling */}
          <div className="text-center mt-12">
            <div className="flex justify-center space-x-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                  <Shield className="text-primary-800 w-8 h-8" />
                </div>
                <span className="text-xs text-primary-700 lowercase">safety certified</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                  <Leaf className="text-primary-800 w-8 h-8" />
                </div>
                <span className="text-xs text-primary-700 lowercase">eco verified</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                  <Trophy className="text-primary-800 w-8 h-8" />
                </div>
                <span className="text-xs text-primary-700 lowercase">award winner</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;