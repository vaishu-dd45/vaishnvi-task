import { useState } from "react";
import "../components/FAQ.css";

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
    <section className="faq-section" id="FAQ">
      <div className="faq-container">

        {/* LEFT */}
        <div className="faq-left">
          <h1>
            Frequently Asked<br />
            <span>Questions</span>
          </h1>
          <p>
            If you have any query in your mind this section might answer that and
            if not we have AI by your side.
          </p>
        </div>

        {/* RIGHT */}
        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="faq-question">
                <span>{faq.question}</span>
                <span className="icon">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>

              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
