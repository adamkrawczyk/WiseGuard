import React, { useState } from 'react';
import Layout from '@theme/Layout';
import styles from './contact.module.css';

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with WiseGuard for a demo or consultation">
      <div className={styles.contactPage}>
        <div className="container">
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>
            Interested in protecting your construction site? Get in touch for a demo or consultation
          </p>

          <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
              <h2>Get In Touch</h2>
              <p>We're here to answer your questions and help you secure your construction site.</p>
              
              <div className={styles.infoCard}>
                <h3>📧 Email</h3>
                <p>info@wiseguard.pl</p>
              </div>

              <div className={styles.infoCard}>
                <h3>📞 Phone</h3>
                <p>+48 XXX XXX XXX</p>
              </div>

              <div className={styles.infoCard}>
                <h3>🏢 Office</h3>
                <p>Cracow, Poland</p>
              </div>

              <div className={styles.infoCard}>
                <h3>⏰ Business Hours</h3>
                <p>Monday - Friday: 9:00 - 17:00 CET</p>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h2>Request a Demo</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={styles.textarea}
                  />
                </div>

                <button type="submit" className={styles.submitButton}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
