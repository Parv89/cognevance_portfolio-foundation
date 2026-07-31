/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#F8FAFC',
          paper: '#FFFFFF',
          dark: '#0B0F17',
          card: '#F1F5F9',
        },
        primary: {
          DEFAULT: '#111827',
          muted: '#374151',
          light: '#F3F4F6',
        },
        secondary: {
          DEFAULT: '#64748B',
          light: '#94A3B8',
          dark: '#475569',
        },
        accent: {
          DEFAULT: '#4F46E5',
          light: '#6366F1',
          dark: '#4338CA',
          glow: 'rgba(79, 70, 229, 0.15)',
        },
        gold: {
          DEFAULT: '#C8A96A',
          light: '#E2C889',
          dark: '#9A7D43',
          glow: 'rgba(200, 169, 106, 0.2)',
        },
        success: '#10B981',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Manrope"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
        'glass-hover': '0 20px 40px 0 rgba(79, 70, 229, 0.12)',
        'luxury': '0 20px 50px -10px rgba(17, 24, 39, 0.07), 0 10px 20px -5px rgba(200, 169, 106, 0.08)',
        'glow-accent': '0 0 30px rgba(79, 70, 229, 0.35)',
        'glow-gold': '0 0 30px rgba(200, 169, 106, 0.35)',
        'card-lift': '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(14px) rotate(-1.5deg)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(30px)' },
          '100%': { opacity: '0.8', filter: 'blur(45px)' },
        }
      }
    },
  },
  plugins: [],
}
