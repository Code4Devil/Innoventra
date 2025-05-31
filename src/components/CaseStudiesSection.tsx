import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ExternalLink } from 'lucide-react';
import caseStudies from '../data/caseStudies';

const CaseStudiesSection: React.FC = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        '.case-studies-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
      
      gsap.fromTo(
        '.case-studies-description',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );
      
      gsap.fromTo(
        '.case-study-card',
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0, 
          stagger: 0.15,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out'
        }
      );
    }
  }, [inView]);

  return (
    <section ref={sectionRef} id="case-studies" className="section bg-neutral-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="case-studies-title section-title">Case Studies</h2>
          <p className="case-studies-description text-xl text-neutral-300 max-w-3xl mx-auto">
            Explore how we've helped businesses achieve their technology goals and drive remarkable results.
          </p>
        </div>
        
        <div className="overflow-x-auto pb-8 case-studies-container">
          <div className="flex space-x-6 min-w-max lg:min-w-0 lg:grid lg:grid-cols-2 lg:gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="case-study-card glass rounded-xl overflow-hidden w-80 lg:w-auto flex-shrink-0">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary-500/80 backdrop-blur-sm">
                      {study.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-primary-400 text-sm mb-3">Client: {study.client}</p>
                  <p className="text-neutral-400 text-sm mb-4">{study.description}</p>
                  
                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 rounded-md text-xs font-medium bg-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href="#" 
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300"
                  >
                    View Case Study
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="#contact" className="btn btn-outline">
            View All Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;