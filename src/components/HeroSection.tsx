import React, { useEffect, useRef } from 'react';
import { ChevronRight, Code, Database, Cloud, Cpu, Shield, Zap, Monitor, Server, Smartphone } from 'lucide-react';
import { gsap } from 'gsap';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    console.log('HeroSection mounted', { title, subtitle });
    if (!heroRef.current) return;

    // Ensure elements are visible first
    gsap.set(['.hero-title', '.hero-subtitle', '.hero-cta', '.hero-visual'], {
      opacity: 1,
      visibility: 'visible'
    });

    const tl = gsap.timeline();

    // Animate hero elements
    tl.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.hero-subtitle', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6')
    .from('.hero-cta', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.4')
    .from('.hero-visual', {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: 'power3.out'
    }, '-=0.8')
    .from('.hero-grid-item', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.8');

    // Create floating animation for laptop
    gsap.to('.hero-visual-float', {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // Animate tech icons with different patterns
    gsap.to(['.tech-icon-1', '.tech-icon-4', '.tech-icon-7'], {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.3
    });

    gsap.to(['.tech-icon-2', '.tech-icon-5', '.tech-icon-8'], {
      x: 8,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.4
    });

    gsap.to(['.tech-icon-3', '.tech-icon-6', '.tech-icon-9'], {
      rotation: 5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.2
    });

    // Animate particles
    gsap.to('.particle', {
      y: -20,
      x: 10,
      rotation: 360,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: {
        each: 0.2,
        from: 'random'
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen relative flex items-center pt-20 overflow-hidden bg-background"
      style={{
        background: 'radial-gradient(circle at 10% 20%, rgba(26, 32, 63, 1) 0%, rgba(10, 11, 20, 1) 90%)',
        minHeight: '100vh'
      }}
    >
      {/* Background particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="particle absolute rounded-full bg-white/5 backdrop-blur-md"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.2
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <div>
            <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">{title}</span>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-neutral-300 mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="hero-cta btn btn-primary">
                Get Started
              </a>
              <a href="#services" className="hero-cta btn btn-outline flex items-center justify-center">
                Our Services <ChevronRight size={16} className="ml-1" />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">
              <div className="hero-grid-item glass rounded-lg p-4">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-neutral-400">Years Experience</div>
              </div>
              <div className="hero-grid-item glass rounded-lg p-4">
                <div className="text-3xl font-bold gradient-text">100+</div>
                <div className="text-sm text-neutral-400">Clients Worldwide</div>
              </div>
              <div className="hero-grid-item glass rounded-lg p-4">
                <div className="text-3xl font-bold gradient-text">250+</div>
                <div className="text-sm text-neutral-400">Projects Completed</div>
              </div>
            </div>
          </div>

          {/* Hero visual - Technical Scene */}
          <div className="hero-visual relative flex items-center justify-center">
            <div className="hero-visual-float relative z-10 w-full max-w-lg mx-auto">

              {/* Main Laptop */}
              <div className="relative">
                {/* Laptop Base */}
                <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg p-1 shadow-2xl transform perspective-1000 rotate-x-12">
                  {/* Laptop Screen */}
                  <div className="bg-gradient-to-br from-neutral-900 to-black rounded-lg p-4 relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary-900/30 to-secondary-900/30 rounded border border-white/10 relative overflow-hidden">

                      {/* Code Editor Interface */}
                      <div className="absolute top-0 left-0 right-0 h-6 bg-neutral-800/80 flex items-center px-2 space-x-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>

                      {/* Code Lines */}
                      <div className="mt-6 p-3 space-y-1 text-xs font-mono">
                        <div className="flex space-x-2">
                          <span className="text-neutral-500">1</span>
                          <span className="text-blue-400">import</span>
                          <span className="text-green-400">React</span>
                          <span className="text-white">from</span>
                          <span className="text-orange-400">'react'</span>
                        </div>
                        <div className="flex space-x-2">
                          <span className="text-neutral-500">2</span>
                          <span className="text-purple-400">const</span>
                          <span className="text-blue-300">App</span>
                          <span className="text-white">=</span>
                          <span className="text-yellow-400">()</span>
                          <span className="text-white">{'=> {'}</span>
                        </div>
                        <div className="flex space-x-2">
                          <span className="text-neutral-500">3</span>
                          <span className="text-white ml-4">return</span>
                          <span className="text-yellow-400">(</span>
                        </div>
                        <div className="flex space-x-2">
                          <span className="text-neutral-500">4</span>
                          <span className="text-red-400 ml-8">{'<div'}</span>
                          <span className="text-green-400">className</span>
                          <span className="text-white">=</span>
                          <span className="text-orange-400">"app"</span>
                          <span className="text-red-400">{'>'}</span>
                        </div>
                        <div className="flex space-x-2">
                          <span className="text-neutral-500">5</span>
                          <span className="text-blue-400 ml-12">Innovation</span>
                        </div>
                      </div>

                      {/* Terminal Cursor */}
                      <div className="absolute bottom-4 left-6 w-2 h-4 bg-green-400 animate-pulse"></div>
                    </div>
                  </div>

                  {/* Laptop Keyboard */}
                  <div className="h-4 bg-gradient-to-b from-neutral-700 to-neutral-800 rounded-b-lg"></div>
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute -top-8 -left-8 tech-icon-1">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center">
                    <Cloud size={24} className="text-blue-400" />
                  </div>
                </div>

                <div className="absolute -top-4 -right-12 tech-icon-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 flex items-center justify-center">
                    <Database size={20} className="text-green-400" />
                  </div>
                </div>

                <div className="absolute top-1/2 -left-16 tech-icon-3">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-400/30 flex items-center justify-center">
                    <Code size={28} className="text-purple-400" />
                  </div>
                </div>

                <div className="absolute bottom-8 -right-8 tech-icon-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-400/30 flex items-center justify-center">
                    <Cpu size={22} className="text-orange-400" />
                  </div>
                </div>

                <div className="absolute -bottom-6 left-1/4 tech-icon-5">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-400/30 flex items-center justify-center">
                    <Shield size={18} className="text-red-400" />
                  </div>
                </div>

                <div className="absolute top-1/4 -right-6 tech-icon-6">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center">
                    <Zap size={16} className="text-cyan-400" />
                  </div>
                </div>

                {/* Additional floating elements */}
                <div className="absolute top-0 right-1/4 tech-icon-7">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-pink-500/20 to-pink-600/20 backdrop-blur-sm border border-pink-400/30 flex items-center justify-center">
                    <Monitor size={14} className="text-pink-400" />
                  </div>
                </div>

                <div className="absolute bottom-1/4 left-0 tech-icon-8">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-indigo-600/20 backdrop-blur-sm border border-indigo-400/30 flex items-center justify-center">
                    <Server size={20} className="text-indigo-400" />
                  </div>
                </div>

                <div className="absolute -top-2 left-1/3 tech-icon-9">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-teal-500/20 to-teal-600/20 backdrop-blur-sm border border-teal-400/30 flex items-center justify-center">
                    <Smartphone size={12} className="text-teal-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Background Tech Elements */}
            <div className="absolute top-1/4 left-0 w-20 h-20 bg-primary-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-secondary-500/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-accent-500/10 rounded-full blur-xl"></div>

            {/* Connection Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2023F9" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#2EE8FF" stopOpacity="0.5"/>
                  </linearGradient>
                </defs>
                <path d="M50,100 Q200,50 350,150" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" className="animate-pulse"/>
                <path d="M100,300 Q200,250 300,200" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" className="animate-pulse"/>
                <path d="M80,200 Q200,180 320,250" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" className="animate-pulse"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Hero bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;