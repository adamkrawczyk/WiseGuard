import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './solution.module.css';

export default function Solution(): JSX.Element {
  return (
    <Layout
      title="Rozwiązanie"
      description="Poznaj system WiseGuard: BLE, strefy i GPS recovery dla placów budowy."
    >
      <div className={styles.solutionPage}>
        <div className="container">
          <header className={styles.hero}>
            <span className={styles.eyebrow}>SYSTEM WISEGUARD</span>
            <h1>Hybrydowa inteligencja aktywów dla budów</h1>
            <p>
              WiseGuard dostarcza dzienny audyt, widoczność stref i szybki odzysk kluczowych
              aktywów. Zbudowane pod realia polskich budów.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--primary" to="/contact">
                Umów demo
              </Link>
              <Link className="button button--secondary" to="/offer">
                Zobacz ofertę
              </Link>
            </div>
          </header>

          <section className={styles.section}>
            <h2>Problem na budowach</h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>🚨</div>
                <h3>Powtarzalne kradzieże</h3>
                <p>
                  74% firm budowlanych w Polsce doświadczyło kradzieży, a straty w UE przekraczają
                  €1.5 mld rocznie.
                </p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>⏱️</div>
                <h3>Opóźnienia projektów</h3>
                <p>
                  Utrata sprzętu oznacza średnio 3–4 tygodnie opóźnień i kary umowne.
                </p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>📉</div>
                <h3>Niski odzysk</h3>
                <p>Tylko 20–25% sprzętu wraca bez systemów śledzenia.</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>🧠</div>
                <h3>Ryzyko insiderów</h3>
                <p>41% incydentów wiąże się z osobami mającymi dostęp do budowy.</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Hybrydowa architektura</h2>
            <div className={styles.architectureGrid}>
              <div className={styles.tierCard}>
                <h3>🏷️ Warstwa masowa — tagi BLE</h3>
                <p className={styles.tierDesc}>Każde narzędzie, materiał i drobny sprzęt.</p>
                <ul>
                  <li><strong>Koszt:</strong> ~60 PLN za tag</li>
                  <li><strong>Bateria:</strong> 1–2 lata</li>
                  <li><strong>Pokrycie:</strong> strefy / last-seen</li>
                  <li><strong>Zastosowanie:</strong> wiertarki, piły, palety</li>
                </ul>
              </div>

              <div className={styles.tierCard}>
                <h3>📡 Warstwa premium — GPS</h3>
                <p className={styles.tierDesc}>Najcenniejsze maszyny i mobilne aktywa.</p>
                <ul>
                  <li><strong>Koszt:</strong> ~500 PLN za tracker</li>
                  <li><strong>Bateria:</strong> do 5 lat</li>
                  <li><strong>Pokrycie:</strong> GPS + LTE-M / NB-IoT</li>
                  <li><strong>Zastosowanie:</strong> agregaty, koparki, przyczepy</li>
                </ul>
              </div>

              <div className={styles.tierCard}>
                <h3>🚪 Infrastruktura — bramki BLE</h3>
                <p className={styles.tierDesc}>Strategiczne punkty i budowa stref.</p>
                <ul>
                  <li><strong>Koszt:</strong> ~600 PLN za bramkę</li>
                  <li><strong>Lokalizacja:</strong> wejścia, wyjścia, magazyny</li>
                  <li><strong>Zasięg:</strong> 50 m wewnątrz</li>
                  <li><strong>Zasilanie:</strong> PoE lub sieć</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Kluczowe wyróżniki</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <h3>Codzienny audyt automatyczny</h3>
                <p>Każdy tagowany zasób sprawdzany codziennie, braki zgłaszane tego samego dnia.</p>
              </div>
              <div className={styles.featureItem}>
                <h3>Alerty strefowe w czasie rzeczywistym</h3>
                <p>SMS/email w momencie opuszczenia strefy.</p>
              </div>
              <div className={styles.featureItem}>
                <h3>Widoczność strefowa</h3>
                <p>Wiesz, które narzędzia są w których strefach bez ręcznych skanów.</p>
              </div>
              <div className={styles.featureItem}>
                <h3>Pakiety incydentów</h3>
                <p>Logi i ślady GPS gotowe do ubezpieczyciela lub policji.</p>
              </div>
              <div className={styles.featureItem}>
                <h3>Odpowiedzialność za dostęp</h3>
                <p>Śledź ruchy aktywów w czasie zmian i podwykonawców.</p>
              </div>
              <div className={styles.featureItem}>
                <h3>Monitoring baterii</h3>
                <p>Alerty wymiany tagów i trackerów, bez martwych stref.</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Jak działa WiseGuard</h2>
            <div className={styles.workflowSection}>
              <div className={styles.workflowStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Tagowanie i instalacja</h3>
                <p>Tagi BLE, trackery GPS i bramki przy wejściach.</p>
              </div>

              <div className={styles.workflowStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Dzienny audyt</h3>
                <p>WiseGuard sprawdza wszystkie aktywa i zgłasza braki natychmiast.</p>
              </div>

              <div className={styles.workflowStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Monitoring ruchu</h3>
                <p>Bramki wykrywają przejścia, GPS raportuje po opuszczeniu strefy.</p>
              </div>

              <div className={styles.workflowStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Reakcja incydentowa</h3>
                <p>Alerty uruchamiają tryb odzysku i generację raportu.</p>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>Zobacz w praktyce</h2>
            <p>Pobierz materiały i umów demo, aby zaplanować wdrożenie.</p>
            <div className={styles.ctaButtons}>
              <Link className="button button--primary" to="/contact">
                Umów demo
              </Link>
              <Link className="button button--secondary" to="/offer">
                Otwórz ofertę
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
