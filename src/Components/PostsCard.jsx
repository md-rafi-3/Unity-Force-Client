import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const PostsCard = ({ post }) => {
  const { title, image, category, location, deadline } = post;

  return (
    <div className="text-white border border-blue-300 hover:border-blue-500 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl  group">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Card Body */}
      <div className="p-4 bg-base-200 text-base-300 space-y-2">
        {/* Category Badge */}
        <span className="inline-block badge text-sm px-3 py-1 rounded-full font-medium bg-primary text-white">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-semibold">{title}</h3>

        {/* Location */}
        <div className="flex items-center text-sm gap-1 opacity-70">
          <FaMapMarkerAlt className="text-primary" />
          <span>{location}</span>
        </div>

        {/* Deadline */}
        <div className="flex items-center text-sm gap-1 opacity-70">
          <FaCalendarAlt className="text-primary" />
          <span>
            Deadline:{' '}
            {new Date(deadline).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
        </div>
      </div>

      {/* Button */}
      <div className="px-4 bg-base-200 pb-4">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PostsCard;
