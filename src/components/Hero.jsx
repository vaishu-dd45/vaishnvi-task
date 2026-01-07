/* eslint-disable no-unused-vars */
import "./Hero.css";
import heroVideo from "../assets/hero.mp4";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
   const navigate = useNavigate();
  return (
    <section className="hero" id="hero">

      {/* LEFT CONTENT */}
      <motion.div
        className="hero-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        {/* HEADING */}
        <motion.h1
          className="font"
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          TURN YOUR AUDIENCE INTO <br /> RECURRING CASH
        </motion.h1>

        {/* TEXT */}
        <motion.p
          className="text"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Join the Profit First Affiliate Program and <br />
          earn <strong> ₹1,00,000+ </strong> every month, effortlessly.
        </motion.p>

        {/* BUTTON */}
        <motion.button
        className="green-btn-hero"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}

        // 🔥 CLICK → DASHBOARD
        onClick={() => navigate("/dashboard")}
      >
        Go to Dashbaord
      </motion.button>
    </motion.div>
     

      {/* RIGHT VIDEO */}
      <motion.video
        className="hero-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    </section>
  );
}
