/* eslint-disable no-unused-vars */
import "./HowitWorks.css";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import step5 from "../assets/step5.png";
import step2 from "../assets/step2.png";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <motion.section
      className="how-wrapper"
      id="how"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* TITLE */}
      <motion.h2
        className="how-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        HOW IT WORKS ? <br />
        <span>IN 5 SIMPLE STEPS</span>
      </motion.h2>

      {/* STEPS GRID */}
      <motion.div
        className="steps-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {/* STEP 1 */}
        <motion.div
          className="card"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3>SIGN UP</h3>
          <input placeholder="Affiliate ID" />
          <button className="green-btn">Create</button>
          <p className="or">or</p>
          <button className="google-btn">Continue with Google</button>
          <p className="step-text">
            1. SIGN UP <br />
            Instant access to your link and dashboard
          </p>
        </motion.div>

        {/* STEP 2 */}
        <motion.div
          className="card light"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={step2} alt="Referral" className="hoim" />
          <p className="step-text">
            2. SHARE <br />
            Use your emails, social posts and banners
          </p>
        </motion.div>

        {/* STEP 3 */}
        <motion.div
          className="card"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={step3} alt="Referral" className="hoim" />
          <p className="step-text">
            3. REFERRAL SIGNS UP <br />
            Shopify, Meta Ads, Shipping portals
          </p>
        </motion.div>

        {/* STEP 4 */}
        <motion.div
          className="card"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={step4} alt="Growth" className="hoim" />
          <p className="step-text">
            4. THEY SEE RESULTS <br />
            Net profit margins & instant revenue
          </p>
        </motion.div>

        {/* STEP 5 */}
        <motion.div
          className="card"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={step5} alt="Payment" className="hoim" />
          <p className="step-text">
            5. YOU GET PAID <br />
            ₹1000 every month till referral stays active
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HowItWorks;
