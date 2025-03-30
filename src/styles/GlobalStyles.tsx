/**
 * Guardian Angel - Global Styles
 * 
 * This component provides global styles for the application, including
 * font imports, reset styles, and base styling applied throughout the site.
 * Updated to use Poppins font family.
 */

import React from 'react';
import { theme } from './theme';

const GlobalStyles: React.FC = () => {
  return (
    <style jsx global>{`
      /* Import fonts */
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
      
      /* Reset and base styles */
      *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      html {
        font-size: 16px;
        scroll-behavior: smooth;
      }
      
      body {
        font-family: ${theme.typography.fontFamily.body}, ${theme.typography.fontFamily.fallback};
        color: ${theme.colors.text.primary};
        background-color: ${theme.colors.background.main};
        line-height: ${theme.typography.lineHeight.normal};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: ${theme.typography.fontFamily.heading}, ${theme.typography.fontFamily.fallback};
        font-weight: ${theme.typography.fontWeight.semibold};
        line-height: ${theme.typography.lineHeight.tight};
        margin-bottom: ${theme.spacing[4]};
      }
      
      h1 {
        font-size: ${theme.typography.fontSize["5xl"]};
        letter-spacing: ${theme.typography.letterSpacing.tight};
      }
      
      h2 {
        font-size: ${theme.typography.fontSize["4xl"]};
        letter-spacing: ${theme.typography.letterSpacing.tight};
      }
      
      h3 {
        font-size: ${theme.typography.fontSize["3xl"]};
      }
      
      h4 {
        font-size: ${theme.typography.fontSize["2xl"]};
      }
      
      p {
        margin-bottom: ${theme.spacing[4]};
      }
      
      a {
        color: ${theme.colors.primary.main};
        text-decoration: none;
        transition: ${theme.transitions.default};
      }
      
      a:hover {
        color: ${theme.colors.primary.light};
      }
      
      button {
        font-family: ${theme.typography.fontFamily.heading}, ${theme.typography.fontFamily.fallback};
        cursor: pointer;
        border: none;
        outline: none;
      }
      
      img {
        max-width: 100%;
        height: auto;
      }
      
      /* Custom utility classes */
      .container {
        width: 100%;
        max-width: ${theme.container.maxWidth.xl};
        margin: 0 auto;
        padding: 0 ${theme.container.padding.DEFAULT};
      }
      
      @media (min-width: ${theme.breakpoints.sm}) {
        .container {
          padding: 0 ${theme.container.padding.sm};
        }
      }
      
      @media (min-width: ${theme.breakpoints.lg}) {
        .container {
          padding: 0 ${theme.container.padding.lg};
        }
      }
      
      .section {
        padding: ${theme.spacing[16]} 0;
      }
      
      .glassmorphism {
        ${theme.glassmorphism.medium}
        border-radius: ${theme.borderRadius.lg};
        border: 1px solid rgba(255, 255, 255, 0.18);
        box-shadow: ${theme.shadows.glassmorphism};
      }
      
      /* Add animation styles */
      .fade-in {
        opacity: 0;
        animation: fadeIn 0.6s ease-in forwards;
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      /* Scale transition */
      .scale-102 {
        transform: scale(1.02);
      }
      
      .btn {
        display: inline-block;
        padding: ${theme.spacing[3]} ${theme.spacing[6]};
        border-radius: ${theme.borderRadius.lg};
        font-weight: ${theme.typography.fontWeight.semibold};
        text-align: center;
        transition: ${theme.transitions.default};
      }
      
      .btn-primary {
        background: ${theme.colors.gradient.accent};
        color: white;
      }
      
      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.glow};
      }
      
      .btn-secondary {
        background: transparent;
        color: ${theme.colors.primary.main};
        border: 2px solid ${theme.colors.primary.main};
      }
      
      .btn-secondary:hover {
        background: ${theme.colors.primary.main};
        color: white;
      }
    `}</style>
  );
};

export default GlobalStyles;