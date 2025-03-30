/**
 * Guardian Angel - Hero Section
 * 
 * Hero section component for the landing page
 * Updated to use a local video for background
 * Added 3D text effect and illuminating animation to headline
 * Updated to use Poppins font and lowercase text style throughout
 * Added better gradient overlay for text readability while preserving video visibility
 * Increased section height to fit first fold better
 * Increased wave divider size
 * Adjusted spacing between headline and subheadline
 * Repositioned CTA button and icons further down the page
 * Removed product image and advanced protection box
 * Added illuminating effect to CTA button to make it more prominent
 */

import React, { useEffect, useRef } from 'react';
import { Button, Container } from '../components/ui';
import { Home, Building, Leaf, Lightbulb, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../utils/animations';

const HeroSection: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [containerRef, isInView] = useIntersectionObserver();

  // Add illuminating effect to headline text on load
  useEffect(() => {
    if (headlineRef.current) {
      headlineRef.current.classList.add('text-illuminate');
    }

    // Optimize video loading and playback
    if (videoRef.current) {
      videoRef.current.load();
      
      // Play video when in view
      if (isInView) {
        videoRef.current.play().catch(() => {
          // Fallback to poster image if autoplay fails
          console.log('Autoplay prevented - using fallback image');
        });
      }
    }
  }, [isInView]);

  return (
    <section className="relative pt-36 pb-48 md:pt-48 md:pb-64 lg:pb-80 overflow-hidden">
      {/* Background video */}
      <div ref={containerRef as React.RefObject<HTMLDivElement>} className="absolute inset-0 z-0">
        {/* Enhanced gradient overlay for better text visibility while preserving video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 z-10"></div>
          <video 
            ref={videoRef}
            autoPlay 
            loop 
            muted 
            playsInline
            preload="metadata"
            poster="/video-poster.jpg"
            webkit-playsinline="true"
            x5-playsinline="true"
            className="absolute w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          >
            {/* Fallback for devices that don't support video */}
            <img 
              src="/video-poster.jpg" 
              alt="Guardian Angel Energy Protection"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <source 
              src="/hero-section.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 tracking-tight leading-tight lowercase font-poppins hero-text"
          >
            reliable energy protection when it matters most
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white mb-28 lowercase mt-8">
            when the lights go out, guardian angel stands watch
          </p>
          
          <div className="mb-16">
            <Button 
              variant="primary" 
              size="large"
              className="tracking-wider lowercase z-10 button-illuminate text-lg py-5 px-10 font-bold shadow-lg"
            >
              secure your power
            </Button>
          </div>
          
          {/* Target audience icons - moved below CTA button with more prominent text */}
          <div className="flex justify-center gap-8 mb-16">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-white lowercase font-medium">homeowners</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                <Building className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-white lowercase font-medium">commercial</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-white lowercase font-medium">eco-conscious</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-white lowercase font-medium">innovators</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-white lowercase font-medium">energy security</span>
            </div>
          </div>
        </div>
      </Container>
      
      {/* Curved divider - increased height */}
      <div className="absolute bottom-0 left-0 right-0 h-24">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;