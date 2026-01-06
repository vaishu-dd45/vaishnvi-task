/* eslint-disable no-unused-vars */
import creator from "../assets/creator.png";
import agency from "../assets/agency.png";
import marketer from "../assets/marketer.png";
import freelancer from "../assets/freelancer.png";
import "./WhoCanBenefit.css";
import { motion } from "framer-motion";

export default function WhoCanBenefit() {
  const benefits = [
    {
      title: "CONTENT CREATOR AND INFLUENCER",
      text:
        "You talk to store owners every day. Recommend Profit First in videos, reels, or emails and get paid monthly.",
      img: creator,
      reverse: false,
    },
    {
      title: "AGENCY OWNER",
      text:
        "Add a recurring revenue stream to your agency ROAS and profit. Give them the tool that actually shows profit and collect recurring fees for the referral.",
      img: agency,
      reverse: true,
    },
    {
      title: "DIGITAL MARKETER AND PAID MEDIA EXPERT",
      text:
        "This is tailor-made for people who already influence D2C brands and e-commerce businesses.",
      img: marketer,
      reverse: false,
    },
    {
      title: "FREELANCER",
      text:
        "This is tailor-made for people who already influence D2C brands and e-commerce businesses.",
      img: freelancer,
      reverse: true,
    },
  ];

  return (
    <motion.section
      className="benefit-v2"
      id="Keybenefits"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* HEADER */}
      <motion.div
        className="benefit-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2>WHO CAN BENEFIT ?</h2>
          <p>
            This is tailor-made for people who already influence
            D2C<br /> brands and e-commerce businesses.
          </p>
        </div>

        <motion.button
          className="green-btn-who"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Become Our Affiliate
        </motion.button>
      </motion.div>

      {/* BENEFIT ROWS */}
      <div className="box">
        {benefits.map((b, i) => (
          <motion.div
            className={`benefit-row ${b.reverse ? "reverse" : ""}`}
            key={i}
            initial={{ opacity: 0, x: b.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
          >
            {!b.reverse && (
              <div className="benefit-text">
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            )}
            <img src={b.img} alt={b.title} />
            {b.reverse && (
              <div className="benefit-text">
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
