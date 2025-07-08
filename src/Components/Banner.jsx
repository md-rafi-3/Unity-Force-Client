import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://i.ibb.co/spXLn7m3/pexels-shvetsa-5029859.jpg',
    title: 'Empower Your Community',
    subtitle: 'Lend a Hand. Uplift Lives.',
    cta: 'Start Volunteering',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1584467735871-98efc07b7b29',
    title: 'Be Someone’s Hope',
    subtitle: 'Inspire, Act, Impact.',
    cta: 'Join the Cause',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1605395722208-e52fc55b3d84',
    title: 'Serve with Purpose',
    subtitle: 'Stand Together. Serve Together.',
    cta: 'Get Involved',
  },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000 }}
        loop
        className="rounded-xl"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-[80vh] bg-cover bg-center flex items-center justify-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -60 }}
                      transition={{ duration: 0.8 }}
                      className="text-center text-white px-4"
                    >
                      <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg md:text-xl mb-6"
                      >
                        <Typewriter
                          words={[
                            slide.subtitle,
                            'Make an Impact. Be the Change.',
                            'Your Time Can Transform Lives.',
                          ]}
                          loop={true}
                          cursor
                          cursorStyle="|"
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={2000}
                        />
                      </motion.h2>

                      <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="bg-primary hover:bg-[#3f81c5]  text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all"
                      >
                        {slide.cta}
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="custom-prev absolute z-50 top-1/2 left-2 transform -translate-y-1/2  text-white bg-opacity-60 hover:bg-opacity-90 p-1.5 rounded-full shadow text-sm md:text-base">
        <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
      </button>
      <button className="custom-next z-50 absolute top-1/2 right-2 transform -translate-y-1/2  text-white bg-opacity-60 hover:bg-opacity-90 p-1.5 rounded-full shadow text-sm md:text-base">
        <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </div>
  );
};

export default Banner;
