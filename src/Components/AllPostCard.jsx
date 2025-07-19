import React, { use } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router';

const AllPostCard = ({allPostPromise}) => {
    const allPostData=use(allPostPromise)
    console.log(allPostData)
    return (
        <div data-aos="fade-up"
          data-aos-duration="800"
        data-aos-once="false"
        data-aos-delay={200} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

            {allPostData.map(post=>(<div data-aos="fade-up"
          data-aos-duration="800"
        data-aos-once="false"
        data-aos-delay={200} className="text-white border border-gray-300/40 dark:border-gray-600/40 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl  group">
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
            
                  {/* Card Body */}
                  <div className="p-4 bg-base-200 text-base-300 space-y-2">
                    {/* Category Badge */}
                    <span className="badge badge-primary text-white">
                      {post.category}
                    </span>
            
                    {/* Title */}
                    <h3 className="text-lg font-semibold">{post.title}</h3>
            
                    {/* Location */}
                    <div className="flex items-center text-sm gap-1 opacity-70">
                      <FaMapMarkerAlt className="text-primary" />
                      <span>{post.location}</span>
                    </div>
            
                    {/* Deadline */}
                    <div className="flex items-center text-sm gap-1 opacity-70">
                      <FaCalendarAlt className="text-primary" />
                      <span>
                        Deadline:{' '}
                        {new Date(post.deadline).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    </div>

                    <div className="flex items-center text-sm gap-1 opacity-70">
                                <FaUsers className="text-primary"/>
                                Volunteers needed:{' '}
                               <span>{post.volunteersNeeded} </span>
                              </div>
                  </div>
            
                  {/* Button */}
                  <div className="px-4 bg-base-200 pb-4">
                   <Link to={`/postDetails/${post._id}`}>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300">
          View Details
        </button></Link>
                  </div>
                </div>))}

            
        </div>
    );
};

export default AllPostCard;