import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import ServiceIcon from './ServiceIcon';
import services from '../data/services';

const ServicesSection: React.FC = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        '.services-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
      
      gsap.fromTo(
        '.services-description',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );
      
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.15,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out'
        }
      );
    }
  }, [inView]);
  
  return (
    <section ref={sectionRef} id="services" className="section relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-neutral-900"></div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="services-title section-title">Our Services</h2>
          <p className="services-description text-xl text-neutral-300 max-w-3xl mx-auto">
            We offer a comprehensive suite of technology solutions to help your business innovate, transform, and grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card glass rounded-xl p-6 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <ServiceIcon iconName={service.icon} size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-neutral-400 mb-4">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        {/* Technologies Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 gradient-text services-title">
            Technologies We Work With
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'Python', icon: '🐍' },
              { name: 'AWS', icon: '☁️' },
              { name: 'Google Cloud', icon: '☁️' },
              { name: 'Azure', icon: '☁️' },
              { name: 'Kubernetes', icon: '🚢' },
              { name: 'Docker', icon: '🐳' },
              { name: 'TensorFlow', icon: '🧠' },
              { name: 'GraphQL', icon: '⬢' },
              { name: 'MongoDB', icon: '🍃' },
              { name: 'PostgreSQL', icon: '🐘' }
            ].map((tech, index) => (
              <div 
                key={index} 
                className="service-card glass rounded-lg p-4 text-center hover:bg-white/5 transition-colors duration-300"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-sm font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;