import React from 'react';
import { FaRing, FaBirthdayCake, FaBriefcase, FaUsers } from 'react-icons/fa';

const FeatureSection = () => {
  const eventTypes = [
    {
      icon: FaRing,
      title: 'Weddings',
      description: 'Elegant budgeting for your dream day'
    },
    {
      icon: FaBirthdayCake,
      title: 'Birthday Parties',
      description: 'Fun celebrations without financial stress'
    },
    {
      icon: FaBriefcase,
      title: 'Corporate Events',
      description: 'Professional planning, precise budgeting'
    },
    {
      icon: FaUsers,
      title: 'Conferences',
      description: 'Strategic financial management'
    }
  ];

  return (
    <section id="event-types" className="py-16 px-6 bg-[rgb(15,15,15)]">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl font-bold text-amber-500 mb-12">Plan Any Event with Ease</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {eventTypes.map((eventType, index) => (
            <div
              key={index}
              className="bg-[rgb(24,24,24)] p-8 rounded-xl transition-transform duration-300 hover:-translate-y-3"
            >
              <eventType.icon className="mx-auto mb-4 text-amber-500 text-4xl" />
              <h3 className="text-2xl font-bold text-amber-500 mb-2">{eventType.title}</h3>
              <p className="text-gray-400">{eventType.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;