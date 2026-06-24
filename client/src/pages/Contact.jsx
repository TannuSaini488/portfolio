import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/contact`, form);
      alert(response.data?.message || "Message sent!");
      setForm({ name: "", email: "", message: "" }); // clear form
    } catch (error) {
      alert(error.response?.data?.message || "Error sending message");
    }
  };

  return (
    <div className="pt-16">
      <section className="bg-base-100 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
          <p className="text-base-content/70">
            Have a project in mind or just want to say hi? Fill out the form
            below or connect with me on my socials.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-4 bg-base-200 p-6 rounded-xl shadow"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="textarea textarea-bordered w-full"
            ></textarea>

            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>

          {/* Social Links */}
          <div className="mt-10 flex gap-4">
            <a href="https://www.linkedin.com/in/tannu-saini" className="link link-primary">
              LinkedIn
            </a>
            <a href="https://github.com/TannuSaini488" className="link link-primary">
              GitHub
            </a>
            <a href="mailto:tannu2005saini@gmail.com" className="link link-primary">
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
