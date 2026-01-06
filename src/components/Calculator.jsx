/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./Calculator.css";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";

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
    <motion.section
      className="calculator"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="calculator-wrapper">

        {/* HEADER */}
        <motion.div
          className="calculator-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={logo} alt="Profit First" className="logo" />
          <h2>Affiliate Earning Calculator</h2>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="calculator-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* INPUT CARD */}
          <motion.div
            className="card"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
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
          </motion.div>

          {/* RESULTS */}
          <motion.div
            className="results-section"
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3>Your Earnings & Impacts</h3>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              <motion.div
                className="result"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="result-left">
                  <span>Affiliate – Monthly recurring income</span>
                  <strong>₹ {monthlyIncome.toLocaleString()}</strong>
                </div>
                <div className="result-right">
                  {referrals || 0} × {commission || 0}
                </div>
              </motion.div>

              <motion.div
                className="result"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="result-left">
                  <span>Affiliate – Annual recurring 12×</span>
                  <strong>₹ {annualIncome.toLocaleString()}</strong>
                </div>
                <div className="result-right">12 Months</div>
              </motion.div>

              <motion.div
                className="result"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="result-left">
                  <span>Projected Affiliate lifetime earning</span>
                  <strong>₹ {lifetimeIncome.toLocaleString()}</strong>
                </div>
                <div className="result-right">
                  {months || 0} Months Average
                </div>
              </motion.div>
            </motion.div>

            <motion.button
              className="btn primary become"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become Our Affiliate
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
