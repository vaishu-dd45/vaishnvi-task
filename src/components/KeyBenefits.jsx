/* eslint-disable no-unused-vars */
import "./KeyBenefit.css";
import benefits from "../assets/benefits.png";
import upperColum from "../assets/uppercolun.jpg";
import lowerColum from "../assets/lowercolun.jpg";
import { motion } from "framer-motion";

export default function KeyBenefits() {
  return (
    <motion.section
      className="key"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Key Benefits
      </motion.h2>

      <div className="key-box">
        <div className="key-container">

          {/* CENTER IMAGE */}
          <motion.img
            src={benefits}
            alt="Benefits"
            className="key-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* LEFT TOP */}
          <motion.div
            className="benefit-card left-top"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={upperColum} className="icon icon-top" alt="" />
            RECURRING ₹1,000/MONTH PER ACTIVE REFERRAL – PAID EVERY MONTH.
            <img src={lowerColum} className="icon icon-bottom" alt="" />
          </motion.div>

          {/* RIGHT TOP */}
          <motion.div
            className="benefit-card right-top"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={upperColum} className="icon icon-top" alt="" />
            INSTANT CREDIBILITY: WE’RE AN AI-DRIVEN FINANCE PLATFORM FOR D2C BRANDS.
            <img src={lowerColum} className="icon icon-bottom" alt="" />
          </motion.div>

          {/* LEFT BOTTOM */}
          <motion.div
            className="benefit-card left-bottom"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img src={upperColum} className="icon icon-top" alt="" />
            DONE-FOR-YOU CREATIVES, SWIPE COPY, AND TRACKING LINKS – PLUG-AND-PLAY.
            <img src={lowerColum} className="icon icon-bottom" alt="" />
          </motion.div>

          {/* RIGHT BOTTOM */}
          <motion.div
            className="benefit-card right-bottom"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img src={upperColum} className="icon icon-top" alt="" />
            TRANSPARENT REPORTING SO YOU CAN SEE EXACTLY WHAT YOU EARNED.
            <img src={lowerColum} className="icon icon-bottom" alt="" />
          </motion.div>

          {/* CENTER BOTTOM */}
          <motion.div
            className="benefit-card center-bottom"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={upperColum} className="icon icon-top" alt="" />
            HIGH PERCEIVED VALUE – EASY CONVERSIONS TO YOUR AUDIENCE.
            <img src={lowerColum} className="icon icon-bottom" alt="" />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
