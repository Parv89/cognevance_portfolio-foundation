import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Trophy } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { FadeIn } from '../components/animations/FadeIn';
import { ACHIEVEMENTS_METRICS } from '../data/experienceData';

function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      const stepTime = duration / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-extrabold font-display">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden bg-noise-texture">
      
      {/* Background Decorative Radial Mesh */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-gold/20 via-indigo-100/40 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      <Container>
        
        {/* Header */}
        <FadeIn>
          <SectionTitle
            badge="Learning Progress"
            badgeVariant="gold"
            title="Learning Progress &"
            gradientTitle="Development Journey."
            subtitle="A snapshot of my projects, technologies, learning milestones and continuous growth as an aspiring Frontend Developer."
          />
        </FadeIn>

        {/* METRICS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {ACHIEVEMENTS_METRICS.map((metric, index) => {
            const IconComponent = metric.icon;

            return (
              <FadeIn key={index} delay={index * 0.08} direction="scale">
                <Card
                  variant="glass"
                  className="p-6 h-full flex flex-col justify-between text-center items-center rounded-[28px] border-slate-200/90 hover:border-slate-300 shadow-luxury group transition-all duration-300 hover:-translate-y-2 hover:shadow-card-lift"
                >
                  <div className="flex flex-col items-center">
                    
                    {/* Icon */}
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-xs transition-transform duration-300 group-hover:scale-110 bg-white border border-slate-200/80"
                    >
                      <IconComponent className="w-7 h-7" style={{ color: metric.color }} />
                    </div>

                    {/* Animated Number */}
                    <div className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                      <AnimatedCounter value={metric.number} suffix={metric.suffix} />
                    </div>

                    {/* Label */}
                    <h4 className="text-sm font-bold text-slate-800 mb-1">
                      {metric.label}
                    </h4>

                    {/* Subtitle */}
                    <p className="text-xs text-slate-500 font-medium">
                      {metric.subtitle}
                    </p>
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
