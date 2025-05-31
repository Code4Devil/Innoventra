import React, { useEffect} from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { Quote } from 'lucide-react';
import testimonials from '../data/testimonials';

const TestimonialsSection: React.FC = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        '.testimonials-title',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
      
      gsap.fromTo(
        '.testimonials-description',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );
      
      gsap.fromTo(
        '.testimonial-card',
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
    <section ref={sectionRef} className="section bg-gradient-to-b from-neutral-900 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary-500/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="testimonials-title section-title">What Our Clients Say</h2>
          <p className="testimonials-description text-xl text-neutral-300 max-w-3xl mx-auto">
            Hear directly from our clients about their experience working with Innoventra.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card glass rounded-xl p-6 relative">
              <Quote size={32} className="text-primary-500/20 absolute top-6 left-6" />
              <div className="relative z-10">
                <p className="text-neutral-300 mb-6 relative z-10">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-400">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Logo Cloud */}
        <div className="mt-20">
          <h3 className="testimonials-title text-xl font-medium text-center mb-10 text-neutral-300">
            Trusted by Leading Companies
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[
              'TechCorp',
              'InnovateLabs',
              'DataFlow Inc',
              'CloudTech',
              'NextGen Solutions',
              'Digital Dynamics'
            ].map((company, i) => (
              <div key={i} className="h-12 flex items-center justify-center">
                <div className="w-32 h-8 rounded-md bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                  <div className="text-neutral-300 font-heading font-medium text-sm">{company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialsSection;