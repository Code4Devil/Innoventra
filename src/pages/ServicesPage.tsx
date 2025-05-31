import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import services from '../data/services';
import ServiceIcon from '../components/ServiceIcon';
import { useFadeIn, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { initializeAnimations } from '../utils/animation';

const ServicesPage: React.FC = () => {
  const heroRef = useFadeIn({ delay: 0.2 });
  const servicesRef = useStaggeredAnimation('.service-card', { stagger: 0.15, delay: 0.4 });

  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container py-16">
        <div ref={heroRef}>
          <h1 className="page-title text-4xl md:text-5xl font-bold mb-8 gradient-text">Our Services</h1>
          <p className="section-subtitle text-xl text-neutral-300 mb-12 max-w-3xl">
            Explore our comprehensive range of technology solutions designed to help your business innovate and grow.
          </p>
        </div>

        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="service-card glass rounded-xl p-6 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <ServiceIcon iconName={service.icon} size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-neutral-400 mb-4">{service.description}</p>
              <span className="inline-flex items-center text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
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
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;