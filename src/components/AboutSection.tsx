import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';

const AboutSection: React.FC = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        '.about-animate',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power3.out'
        }
      );
    }
  }, [inView]);
  
  return (
    <section ref={sectionRef} id="about" className="section bg-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary-500/10 rounded-full blur-3xl"></div>
      
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="about-animate section-title">About Innoventra</h2>
          <p className="about-animate text-xl text-neutral-300 max-w-3xl mx-auto">
            We are a team of passionate technologists dedicated to helping businesses transform and thrive in the digital age.
          </p>
        </div>
        
        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="about-animate order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">Our Mission</h3>
            <p className="text-neutral-300 mb-6">
              At Innoventra, our mission is to empower businesses with cutting-edge technology solutions that drive growth, innovation, and competitive advantage. We combine technical excellence with strategic thinking to deliver solutions that matter.
            </p>
            <p className="text-neutral-300 mb-6">
              Founded in 2018, we've quickly established ourselves as a trusted partner for businesses seeking digital transformation and technological excellence.
            </p>
            
            {/* Company values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-primary-400">Innovation</h4>
                <p className="text-sm text-neutral-400">We constantly explore emerging technologies to bring innovative solutions.</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-secondary-400">Excellence</h4>
                <p className="text-sm text-neutral-400">We deliver excellence in every project through rigorous quality standards.</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-accent-400">Collaboration</h4>
                <p className="text-sm text-neutral-400">We believe in strong partnerships with our clients for mutual success.</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <h4 className="font-bold text-lg mb-2 text-primary-400">Integrity</h4>
                <p className="text-sm text-neutral-400">We operate with transparency, honesty, and ethical principles.</p>
              </div>
            </div>
          </div>
          
          <div className="about-animate order-1 lg:order-2 relative">
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img 
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Innoventra team working together" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent"></div>
              
              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 p-6">
                <div className="glass px-4 py-3 rounded-lg inline-block">
                  <span className="text-sm font-medium">Established 2018</span>
                </div>
              </div>
            </div>
            
            {/* Floating achievements */}
            <div className="absolute -bottom-6 -right-6 glass p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold gradient-text counter" data-target="98">98</div>
                <div className="text-sm">
                  <div className="text-white">Client Satisfaction</div>
                  <div className="text-neutral-400">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default AboutSection;