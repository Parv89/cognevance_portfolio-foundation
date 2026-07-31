import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Figma, 
  Atom, 
  Zap, 
  BookOpen, 
  CheckCircle2, 
  GraduationCap, 
  FolderCheck, 
  Award,
  Sparkles,
  ArrowRight,
  Laptop
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Stagger, StaggerItem } from '../components/animations/Stagger';
import { FadeIn } from '../components/animations/FadeIn';
import { SITE_CONFIG } from '../constants/theme';

const HIGHLIGHT_CARDS = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Passionate about building clean, accessible, and structured web interfaces using HTML5, CSS3, and JavaScript.',
    badge: 'Core Focus',
    color: 'from-indigo-500 to-accent',
  },
  {
    icon: Atom,
    title: 'React Development',
    description: 'Developing dynamic single-page applications leveraging React component hierarchy, state hooks, and modular architecture.',
    badge: 'Primary Tech',
    color: 'from-sky-500 to-indigo-500',
  },
  {
    icon: Layout,
    title: 'Responsive Web Design',
    description: 'Using Tailwind CSS to craft fluid, grid-aligned layouts that adjust seamlessly across mobile, tablet, and desktop screens.',
    badge: 'Mobile-First',
    color: 'from-blue-500 to-teal-400',
  },
  {
    icon: Figma,
    title: 'UI/UX Interest',
    description: 'Keen interest in digital product design, visual hierarchy, micro-interactions, and creating clean user experiences in Figma.',
    badge: 'Design Mindset',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Actively expanding my technical knowledge into Node.js, Express.js, and MongoDB while staying updated with modern web standards.',
    badge: 'Growing Daily',
    color: 'from-amber-500 to-gold',
  },
  {
    icon: Zap,
    title: 'Clean Code & Performance',
    description: 'Writing readable, maintainable frontend code with good practices, proper spacing, and semantic HTML structure.',
    badge: 'Best Practices',
    color: 'from-emerald-500 to-teal-500',
  },
];

const METRIC_CARDS = [
  {
    icon: GraduationCap,
    title: 'Education',
    subtitle: 'B.Tech (Computer Science & Information Technology)',
    detail: 'Sage University Indore',
    badge: '2024-2028',
  },
  {
    icon: Laptop,
    title: 'Frontend Skills',
    subtitle: 'React & Tailwind CSS',
    detail: 'HTML • CSS • JavaScript',
    badge: 'Core Skills',
  },
  {
    icon: FolderCheck,
    title: 'Projects',
    subtitle: 'Portfolio & Frontend Projects',
    detail: 'React • Tailwind CSS • JavaScript',
    badge: 'Frontend',
  },
  {
    icon: Award,
    title: 'Career Goal',
    subtitle: 'Frontend Developer',
    detail: 'Open to Internship Opportunities',
    badge: 'Available',
  },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container>
        
        <FadeIn>
          <SectionTitle
            badge="About Me"
            badgeVariant="indigo"
            title="Building Modern Web Experiences with"
            gradientTitle="React & Tailwind CSS."
            subtitle="I am a dedicated Frontend Developer seeking opportunities to apply my skills and continue growing as a software engineer."
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          <FadeIn direction="left" className="lg:col-span-6 flex flex-col items-start">
            
            <div className="flex items-center gap-2 mb-4 text-accent font-semibold text-sm tracking-wide uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Background & Objective</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
               Building responsive, modern, and user-friendly web applications using React and Tailwind CSS.
            </h3>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal mb-8">
              <p>
                Hello! I'm <span className="font-semibold text-slate-900">Parv Gangrade</span>, a Frontend Developer and Computer & Information Technology student at Sage University, Indore. I enjoy creating modern, responsive, and visually appealing websites using React, JavaScript, HTML, CSS, and Tailwind CSS.
              </p>
              <p>
                {SITE_CONFIG.objective}
              </p>
            </div>

            <div className="space-y-3.5 mb-8 w-full">
              {[
                'Strong knowledge of HTML, CSS, JavaScript, React & Tailwind CSS',
                'Building responsive and mobile-friendly web applications',
                'Creating clean, modern and user-friendly UI/UX designs',
                'Currently learning Python, Java, DSA and Backend Development'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" size="md" icon={ArrowRight} href="#skills">
              View Skills & Tech Stack
            </Button>

          </FadeIn>

          <Stagger className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5" staggerChildren={0.1}>
            {METRIC_CARDS.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <StaggerItem key={idx}>
                  <Card 
                    variant="glass" 
                    className="p-6 h-full flex flex-col justify-between hover:border-accent/40 border-slate-200/90 shadow-luxury group transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-xs">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <Badge variant="indigo" className="text-[10px]">
                          {card.badge}
                        </Badge>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-accent transition-colors duration-200 mb-1">
                        {card.title}
                      </h4>
                      <p className="text-xs font-semibold text-slate-600 mb-2">
                        {card.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-medium text-slate-400">
                      {card.detail}
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </Stagger>

        </div>

        <FadeIn delay={0.2} className="pt-12 border-t border-slate-200/80">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Core Areas of Focus
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Key pillars of my web development journey and technical growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HIGHLIGHT_CARDS.map((highlight, idx) => {
              const IconComponent = highlight.icon;
              return (
                <FadeIn key={idx} delay={0.08 * idx} direction="up">
                  <Card 
                    variant="glass" 
                    className="p-7 h-full flex flex-col justify-between hover:-translate-y-2 hover:shadow-card-lift transition-all duration-300 border-slate-200/90 group relative overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-6 h-6 text-indigo-300" />
                        </div>
                        <Badge variant="glass" className="text-[10px] uppercase font-mono">
                          {highlight.badge}
                        </Badge>
                      </div>

                      <h4 className="text-lg font-bold text-slate-900 group-hover:text-accent transition-colors duration-200 mb-2">
                        {highlight.title}
                      </h4>

                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {highlight.description}
                      </p>
                    </div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>

        </FadeIn>

      </Container>
    </section>
  );
}
