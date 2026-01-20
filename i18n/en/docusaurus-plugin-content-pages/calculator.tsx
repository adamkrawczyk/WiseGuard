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
  const [numTools, setNumTools] = useState<number>(50);
  const [numHighValue, setNumHighValue] = useState<number>(5);
  const [siteSize, setSiteSize] = useState<string>('small');
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateCosts = () => {
    // Pricing model (in PLN)
    const BLE_TAG_COST = 40; // ~$10
    const GPS_TRACKER_COST = 400; // ~$100
    const GATEWAY_COST = 400; // ~$100
    const MONTHLY_BLE_FEE = 2; // per tag
    const MONTHLY_GPS_FEE = 20; // per tracker
    const MONTHLY_PLATFORM_FEE = 200; // base platform fee

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

    // Potential savings calculation - more realistic estimate
    const averageTheftLossPerYear = 15000 + (numTools * 50) + (numHighValue * 2000); // PLN
    const preventionRate = 0.75; // 75% prevention/recovery improvement
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
      title="Cost Calculator"
      description="Calculate the cost and ROI of implementing WiseGuard at your construction site">
      <div className={styles.calculatorPage}>
        <div className="container">
          <h1 className={styles.title}>Cost Calculator</h1>
          <p className={styles.subtitle}>
            Estimate your investment and potential savings with WiseGuard
          </p>

          <div className={styles.calculatorContainer}>
            <div className={styles.inputSection}>
              <h2>Your Site Details</h2>

              <div className={styles.inputGroup}>
                <label>
                  Number of Tools & Small Equipment
                  <span className={styles.helpText}>(Using BLE Tags)</span>
                </label>
                <input
                  type="number"
                  min="10"
                  max="1000"
                  value={numTools}
                  onChange={(e) => setNumTools(parseInt(e.target.value) || 0)}
                  className={styles.input}
                />
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={numTools}
                  onChange={(e) => setNumTools(parseInt(e.target.value))}
                  className={styles.slider}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>
                  Number of High-Value Assets
                  <span className={styles.helpText}>(Using GPS Trackers)</span>
                </label>
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={numHighValue}
                  onChange={(e) => setNumHighValue(parseInt(e.target.value) || 0)}
                  className={styles.input}
                />
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={numHighValue}
                  onChange={(e) => setNumHighValue(parseInt(e.target.value))}
                  className={styles.slider}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Site Size</label>
                <select
                  value={siteSize}
                  onChange={(e) => setSiteSize(e.target.value)}
                  className={styles.select}
                >
                  <option value="small">Small (Up to 100×100m) - 2 Gateways</option>
                  <option value="medium">Medium (Up to 200×200m) - 3 Gateways</option>
                  <option value="large">Large (200×200m+) - 5 Gateways</option>
                </select>
              </div>

              <button onClick={calculateCosts} className={styles.calculateButton}>
                Calculate Costs
              </button>
            </div>

            {result && (
              <div className={styles.resultsSection}>
                <h2>Your Investment</h2>

                <div className={styles.resultCard}>
                  <h3>Initial Setup Cost</h3>
                  <div className={styles.costBreakdown}>
                    <div className={styles.costItem}>
                      <span>BLE Tags ({numTools})</span>
                      <span>{result.bleTagsCost.toLocaleString()} PLN</span>
                    </div>
                    <div className={styles.costItem}>
                      <span>GPS Trackers ({numHighValue})</span>
                      <span>{result.gpsTrackersCost.toLocaleString()} PLN</span>
                    </div>
                    <div className={styles.costItem}>
                      <span>Gateways</span>
                      <span>{result.gatewaysCost.toLocaleString()} PLN</span>
                    </div>
                    <div className={styles.costTotal}>
                      <span>Total Setup</span>
                      <span>{result.setupCost.toLocaleString()} PLN</span>
                    </div>
                  </div>
                </div>

                <div className={styles.resultCard}>
                  <h3>Ongoing Costs</h3>
                  <div className={styles.costBreakdown}>
                    <div className={styles.costItem}>
                      <span>Monthly Subscription</span>
                      <span>{result.monthlyCost.toLocaleString()} PLN</span>
                    </div>
                    <div className={styles.costItem}>
                      <span>Annual Subscription</span>
                      <span>{result.annualCost.toLocaleString()} PLN</span>
                    </div>
                    <div className={styles.costTotal}>
                      <span>First Year Total</span>
                      <span>{result.totalFirstYear.toLocaleString()} PLN</span>
                    </div>
                  </div>
                </div>

                <div className={styles.resultCard + ' ' + styles.savingsCard}>
                  <h3>💰 Your Expected Benefits</h3>
                  <div className={styles.savingsHighlight}>
                    <div className={styles.savingsAmount}>
                      {result.potentialSavings.toLocaleString()} PLN
                    </div>
                    <div className={styles.savingsLabel}>Estimated Annual Savings</div>
                  </div>
                  <div className={styles.benefitsList}>
                    <div className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>🛡️</span>
                      <span>75% reduction in theft incidents</span>
                    </div>
                    <div className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>⏱️</span>
                      <span>Save 3-4 weeks project delays</span>
                    </div>
                    <div className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>📉</span>
                      <span>Lower insurance premiums</span>
                    </div>
                    <div className={styles.benefitItem}>
                      <span className={styles.benefitIcon}>👨‍💼</span>
                      <span>Peace of mind for managers</span>
                    </div>
                  </div>
                  <div className={styles.roiInfo}>
                    <p>
                      <strong>Return on Investment:</strong> {result.roiMonths} months
                    </p>
                    <p className={styles.roiExplanation}>
                      Based on 74% of Polish construction firms experiencing theft annually,
                      with average losses varying by site size. WiseGuard prevents up to 75% 
                      of potential losses through real-time monitoring and instant alerts.
                    </p>
                  </div>
                </div>

                <div className={styles.ctaBox}>
                  <h3>Ready to Get Started?</h3>
                  <p>Contact us for a personalized quote and pilot program details</p>
                  <a href="/contact" className={styles.ctaButton}>
                    Contact Sales
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
