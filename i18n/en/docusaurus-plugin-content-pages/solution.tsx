import React from 'react';
import Layout from '@theme/Layout';
import styles from './solution.module.css';

export default function Solution(): JSX.Element {
  return (
    <Layout
      title="Our Solution"
      description="Learn how WiseGuard's IoT asset tracking system protects your construction site">
      <div className={styles.solutionPage}>
        <div className="container">
          <h1 className={styles.title}>The WiseGuard Solution</h1>
          <p className={styles.subtitle}>
            A comprehensive IoT asset tracking and anti-theft system designed specifically for construction sites
          </p>

          <section className={styles.section}>
            <h2>The Problem</h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>🚨</div>
                <h3>Rampant Theft</h3>
                <p>74% of Polish construction firms experienced theft in the last year, with losses exceeding €1.5B annually across Europe</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>⏱️</div>
                <h3>Project Delays</h3>
                <p>Theft incidents cause 3-4 week delays on average, leading to missed deadlines and financial penalties</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>💸</div>
                <h3>Poor Recovery</h3>
                <p>Only 20-25% of stolen construction equipment is recovered without tracking systems</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>👤</div>
                <h3>Insider Threats</h3>
                <p>41% of theft incidents involve employees or contractors with site access</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Our Hybrid Tracking Architecture</h2>
            <div className={styles.architectureGrid}>
              <div className={styles.tierCard}>
                <h3>🏷️ Mass Tier: BLE Tags</h3>
                <p className={styles.tierDesc}>For tools, equipment & materials</p>
                <ul>
                  <li><strong>Cost:</strong> ~40 PLN per tag</li>
                  <li><strong>Battery Life:</strong> 1-2 years</li>
                  <li><strong>Range:</strong> 30-50m per gateway</li>
                  <li><strong>Location:</strong> Zone-based tracking</li>
                  <li><strong>Use Case:</strong> Power tools, hand tools, small equipment, materials</li>
                </ul>
              </div>
              <div className={styles.tierCard}>
                <h3>📡 Premium Tier: GPS Trackers</h3>
                <p className={styles.tierDesc}>For high-value assets</p>
                <ul>
                  <li><strong>Cost:</strong> ~400 PLN per tracker</li>
                  <li><strong>Battery Life:</strong> 6-12 months (or powered)</li>
                  <li><strong>Range:</strong> Nationwide coverage</li>
                  <li><strong>Location:</strong> Precise GPS coordinates</li>
                  <li><strong>Use Case:</strong> Vehicles, machinery, generators, high-value equipment</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Key Features</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <h3>✅ Daily Automated Audit</h3>
                <p>Automatic inventory checks every day with clear reporting on which assets are present and which are missing</p>
              </div>
              <div className={styles.featureItem}>
                <h3>🚨 Real-Time Alerts</h3>
                <p>Instant notifications when assets leave designated zones or haven't been seen by expected times</p>
              </div>
              <div className={styles.featureItem}>
                <h3>📍 Zone-Based Tracking</h3>
                <p>Strategic gateway placement provides "last seen" locations without expensive GPS on every item</p>
              </div>
              <div className={styles.featureItem}>
                <h3>🔋 Long Battery Life</h3>
                <p>BLE tags last 1-2 years, GPS trackers up to 5 years with optimized settings and power management</p>
              </div>
              <div className={styles.featureItem}>
                <h3>📊 Incident Reports</h3>
                <p>Comprehensive theft reports with timeline, last location, and tamper alerts for insurance and police</p>
              </div>
              <div className={styles.featureItem}>
                <h3>🎯 Manager-Friendly UI</h3>
                <p>Simple dashboard designed for busy site managers - less than 10 minutes per day</p>
              </div>
              <div className={styles.featureItem}>
                <h3>🔄 Recovery Mode</h3>
                <p>Increase tracking frequency when theft is suspected to aid real-time recovery efforts</p>
              </div>
              <div className={styles.featureItem}>
                <h3>🛡️ Tamper Detection</h3>
                <p>Sensors detect when trackers are removed, opened, or disconnected, triggering immediate alerts</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>How It Works</h2>
            <div className={styles.stepsContainer}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <h3>Tag Your Assets</h3>
                <p>Attach BLE tags to tools and equipment, install GPS trackers on high-value assets</p>
              </div>
              <div className={styles.stepArrow}>→</div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <h3>Deploy Gateways</h3>
                <p>Place gateways at strategic locations (site office, gates, storage areas)</p>
              </div>
              <div className={styles.stepArrow}>→</div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3>Monitor 24/7</h3>
                <p>System automatically tracks all assets and sends alerts for anomalies</p>
              </div>
              <div className={styles.stepArrow}>→</div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <h3>Respond Quickly</h3>
                <p>Receive instant alerts, access incident reports, coordinate recovery</p>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>Ready to Secure Your Site?</h2>
            <p>Calculate your costs and see how much you can save</p>
            <a href="/calculator" className={styles.ctaButton}>Calculate Costs</a>
          </section>
        </div>
      </div>
    </Layout>
  );
}
