import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useFadeIn, useStaggeredAnimation } from '../hooks/useScrollAnimation';
import { initializeAnimations } from '../utils/animation';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });

  const heroRef = useFadeIn({ delay: 0.2 });
  const formRef = useFadeIn({ delay: 0.4 });
  const contactInfoRef = useStaggeredAnimation('.contact-info-item', { stagger: 0.1, delay: 0.6 });

  useEffect(() => {
    initializeAnimations();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: ''
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container py-12">
        <div ref={heroRef} className="text-center mb-12">
          <h1 className="page-title text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get in Touch
          </h1>
          <p className="section-subtitle text-xl text-neutral-300 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium mb-2">Service You're Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Select a service</option>
                  <option value="cloud">Cloud Computing</option>
                  <option value="ai">AI Solutions</option>
                  <option value="web">Web & Mobile Development</option>
                  <option value="devops">DevOps</option>
                  <option value="security">Cybersecurity</option>
                  <option value="enterprise">Enterprise IT Services</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Tell us about your project or requirements..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full flex items-center justify-center">
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="glass rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                      <Mail size={18} className="text-primary-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-neutral-400">info@innoventratechsolutions.in</p>
                    <p className="text-neutral-400">support@innoventratechsolutions.in</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-secondary-500/10 flex items-center justify-center">
                      <Phone size={18} className="text-secondary-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-neutral-400">+91 9876543210</p>
                    <p className="text-neutral-400">+91 8765432109</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-accent-500/10 flex items-center justify-center">
                      <MapPin size={18} className="text-accent-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <p className="text-neutral-400">Tech Park, Sector 62</p>
                    <p className="text-neutral-400">Noida, Uttar Pradesh 201309, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="glass rounded-xl overflow-hidden aspect-video">
              <img 
                src="https://images.pexels.com/photos/4065891/pexels-photo-4065891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Office location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;