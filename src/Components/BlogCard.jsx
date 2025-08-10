import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { Link } from 'react-router';

const BlogCard = ({blog}) => {
    const displayText = blog.content.length > 150 ? blog.content.slice(0, 150) + "..." : blog.content;
    return (
       <article  className="card bg-base-100 shadow hover:shadow-lg transition">
                  <figure>
                    <img src={blog.image} alt={blog.title} className="w-full h-44 object-cover rounded-t-lg" />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">{blog.title}</h3>
                     <p className='flex items-center gap-1'> <FiCalendar className="text-primary" /> {blog.publishDate}</p>
                    <p className="text-sm text-muted">{displayText}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/blog-details/${blog._id}`} className="btn btn-primary btn-sm">See more</Link>
                    </div>
                  </div>
                </article>
    );
};

export default BlogCard;