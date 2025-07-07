import React from 'react';
import { FaUsers, FaHeart, FaBrain, FaLink } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

const glowVariants = {
  animate: {
    boxShadow: [
      '0 0 0px rgba(224,93,23,0)',
      '0 0 8px rgba(224,93,23,0.3)',
      '0 0 12px rgba(224,93,23,0.4)',
      '0 0 8px rgba(224,93,23,0.3)',
      '0 0 0px rgba(224,93,23,0)',
    ],
    borderColor: ['#eee', '#E05D17', '#f17e31', '#E05D17', '#eee'],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const BenefitsSection = () => {
  return (
    <section className="py-16 px-3 max-w-7xl mx-auto bg-base-100 text-base-content">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-base-300 font-bold mb-3 ">
          Why Volunteer With Us?
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Discover the meaningful advantages of giving your time and heart to others.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.id}
            variants={glowVariants}
            animate="animate"
            whileHover={{ scale: 1.025 }}
            className="bg-white dark:bg-base-200 p-6 rounded-xl shadow border border-gray-300 dark:border-gray-700 text-center"
          >
           <div className='flex justify-center items-center'> {benefit.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
