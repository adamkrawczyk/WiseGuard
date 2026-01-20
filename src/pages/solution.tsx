import React from 'react';
import Layout from '@theme/Layout';
import styles from './solution.module.css';

export default function Solution(): JSX.Element {
  return (
    <Layout
      title="Nasze Rozwiązanie"
      description="Dowiedz się, jak system śledzenia aktywów IoT WiseGuard chroni Twoją budowę">
      <div className={styles.solutionPage}>
        <div className="container">
          <h1 className={styles.title}>Rozwiązanie WiseGuard</h1>
          <p className={styles.subtitle}>
            Kompleksowy system śledzenia aktywów IoT i zapobiegania kradzieżom zaprojektowany specjalnie dla placów budowy
          </p>

          <section className={styles.section}>
            <h2>Problem</h2>
            <div className={styles.problemGrid}>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>🚨</div>
                <h3>Masowe Kradzieże</h3>
                <p>74% polskich firm budowlanych doświadczyło kradzieży w zeszłym roku, ze stratami przekraczającymi 1,5 mld € rocznie w całej Europie</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>⏱️</div>
                <h3>Opóźnienia Projektów</h3>
                <p>Incydenty kradzieży powodują średnio 3-4 tygodnie opóźnień, prowadząc do niespełnienia terminów i kar finansowych</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>💸</div>
                <h3>Niski Wskaźnik Odzysku</h3>
                <p>Tylko 20-25% skradzionego sprzętu budowlanego jest odzyskiwane bez systemów śledzenia</p>
              </div>
              <div className={styles.problemCard}>
                <div className={styles.problemIcon}>👤</div>
                <h3>Zagrożenia Wewnętrzne</h3>
                <p>41% incydentów kradzieży dotyczy pracowników lub podwykonawców z dostępem do budowy</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Nasza Hybrydowa Architektura Śledzenia</h2>
            <div className={styles.architectureGrid}>
              <div className={styles.tierCard}>
                <h3>🏷️ Poziom Masowy: Tagi BLE</h3>
                <p className={styles.tierDesc}>Dla narzędzi, sprzętu i materiałów</p>
                <ul>
                  <li><strong>Koszt:</strong> ~40 PLN za tag</li>
                  <li><strong>Bateria:</strong> 1-2 lata</li>
                  <li><strong>Zasięg:</strong> Śledzenie strefowe poprzez bramy</li>
                  <li><strong>Użycie:</strong> Młoty, wiertarki, deski, rury, itp.</li>
                </ul>
              </div>

              <div className={styles.tierCard}>
                <h3>📡 Poziom Premium: Trackery GPS</h3>
                <p className={styles.tierDesc}>Dla aktywów wysokiej wartości</p>
                <ul>
                  <li><strong>Koszt:</strong> ~400 PLN za tracker</li>
                  <li><strong>Bateria:</strong> Do 5 lat (zoptymalizowany)</li>
                  <li><strong>Zasięg:</strong> Globalne śledzenie GPS + LTE-M</li>
                  <li><strong>Użycie:</strong> Generatory, minikoparki, ciężkie maszyny</li>
                </ul>
              </div>

              <div className={styles.tierCard}>
                <h3>🚪 Infrastruktura: Bramy BLE</h3>
                <p className={styles.tierDesc}>Strategiczne punkty monitorowania</p>
                <ul>
                  <li><strong>Koszt:</strong> ~400 PLN za bramę</li>
                  <li><strong>Rozmieszczenie:</strong> Wejścia, wyjścia, strefy składowania</li>
                  <li><strong>Zasięg:</strong> Do 50m pokrycia wewnętrznego</li>
                  <li><strong>Zasilanie:</strong> PoE lub zasilacz sieciowy</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Kluczowe Funkcje</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <h3>📱 Codzienne Automatyczne Audyty</h3>
                <p>System automatycznie skanuje wszystkie aktywa z tagami codziennie i alarmuje o brakujących przedmiotach</p>
              </div>

              <div className={styles.featureItem}>
                <h3>🚨 Alerty w Czasie Rzeczywistym</h3>
                <p>Natychmiastowe powiadomienia SMS/Email, gdy aktywa opuszczają wyznaczone strefy lub są przemieszczane bez autoryzacji</p>
              </div>

              <div className={styles.featureItem}>
                <h3>📍 Śledzenie Strefowe</h3>
                <p>Śledź, które aktywa znajdują się w której strefie (główna budowa, magazyn, parking, itp.)</p>
              </div>

              <div className={styles.featureItem}>
                <h3>📊 Kompleksowe Raporty</h3>
                <p>Szczegółowe logi incydentów z datami, godzinami i lokalizacjami - gotowe dla policji i firm ubezpieczeniowych</p>
              </div>

              <div className={styles.featureItem}>
                <h3>👥 Zarządzanie Dostępem</h3>
                <p>Śledź, kto przemieszcza jakie aktywa i kiedy - kompletny łańcuch odpowiedzialności</p>
              </div>

              <div className={styles.featureItem}>
                <h3>🔋 Monitorowanie Baterii</h3>
                <p>Automatyczne powiadomienia, gdy baterie muszą być wymienione, zapewniając nieprzerwane pokrycie</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Jak To Działa</h2>
            <div className={styles.workflowSection}>
              <div className={styles.workflowStep}>
                <div className={styles.stepNumber}>1</div>
                <h3>Początkowa Konfiguracja</h3>
                <p>Przypisujemy tagi BLE do narzędzi i małego sprzętu, trackery GPS do maszyn wysokiej wartości. Instalujemy bramy BLE przy wejściach/wyjściach.</p>
              </div>

              <div className={styles.workflowStep}>
                <div className={styles.stepNumber}>2</div>
                <h3>Codzienne Skanowanie</h3>
                <p>System automatycznie skanuje wszystkie aktywa z tagami każdego ranka. Brakujące przedmioty są natychmiast zgłaszane kierownikowi budowy.</p>
              </div>

              <div className={styles.workflowStep}>
                <div className={styles.stepNumber}>3</div>
                <h3>Monitorowanie Ruchu</h3>
                <p>Bramy wykrywają, gdy aktywa z tagami je mijają. Trackery GPS raportują lokalizację, gdy opuszczają strefę budowy.</p>
              </div>

              <div className={styles.workflowStep}>
                <div className={styles.stepNumber}>4</div>
                <h3>Natychmiastowe Alerty</h3>
                <p>Jeśli coś opuści budowę o nieautoryzowanych godzinach lub aktyw zniknie, otrzymujesz natychmiastowe powiadomienie SMS/Email.</p>
              </div>

              <div className={styles.workflowStep}>
                <div className={styles.stepNumber}>5</div>
                <h3>Działania i Odzyskiwanie</h3>
                <p>Korzystaj z danych GPS, aby zlokalizować skradzione aktywa. Szczegółowe logi pomagają w zgłoszeniach policyjnych i roszczeniach ubezpieczeniowych.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
