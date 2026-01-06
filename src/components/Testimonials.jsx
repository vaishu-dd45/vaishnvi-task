/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./Testimonials.css";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";
import user4 from "../assets/user4.png";
import { motion } from "framer-motion";

const data = [
  {
    name: "Sameer Malve",
    role: "Performance Marketer",
    stars: 5,
    text:
      "Daily WhatsApp insights are a lifesaver. Clients actually buy from referrals content now.",
    img: user4,
  },
  {
    name: "Emma Stone",
    role: "Agency Owner",
    stars: 5,
    text: "I have been making ₹20k per month and it’s been just 2 months.",
    img: user1,
  },
  {
    name: "Neha Sharma",
    role: "Apparel Founder",
    stars: 4,
    text: "Profit First revealed a ₹45k leak in our funnel. ROI was immediate.",
    img: user2,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const user = data[index];

  return (
    <motion.section
      className="testimonial-wrapper"
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
        See what our <span>ELITE USERS</span> say
      </motion.h2>

      {/* TESTIMONIAL CARD */}
      <motion.div
        className="testimonial-card horizontal"
        key={index} // re-render animation on change
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* LEFT IMAGE */}
        <motion.div
          className="image-section"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img src={user.img} alt={user.name} />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="content-section"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3>{user.name}</h3>
          <p className="role">{user.role}</p>

          <div className="stars">{"★".repeat(user.stars)}</div>

          <p className="text">“{user.text}”</p>

          <div className="controls">
            <button
              onClick={() =>
                setIndex((index - 1 + data.length) % data.length)
              }
            >
              ‹
            </button>
            <button onClick={() => setIndex((index + 1) % data.length)}>
              ›
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
