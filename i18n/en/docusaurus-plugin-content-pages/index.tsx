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
                  'Protect Your Assets',
                  2000,
                  'Track Everything',
                  2000,
                  'Stop Theft Now',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/calculator">
                Calculate Your Savings
              </Link>
              <Link
                className="button button--outline button--lg margin-left--md"
                to="/solution">
                Learn More
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.floatingCard}>
              <h3>🎯 Real-Time Tracking</h3>
              <p>Monitor assets 24/7</p>
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
      title: '📱 Daily Automated Audit',
      description: 'Automatic daily inventory checks with instant notifications for missing items',
      icon: '✅',
    },
    {
      title: '🛡️ Instant Theft Alerts',
      description: 'Real-time alerts when assets leave designated zones or go missing',
      icon: '🚨',
    },
    {
      title: '📍 Zone-Based Tracking',
      description: 'Cost-effective tracking with BLE tags and strategic gateway placement',
      icon: '📡',
    },
    {
      title: '💰 Cost-Effective Solution',
      description: 'Affordable monthly subscription with no large upfront investment',
      icon: '💳',
    },
    {
      title: '🔋 Long Battery Life',
      description: 'BLE tags last 1-2 years, GPS trackers up to 5 years with optimized settings',
      icon: '⚡',
    },
    {
      title: '📊 Comprehensive Reports',
      description: 'Detailed incident reports for insurance claims and police investigations',
      icon: '📄',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Why Choose WiseGuard?</h2>
        <p className={styles.sectionSubtitle}>The only complete asset tracking solution built specifically for construction sites</p>
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

function ComparisonSection() {
  return (
    <section className={styles.comparisonSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Why WiseGuard Wins</h2>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonCard}>
            <div className={styles.comparisonHeader}>
              <span className={styles.comparisonIcon}>❌</span>
              <h3>Traditional Security</h3>
            </div>
            <ul className={styles.comparisonList}>
              <li>Manual inventory counts (time-consuming)</li>
              <li>Discover theft the next morning</li>
              <li>No precise tracking data</li>
              <li>Expensive guards 24/7</li>
              <li>Hard to provide evidence</li>
              <li>20% recovery rate</li>
            </ul>
          </div>
          
          <div className={styles.comparisonCard + ' ' + styles.comparisonCardHighlight}>
            <div className={styles.comparisonBadge}>Best Value</div>
            <div className={styles.comparisonHeader}>
              <span className={styles.comparisonIcon}>✅</span>
              <h3>WiseGuard System</h3>
            </div>
            <ul className={styles.comparisonList}>
              <li><strong>Automatic</strong> daily audits (no effort)</li>
              <li><strong>Instant alerts</strong> when items move</li>
              <li><strong>Precise zone</strong> tracking data</li>
              <li><strong>Affordable</strong> monthly subscription</li>
              <li><strong>Complete</strong> incident reports ready</li>
              <li><strong>80% theft prevention</strong></li>
            </ul>
            <Link to="/calculator" className={styles.comparisonCta}>
              See Your Savings →
            </Link>
          </div>
          
          <div className={styles.comparisonCard}>
            <div className={styles.comparisonHeader}>
              <span className={styles.comparisonIcon}>⚠️</span>
              <h3>Other IoT Systems</h3>
            </div>
            <ul className={styles.comparisonList}>
              <li>Complex setup and training needed</li>
              <li>High cost per device (GPS for all)</li>
              <li>Battery replacement hassle</li>
              <li>No construction-specific features</li>
              <li>Multiple separate platforms</li>
              <li>Limited support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { value: '74%', label: 'of Polish construction firms experienced theft last year', icon: '🚨' },
    { value: '€1.5B+', label: 'annual construction theft losses in Europe', icon: '💰' },
    { value: '3-4 weeks', label: 'average project delay after theft incident', icon: '⏱️' },
    { value: '80%', label: 'reduction in theft with our system', icon: '🛡️' },
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>The Problem is Real. The Solution is Here.</h2>
        <p className={styles.sectionSubtitle}>Construction site theft costs billions annually. WiseGuard changes that.</p>
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
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
          <div className={styles.ctaText}>
            <h2>Ready to Protect Your Assets?</h2>
            <p>Join construction companies across Poland that are saving thousands with WiseGuard</p>
            <div className={styles.ctaStats}>
              <div className={styles.ctaStat}>
                <span className={styles.ctaStatValue}>10,500+</span>
                <span className={styles.ctaStatLabel}>PLN saved per year</span>
              </div>
              <div className={styles.ctaStat}>
                <span className={styles.ctaStatValue}>24/7</span>
                <span className={styles.ctaStatLabel}>Automated monitoring</span>
              </div>
              <div className={styles.ctaStat}>
                <span className={styles.ctaStatValue}>{'<10 min'}</span>
                <span className={styles.ctaStatLabel}>Daily management</span>
              </div>
            </div>
          </div>
          <div className={styles.ctaActions}>
            <Link
              className="button button--primary button--lg"
              to="/calculator">
              Calculate Your Savings
            </Link>
            <Link
              className="button button--outline button--lg"
              to="/contact">
              Request a Demo
            </Link>
            <p className={styles.ctaNote}>✓ No credit card required  ✓ 30-day pilot program available</p>
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
      title={`${siteConfig.title} - IoT Asset Tracking for Construction`}
      description="Intelligent IoT asset tracking and anti-theft solution for Polish construction sites. Real-time monitoring, automated audits, and instant alerts.">
      <HomepageHeader />
      <main>
        <StatsSection />
        <HomepageFeatures />
        <ComparisonSection />
        <CTASection />
      </main>
    </Layout>
  );
}
