import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

export default function About(): JSX.Element {
  return (
    <Layout title="O nas" description="Dowiedz się więcej o WiseGuard">
      <div className={styles.aboutPage}>
        <div className="container">
          <div className={styles.aboutCard}>
            <h1>O WiseGuard</h1>
            <p>
              WiseGuard to nowoczesny system IoT do śledzenia aktywów i zapobiegania kradzieżom,
              zaprojektowany dla budów w Polsce i UE.
            </p>
            <h2>Nasza misja</h2>
            <p>
              Dostarczamy kierownikom budów przystępny i prosty system, który ogranicza kradzieże,
              skraca opóźnienia i poprawia odpowiedzialność za sprzęt.
            </p>
            <h2>Nasze podejście</h2>
            <p>
              Łączymy tagi BLE dla masowego śledzenia z trackerami GPS dla sprzętu wysokiej
              wartości, tworząc ekonomiczną hybrydę.
            </p>
            <h2>Dlaczego WiseGuard</h2>
            <ul>
              <li>Codzienny audyt automatyczny wszystkich aktywów</li>
              <li>Alerty kradzieży w czasie rzeczywistym</li>
              <li>Strefy tworzone przez bramki BLE</li>
              <li>Raporty incydentów dla ubezpieczyciela i policji</li>
              <li>Interfejs przyjazny kierownikom (&lt;10 min dziennie)</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
