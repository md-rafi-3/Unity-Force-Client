// src/components/AddBlog.jsx
import axios from "axios";
import React, { useContext, useState } from "react";
import { FiPlus, FiMapPin, FiTag, FiUser, FiCalendar, FiFolder, FiImage } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthConrext";

export default function AddBlog() {
  const {user}=useContext(AuthContext)
  const API_URL = "http://localhost:3000/add-blog";

  const emptyVolunteer = { name: "", role: "", contact: "" };

  const [form, setForm] = useState({
    title: "",
    author: user.displayName,
    date: new Date().toISOString().slice(0, 10),
    image: "",
    category: "",
    content: "",
    volunteers: [{ ...emptyVolunteer }],
    location: "",
    tags: [],
    newTag: "",
  });

  const [loading, setLoading] = useState(false);

  function updateField(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function handleVolunteerChange(idx, e) {
    const { name, value } = e.target;
    setForm((p) => {
      const volunteers = [...p.volunteers];
      volunteers[idx][name] = value;
      return { ...p, volunteers };
    });
  }

  function addVolunteer() {
    setForm((p) => ({
      ...p,
      volunteers: [...p.volunteers, { ...emptyVolunteer }],
    }));
  }

  function removeVolunteer(idx) {
    setForm((p) => {
      const volunteers = p.volunteers.filter((_, i) => i !== idx);
      return {
        ...p,
        volunteers:
          volunteers.length > 0 ? volunteers : [{ ...emptyVolunteer }],
      };
    });
  }

  function addTag() {
    const tag = form.newTag.trim();
    if (!tag) return;
    if (form.tags.includes(tag)) {
      setForm((p) => ({ ...p, newTag: "" }));
      Swal.fire({
        icon: "warning",
        title: "Duplicate Tag",
        text: "This tag already exists.",
        confirmButtonColor: "#3085d6",
      });
      return;
    }
    setForm((p) => ({ ...p, tags: [...p.tags, tag], newTag: "" }));
  }

  function removeTag(tagToRemove) {
    setForm((p) => ({
      ...p,
      tags: p.tags.filter((t) => t !== tagToRemove),
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.title.trim() || !form.author.trim() || !form.content.trim()) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Title, Author, and Content are required.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    const newBlog = {
      title: form.title.trim(),
      author: form.author.trim(),
      date: form.date,
      image:
        form.image.trim() ||
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60",
      category: form.category.trim() || "General",
      content: form.content.trim(),
      volunteers: form.volunteers
        .map((v) => ({
          name: v.name.trim(),
          role: v.role.trim(),
          contact: v.contact.trim(),
        }))
        .filter((v) => v.name || v.role || v.contact),
      location: form.location.trim(),
      tags: form.tags,
    };


    console.log(newBlog)
    newBlog.authorEmai=user.email;

    try {
      setLoading(true);
      const res = await axios.post(API_URL,newBlog)

      if (!res.data.insertedId) {
        throw new Error("Failed to save blog");
      }

      // const savedBlog = await res.json();

      Swal.fire({
        icon: "success",
        title: "Blog Saved",
        text: "Your blog has been added successfully.",
        confirmButtonColor: "#3085d6",
      });

      // onAdd && onAdd(savedBlog);

      setForm({
        title: "",
        author: "",
        date: new Date().toISOString().slice(0, 10),
        image: "",
        category: "",
        content: "",
        volunteers: [{ ...emptyVolunteer }],
        location: "",
        tags: [],
        newTag: "",
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong while saving the blog.",
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-base-100 p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <FiPlus className="text-primary" /> Add Volunteer Blog
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title + Author */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label htmlFor="title" className="label flex items-center gap-2">
              <FiFolder /> <span>Blog Title *</span>
            </label>
            <input
              id="title"
              name="title"
              value={form.title}
              onChange={updateField}
              placeholder="Enter blog title"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="author" className="label flex items-center gap-2">
              <FiUser /> <span>Author *</span>
            </label>
            <input
              id="author"
              name="author"
              value={form.author}
             
              onChange={updateField}
              placeholder="Author name"
              className="input input-bordered w-full"
              required
              readOnly
            />
          </div>
        </div>

        {/* Date + Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label htmlFor="date" className="label flex items-center gap-2">
              <FiCalendar /> <span>Date</span>
            </label>
            <input
              id="date"
              type="date"
              name="date"
              value={form.date}
              onChange={updateField}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label htmlFor="category" className="label flex items-center gap-2">
              <FiFolder /> <span>Category</span>
            </label>
            <input
              id="category"
              name="category"
              value={form.category}
              onChange={updateField}
              placeholder="Category (e.g. Environment)"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Image URL */}
        <div className="form-control">
          <label htmlFor="image" className="label flex items-center gap-2">
            <FiImage /> <span>Image URL</span>
          </label>
          <input
            id="image"
            name="image"
            value={form.image}
            onChange={updateField}
            placeholder="Image URL (optional)"
            className="input input-bordered w-full"
          />
        </div>

        {/* Location */}
        <div className="form-control">
          <label htmlFor="location" className="label flex items-center gap-2">
            <FiMapPin /> <span>Location</span>
          </label>
          <input
            id="location"
            name="location"
            value={form.location}
            onChange={updateField}
            placeholder="Location (e.g. Cox's Bazar)"
            className="input input-bordered w-full"
          />
        </div>

        {/* Content */}
        <div className="form-control">
          <label htmlFor="content" className="label">
            Content *
          </label>
          <textarea
            id="content"
            name="content"
            value={form.content}
            onChange={updateField}
            placeholder="Write the blog content"
            className="textarea textarea-bordered w-full"
            rows={6}
            required
          />
        </div>

        {/* Volunteers */}
        <div className="border rounded-md p-4">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-lg">Volunteers</h4>
            <button
              type="button"
              onClick={addVolunteer}
              className="btn btn-sm btn-outline"
            >
              Add Volunteer
            </button>
          </div>
          
          <div className="space-y-4">
            {form.volunteers.map((v, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-center gap-5"
              >
                <div className="form-control">
                  <label
                    htmlFor={`volunteer-name-${idx}`}
                    className="label text-xs"
                  >
                    Name
                  </label>
                  <input
                    id={`volunteer-name-${idx}`}
                    name="name"
                    value={v.name}
                    onChange={(e) => handleVolunteerChange(idx, e)}
                    placeholder="Name"
                    className="input input-sm input-bordered w-full"
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor={`volunteer-role-${idx}`}
                    className="label text-xs"
                  >
                    Role
                  </label>
                  <input
                    id={`volunteer-role-${idx}`}
                    name="role"
                    value={v.role}
                    onChange={(e) => handleVolunteerChange(idx, e)}
                    placeholder="Role"
                    className="input input-sm input-bordered w-full"
                  />
                </div>
                <div className="form-control">
                  <label
                    htmlFor={`volunteer-contact-${idx}`}
                    className="label text-xs"
                  >
                    Contact
                  </label>
                  <input
                    id={`volunteer-contact-${idx}`}
                    name="contact"
                    value={v.contact}
                    onChange={(e) => handleVolunteerChange(idx, e)}
                    placeholder="Contact (email/phone)"
                    className="input input-sm input-bordered w-full"
                  />
                </div>
                <div className="flex items-center mt-5">
                  <button
                    type="button"
                    onClick={() => removeVolunteer(idx)}
                    className="btn btn-sm bg-red-700"
                    title="Remove Volunteer"
                  >
                    <TiDelete size={28} color="white" />

                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="form-control">
          <label className="label flex items-center gap-2">
            <FiTag /> <span>Tags</span>
          </label>
          <div className="flex gap-2 items-center mb-2">
            <input
              name="newTag"
              value={form.newTag}
              onChange={updateField}
              placeholder="Add tag"
              className="input input-bordered w-full"
            />
            <button
              type="button"
              onClick={addTag}
              className="btn btn-sm btn-primary"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {form.tags.map((t) => (
              <span
                key={t}
                className="badge badge-outline flex items-center gap-2"
              >
                {t}
                <button
                  type="button"
                  onClick={() => removeTag(t)}
                  className="btn btn-xs btn-ghost"
                  aria-label={`Remove tag ${t}`}
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            type="button"
            onClick={() =>
              setForm({
                title: "",
                author: "",
                date: new Date().toISOString().slice(0, 10),
                image: "",
                category: "",
                content: "",
                volunteers: [{ ...emptyVolunteer }],
                location: "",
                tags: [],
                newTag: "",
              })
            }
            className="btn btn-ghost"
          >
            Reset
          </button>
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            aria-busy={loading}
          >
            {loading ? "Saving..." : "Save Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}
