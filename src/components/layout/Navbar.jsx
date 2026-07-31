import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, SITE_CONFIG } from '../../constants/theme';
import { Button } from '../ui/Button';
import { Container } from './Container';
import { cn } from '../../utils/cn';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section on scroll
      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-luxury'
          : 'py-5 bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo*/}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-slate-900 text-white font-bold shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-indigo-400 opacity-90 group-hover:opacity-100 transition-opacity" />
             <span className="relative z-10 text-white font-extrabold text-base tracking-tight">
               PG
            </span>

            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold tracking-tight text-slate-900 leading-none group-hover:text-accent transition-colors">
                Parv Gangrade<span className="text-accent">.</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase mt-1">
                Frontend Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation*/}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/80 backdrop-blur-md shadow-2xs">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={cn(
                    'relative px-4 py-2 text-xs font-semibold rounded-full transition-colors duration-200 select-none',
                    isActive ? 'text-slate-950 font-bold' : 'text-slate-600 hover:text-slate-900'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white rounded-full shadow-xs border border-slate-200/60 z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
          <Button
               variant="primary"
              size="sm"
              icon={FileText}
              href="/resume/Parv_Gangrade_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex shadow-sm"
          >
              Resume
            </Button>
            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-2xl bg-white/80 border border-slate-200/90 text-slate-800 hover:text-accent hover:bg-white focus:outline-none transition-colors shadow-2xs"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 shadow-xl"
          >
            <Container className="py-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={cn(
                      'px-4 py-3 rounded-2xl text-sm font-semibold transition-all flex items-center justify-between',
                      activeSection === item.id
                        ? 'bg-accent/10 text-accent font-bold'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                ))}
              </div>
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
                <Button
                  variant="primary"
                  size="md"
                  icon={FileText}
                  fullWidth
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                >
                  Download Resume
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
