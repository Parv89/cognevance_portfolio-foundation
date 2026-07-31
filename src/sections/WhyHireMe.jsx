import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { FadeIn } from '../components/animations/FadeIn';
import { WHY_HIRE_ME_CARDS } from '../data/experienceData';

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      
      {/* Header */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-100/40 via-gold/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <Container>
        
        {/* Header */}
        <FadeIn>
          <SectionTitle
            badge="Why Hire Me"
            badgeVariant="gold"
            title="Why Choose Me as Your"
            gradientTitle="Frontend Developer."
            subtitle="A passionate Frontend Developer focused on building responsive, modern and user-friendly web applications while continuously learning new technologies."
          />
        </FadeIn>

        {/* FEATURE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {WHY_HIRE_ME_CARDS.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <FadeIn key={index} delay={index * 0.08} direction="up">
                <Card
                  variant="glass"
                  className="p-8 h-full flex flex-col justify-between rounded-[32px] border-slate-200/90 hover:border-slate-300 shadow-luxury group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-card-lift"
                >
                  {/* Hover Gradient Glow Border */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div>
                    {/* Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-indigo-300" />
                      </div>
                      <Badge variant="glass" className="text-[10px] uppercase font-mono">
                        {item.badge}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-accent transition-colors duration-200 tracking-tight mb-3">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Verification Indicator */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Craft Guarantee</span>
                  </div>

                </Card>
              </FadeIn>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
