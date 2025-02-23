'use client';

import React, { useState } from 'react';
import { emailSvg, github, linkedinSvg } from './Icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [tooltip, setTooltip] = useState({ visible: false, message: '', type: '' });

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
      setTooltip({ visible: true, message: 'Message sent successfully!', type: 'success' });
      setFormData({ name: '', email: '', message: '' });
    } else {
      setTooltip({ visible: true, message: 'There was an error. Please try again.', type: 'error' });
    }

    // Hide the tooltip after 3 seconds
    setTimeout(() => setTooltip({ visible: false, message: '', type: '' }), 3000);
  };

  return (
    <>
      <section className='contactmain'>
        <div className="contact-me">
          <h2 className="section-title">Contact Me</h2>
          <p>If you have any questions, feel free to reach out!</p>
          <div className='d-flex contact_link_main'>
          <a
              href="mailto:dhananjaysunil.kachure@gmail.com"
              className="contact-link"
            >
          <p>
            {emailSvg()}
          </p>

            </a>
            <a className="contact-link" href='https://www.linkedin.com/in/dhananjay-sunil-kachure'>

          <p>
            {linkedinSvg()}
          </p>
            </a>
            <a className="contact-link" href='https://github.com/DhananjayKachure'>
          <p>
            {github()}
          </p>
            </a>
          </div>
      
        </div>

        {/* <form className='contactForm' onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder='Your Name'
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Your Email Id'
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder='Your Message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form> */}
        
        {tooltip.visible && (
          <div className={`tooltip ${tooltip.type}`}>
            {tooltip.message}
          </div>
        )}
      </section>

     
    </>
  );
};

export default Contact;
