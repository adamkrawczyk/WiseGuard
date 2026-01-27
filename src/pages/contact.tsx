import React from 'react';
import Layout from '@theme/Layout';
import styles from './contact.module.css';

export default function Contact(): JSX.Element {
  return (
    <Layout
      title="Kontakt"
      description="Skontaktuj się z WiseGuard, aby umówić demo lub pilotaż."
    >
      <div className={styles.contactPage}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.eyebrow}>KONTAKT</span>
            <h1>Umów demo WiseGuard</h1>
            <p>
              Planujesz 4-tygodniowy pilotaż lub prezentację dla zakupów? Skontaktuj się z nami,
              odpowiemy w ciągu jednego dnia roboczego.
            </p>
          </header>

          <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
              <h2>Kontakt bezpośredni</h2>
              <p>Jesteśmy tu, aby odpowiedzieć na pytania i zabezpieczyć Twoją budowę.</p>

              <div className={styles.infoCard}>
                <h3>📧 Email</h3>
                <p>[email protected]</p>
              </div>

              <div className={styles.infoCard}>
                <h3>📞 Telefon</h3>
                <p>+48 607 373 685</p>
              </div>

              <div className={styles.infoCard}>
                <h3>🏢 Biuro</h3>
                <p>Józefa Piłsudskiego 23, 32-050 Skawina</p>
              </div>

              <div className={styles.infoCard}>
                <h3>🌐 WWW</h3>
                <p>www.calbo.pl</p>
              </div>

              <div className={styles.infoCard}>
                <h3>⏰ Godziny</h3>
                <p>Pon–Pt: 9:00 – 17:00 CET</p>
              </div>
            </div>

            <div className={styles.contactDetails}>
              <h2>Dane rejestrowe</h2>
              <div className={styles.detailList}>
                <div>
                  <span>Nazwa pełna</span>
                  <strong>CALBO SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ</strong>
                </div>
                <div>
                  <span>KRS</span>
                  <strong>0001081633</strong>
                </div>
                <div>
                  <span>NIP</span>
                  <strong>9442286423</strong>
                </div>
                <div>
                  <span>REGON</span>
                  <strong>527463580</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
