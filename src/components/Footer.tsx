import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <a href="#home" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="font-heading text-xl font-bold">I</span>
              </div>
              <span className="font-heading text-2xl font-bold">Innoventra</span>
            </a>
            <p className="text-neutral-400 mb-6">
              Empowering businesses with future-ready IT solutions for digital transformation and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-neutral-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#case-studies" className="text-neutral-400 hover:text-white transition-colors duration-300">Case Studies</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-xl mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors duration-300">Cloud Computing</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors duration-300">AI Solutions</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors duration-300">Web & Mobile Development</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors duration-300">DevOps</a></li>
              <li><a href="#services" className="text-neutral-400 hover:text-white transition-colors duration-300">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-500 mt-1 flex-shrink-0" />
                <span className="text-neutral-400">Tech Park, Sector 62, Noida, Uttar Pradesh 201309, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-neutral-400">+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-500 flex-shrink-0" />
                <span className="text-neutral-400">info@innoventratechsolutions.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-heading text-xl mb-2">Stay Updated</h4>
              <p className="text-neutral-400">Subscribe to our newsletter for the latest tech insights and updates.</p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-neutral-800 border border-neutral-700 px-4 py-3 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="btn btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-neutral-500 text-center">
          <p>&copy; {new Date().getFullYear()} Innoventra Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;