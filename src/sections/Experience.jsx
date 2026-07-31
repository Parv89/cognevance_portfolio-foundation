import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { FadeIn } from '../components/animations/FadeIn';
import { TIMELINE_JOURNEY } from '../data/experienceData';

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden bg-noise-texture">
      
      {/* Background */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-accent/15 to-indigo-200/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gradient-to-br from-gold/15 to-amber-200/30 rounded-full blur-[110px] pointer-events-none -z-10" />

      <Container>
        
        {/* Heading */}
        <FadeIn>
          <SectionTitle
            badge="My Journey"
            badgeVariant="indigo"
            title="Learning &"
            gradientTitle="Grouth Journey."
            subtitle="My journey as a Computer & Information Technology student, learning modern web development and building real-world frontend projects."
          />
        </FadeIn>

        {/* TIMELINE */}
        <div className="relative max-w-4xl mx-auto mt-16">
          
          {/*  Timeline */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute left-4 sm:left-1/2 top-0 -translate-x-1/2 w-1 bg-gradient-to-b from-accent via-indigo-400 to-gold rounded-full z-0 opacity-80"
          />

          {/* Items */}
          <div className="space-y-12 sm:space-y-16">
            {TIMELINE_JOURNEY.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white border-2 border-slate-200 shadow-luxury flex items-center justify-center z-10 group hover:scale-110 transition-transform duration-300"
                  >
                    <div 
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-xs"
                      style={{ backgroundColor: item.accentColor }}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </motion.div>

                  {/*  Card  */}
                  <div className="w-full pl-16 sm:pl-0 sm:w-1/2 sm:px-8">
                    <FadeIn direction={isEven ? 'left' : 'right'} delay={0.1 * index}>
                      <Card
                        variant="glass"
                        className="p-6 sm:p-8 rounded-[28px] border-slate-200/90 hover:border-slate-300 shadow-luxury group relative overflow-hidden transition-all duration-300"
                      >
                        {/* Top Border */}
                        <div 
                          className="absolute top-0 left-0 right-0 h-1"
                          style={{ backgroundColor: item.accentColor }}
                        />

                        {/* Year */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/70">
                            <Calendar className="w-3.5 h-3.5 text-accent" />
                            <span>{item.year}</span>
                          </div>
                          <Badge variant="indigo" className="text-[10px]">
                            {item.badge}
                          </Badge>
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-accent transition-colors duration-200 tracking-tight mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs font-bold text-slate-600 mb-4">
                          {item.organization}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-slate-600 leading-relaxed font-normal mb-5">
                          {item.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                          {item.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-0.5 text-[11px] font-semibold font-mono rounded-md bg-white text-slate-700 border border-slate-200/80 shadow-2xs"
                            >
                              {h}
                            </span>
                          ))}
                        </div>

                      </Card>
                    </FadeIn>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </Container>
    </section>
  );
}
