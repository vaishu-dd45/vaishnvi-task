import { useState } from "react";
import "./Calculator.css";
import logo from "../assets/logo.png";

export default function Calculator() {
  const [referrals, setReferrals] = useState("");
  const [clientPrice, setClientPrice] = useState("");
  const [commission, setCommission] = useState("");
  const [months, setMonths] = useState("12");

  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [annualIncome, setAnnualIncome] = useState(0);
  const [lifetimeIncome, setLifetimeIncome] = useState(0);

  function calculate() {
    const r = Number(referrals) || 0;
    const c = Number(commission) || 0;
    const m = Number(months) || 0;

    const monthly = r * c;
    setMonthlyIncome(monthly);
    setAnnualIncome(monthly * 12);
    setLifetimeIncome(monthly * m);
  }

  function resetForm() {
    setReferrals("");
    setClientPrice("");
    setCommission("");
    setMonths("12");
    setMonthlyIncome(0);
    setAnnualIncome(0);
    setLifetimeIncome(0);
  }

  return (
    <section className="calculator">
      <div className="calculator-wrapper">
        {/* HEADER */}
        <div className="calculator-header">
          <img src={logo} alt="Profit First" className="logo" />
          <h2>Affiliate Earning Calculator</h2>
        </div>

        {/* GRID */}
        <div className="calculator-grid">
          {/* INPUT CARD */}
          <div className="card">
            <h3>Inputs</h3>

            <label>Number of active referrals</label>
            <input
              type="number"
              value={referrals}
              onChange={(e) => setReferrals(e.target.value)}
            />

            <label>Client Monthly Price</label>
            <input
              type="number"
              value={clientPrice}
              onChange={(e) => setClientPrice(e.target.value)}
            />

            <label>Affiliate commission per client / month</label>
            <input
              type="number"
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
            />

            <label>Average months a referred client stays active</label>
            <input
              type="number"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
            />

            <div className="btn-group">
              <button className="btn primary" onClick={calculate}>
                Calculate
              </button>
              <button className="btn secondary" onClick={resetForm}>
                Reset
              </button>
            </div>
          </div>

          {/* RESULTS SECTION (NO OUTER BOX) */}
          <div className="results-section">
            <h3>Your Earnings & Impacts</h3>

            <div className="result">
              <div className="result-left">
                <span>Affiliate – Monthly recurring income</span>
                <strong>₹ {monthlyIncome.toLocaleString()}</strong>
              </div>
              <div className="result-right">
                {referrals || 0} × {commission || 0}
              </div>
            </div>

            <div className="result">
              <div className="result-left">
                <span>Affiliate – Annual recurring 12×</span>
                <strong>₹ {annualIncome.toLocaleString()}</strong>
              </div>
              <div className="result-right">12 Months</div>
            </div>

            <div className="result">
              <div className="result-left">
                <span>Projected Affiliate lifetime earning</span>
                <strong>₹ {lifetimeIncome.toLocaleString()}</strong>
              </div>
              <div className="result-right">
                {months || 0} Months Average
              </div>
            </div>

            <button className="btn primary become">
              Become Our Affiliate
            </button>
          </div>
        </div>
      </div>
    </section>
 );
}
