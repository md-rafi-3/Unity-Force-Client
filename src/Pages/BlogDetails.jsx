import React from "react";
import {
  FaMapMarkerAlt,
  FaUser,
  FaEnvelope,
  FaCalendarAlt,
  FaArrowLeft,
  FaTags,
  FaUsers,
  FaMoon,
  FaSun
} from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router";

const BlogDetails = () => {
  const blog = useLoaderData();
  const navigate = useNavigate();

 

  return (
    <div className="container mx-auto p-3 flex flex-col md:flex-row gap-5 bg-base-100 min-h-screen">
      
      {/* Left side */}
      <div className="md:w-2/3 bg-base-200 p-6 rounded-lg shadow-lg">
        
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => navigate(-1)}
            className="btn text-white btn-sm btn-primary flex items-center gap-2"
          >
            <FaArrowLeft /> Back
          </button>

          
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-2">{blog.title}</h2>

        {/* Date */}
        <p className="text-gray-500 mb-4 flex items-center gap-2">
          <FaCalendarAlt className="text-primary" />
          {blog.date}
        </p>

        {/* Image */}
        <img
          src={blog.image || "https://via.placeholder.com/800x450?text=No+Image"}
          alt={blog.title}
          className="w-full h-auto object-cover rounded-md mb-4"
        />

        {/* Category */}
        <p className="badge badge-secondary mb-4">{blog.category}</p>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
          {blog.content}
        </p>

        {/* Volunteers */}
        {blog.volunteers && blog.volunteers.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold flex items-center gap-2 mb-2">
              <FaUsers className="text-primary" /> Volunteers
            </h3>
            <ul className="list-disc ml-6 text-gray-700">
              {blog.volunteers.map((v, idx) => (
                <li key={idx}>
                  <span className="font-medium">{v.name}</span> - {v.role} (
                  <a href={`mailto:${v.contact}`} className="text-primary">
                    {v.contact}
                  </a>
                  )
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {blog.tags && blog.tags.length > 0 ? (
            blog.tags.map((tag, index) => (
              <span key={index} className="badge badge-outline flex items-center gap-1">
                <FaTags /> {tag}
              </span>
            ))
          ) : (
            <p className="text-gray-400">No Tags Available</p>
          )}
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-1/3 bg-base-200 p-3 rounded-lg shadow-md h-fit space-y-4">
        
        {/* Author */}
        <div className="flex items-center gap-2">
          <FaUser className="text-primary" />
          <span className="font-medium">{blog.author}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-primary" />
          <span>{blog.location}</span>
        </div>

        {/* Publish Date */}
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-primary" />
          <span>{blog.publishDate}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
