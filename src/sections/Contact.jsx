import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Github, 
  Linkedin, 
  Twitter, 
  Dribbble,
  Clock,
  Loader2
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { FadeIn } from '../components/animations/FadeIn';
import { SITE_CONFIG } from '../constants/theme';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setStatus("loading");
  setErrorMessage("");

  try {
    // Save data to MongoDB
    const response = await fetch("https://portfolio-foundation.onrender.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to save message.");
    }

    // Send email using EmailJS
    await emailjs.send(
      "service_mm11fmj",
      "template_wo5kc4v",
      {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
      },
      "tQi-j7JXU73CDioUP"
    );

    setStatus("success");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    setStatus("error");
    setErrorMessage(error.message || "Something went wrong.");
  }
};

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden bg-noise-texture">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-accent/20 to-gold/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      <Container>
        
        {/* Header */}
        <FadeIn>
          <SectionTitle
            badge="Get In Touch"
            badgeVariant="indigo"
            title="Let's Build Something"
            gradientTitle="Extraordinary."
            subtitle="Have a project in mind, need a design system architect, or want to discuss senior leadership opportunities? Reach out below."
          />
        </FadeIn>

        {/* SPLIT CONTACT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          
          {/* LEFT SIDE CONTACT INFORMATION & SOCIALS */}
          <FadeIn direction="left" className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              
              <Badge variant="glass" pulse className="mb-6 py-1.5 px-4 text-xs font-semibold">
                <span className="text-slate-800 font-bold">ACCEPTING NEW INQUIRIES</span>
              </Badge>

              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Available for Frontend Development Opportunities.
              </h3>

              <p className="text-base text-slate-600 font-normal leading-relaxed mb-8">
                I am currently looking for Frontend Developer internships and entry-level opportunities. Feel free to contact me for collaborations or project discussions.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                
                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border-slate-200/90 shadow-2xs">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Location</span>
                    <span className="text-sm font-bold text-slate-900">{SITE_CONFIG.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border-slate-200/90 shadow-2xs">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-gold flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Direct Email</span>
                    <a href="mailto:parvgangrade705@gmail.com" className="text-sm font-bold text-slate-900 hover:text-accent transition-colors">
                      parvgangrade705@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border-slate-200/90 shadow-2xs">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Response Time</span>
                    <span className="text-sm font-bold text-slate-900">Within 24 Hours</span>
                  </div>
                </div>

              </div>

              {/* Social Links Bar */}
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Connect on Socials
                </span>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Github, href: SITE_CONFIG.socials.github, label: 'GitHub' },
                    { icon: Linkedin, href: SITE_CONFIG.socials.linkedin, label: 'LinkedIn' },
                    { icon: Twitter, href: SITE_CONFIG.socials.twitter, label: 'Twitter' },
                    { icon: Dribbble, href: SITE_CONFIG.socials.dribbble, label: 'Dribbble' },
                  ].map((soc, i) => {
                    const SocIcon = soc.icon;
                    return (
                      <a
                        key={i}
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-accent hover:border-slate-300 hover:scale-105 flex items-center justify-center transition-all shadow-2xs"
                        aria-label={soc.label}
                      >
                        <SocIcon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </FadeIn>

          {/* RIGHT SIDE LUXURY CONTACT FORM */}
          <FadeIn direction="right" className="lg:col-span-7">
            <Card variant="glass" className="p-8 sm:p-10 rounded-[36px] border-slate-200/90 shadow-luxury relative overflow-hidden">
              
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-indigo-400 to-gold" />

              <h4 className="text-2xl font-extrabold text-slate-900 mb-2">Send a Direct Message</h4>
              <p className="text-sm text-slate-500 mb-8 font-normal">
                Fill out the form below and I will respond to your inquiry promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputField
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />

                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <InputField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                />

                <InputField
                  label="Message"
                  name="message"
                  type="textarea"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                />

                {/* Status Messages */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold flex items-center gap-2"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                      <span>{errorMessage || 'Failed to send message. Please try again.'}</span>
                    </motion.div>
                  )}

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
                      <span>Thank you! Your message has been sent successfully. I will get back to you within 24 hours.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <Button
                  variant="primary"
                  size="lg"
                  icon={status === 'loading' ? Loader2 : Send}
                  fullWidth
                  disabled={status === 'loading'}
                  className="shadow-xl shadow-accent/20 mt-4"
                >
                  {status === 'loading' ? 'Sending Message...' : 'Send Message'}
                </Button>

              </form>

            </Card>
          </FadeIn>

        </div>

      </Container>
    </section>
  );
}
