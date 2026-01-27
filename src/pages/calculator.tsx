import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './calculator.module.css';

interface CalculationResult {
  bleTagsCost: number;
  gpsTrackersCost: number;
  gatewaysCost: number;
  monthlyCost: number;
  annualCost: number;
  setupCost: number;
  totalFirstYear: number;
  potentialSavings: number;
  roiMonths: number;
}

export default function Calculator(): JSX.Element {
  const [numTools, setNumTools] = useState<number>(174);
  const [numHighValue, setNumHighValue] = useState<number>(32);
  const [siteSize, setSiteSize] = useState<string>('small');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateCosts = () => {
    const BLE_TAG_COST = 60;
    const GPS_TRACKER_COST = 500;
    const GATEWAY_COST = 600;
    const MONTHLY_BLE_FEE = 5;
    const MONTHLY_GPS_FEE = 20;
    const MONTHLY_PLATFORM_FEE = 8000;

    let numGateways = 2;
    if (siteSize === 'medium') numGateways = 3;
    if (siteSize === 'large') numGateways = 5;

    const bleTagsCost = numTools * BLE_TAG_COST;
    const gpsTrackersCost = numHighValue * GPS_TRACKER_COST;
    const gatewaysCost = numGateways * GATEWAY_COST;
    const setupCost = bleTagsCost + gpsTrackersCost + gatewaysCost;

    const monthlyCost = numTools * MONTHLY_BLE_FEE + numHighValue * MONTHLY_GPS_FEE + MONTHLY_PLATFORM_FEE;

    const annualCost = monthlyCost * 12;
    const totalFirstYear = setupCost + annualCost;

    const averageTheftLossPerYear = 15000 + numTools * 50 + numHighValue * 2000;
    const preventionRate = 0.75;
    const potentialSavings = averageTheftLossPerYear * preventionRate;

    const netSavings = potentialSavings - totalFirstYear;
    const roiMonths = netSavings > 0 ? Math.ceil((totalFirstYear / potentialSavings) * 12) : 12;

    setResult({
      bleTagsCost,
      gpsTrackersCost,
      gatewaysCost,
      monthlyCost,
      annualCost,
      setupCost,
      totalFirstYear,
      potentialSavings,
      roiMonths,
    });
  };

  return (
    <Layout
      title="Kalkulator kosztów"
      description="Oszacuj koszt wdrożenia WiseGuard i ROI dla placu budowy."
    >
      <div className={styles.calculatorPage}>
        <div className="container">
          <header className={styles.header}>
            <span className={styles.eyebrow}>WISEGUARD ROI</span>
            <h1>Kalkulator kosztów i ROI</h1>
            <p>
              Skorzystaj z założeń whitepapera WiseGuard, aby oszacować sprzęt, subskrypcję i
              potencjalne oszczędności.
            </p>
          </header>

          <div className={styles.calculatorContainer}>
            <div className={styles.inputSection}>
              <h2>Profil budowy</h2>

              <div className={styles.inputGroup}>
                <label>
                  Liczba narzędzi i standardowych aktywów
                  <span className={styles.helpText}>(tagi BLE)</span>
                </label>
                <input
                  type="number"
                  min="10"
                  max="10000"
                  value={numTools}
                  onChange={(e) =>
                    setNumTools(Math.min(10000, Math.max(10, parseInt(e.target.value) || 10)))
                  }
                  className={styles.input}
                />
                <input
                  type="range"
                  min="10"
                  max="1000"
                  value={Math.min(1000, numTools)}
                  onChange={(e) => setNumTools(parseInt(e.target.value))}
                  className={styles.slider}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>
                  Liczba aktywów wysokiej wartości
                  <span className={styles.helpText}>(trackery GPS)</span>
                </label>
                <input
                  type="number"
                  min="0"
                  max="2000"
                  value={numHighValue}
                  onChange={(e) =>
                    setNumHighValue(Math.min(2000, Math.max(0, parseInt(e.target.value) || 0)))
                  }
                  className={styles.input}
                />
                <input
                  type="range"
                  min="0"
                  max="200"
                  value={Math.min(200, numHighValue)}
                  onChange={(e) => setNumHighValue(parseInt(e.target.value))}
                  className={styles.slider}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Rozmiar budowy</label>
                <select
                  value={siteSize}
                  onChange={(e) => setSiteSize(e.target.value)}
                  className={styles.select}
                >
                  <option value="small">Mała (≤100×100m) — 2 bramki</option>
                  <option value="medium">Średnia (≤100×200m) — 3 bramki</option>
                  <option value="large">Duża (200×200m+) — 5 bramek</option>
                </select>
              </div>

              <button onClick={calculateCosts} className={styles.calculateButton}>
                Oblicz koszty
              </button>
            </div>

            {result && (
              <div className={styles.resultsSection}>
                <div className={styles.resultCard}>
                  <h3>Twoja inwestycja</h3>
                  <div className={styles.costBreakdown}>
                    <h4>Koszty startowe</h4>
                    <div className={styles.costItem}>
                      <span>Tagi BLE ({numTools})</span>
                      <span className={styles.costValue}>{result.bleTagsCost.toLocaleString()} PLN</span>
                    </div>
                    <div className={styles.costItem}>
                      <span>Trackery GPS ({numHighValue})</span>
                      <span className={styles.costValue}>{result.gpsTrackersCost.toLocaleString()} PLN</span>
                    </div>
                    <div className={styles.costItem}>
                      <span>Bramki</span>
                      <span className={styles.costValue}>{result.gatewaysCost.toLocaleString()} PLN</span>
                    </div>
                    <div className={styles.costItem + ' ' + styles.costTotal}>
                      <span><strong>Suma startowa</strong></span>
                      <span className={styles.costValue}><strong>{result.setupCost.toLocaleString()} PLN</strong></span>
                    </div>
                  </div>

                  <div className={styles.costBreakdown}>
                    <h4>Koszty subskrypcji</h4>
                    <div className={styles.costItem}>
                      <span>Miesięcznie</span>
                      <span className={styles.costValue}>{result.monthlyCost.toLocaleString()} PLN</span>
                    </div>
                    <div className={styles.costItem}>
                      <span>Rocznie</span>
                      <span className={styles.costValue}>{result.annualCost.toLocaleString()} PLN</span>
                    </div>
                    <div className={styles.costItem + ' ' + styles.costTotal}>
                      <span><strong>Pierwszy rok razem</strong></span>
                      <span className={styles.costValue}><strong>{result.totalFirstYear.toLocaleString()} PLN</strong></span>
                    </div>
                  </div>
                </div>

                <div className={styles.resultCard + ' ' + styles.savingsCard}>
                  <h3>Szacowany efekt</h3>
                  <div className={styles.savingsHighlight}>
                    <div className={styles.savingsAmount}>{result.potentialSavings.toLocaleString()} PLN</div>
                    <div className={styles.savingsLabel}>Szacowane oszczędności roczne</div>
                  </div>
                  <div className={styles.benefitsList}>
                    <div className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>🛡️</span>
                      <span>Potencjalna redukcja kradzieży o 75%</span>
                    </div>
                    <div className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>⏱️</span>
                      <span>Uniknięcie 3–4 tygodni opóźnień</span>
                    </div>
                    <div className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>📉</span>
                      <span>Mniejsze ryzyko ubezpieczeniowe</span>
                    </div>
                    <div className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>👷</span>
                      <span>Większy spokój kierowników</span>
                    </div>
                  </div>
                  <div className={styles.roiInfo}>
                    <p>
                      <strong>ROI:</strong> {result.roiMonths} miesięcy
                    </p>
                    <p className={styles.roiExplanation}>
                      Na podstawie stawek kradzieży w polskim budownictwie i 75% skuteczności
                      zapobiegania przy monitoringu w czasie rzeczywistym.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.nextSteps}>
            <div>
              <h2>Przekuj liczby w decyzję</h2>
              <p>
                Wykorzystaj deck oferty oraz demo do przygotowania rekomendacji i uruchom pilotaż
                WiseGuard.
              </p>
            </div>
            <div className={styles.nextActions}>
              <Link className="button button--primary" to="/offer">
                Otwórz ofertę
              </Link>
              <Link className="button button--secondary" to="/contact">
                Umów demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
