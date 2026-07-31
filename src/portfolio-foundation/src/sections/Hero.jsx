import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Award, 
  TrendingUp, 
  ChevronDown,
  Atom,
  Figma,
  Zap,
  Terminal,
  Cpu
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Container } from '../components/layout/Container';
import { Stagger, StaggerItem } from '../components/animations/Stagger';
import { FadeIn } from '../components/animations/FadeIn';
import { HERO_METRICS, HERO_TECH_STACK, SITE_CONFIG } from '../constants/theme';

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 lg:pt-40 pb-20 flex items-center justify-center overflow-hidden bg-[#F8FAFC] bg-noise-texture"
    >
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-accent/20 to-indigo-300/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-gradient-to-br from-gold/20 to-amber-200/30 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <Stagger className="lg:col-span-7 flex flex-col items-start" staggerChildren={0.12}>
            
            {/* Small Premium Status Badge */}
            <StaggerItem>
              <Badge variant="glass" pulse className="mb-6 border-slate-200/90 shadow-sm py-1.5 px-4 text-xs font-semibold">
                <span className="text-slate-800 font-bold">AVAILABLE FOR SENIOR & LEAD ROLES</span>
                <span className="text-slate-400">|</span>
                <span className="text-accent font-medium">Q3/Q4 2026</span>
              </Badge>
            </StaggerItem>

            {/* Greeting & Headline */}
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] mb-6">
                Architecting{' '}
                <span className="text-gradient-indigo">World-Class</span>{' '}
                Digital Products.
              </h1>
            </StaggerItem>

            {/* Professional Description */}
            <StaggerItem>
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
                I am <span className="font-semibold text-slate-900">{SITE_CONFIG.name}</span>, a Senior Product Designer & Lead React Engineer with {SITE_CONFIG.experienceYears} of experience engineering high-performance web applications, design systems, and Figma-precise user experiences.
              </p>
            </StaggerItem>

            {/* CTA Buttons */}
            <StaggerItem className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12">
              <Button
                variant="primary"
                size="lg"
                icon={ArrowRight}
                href="#projects"
                className="w-full sm:w-auto shadow-xl shadow-accent/25"
              >
                View Selected Work
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                icon={Download}
                href="#resume"
                className="w-full sm:w-auto shadow-sm"
              >
                Download Resume
              </Button>
            </StaggerItem>

            {/* Key Metrics / Highlights Bar */}
            <StaggerItem className="w-full pt-8 border-t border-slate-200/80">
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                {HERO_METRICS.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                      {metric.value}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </StaggerItem>

          </Stagger>

          {/* RIGHT SIDE VISUAL SHOWCASE (ORIGINAL FIGMA-GRADE MULTI-LAYERED ARTWORK) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Outer Decorative Glow Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-gold/15 to-transparent rounded-[36px] blur-2xl -z-10 transform scale-95" />

            {/* Main Interactive Glass Canvas Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1.0] }}
              className="w-full glass-card rounded-[32px] p-6 border-slate-200/90 shadow-luxury relative overflow-hidden"
            >
              
              {/* Window Header Dots & Title */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  <span className="text-xs font-mono font-medium text-slate-400 ml-2">Architecture.config.ts</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-full text-[11px] font-mono text-slate-600 font-semibold">
                  <Cpu className="w-3 h-3 text-accent" />
                  <span>React 19 Engine</span>
                </div>
              </div>

              {/* Code Snippet / Component Preview Card */}
              <div className="bg-slate-900 text-slate-100 rounded-2xl p-4 font-mono text-xs shadow-inner leading-relaxed mb-5 overflow-x-auto relative">
                <div className="absolute top-3 right-3 text-[10px] text-emerald-400 font-bold bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-md flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  COMPILED
                </div>
                <p className="text-slate-400">// Design System Core Token</p>
                <p className="text-indigo-300">const <span className="text-white">DesignArchitect</span> = &#123;</p>
                <p className="pl-4 text-emerald-300">framework: <span className="text-amber-300">'React 19 + Vite'</span>,</p>
                <p className="pl-4 text-indigo-300">styling: <span className="text-amber-300">'Tailwind CSS'</span>,</p>
                <p className="pl-4 text-purple-300">motion: <span className="text-amber-300">'Framer Motion'</span>,</p>
                <p className="pl-4 text-slate-300">precision: <span className="text-accent-light">'Figma 100%'</span>,</p>
                <p className="text-indigo-300">&#125;;</p>
              </div>

              {/* Mini UI Component Interactive Card Preview */}
              <div className="bg-white/90 rounded-2xl p-4 border border-slate-200/80 shadow-xs flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent to-indigo-500 text-white flex items-center justify-center shadow-md">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">System Performance</h4>
                    <p className="text-[11px] text-slate-500 font-medium">100% WCAG 2.1 Accessible</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-xl border border-emerald-200">
                    99/100
                  </span>
                </div>
              </div>

            </motion.div>

            {/* FLOATING BADGE 1: Figma Design Award (Top Left) */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -left-6 hidden sm:flex items-center gap-2.5 bg-white/90 backdrop-blur-xl p-3 px-4 rounded-2xl border border-amber-200/90 shadow-luxury z-20"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-gold to-amber-300 text-slate-950 flex items-center justify-center font-bold">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Recognition</p>
                <p className="text-xs font-bold text-slate-900">Award-Winning UI</p>
              </div>
            </motion.div>

            {/* FLOATING BADGE 2: Live Tech Stack Badges (Bottom Right) */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-4 hidden sm:flex items-center gap-3 bg-slate-900/95 text-white backdrop-blur-xl p-3.5 px-4 rounded-2xl border border-slate-800 shadow-card-lift z-20"
            >
              <div className="flex items-center gap-2">
                <Atom className="w-5 h-5 text-sky-400 animate-spin-slow" />
                <span className="text-xs font-bold font-mono">React 19</span>
              </div>
              <span className="text-slate-700">|</span>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-slate-300">Instant Motion</span>
              </div>
            </motion.div>

          </div>

        </div>

        {/* BOTTOM SCROLL INDICATOR */}
        <div className="mt-16 lg:mt-24 flex justify-center">
          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col items-center gap-2 group text-slate-400 hover:text-accent transition-colors cursor-pointer"
          >
            <span className="text-[11px] font-semibold tracking-widest uppercase">Scroll to Explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-300 group-hover:border-accent flex justify-center p-1.5 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-2 rounded-full bg-slate-400 group-hover:bg-accent transition-colors"
              />
            </div>
          </motion.a>
        </div>

      </Container>
    </section>
  );
}
