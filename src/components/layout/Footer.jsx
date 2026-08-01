import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  ArrowUp,
  ArrowDownToLine,
  Github,
  Linkedin,
  Twitter,
  Dribbble,
  Heart
} from 'lucide-react';
import { Container } from './Container';
import { NAV_ITEMS, SITE_CONFIG } from '../../constants/theme';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden pt-20 pb-12">
      
      {/* Background Decorative Mesh Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-accent/20 via-gold/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-0" />

      <Container className="relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Col 1: Wordmark & Tagline */}
          <div className="md:col-span-6 flex flex-col items-start">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-2xl bg-accent text-white flex items-center justify-center font-bold shadow-md shadow-accent/30 group-hover:scale-105 transition-transform">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white leading-none">
                  Parv Gangrade<span className="text-accent">.</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase mt-1">
                  Frontend Developer
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 font-normal leading-relaxed max-w-md mb-6">
              Passionate Frontend Developer focused on building responsive, accessible and high-performance web applications using React, JavaScript and Tailwind CSS.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: SITE_CONFIG.socials.github, label: 'GitHub' },
                { icon: Linkedin, href: SITE_CONFIG.socials.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: SITE_CONFIG.socials.twitter, label: 'Twitter' },
                { icon: Dribbble, href: SITE_CONFIG.socials.dribbble, label: 'Dribbble' },
              ].map((soc, i) => {
                const SocIcon = soc.icon;
                return (
                  <a
                    key={i}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-accent hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30 flex items-center justify-center transition-all duration-300"
                    aria-label={soc.label}
                  >
                    <SocIcon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <a
              href={`${import.meta.env.BASE_URL}resume/Parv_Gangrade_Resume.pdf`}
               target="_blank"
               rel="noopener noreferrer"
               className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-white font-semibold hover:bg-indigo-600 transition-all shadow-lg shadow-accent/30 hover:scale-105"
            >
             <ArrowDownToLine className="w-4 h-4" />
             Download Resume
            </a>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-300 mb-1">
              Navigation
            </span>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Col 3: Back to Top & Legal */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between">
            <motion.button
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-semibold text-xs flex items-center gap-2 shadow-md cursor-pointer transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-accent" />
            </motion.button>

            <div className="mt-8 md:mt-0 text-left md:text-right">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="inline-flex items-center whitespace-nowrap text-xs font-mono text-emerald-400 font-semibold bg-emerald-950/80 border border-emerald-800 px-5 py-2 rounded-full hover:bg-emerald-900 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                  ● Available for Frontend Internship
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Parv Gangrade. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed & Developed by Parv Gangrade • React • Tailwind CSS • Framer Motion ❤️.
          </p>
        </div>

      </Container>
    </footer>
  );
}
