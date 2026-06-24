import axios from 'axios';
import { useState } from 'react';
import { API_BASE_URL } from '../config';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/contact`, form);
      alert(response.data?.message || 'Message sent!');
    } catch (error) {
      alert(error.response?.data?.message || 'Error sending message');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <textarea name="message" placeholder="Message" onChange={handleChange} required />
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
