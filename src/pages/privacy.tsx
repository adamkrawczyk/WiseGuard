import React from 'react';
import Layout from '@theme/Layout';

export default function Privacy(): JSX.Element {
  return (
    <Layout title="Privacy Policy" description="WiseGuard Privacy Policy">
      <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Privacy Policy</h1>
        <p><em>Last updated: January 2026</em></p>
        
        <h2>1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us, including name, email, company name, 
          and phone number when you contact us or request a demo.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to:
        </p>
        <ul>
          <li>Respond to your inquiries and requests</li>
          <li>Send you technical notices and support messages</li>
          <li>Communicate with you about products, services, and events</li>
        </ul>

        <h2>3. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal 
          information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2>4. GDPR Compliance</h2>
        <p>
          As a company operating in the European Union, we comply with the General Data Protection 
          Regulation (GDPR). You have the right to access, correct, or delete your personal data.
        </p>

        <h2>5. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at: info@wiseguard.pl
        </p>
      </div>
    </Layout>
  );
}
