import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {TypeAnimation} from 'react-type-animation';
import usePrefersReducedMotion from '../components/hooks/usePrefersReducedMotion';
import styles from './index.module.css';

function HomepageHeader() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>WISEGUARD</span>
            <h1 className={styles.heroTitle}>
              {prefersReducedMotion ? (
                'Budowy, które same się audytują.'
              ) : (
                <TypeAnimation
                  sequence={[
                    'Budowy, które same się audytują.',
                    2000,
                    'Alerty w godzinach, nie dniach.',
                    2000,
                    'Pakiety incydentów gotowe dla ubezpieczyciela.',
                    2000,
                  ]}
                  wrapper="span"
                  speed={52}
                  repeat={Infinity}
                />
              )}
            </h1>
            <p className={styles.heroSubtitle}>
              WiseGuard łączy tagi BLE, inteligentne bramki i GPS recovery w jeden
              dzienny proces audytu. Zatrzymaj straty, skróć opóźnienia i udokumentuj każdy incydent.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--primary" to="/contact">
                Umów demo
              </Link>
              <Link className="button button--secondary" to="/offer">
                Zobacz deck oferty
              </Link>
              <Link className="button button--outline" to="/calculator">
                Kalkulator ROI
              </Link>
            </div>
            <div className={styles.heroMeta}>
              <div>
                <strong>Daily Audit</strong>
                <span>10 min / dzień</span>
              </div>
              <div>
                <strong>74% firm PL</strong>
                <span>doświadczyło kradzieży</span>
              </div>
              <div>
                <strong>€1.5B+</strong>
                <span>strat w UE rocznie</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroCards}>
              <div className={styles.heroCard}>
                <h3>Daily Audit</h3>
                <p>Alerty o brakach przed końcem zmiany.</p>
              </div>
              <div className={styles.heroCard}>
                <h3>Inteligentne strefy</h3>
                <p>Bramki zamieniają sygnały BLE w żywe strefy.</p>
              </div>
              <div className={styles.heroCard}>
                <h3>GPS recovery</h3>
                <p>Najcenniejsze aktywa pod kontrolą wszędzie.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function SystemSection() {
  return (
    <section className={styles.systemSection}>
      <div className="container">
        <div className={styles.systemGrid}>
          <div>
            <span className={styles.sectionEyebrow}>Podgląd systemu</span>
            <h2>Zobacz system w akcji przed zakupem</h2>
            <p>
              Otrzymasz deck oferty, mapę wdrożenia oraz demo dla Twojej budowy. Wszystko zgodne z
              whitepaperem WiseGuard.
            </p>
            <div className={styles.systemActions}>
              <Link className="button button--primary" to="/contact">
                Umów demo
              </Link>
              <Link className="button button--secondary" to="/offer">
                Otwórz deck oferty
              </Link>
            </div>
          </div>
          <div className={styles.systemPanels}>
            <div className={styles.systemPanel}>
              <h3>Hybrydowe pokrycie</h3>
              <p>BLE dla masy, GPS dla kluczowych aktywów, wszystko w jednym widoku.</p>
            </div>
            <div className={styles.systemPanel}>
              <h3>Missing → stolen presumed</h3>
              <p>Automatyczna eskalacja po 48h i gotowy pakiet dowodowy.</p>
            </div>
            <div className={styles.systemPanel}>
              <h3>Incident package</h3>
              <p>Eksportuj strefy, timeline i ślady GPS do ubezpieczyciela.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: 'Codzienny audyt automatyczny',
      description: 'Każdy tagowany zasób sprawdzany codziennie w 10 minut.',
    },
    {
      title: 'Alerty w czasie rzeczywistym',
      description: 'Powiadomienia natychmiast po opuszczeniu strefy.',
    },
    {
      title: 'Śledzenie strefowe',
      description: 'Bramki tworzą strefy dla skalowalnej widoczności.',
    },
    {
      title: 'Hybryda BLE + GPS',
      description: 'GPS tylko tam, gdzie liczy się odzysk.',
    },
    {
      title: 'Raporty incydentów',
      description: 'Pakiety dowodowe dla ubezpieczeń i policji.',
    },
    {
      title: 'UX dla kierowników',
      description: 'Jasny proces bez dodatkowego personelu.',
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Zaprojektowane dla wymagających budów</h2>
          <p>Profesjonalna ochrona w futurystycznej odsłonie.</p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    {value: '€1.5B+', label: 'roczne straty kradzieży w UE'},
    {value: '74%', label: 'polskich firm dotkniętych kradzieżą'},
    {value: '41%', label: 'incydentów powiązanych z insiderami'},
    {value: '20–25%', label: 'średni odzysk bez śledzenia'},
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>Ryzyko jest mierzalne</h2>
          <p>WiseGuard zamienia dane w codzienne działania.</p>
        </div>
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <div>
            <h2>Gotowy na pilotaż?</h2>
            <p>
              Zacznij od 2 lokalizacji, 50 aktywów i udowodnij 95% zgodności audytu w 4 tygodnie.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link className="button button--primary" to="/contact">
              Umów demo
            </Link>
            <Link className="button button--secondary" to="/offer">
              Pobierz materiały oferty
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Inteligentny audyt aktywów`}
      description="WiseGuard: IoT tracking dla budów. Dzienny audyt, alerty i raporty incydentów."
    >
      <HomepageHeader />
      <main>
        <SystemSection />
        <FeaturesSection />
        <StatsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
