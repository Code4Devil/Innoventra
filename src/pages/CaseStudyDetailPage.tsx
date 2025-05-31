import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import caseStudies from '../data/caseStudies';
import { ArrowLeft, ExternalLink, Check, Clock, Users, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useFadeIn, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { initializeAnimations } from '../utils/animation';

const CaseStudyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies.find(study => study.slug === id || study.id.toString() === id);

  const heroRef = useFadeIn({ delay: 0.2 });
  const contentRef = useStaggeredAnimation('.content-section', { stagger: 0.2, delay: 0.4 });
  const resultsRef = useStaggeredAnimation('.result-item', { stagger: 0.1, delay: 0.6 });

  useEffect(() => {
    initializeAnimations();
  }, []);

  if (!caseStudy) {
    return (
      <div className="container py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
        <p className="text-neutral-400 mb-8">The case study you're looking for doesn't exist.</p>
        <Link to="/case-studies" className="btn btn-primary">
          View All Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[70vh] overflow-hidden">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <Link
              to="/case-studies"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Case Studies
            </Link>
            <div className="max-w-4xl">
              <div className="inline-block px-4 py-2 rounded-full bg-primary-500/20 text-primary-300 text-sm font-medium mb-4">
                {caseStudy.category}
              </div>
              <h1 className="page-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
                {caseStudy.title}
              </h1>
              <p className="section-subtitle text-xl text-neutral-300 mb-6">
                {caseStudy.fullDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {caseStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-white/10 border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-neutral-400">
                <div className="flex items-center">
                  <Building size={16} className="mr-2" />
                  {caseStudy.client}
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  {caseStudy.duration}
                </div>
                <div className="flex items-center">
                  <Users size={16} className="mr-2" />
                  {caseStudy.teamSize}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <div className="content-section">
              <h2 className="section-title text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-neutral-300 text-lg leading-relaxed">{caseStudy.description}</p>
            </div>

            {/* Challenge */}
            <div className="content-section glass rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-400">The Challenge</h3>
              <p className="text-neutral-300 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="content-section glass rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">Our Solution</h3>
              <p className="text-neutral-300 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>

            {/* Results */}
            <div className="content-section glass rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-400">Results & Impact</h3>
              <div ref={resultsRef} className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="result-item flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={14} className="text-green-400" />
                    </div>
                    <span className="text-neutral-300">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {caseStudy.gallery && caseStudy.gallery.length > 0 && (
              <div className="content-section">
                <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.gallery.map((image, index) => (
                    <div key={index} className="image-reveal">
                      <img
                        src={image}
                        alt={`${caseStudy.title} - Image ${index + 1}`}
                        className="w-full h-64 object-cover rounded-xl shadow-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Details */}
            <div className="glass rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Project Details</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-neutral-400 mb-2">Industry</h4>
                  <p className="font-semibold">{caseStudy.industry}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-400 mb-2">Client</h4>
                  <p className="font-semibold">{caseStudy.client}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-400 mb-2">Project Type</h4>
                  <p className="font-semibold">{caseStudy.projectType}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-400 mb-2">Duration</h4>
                  <p className="font-semibold">{caseStudy.duration}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-400 mb-2">Team Size</h4>
                  <p className="font-semibold">{caseStudy.teamSize}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-400 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-white/5 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <Link
                    to="/contact"
                    className="btn btn-primary w-full flex items-center justify-center"
                  >
                    Start Similar Project
                    <ExternalLink size={16} className="ml-2" />
                  </Link>
                  <Link
                    to="/consultation"
                    className="btn btn-outline w-full"
                  >
                    Free Consultation
                  </Link>
                </div>
              </div>
            </div>

            {/* Related Case Studies */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Related Case Studies</h3>
              <div className="space-y-4">
                {caseStudies
                  .filter(study => study.id !== caseStudy.id && study.category === caseStudy.category)
                  .slice(0, 2)
                  .map((relatedStudy) => (
                    <Link
                      key={relatedStudy.id}
                      to={`/case-studies/${relatedStudy.slug}`}
                      className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
                    >
                      <div className="flex space-x-3">
                        <img
                          src={relatedStudy.image}
                          alt={relatedStudy.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="font-medium mb-1">{relatedStudy.title}</h4>
                          <p className="text-sm text-neutral-400 mb-1">{relatedStudy.client}</p>
                          <p className="text-xs text-neutral-500">{relatedStudy.category}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
              <Link
                to="/case-studies"
                className="block text-center text-primary-400 hover:text-primary-300 text-sm font-medium mt-4"
              >
                View All Case Studies →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailPage;