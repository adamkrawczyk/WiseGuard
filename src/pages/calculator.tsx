import React, { useState } from 'react';
import Layout from '@theme/Layout';
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
    // Pricing model (in PLN)
    const BLE_TAG_COST = 40;
    const GPS_TRACKER_COST = 400;
    const GATEWAY_COST = 400;
    const MONTHLY_BLE_FEE = 2;
    const MONTHLY_GPS_FEE = 20;
    const MONTHLY_PLATFORM_FEE = 200;

    // Gateway calculation based on site size
    let numGateways = 2;
    if (siteSize === 'medium') numGateways = 3;
    if (siteSize === 'large') numGateways = 5;

    // Hardware costs
    const bleTagsCost = numTools * BLE_TAG_COST;
    const gpsTrackersCost = numHighValue * GPS_TRACKER_COST;
    const gatewaysCost = numGateways * GATEWAY_COST;
    const setupCost = bleTagsCost + gpsTrackersCost + gatewaysCost;

    // Monthly costs
    const monthlyCost = 
      (numTools * MONTHLY_BLE_FEE) + 
      (numHighValue * MONTHLY_GPS_FEE) + 
      MONTHLY_PLATFORM_FEE;

    const annualCost = monthlyCost * 12;
    const totalFirstYear = setupCost + annualCost;

    // Potential savings calculation
    const averageTheftLossPerYear = 15000 + (numTools * 50) + (numHighValue * 2000);
    const preventionRate = 0.75;
    const potentialSavings = averageTheftLossPerYear * preventionRate;

    // ROI calculation
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
      title="Kalkulator Kosztów"
      description="Oblicz koszt i ROI wdrożenia WiseGuard na swojej budowie">
      <div className={styles.calculatorPage}>
        <div className="container">
          <h1 className={styles.title}>Kalkulator Kosztów</h1>
          <p className={styles.subtitle}>
            Oszacuj swoją inwestycję i potencjalne oszczędności z WiseGuard
          </p>

          <div className={styles.calculatorContainer}>
            <div className={styles.inputSection}>
              <h2>Szczegóły Twojej Budowy</h2>

              <div className={styles.inputGroup}>
                <label>
                  Liczba Narzędzi i Małego Sprzętu
                  <span className={styles.helpText}>(Używając Tagów BLE)</span>
                </label>
                <input
                  type="number"
                  min="10"
                  max="10000"
                  value={numTools}
                  onChange={(e) => setNumTools(Math.min(10000, Math.max(10, parseInt(e.target.value) || 10)))}
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
                  Liczba Aktywów Wysokiej Wartości
                  <span className={styles.helpText}>(Używając Trackerów GPS)</span>
                </label>
                <input
                  type="number"
                  min="0"
                  max="2000"
                  value={numHighValue}
                  onChange={(e) => setNumHighValue(Math.min(2000, Math.max(0, parseInt(e.target.value) || 0)))}
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
                <label>Rozmiar Budowy</label>
                <select
                  value={siteSize}
                  onChange={(e) => setSiteSize(e.target.value)}
                  className={styles.select}
                >
                  <option value="small">Mała (do 100×100m) - 2 Bramy</option>
                  <option value="medium">Średnia (100×200m) - 3 Bramy</option>
                  <option value="large">Duża (200×200m+) - 5 Bram</option>
                </select>
              </div>

              <button onClick={calculateCosts} className={styles.calculateButton}>
                Oblicz Koszty
              </button>
            </div>

            {result && (
              <div className={styles.resultsSection}>
                <div className={styles.resultCard}>
                  <h3>Twoja Inwestycja</h3>
                  <div className={styles.costBreakdown}>
                    <h4>Koszt Początkowy</h4>
                    <div className={styles.costItem}>
                      <span>Tagi BLE ({numTools})</span>
                      <span className={styles.costValue}>{result.bleTagsCost.toLocaleString()} PLN</span>
                    </div>
                    <div className={styles.costItem}>
                      <span>Trackery GPS ({numHighValue})</span>
                      <span className={styles.costValue}>{result.gpsTrackersCost.toLocaleString()} PLN</span>
                    </div>
                    <div className={styles.costItem}>
                      <span>Bramy</span>
                      <span className={styles.costValue}>{result.gatewaysCost.toLocaleString()} PLN</span>
                    </div>
                    <div className={styles.costItem + ' ' + styles.costTotal}>
                      <span><strong>Suma Początkowa</strong></span>
                      <span className={styles.costValue}><strong>{result.setupCost.toLocaleString()} PLN</strong></span>
                    </div>
                  </div>

                  <div className={styles.costBreakdown}>
                    <h4>Koszty Bieżące</h4>
                    <div className={styles.costItem}>
                      <span>Subskrypcja Miesięczna</span>
                      <span className={styles.costValue}>{result.monthlyCost.toLocaleString()} PLN</span>
                    </div>
                    <div className={styles.costItem}>
                      <span>Subskrypcja Roczna</span>
                      <span className={styles.costValue}>{result.annualCost.toLocaleString()} PLN</span>
                    </div>
                    <div className={styles.costItem + ' ' + styles.costTotal}>
                      <span><strong>Pierwszy Rok Razem</strong></span>
                      <span className={styles.costValue}><strong>{result.totalFirstYear.toLocaleString()} PLN</strong></span>
                    </div>
                  </div>
                </div>

                <div className={styles.resultCard + ' ' + styles.savingsCard}>
                  <h3>💰 Twoje Oczekiwane Korzyści</h3>
                  <div className={styles.savingsHighlight}>
                    <div className={styles.savingsAmount}>
                      {result.potentialSavings.toLocaleString()} PLN
                    </div>
                    <div className={styles.savingsLabel}>Szacowane Roczne Oszczędności</div>
                  </div>
                  <div className={styles.benefitsList}>
                    <div className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>🛡️</span>
                      <span>75% redukcja incydentów kradzieży</span>
                    </div>
                    <div className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>⏱️</span>
                      <span>Oszczędź 3-4 tygodnie opóźnień projektu</span>
                    </div>
                    <div className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>📉</span>
                      <span>Niższe składki ubezpieczeniowe</span>
                    </div>
                    <div className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>👨‍💼</span>
                      <span>Spokój ducha dla menedżerów</span>
                    </div>
                  </div>
                  <div className={styles.roiInfo}>
                    <p>
                      <strong>Zwrot z Inwestycji:</strong> {result.roiMonths} miesięcy
                    </p>
                    <p className={styles.roiExplanation}>
                      Na podstawie 74% polskich firm budowlanych doświadczających kradzieży rocznie,
                      ze średnimi stratami w zależności od rozmiaru budowy. WiseGuard zapobiega do 75%
                      potencjalnych strat poprzez monitorowanie w czasie rzeczywistym i natychmiastowe alerty.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
