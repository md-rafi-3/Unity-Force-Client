import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah L.",
    role: "Community Volunteer",
    text: "Volunteering through this platform was so easy and rewarding. I found a cause I'm passionate about and met amazing people.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Michael B.",
    role: "Animal Care Volunteer",
    text: "I wanted to help at an animal shelter, and Voluntier connected me with the perfect opportunity just a few miles from my home.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily C.",
    role: "Event Volunteer",
    text: "A great way to give back. The variety of opportunities is fantastic, from one-day events to longer-term commitments.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Jason K.",
    role: "Youth Mentor",
    text: "This platform made it so easy to connect with students who needed guidance. It’s truly fulfilling.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Priya S.",
    role: "Food Bank Volunteer",
    text: "I love being able to help my community. Signing up and getting started was incredibly simple.",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    name: "Carlos M.",
    role: "Environmental Volunteer",
    text: "We planted over 100 trees in one weekend. Voluntier helped organize everything smoothly!",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    name: "Amina R.",
    role: "Literacy Program Tutor",
    text: "Helping someone learn to read has been one of the most impactful things I’ve done.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Tomiko H.",
    role: "Senior Care Volunteer",
    text: "Spending time with elderly residents brought me so much joy. Highly recommend getting involved!",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Junaid A.",
    role: "Healthcare Support Volunteer",
    text: "I was able to assist at vaccination drives. It felt great to be part of something so important.",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    name: "Lucia G.",
    role: "Animal Rescue Volunteer",
    text: "Working with rescued animals gave me purpose. I’m grateful to this platform for the opportunity.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Nathan W.",
    role: "Disaster Relief Volunteer",
    text: "Being able to respond and help during floods was life-changing. The platform handled coordination so well.",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];

const VolunteerTestimonials = () => {
  return (
    <div className="py-10 px-3 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-2">What Our Volunteers Say</h2>
      <p className="text-center text-gray-500 mb-6 text-lg">
        Real stories from people making a difference in their communities.
      </p>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className="rounded-lg bg-base-200 shadow-md p-6 h-full border-2 border-blue-300 hover:border-blue-500 transition-all"
            >
              <p className="italic text-base-300 opacity-65 mb-4">"{item.text}"</p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <p className="font-bold text-base-300 opacity-80">{item.name}</p>
                  <p className="text-sm text-base-300 opacity-70">{item.role}</p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VolunteerTestimonials;
