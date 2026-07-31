import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Clock, 
  UserCheck, 
  CheckCircle2, 
  Award,
  Terminal,
  Cpu,
  Layers,
  Zap,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { Card } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { cn } from '../../utils/cn';

export function ProjectCard({ project, className = '' }) {
  const isLarge = project.layoutMode === 'large';
  const isMedium = project.layoutMode === 'medium';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] }}
      className={cn('w-full', className)}
    >
      <Card
          variant="glass"
        className={cn(
          'p-6 sm:p-8 lg:p-10 rounded-[32px] border-slate-200/90 hover:border-slate-300 shadow-luxury group transition-all duration-500 relative overflow-hidden',
          isLarge ? 'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center' : 'flex flex-col justify-between'
        )}
      >
        {/* Top Accent Gradient Bar */}
        <div 
          className="absolute top-0 left-0 right-0 h-1.5 opacity-75 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: project.accentColor }}
        />

        {/* PROJECT PREVIEW GRAPHIC CANVAS */}
        <div className={cn(
          'relative w-full rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group-hover:shadow-card-lift transition-all duration-500',
          isLarge ? 'lg:col-span-6 h-64 sm:h-80 lg:h-96' : 'h-56 sm:h-64 mb-6'
        )}>
          {/* Background Gradient Canvas */}
          <div className={cn('absolute inset-0 bg-gradient-to-br p-5 flex flex-col justify-between', project.previewGradient)}>
            {project.image && (
          <img
             src={project.image}
             alt={project.title}
             className="absolute inset-0 w-full h-full object-contain z-0"
          />
        )}

            {/* Stats Metrics Overlay */}
            <div className="relative z-10 flex items-center gap-2">
              {project.stats.map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-[10px] text-slate-200 font-mono">
                  <span className="text-slate-400">{stat.label}:</span> <span className="font-bold text-white">{stat.value}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* PROJECT DETAILS CONTENT */}
        <div className={cn(
          'flex flex-col justify-between',
          isLarge ? 'lg:col-span-6' : 'w-full'
        )}>
          <div>
            
            {/* Category & Dev Meta Bar */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Badge variant="indigo" className="text-[10px]">
                {project.categoryLabel}
              </Badge>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{project.devTime}</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1 text-xs font-medium text-slate-500">
                <UserCheck className="w-3.5 h-3.5 text-slate-400" />
                <span>{project.role}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-accent transition-colors duration-200 mb-3 tracking-tight">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-5">
              {project.description}
            </p>

            {/* Key Features (For Large & Medium Cards) */}
            {(isLarge || isMedium) && (
              <div className="space-y-2 mb-6 p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1 font-mono">
                  Key Deliverables
                </span>
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-semibold font-mono rounded-lg bg-slate-100 text-slate-700 border border-slate-200/70"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Action Buttons */}
          <div className="relative z-20 flex items-center gap-3 pt-4 border-t border-slate-100">
            <Button
              variant="primary"
              size="sm"
              icon={ExternalLink}
              href={project.demoUrl}
              className="shadow-sm"
            >
              Live Demo
            </Button>
            <Button
              variant="outline"
              size="sm"
              icon={Github}
              href={project.githubUrl}
            >
              Source Code
            </Button>
          </div>

        </div>

      </Card>
    </motion.div>
  );
}
