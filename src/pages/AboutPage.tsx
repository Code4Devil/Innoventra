import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Ensure content is visible immediately
    setIsLoaded(true);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen bg-background pt-20 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary-500/10 rounded-full blur-3xl"></div>

        <div className="container py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              Innovating the Future of Technology
            </h1>
            <p className="text-xl text-neutral-300">
              At Innoventra, we're passionate about leveraging cutting-edge technology to help businesses transform and thrive in the digital age.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-16">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Mission</h2>
            <p className="text-neutral-300 mb-6">
              Our mission is to empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We combine technical excellence with strategic thinking to deliver solutions that create lasting impact.
            </p>
            <p className="text-neutral-300 mb-8">
              Founded in 2018, we've quickly established ourselves as a trusted partner for businesses seeking digital transformation and technological excellence.
            </p>

            {/* Company values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          <div className="order-1 lg:order-2 relative">
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
                <div className="text-3xl font-bold gradient-text">98%</div>
                <div className="text-sm">
                  <div className="text-white">Client Satisfaction</div>
                  <div className="text-neutral-400">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        


        {/* CTA Section */}
        <div className="glass rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Partner with us to leverage cutting-edge technology solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
            <Link to="/services" className="btn btn-outline flex items-center justify-center">
              Explore Our Services <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;