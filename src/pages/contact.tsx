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
    alert('Dziękujemy za zainteresowanie! Wkrótce się z Tobą skontaktujemy.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout
      title="Kontakt"
      description="Skontaktuj się z WiseGuard w celu uzyskania demo lub konsultacji">
      <div className={styles.contactPage}>
        <div className="container">
          <h1 className={styles.title}>Skontaktuj się z nami</h1>
          <p className={styles.subtitle}>
            Zainteresowany ochroną swojej budowy? Skontaktuj się z nami w celu uzyskania demo lub konsultacji
          </p>

          <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
              <h2>Napisz do nas</h2>
              <p>Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania i pomóc zabezpieczyć Twoją budowę.</p>
              
              <div className={styles.infoCard}>
                <h3>📧 Email</h3>
                <p>info@wiseguard.pl</p>
              </div>

              <div className={styles.infoCard}>
                <h3>📞 Telefon</h3>
                <p>+48 XXX XXX XXX</p>
              </div>

              <div className={styles.infoCard}>
                <h3>🏢 Biuro</h3>
                <p>Kraków, Polska</p>
              </div>

              <div className={styles.infoCard}>
                <h3>⏰ Godziny pracy</h3>
                <p>Poniedziałek - Piątek: 9:00 - 17:00 CET</p>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h2>Poproś o Demo</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Imię i nazwisko *</label>
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
                  <label htmlFor="company">Firma</label>
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
                  <label htmlFor="phone">Telefon</label>
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
                  <label htmlFor="message">Wiadomość *</label>
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
                  Wyślij wiadomość
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
