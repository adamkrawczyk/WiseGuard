import React from 'react';
import Layout from '@theme/Layout';

export default function About(): JSX.Element {
  return (
    <Layout title="About Us" description="Learn about WiseGuard">
      <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>About WiseGuard</h1>
        <p>
          WiseGuard is a cutting-edge IoT asset tracking and anti-theft solution designed specifically 
          for the construction industry in Poland.
        </p>
        <h2>Our Mission</h2>
        <p>
          To provide construction site managers with an affordable, easy-to-use system that prevents 
          theft, reduces project delays, and improves asset accountability.
        </p>
        <h2>Our Solution</h2>
        <p>
          We combine BLE tags for mass asset tracking with GPS trackers for high-value equipment, 
          creating a hybrid system that balances cost-effectiveness with comprehensive coverage.
        </p>
        <h2>Why WiseGuard?</h2>
        <ul>
          <li>Daily automated audits of all assets</li>
          <li>Real-time theft alerts</li>
          <li>Zone-based tracking with strategic gateways</li>
          <li>Comprehensive incident reports for insurance and police</li>
          <li>Manager-friendly interface requiring less than 10 minutes per day</li>
        </ul>
      </div>
    </Layout>
  );
}
