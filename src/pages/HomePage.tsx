import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import { initializeAnimations } from '../utils/animation';

const HomePage: React.FC = () => {
  useEffect(() => {
    console.log('HomePage mounted');
    initializeAnimations();
  }, []);

  return (
    <main>
      <HeroSection
        title="Empowering Businesses with Future-Ready IT Solutions"
        subtitle="We help businesses transform and thrive in the digital age with cutting-edge technology solutions tailored to your needs."
      />
      <AboutSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </main>
  );
};

export default HomePage;