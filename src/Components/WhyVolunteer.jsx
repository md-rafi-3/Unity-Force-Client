import React from 'react';
import { FaUsers, FaHeart, FaBrain, FaLink } from 'react-icons/fa';

const benefits = [
  {
    id: 1,
    icon: <FaUsers className="text-4xl text-primary mb-4" />,
    title: 'Connect with Your Community',
    description:
      'Meet new people and build a stronger bond with your local community by working together towards a common goal.',
  },
  {
    id: 2,
    icon: <FaHeart className="text-4xl text-primary mb-4" />,
    title: 'Improve Mental & Physical Health',
    description:
      'Volunteering can reduce stress, combat depression, and provide a sense of purpose. Many opportunities also keep you active.',
  },
  {
    id: 3,
    icon: <FaBrain className="text-4xl text-primary mb-4" />,
    title: 'Learn New Skills',
    description:
      'Gain valuable skills and experience that can be applied to your career and personal life. It\'s a great way to grow.',
  },
  {
    id: 4,
    icon: <FaLink className="text-4xl text-primary mb-4" />,
    title: 'Make a Real Impact',
    description:
      'Your time and effort can make a significant difference in the lives of others and the well-being of your community.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 px-3  bg-base-100 text-base-content max-w-7xl mx-auto text-center mb-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
          Why Volunteer With Us?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the meaningful advantages of giving your time and heart to others.
        </p>
      </div>

      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-white dark:bg-base-200 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 text-center border border-gray-100 dark:border-gray-700"
          >
            {benefit.icon}
            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
