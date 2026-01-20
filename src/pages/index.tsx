import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { TypeAnimation } from 'react-type-animation';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className="hero__title">
              <TypeAnimation
                sequence={[
                  'Chroń Swoje Mienie',
                  2000,
                  'Śledź Wszystko',
                  2000,
                  'Zatrzymaj Kradzieże',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="hero__subtitle">Zabezpiecz swoje aktywa budowlane dzięki inteligentnemu śledzeniu IoT</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/calculator">
                Oblicz Oszczędności
              </Link>
              <Link
                className="button button--outline button--lg margin-left--md"
                to="/solution">
                Dowiedz się więcej
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.floatingCard}>
              <h3>🎯 Śledzenie w Czasie Rzeczywistym</h3>
              <p>Monitoruj aktywa 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: '📱 Codzienne Automatyczne Audyty',
      description: 'Automatyczne codzienne kontrole inwentarza z natychmiastowymi powiadomieniami o brakujących przedmiotach',
      icon: '✅',
    },
    {
      title: '🛡️ Natychmiastowe Alarmy Kradzieży',
      description: 'Alerty w czasie rzeczywistym, gdy aktywa opuszczają wyznaczone strefy lub znikają',
      icon: '🚨',
    },
    {
      title: '📍 Śledzenie Strefowe',
      description: 'Ekonomiczne śledzenie dzięki tagom BLE i strategicznemu rozmieszczeniu bram',
      icon: '📡',
    },
    {
      title: '💰 Ekonomiczne Rozwiązanie',
      description: 'Przystępna miesięczna subskrypcja bez dużych inwestycji początkowych',
      icon: '💳',
    },
    {
      title: '🔋 Długa Żywotność Baterii',
      description: 'Tagi BLE działają 1-2 lata, trackery GPS do 5 lat przy zoptymalizowanych ustawieniach',
      icon: '⚡',
    },
    {
      title: '📊 Kompleksowe Raporty',
      description: 'Szczegółowe raporty incydentów dla ubezpieczalni i śledztw policyjnych',
      icon: '📄',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Dlaczego WiseGuard?</h2>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
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
    { value: '74%', label: 'polskich firm budowlanych doświadczyło kradzieży w zeszłym roku' },
    { value: '€1.5mld+', label: 'roczne straty z powodu kradzieży w budownictwie w Europie' },
    { value: '3-4 tygodnie', label: 'średnie opóźnienie projektu po incydencie kradzieży' },
    { value: '20%', label: 'typowy wskaźnik odzyskania bez systemów śledzenia' },
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Problem Jest Realny</h2>
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
        <h2>Gotowy na Ochronę Swoich Aktywów?</h2>
        <p>Oblicz potencjalne oszczędności i zobacz, jak WiseGuard może pomóc Twojej budowie</p>
        <Link
          className="button button--primary button--lg"
          to="/calculator">
          Rozpocznij - Oblicz Koszty
        </Link>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Śledzenie Aktywów IoT dla Budownictwa`}
      description="Inteligentne rozwiązanie śledzenia aktywów IoT i zapobiegania kradzieżom dla polskich placów budowy. Monitorowanie w czasie rzeczywistym, automatyczne audyty i natychmiastowe alerty.">
      <HomepageHeader />
      <main>
        <StatsSection />
        <HomepageFeatures />
        <CTASection />
      </main>
    </Layout>
  );
}
