import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, FolderGit2, ArrowUpRight } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { ProjectCard } from '../components/ui/ProjectCard';
import { Button } from '../components/ui/Button';
import { Divider } from '../components/common/Divider';
import { FadeIn } from '../components/animations/FadeIn';
import { PROJECTS_CATEGORIES, PROJECTS_LIST } from '../data/projectsData';
import { cn } from '../utils/cn';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS_LIST
    : PROJECTS_LIST.filter(project => project.category.includes(activeCategory));

  return (
    <section id="projects" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Background  */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-indigo-100/50 via-purple-50/30 to-amber-100/30 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Container>
        
        {/* Section */}
        <FadeIn>
          <SectionTitle
            badge="Featured Projects"
            badgeVariant="indigo"
            title="Projects I've"
            gradientTitle="Built"
            subtitle="A collection of frontend projects built using React, JavaScript, Tailwind CSS and modern web technologies while continuously improving my development skills"
          />
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.1} className="flex justify-center mb-16">
  <div className="flex items-center justify-center gap-2 bg-slate-100/80 backdrop-blur-md rounded-full border border-slate-200/90 shadow-sm p-2">

    {PROJECTS_CATEGORIES.map((cat) => (
      <button
       key={cat.id}
  onClick={() => setActiveCategory(cat.id)}
  className={cn(
    "relative flex items-center justify-center overflow-hidden rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300 min-w-[140px]",
    activeCategory === cat.id
      ? "bg-slate-900 text-white shadow-lg"
      : "bg-transparent text-slate-600 hover:bg-slate-200 hover:text-slate-900"
  )}
      >
        {activeCategory === cat.id && (
          <motion.div
            layoutId="activeProjectCategory"
            className="absolute inset-0 bg-slate-900 rounded-full"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}

        <span className="relative z-10">
          {cat.label}
        </span>
      </button>
    ))}

  </div>
</FadeIn>
        {/* PROJECT GRID */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-10 lg:gap-12"
          >
            {/* Render Large Featured First, then Medium side-by-side, then Banner, then Compact */}
            {filteredProjects.map((project, index) => {
              // We alternate layout visually
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>

        <Divider className="my-16" />

        {/* GITHUB CTA */}
        <FadeIn delay={0.2}>
          <div className="glass-card rounded-3xl p-8 lg:p-12 border-slate-200/90 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-accent flex items-center justify-center shrink-0 shadow-sm">
                <FolderGit2 className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-slate-900">Explore More Projects on GitHub</h4>
                <p className="text-sm text-slate-600 mt-1">
                   View my latest React, JavaScript and frontend development projects, source code and continuous learning journey.
                </p>
              </div>
            </div>

            <Button
              variant="gold"
              size="lg"
              icon={ArrowUpRight}
              href="https://github.com/Parv89"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0"
            >
              Visit GitHub Archive
            </Button>
          </div>
        </FadeIn>

      </Container>
    </section>
  );
}
