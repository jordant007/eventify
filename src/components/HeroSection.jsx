import React from 'react';
import { ChartPie, Calculator, Save } from 'lucide-react';

const HeroSection = () => {
  const advantages = [
    {
      icon: ChartPie,
      title: 'Detailed Breakdown',
      description: 'Intelligent budget allocation across key event categories'
    },
    {
      icon: Calculator,
      title: 'Instant Estimation',
      description: 'Real-time financial projections at your fingertips'
    },
    {
      icon: Save,
      title: 'Save & Collaborate',
      description: 'Store, share, and refine your event plans seamlessly'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-neutral-900 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amber-500 drop-shadow-lg">
            Craft Your Perfect Event, Perfectly Budgeted
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto">
            Transform your event vision into a meticulously planned reality with smart budget allocation and precise cost estimation
          </p>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="bg-black/60 p-6 rounded-xl transition-transform duration-300 hover:-translate-y-3 group"
              >
                <advantage.icon 
                  className="mx-auto mb-4 text-amber-500 size-12 group-hover:scale-110 transition-transform"
                />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-300">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action Button */}
          <a 
            href="/calculator.html" 
            className="inline-block px-8 py-4 bg-amber-500 text-black rounded-full font-bold text-lg 
                       hover:bg-amber-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Start Planning Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;