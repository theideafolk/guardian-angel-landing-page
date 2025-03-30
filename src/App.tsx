/**
 * Guardian Angel - Main App Component
 * 
 * Premium landing page for Guardian Angel, a high-end sodium-ion energy storage system.
 * This component serves as the main entry point for the application.
 * Updated to include all the sections according to the narrative flow.
 */

import React, { useEffect } from 'react';
import { Header, Footer } from './components/layout';
import { 
  HeroSection,
  ProblemSection,
  SolutionSection,
  BenefitsSection,
  ValuePropositionSection,
  SocialProofSection,
  ExperienceSection,
  CTASection,
  FAQSection
} from './sections';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <GlobalStyles />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <ValuePropositionSection />
        <SocialProofSection />
        <ExperienceSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;