import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './offer.module.css';

const slidesHref = encodeURI('/assets/WiseGuard_Inteligentny_Audyt_Zasobów_Slide.pdf');
const totalSlides = 12;

export default function Offer(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slideSrc = useMemo(
    () => `${slidesHref}#page=${currentSlide}&view=fitH&toolbar=0&navpanes=0&scrollbar=0`,
    [currentSlide],
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      setCurrentSlide((prev) => Math.max(1, prev - 1));
    }
    if (event.key === 'ArrowRight') {
      setCurrentSlide((prev) => Math.min(totalSlides, prev + 1));
    }
  };

  return (
    <Layout
      title="Oferta"
      description="Materiały ofertowe WiseGuard: problem, rozwiązanie, ceny, ROI i next steps."
    >
      <div className={styles.offerPage}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.eyebrow}>OFERTA WISEGUARD</span>
            <h1>Interaktywny deck dla zakupów</h1>
            <p>
              Skorzystaj z tego decku, aby przygotować decyzję zakupową i zsynchronizować
              interesariuszy z roadmapą WiseGuard.
            </p>
            <div className={styles.headerActions}>
              <Link className="button button--primary" to="/contact">
                Umów demo
              </Link>
              <Link className="button button--secondary" to="/calculator">
                Uruchom kalkulator
              </Link>
              <a className={styles.downloadLink} href={slidesHref}>
                Pobierz slajdy (PDF)
              </a>
            </div>
          </header>

          <div className={styles.deckWrapper} onKeyDown={handleKeyDown} tabIndex={0} role="region" aria-label="Deck ofertowy">
            <div className={styles.carouselHeader}>
              <div>
                <strong>Deck ofertowy</strong>
                <span>Przewijaj slajdy bez opuszczania strony.</span>
              </div>
              <div className={styles.carouselControls}>
                <button
                  type="button"
                  className={styles.carouselButton}
                  onClick={() => setCurrentSlide((prev) => Math.max(1, prev - 1))}
                  disabled={currentSlide === 1}
                >
                  ◀ Poprzedni
                </button>
                <div className={styles.carouselStatus}>
                  <span>Slajd</span>
                  <strong>
                    {currentSlide} / {totalSlides}
                  </strong>
                </div>
                <button
                  type="button"
                  className={styles.carouselButton}
                  onClick={() => setCurrentSlide((prev) => Math.min(totalSlides, prev + 1))}
                  disabled={currentSlide === totalSlides}
                >
                  Następny ▶
                </button>
              </div>
            </div>
            <div className={styles.carouselFrame}>
              <iframe
                key={currentSlide}
                title="Deck ofertowy WiseGuard"
                src={slideSrc}
                className={styles.carouselIframe}
                scrolling="no"
              />
            </div>
            <div className={styles.carouselFooter}>
              <input
                type="range"
                min={1}
                max={totalSlides}
                value={currentSlide}
                onChange={(event) => setCurrentSlide(Number(event.target.value))}
                className={styles.carouselSlider}
                aria-label="Suwak slajdów"
              />
              <div className={styles.carouselHint}>
                Skrót: użyj klawiszy ←/→ lub przeciągnij suwak, aby szybko przejść do slajdu.
              </div>
            </div>
          </div>

          <section className={styles.procurementSection}>
            <div>
              <h2>Materiały do zakupów</h2>
              <p>
                Pobierz deck i dołącz WiseGuard do procesu akceptacji zakupowej.
              </p>
            </div>
            <div className={styles.procurementActions}>
              <a className="button button--primary" href={slidesHref}>
                Pobierz slajdy (PDF)
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
