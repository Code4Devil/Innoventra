import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Clock, DollarSign, ArrowRight } from 'lucide-react';
import services from '../data/services';
import ServiceIcon from '../components/ServiceIcon';
import { useFadeIn, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { initializeAnimations } from '../utils/animation';

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.slug === id || s.id.toString() === id);

  const heroRef = useFadeIn({ delay: 0.2 });
  const contentRef = useStaggeredAnimation('.content-section', { stagger: 0.2, delay: 0.4 });
  const featuresRef = useStaggeredAnimation('.feature-item', { stagger: 0.1, delay: 0.6 });

  useEffect(() => {
    initializeAnimations();
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-neutral-400 mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="btn btn-primary">
            <ArrowLeft size={16} className="mr-2" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <div ref={heroRef} className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary-500/10 rounded-full blur-3xl"></div>

        <div className="container relative">
          <div className="mb-8">
            <Link
              to="/services"
              className="inline-flex items-center text-neutral-400 hover:text-white transition-colors duration-300"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Services
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                <ServiceIcon iconName={service.icon} size={40} className="text-white" />
              </div>
              <h1 className="page-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                {service.title}
              </h1>
              <p className="section-subtitle text-xl text-neutral-300 mb-8">
                {service.fullDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/consultation" className="btn btn-outline">
                  Free Consultation
                </Link>
              </div>
            </div>

            <div className="image-reveal">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div ref={contentRef} className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Features */}
            <div className="content-section">
              <h2 className="section-title text-3xl font-bold mb-8">Key Features</h2>
              <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="feature-item flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={14} className="text-primary-400" />
                    </div>
                    <span className="text-neutral-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="content-section">
              <h2 className="section-title text-3xl font-bold mb-8">Technologies We Use</h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="content-section">
              <h2 className="section-title text-3xl font-bold mb-8">Benefits</h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-secondary-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check size={14} className="text-secondary-400" />
                    </div>
                    <span className="text-neutral-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="content-section">
              <h2 className="section-title text-3xl font-bold mb-8">Our Process</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{step}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Project Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <DollarSign size={20} className="text-primary-400" />
                  <div>
                    <p className="text-sm text-neutral-400">Starting Price</p>
                    <p className="font-semibold">{service.pricing}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-secondary-400" />
                  <div>
                    <p className="text-sm text-neutral-400">Duration</p>
                    <p className="font-semibold">{service.duration}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="glass rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-neutral-400 mb-6">
                Let's discuss your project requirements and create a custom solution for your business.
              </p>
              <div className="space-y-3">
                <Link to="/contact" className="btn btn-primary w-full">
                  Start Your Project
                </Link>
                <Link to="/consultation" className="btn btn-outline w-full">
                  Free Consultation
                </Link>
              </div>
            </div>

            {/* Related Services */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Related Services</h3>
              <div className="space-y-4">
                {services
                  .filter(s => s.id !== service.id)
                  .slice(0, 3)
                  .map((relatedService) => (
                    <Link
                      key={relatedService.id}
                      to={`/services/${relatedService.slug}`}
                      className="block p-3 rounded-lg hover:bg-white/5 transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${relatedService.color} flex items-center justify-center`}>
                          <ServiceIcon iconName={relatedService.icon} size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium">{relatedService.title}</h4>
                          <p className="text-sm text-neutral-400 line-clamp-2">
                            {relatedService.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;