import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "How to start gardening: a beginner's guide",
      excerpt:
        "Simple steps to start your home garden, what to plant first and how to keep them alive.",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "10 productivity tips for developers",
      excerpt:
        "Short, actionable tips to stay focused and ship code faster without burning out.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "Designing accessible UI in 2025",
      excerpt:
        "Accessibility is not optional — learn the basics to make your app usable for everyone.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ title: "", excerpt: "", image: "" });

  function openModal() {
    setForm({ title: "", excerpt: "", image: "" });
    setIsModalOpen(true);
    // prevent body scroll when modal open (optional)
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  }

  function handleChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function handleAdd(e) {
    e.preventDefault();
    if (!form.title.trim() || !form.excerpt.trim()) return;
    const newBlog = {
      id: Date.now(),
      title: form.title.trim(),
      excerpt: form.excerpt.trim(),
      image:
        form.image.trim() ||
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
    };
    setBlogs((p) => [newBlog, ...p]);
    closeModal();
  }

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
              {blogs.map((b) => (
                <article key={b.id} className="card bg-base-100 shadow hover:shadow-lg transition">
                  <figure>
                    <img src={b.image} alt={b.title} className="w-full h-44 object-cover rounded-t-lg" />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">{b.title}</h3>
                    <p className="text-sm text-muted">{b.excerpt}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary btn-sm">See more</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Footer spacer */}
          <div className="h-24" />
        </div>
      </main>

      {/* Modal (DaisyUI style) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="modal modal-open">
            <div className="modal-box max-w-2xl">
              <h3 className="font-bold text-lg">Add New Blog</h3>
              <form onSubmit={handleAdd} className="space-y-3 mt-3">
                <div>
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Write a catchy title"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Short excerpt</span>
                  </label>
                  <textarea
                    name="excerpt"
                    value={form.excerpt}
                    onChange={handleChange}
                    placeholder="Write a short description (2-3 lines)"
                    className="textarea textarea-bordered w-full"
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">Image URL (optional)</span>
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="modal-action">
                  <button type="button" onClick={closeModal} className="btn btn-ghost">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add Blog
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* backdrop */}
          <button
            onClick={closeModal}
            className="fixed inset-0 bg-black/40"
            aria-hidden
          />
        </div>
      )}
    </div>
  );
}
