import { FaUsers, FaHeart, FaAward, FaClock } from "react-icons/fa";
import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    icon: <FaUsers size={28} />,
    value: 2500,
    suffix: "+",
    label: "Active Volunteers",
  },
  {
    id: 2,
    icon: <FaHeart size={28} />,
    value: 850,
   
    label: "Opportunities Created",
  },
  {
    id: 3,
    icon: <FaAward size={28} />,
    value: 10000,

    label: "Lives Impacted",
  },
  {
    id: 4,
    icon: <FaClock size={28} />,
    value: 25000,
   
    label: "Hours Volunteered",
  },
];

const CountDown = () => {
  return (
    <section className="bg-base-100 py-16 px-4">
     
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-base-300 mb-2">Our Impact in Numbers</h2>
        <p className="text-gray-500 text-l">
          Here's a quick look at how we're making a difference together.
        </p>
      </div>

 
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center space-y-3">
            <div className="bg-primary text-white p-3 rounded-md">{stat.icon}</div>
            <h3 className="text-3xl font-bold text-base-300">
              <CountUp end={stat.value} suffix='+' enableScrollSpy></CountUp>
            </h3>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountDown;
