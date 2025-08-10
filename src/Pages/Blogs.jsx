import React from 'react';
import { FiPlus } from "react-icons/fi";
import { Link, useLoaderData } from "react-router";
import BlogCard from '../Components/BlogCard';

export default function BlogPage() {
    const blogs=useLoaderData()
  
  

  
  

  return (
    <div className="bg-base-200 text-base-content">
      {/* Page content starts below navbar; give padding-top equal to header height */}
      <main className="pt-5">
        <div className="max-w-11/12 mx-auto px-6">
          {/* Hero */}
          <section className="rounded-lg bg-gradient-to-r from-primary to-secondary text-white p-8 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-extrabold">
                  Welcome to the Unity Force Blog
                </h1>
                <p className="mt-3 max-w-xl opacity-90">
                  Learn practical tips, tutorials and stories from developers and
                  creators. Click <strong>Add Blog</strong> to create a new post.
                </p>
                <div className="mt-4">
                 <Link to="/add-blog"> <button  className="btn btn-outline btn-light">
                    <FiPlus className="mr-2" /> New Post
                  </button></Link>
                </div>
              </div>

              <div className="w-full md:w-1/3">
                <img
                  src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=60"
                  alt="hero"
                  className="rounded-lg shadow-md object-cover w-full h-48 md:h-40"
                />
              </div>
            </div>
          </section>

          {/* Blog grid */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Latest Posts</h2>
              <div className="text-sm text-muted">{blogs.length} posts</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => <BlogCard blog={blog} key={blog._id}></BlogCard>)}
            </div>
          </section>

          {/* Footer spacer */}
          <div className="h-24" />
        </div>
      </main>

    </div>
  );
}
