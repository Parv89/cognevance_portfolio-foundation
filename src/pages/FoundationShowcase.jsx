import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { Experience } from '../sections/Experience';
import { WhyHireMe } from '../sections/WhyHireMe';
import { Achievements } from '../sections/Achievements';
import { LearningJourney } from '../sections/LearningJourney';
import { Contact } from '../sections/Contact';
import { Footer } from '../components/layout/Footer';

export function FoundationShowcase() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Experience */}
      <Experience />

      {/*  Hire Me */}
      <WhyHireMe />

      {/* Achievements */}
      <Achievements />

      {/* Testimonials */}
      <LearningJourney />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
