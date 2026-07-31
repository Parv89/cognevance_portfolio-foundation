import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Container } from "../components/layout/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Card } from "../components/ui/Card";
import { Badge } from "../components/ui/Badge";
import { FadeIn } from "../components/animations/FadeIn";

import { LEARNING_JOURNEY } from "../data/experienceData";

export function LearningJourney() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % LEARNING_JOURNEY.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + LEARNING_JOURNEY.length) % LEARNING_JOURNEY.length
    );
  };

  const current = LEARNING_JOURNEY[currentIndex];
  const Icon = current.icon;

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-100/40 via-amber-100/20 to-transparent rounded-full blur-[140px] -z-10" />

      <Container>
        <FadeIn>
          <SectionTitle
            badge="Learning Journey"
            badgeVariant="indigo"
            title="My Growth as a"
            gradientTitle="Frontend Developer."
            subtitle="A snapshot of my learning journey and continuous improvement."
          />
        </FadeIn>

        <div className="max-w-4xl mx-auto mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.45 }}
            >
              <Card
                variant="glass"
                className="p-10 rounded-[32px] border-slate-200 shadow-luxury"
              >
                <div className="flex justify-between items-center mb-8">
                  <Badge variant="gold">{current.badge}</Badge>

                  <span className="text-accent font-bold">
                    {current.year}
                  </span>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {current.title}
                    </h3>

                    <p className="text-slate-600 mt-4 leading-8">
                      {current.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-2">
              {LEARNING_JOURNEY.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`transition-all duration-300 rounded-full ${
                    currentIndex === i
                      ? "w-8 h-2.5 bg-accent"
                      : "w-2.5 h-2.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center hover:text-accent"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center hover:text-accent"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}