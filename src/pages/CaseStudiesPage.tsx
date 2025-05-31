import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import caseStudies from '../data/caseStudies';
import { ArrowRight } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure content is visible immediately
    setIsLoaded(true);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen bg-background pt-20 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container py-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Case Studies</h1>
          <p className="text-xl text-neutral-300 mb-12 max-w-3xl">
            Explore how we've helped businesses achieve their technology goals and drive remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.slug}`}
              className="glass rounded-xl overflow-hidden hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group"
            >
              <div className="relative aspect-video">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover"
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
                
                <div className="inline-flex items-center text-primary-400 group-hover:text-primary-300 transition-colors duration-300">
                  View Case Study
                  <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;