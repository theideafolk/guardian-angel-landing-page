/**
 * Guardian Angel - Premium Landing Page Theme Configuration
 * 
 * Centralized theme configuration for the Guardian Angel landing page.
 * This file contains colors, typography, spacing, and other design tokens
 * that can be easily modified to change the appearance across the entire site.
 * Updated to use Poppins as the primary font throughout.
 */

export const theme = {
  colors: {
    primary: {
      main: '#1A5F7A', // Deep emerald green (updated)
      light: '#2A7F9F',
      dark: '#124457',
    },
    secondary: {
      main: '#F3EDE4', // Soft cream (updated)
      light: '#FAF7F2',
      dark: '#E5DFD6',
    },
    accent: {
      main: '#B9807F', // Copper accent (updated)
      light: '#C89796',
      dark: '#A06968',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
      light: '#ffffff',
    },
    background: {
      main: '#ffffff',
      secondary: '#f9f9f9',
      tertiary: '#f0f0f0',
    },
    gradient: {
      primary: 'linear-gradient(135deg, #1A5F7A 0%, #2A7F9F 100%)',
      accent: 'linear-gradient(135deg, #B9807F 0%, #C89796 100%)',
    },
  },
  
  typography: {
    fontFamily: {
      heading: '"Poppins", sans-serif',
      body: '"Poppins", sans-serif',
      fallback: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500, 
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      base: '1rem',      // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },
  
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem', // 8px
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glassmorphism: '0 8px 32px 0 rgba(0, 0, 0, 0.1)',
    glow: '0 0 15px rgba(185, 128, 127, 0.5)',
  },
  
  glassmorphism: {
    light: 'backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.2); border: 1px solid rgba(255, 255, 255, 0.2);',
    medium: 'backdrop-filter: blur(15px); background: rgba(255, 255, 255, 0.15); border: 1px solid rgba(255, 255, 255, 0.2);',
    dark: 'backdrop-filter: blur(20px); background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.1);',
  },
  
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  container: {
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  
  zIndex: {
    0: 0,
    10: 10,
    20: 20,
    30: 30,
    40: 40,
    50: 50,
    auto: 'auto',
  },

  animation: {
    duration: {
      slow: '5s',
      medium: '3s',
      fast: '0.3s',
    },
    timing: {
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    }
  }
};