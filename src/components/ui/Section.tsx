/**
 * Guardian Angel - Section Component
 * 
 * Reusable section component to maintain consistent spacing and structure
 */

import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  backgroundClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  containerClassName = '',
  fullWidth = false,
  backgroundClassName = '',
}) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundClassName} ${className}`}
    >
      <Container className={containerClassName} fluid={fullWidth}>
        {children}
      </Container>
    </section>
  );
};

export default Section;