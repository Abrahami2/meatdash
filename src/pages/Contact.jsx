// src/pages/Contact.jsx
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the form submission, e.g., send data to an API
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Questions, feedback, or special requests - we're here to help.</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Address</h3>
            <p>123 Meat Street, Boston, MA 02108</p>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h3>Phone</h3>
            <p>1-800-MEATDASH</p>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>hello@meatdash.com</p>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Business Hours</h3>
            <p>Mon-Fri: 9 AM – 6 PM</p>
            <p>Sat-Sun: Closed</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn primary">Send Message</button>
          </form>
        </div>
      </section>

      <section className="map-section">
        <h2>Delivery Coverage Areas</h2>
        <div className="map-container">
          <img src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c8bf" alt="Map of delivery coverage areas" />
        </div>
      </section>

      <section className="social-section">
        <h2>Connect With Us</h2>
        <div className="social-links">
          <a href="#" className="social-link">
            <i className="fab fa-instagram"></i>
            <span>Instagram</span>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-facebook-f"></i>
            <span>Facebook</span>
          </a>
          <a href="#" className="social-link">
            <i className="fab fa-linkedin-in"></i>
            <span>LinkedIn</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;