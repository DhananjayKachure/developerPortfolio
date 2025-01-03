'use client';

import React, { useState } from 'react';
import { emailSvg, github, linkedinSvg } from './Icons'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('There was an error. Please try again.');
    }
  };
  return (
    <>
    <section className='contactmain'>

       <div className="contact-me">
            <h1 className="section-title">Contact Me</h1>
            <p>
              If you want to collaborate or have any questions, feel free to reach out!
            </p>
            <p>
              {emailSvg()}
              <a
                href="mailto:dhananjaysunil.kachure@gmail.com"
                className="contact-link"
              >
                dhananjaysunil.kachure@gmail.com
              </a>
            </p>
        <p>
            {linkedinSvg()}
        <a className="contact-link" href='https://www.linkedin.com/in/dhananjay-sunil-kachure'>
        https://www.linkedin.com/in/dhananjay-sunil-kachure
        </a>
        </p>

        <p>
            {github()}
            <a className="contact-link" href='https://github.com/DhananjayKachure'>
            https://github.com/DhananjayKachure
            </a>
        </p>

          </div>

        <form  className='contactForm' onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
    </section>
    </>
  )
}

export default Contact
