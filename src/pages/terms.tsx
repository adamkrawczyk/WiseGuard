import React from 'react';
import Layout from '@theme/Layout';

export default function Terms(): JSX.Element {
  return (
    <Layout title="Terms of Service" description="WiseGuard Terms of Service">
      <div style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Terms of Service</h1>
        <p><em>Last updated: January 2026</em></p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the WiseGuard website, you accept and agree to be bound by the 
          terms and provision of this agreement.
        </p>

        <h2>2. Service Description</h2>
        <p>
          WiseGuard provides IoT asset tracking and anti-theft solutions for construction sites, 
          including hardware devices, software platform, and related services.
        </p>

        <h2>3. Use License</h2>
        <p>
          Permission is granted to temporarily access the materials (information or software) on 
          WiseGuard's website for personal, non-commercial transitory viewing only.
        </p>

        <h2>4. Limitations</h2>
        <p>
          In no event shall WiseGuard or its suppliers be liable for any damages arising out of 
          the use or inability to use the materials on WiseGuard's website.
        </p>

        <h2>5. Service Agreement</h2>
        <p>
          Detailed service terms, including hardware lease agreements, SaaS subscriptions, and 
          support terms, will be provided in separate service agreements upon customer onboarding.
        </p>

        <h2>6. Modifications</h2>
        <p>
          WiseGuard may revise these terms of service at any time without notice. By using this 
          website, you are agreeing to be bound by the current version of these terms.
        </p>

        <h2>7. Contact</h2>
        <p>
          For questions about these Terms of Service, please contact: info@wiseguard.pl
        </p>
      </div>
    </Layout>
  );
}
