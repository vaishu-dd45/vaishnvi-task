/* eslint-disable no-unused-vars */
import { useState } from "react";
import "../components/FAQ.css";
import { motion } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "When do I get paid?",
      answer:
        "Monthly – payouts are processed every month for all active referrals."
    },
    {
      question: "What does “active” mean?",
      answer: "Active means the referral is currently using the service."
    },
    {
      question: "Do I need to be technical?",
      answer: "No, anyone can participate without technical knowledge."
    },
    {
      question: "Can I promote to Agencies and Consultants",
      answer: "Yes, agencies and consultants are allowed."
    }
  ];

  return (
    <motion.section
      className="faq-section"
      id="FAQ"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="faq-container">

        {/* LEFT */}
        <motion.div
          className="faq-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1>
            Frequently Asked<br />
            <span>Questions</span>
          </h1>
          <p>
            If you have any query in your mind this section might answer that and
            if not we have AI by your side.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="faq-right"
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
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="icon">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>

              {activeIndex === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default FAQ;
