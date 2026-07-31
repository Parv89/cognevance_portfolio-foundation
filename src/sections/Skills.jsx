import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, 
  Code2, 
  FileCode2, 
  Palette, 
  Server, 
  Cpu, 
  Database, 
  GitBranch, 
  Github, 
  Monitor, 
  Figma, 
  Layers, 
  CheckCircle2,
  Boxes
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Stagger, StaggerItem } from '../components/animations/Stagger';
import { FadeIn } from '../components/animations/FadeIn';
import { cn } from '../utils/cn';

const SKILL_CATEGORIES = [
  { id: 'all', label: 'All Skills' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend(Learning)' },
  { id: 'database', label: 'Database(Learning)' },
  { id: 'tools', label: 'Tools' },
];

const SKILLS_DATA = [
  // FRONTEND
  {
    name: 'React',
    category: 'frontend',
    level: 'Intermediate',
    icon: Atom,
    color: '#61DAFB',
    description: 'Building responsive single-page applications using React components, hooks and reusable UI.',
    highlight: 'Frontend',
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    level: 'Intermediate',
    icon: Code2,
    color: '#F7DF1E',
    description: 'Async/Await, Closures, Prototypes, Event Loop, Modular Design, DOM APIs.',
    highlight: 'ES6+',
  },
  {
    name: 'HTML',
    category: 'frontend',
    level: 'Intermediate',
    icon: FileCode2,
    color: '#E34F26',
    description: 'Semantic HTML, Accessibility (WCAG 2.1), SEO Best Practices, Schema.org.',
    highlight: 'Standards Compliant',
  },
  {
    name: 'CSS / Modern CSS',
    category: 'frontend',
    level: 'Intermediate',
    icon: Palette,
    color: '#1572B6',
    description: 'Flexbox, CSS Grid, Custom Properties, Glassmorphism, CSS Animations, Container Queries.',
    highlight: 'CSS3',
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 'Intermediate',
    icon: Layers,
    color: '#06B6D4',
    description: 'Custom Design Tokens, Utility-First Architecture, Plugins, Dark Mode Theme Engine.',
    highlight: 'Tailwind',
  },

  // BACKEND
  {
    name: 'Node.js',
    category: 'backend',
    level: 'Learning',
    icon: Server,
    color: '#339933',
    description: 'RESTful APIs, Asynchronous I/O, Event Emitter, NPM Ecosystem, Middleware Architecture.',
    highlight: 'Server Runtime',
  },
  {
    name: 'Express.js',
    category: 'backend',
    level: 'Learning',
    icon: Cpu,
    color: '#000000',
    description: 'API Route Controllers, JWT Auth, Middleware Pipeline, Request Validation, Error Handling.',
    highlight: 'API Layer',
  },

  // DATABASE
  {
    name: 'MongoDB',
    category: 'database',
    level: 'Learning',
    icon: Database,
    color: '#47A248',
    description: 'NoSQL Schema Design, Mongoose ODM, Aggregation Pipelines, Indexing, Atlas Cloud.',
    highlight: 'Data Storage',
  },

  // TOOLS
  {
    name: 'Git',
    category: 'tools',
    level: 'Learning',
    icon: GitBranch,
    color: '#F05032',
    description: 'Version Control, Branching Strategies (GitFlow/Trunk), Interactive Rebase, Conflict Resolution.',
    highlight: 'Workflow',
  },
  {
    name: 'GitHub',
    category: 'tools',
    level: 'Intermediate',
    icon: Github,
    color: '#181717',
    description: 'GitHub Actions CI/CD, PR Code Reviews, Issue Tracking, Security Alerts, Open Source.',
    highlight: 'Collaboration',
  },
  {
    name: 'VS Code',
    category: 'tools',
    level: 'Intermediate',
    icon: Monitor,
    color: '#007ACC',
    description: 'Custom Workspace Configs, Debugging Suites, ESLint/Prettier Integration, Keybindings.',
    highlight: 'Primary IDE',
  },
  {
    name: 'Figma',
    category: 'tools',
    level: 'Intermediate Designer',
    icon: Figma,
    color: '#F24E1E',
    description: 'Auto-Layout 5.0, Component Variants, Variables, Tokens, Interactive Prototyping, Design Systems.',
    highlight: 'UI/UX Design',
  },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden bg-noise-texture">
      
      {/* Background */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-200/40 to-accent/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-gold/20 to-amber-200/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <Container>
        
        {/* Header */}
        <FadeIn>
          <SectionTitle
            badge="Technical Proficiency"
            badgeVariant="gold"
            title="Mastered Technologies &"
            gradientTitle="Production Ecosystem."
            subtitle="I specialize in modern frontend engineering, building accessible React applications backed by robust backend APIs and Figma design precision."
          />
        </FadeIn>

        {/* Category Filter */}
        {/* Category Filter */}
<FadeIn delay={0.1} className="flex justify-center mb-12">
  <div className="flex flex-wrap justify-center gap-3 bg-white/80 backdrop-blur-md p-2 rounded-full border border-slate-200 shadow-sm">

    {SKILL_CATEGORIES.map((cat) => (
      <button
        key={cat.id}
        onClick={() => setActiveCategory(cat.id)}
        className={cn(
          "relative px-6 py-3 text-sm font-semibold rounded-full whitespace-nowrap transition-all duration-300",
          activeCategory === cat.id
            ? "bg-slate-900 text-white shadow-md"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
        )}
      >
        {cat.label}
      </button>
    ))}

  </div>
</FadeIn>
        {/* SKILLS GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredSkills.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                >
                  <Card
                    variant="glass"
                    className="p-6 h-full flex flex-col justify-between border-slate-200/90 hover:border-slate-300 hover:shadow-card-lift group relative overflow-hidden transition-all duration-300"
                  >
                    {/* Top Glowing Color Line */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 opacity-60 group-hover:opacity-100" 
                      style={{ backgroundColor: skill.color }}
                    />

                    <div>
                      {/* Icon & Category Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div 
                          className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 bg-white border border-slate-200/80"
                        >
                          <IconComponent className="w-6 h-6" style={{ color: skill.color }} />
                        </div>
                        <Badge variant="glass" className="text-[10px] font-mono">
                          {skill.highlight}
                        </Badge>
                      </div>

                      {/* Tech Name */}
                      <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-accent transition-colors duration-200 mb-1">
                        {skill.name}
                      </h4>

                      {/* Level Indicator */}
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-accent mb-3">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{skill.level}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {skill.description}
                      </p>
                    </div>

                    {/* Footer Visual Status Bar */}
                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-medium">
                        {skill.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-semibold text-slate-500">Production Ready</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* SUMMARY */}
        <FadeIn delay={0.3} className="mt-16 pt-12 border-t border-slate-200/80">
          <div className="glass-card rounded-3xl p-8 lg:p-10 border-slate-200/90 shadow-luxury flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md">
                <Boxes className="w-7 h-7 text-indigo-300" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Need a custom stack or tech audit?</h4>
                <p className="text-sm text-slate-600 mt-0.5">
                  I specialize in integrating modern UI engines, state management libraries, and design system tokens.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Badge variant="gold" className="py-2 px-4 text-xs font-bold">
                Open For Internship
              </Badge>
            </div>
          </div>
        </FadeIn>

      </Container>
    </section>
  );
}
