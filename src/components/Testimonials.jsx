import { useState, useEffect } from "react";
import "./Testimonials.css";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.png";

import user4 from "../assets/user4.png";

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
    text:
      "I have been making ₹20k per month and it’s been just 2 months.",
    img: user1,
  },
  {
    name: "Neha Sharma",
    role: "Apparel Founder",
    stars: 4,
    text:
      "Profit First revealed a ₹45k leak in our funnel. ROI was immediate.",
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
    <section className="testimonial-wrapper">
      <h2>
        See what our <span>ELITE USERS</span> say
      </h2>

      <div className="testimonial-card horizontal">

        {/* LEFT IMAGE */}
       <div className="image-section">
          <img src={user.img} alt={user.name} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="content-section">
          <h3>{user.name}</h3>
          <p className="role">{user.role}</p>

          <div className="stars">
            {"★".repeat(user.stars)}
          </div>

          <p className="text">“{user.text}”</p>

          <div className="controls">
            <button onClick={() => setIndex((index - 1 + data.length) % data.length)}>
              ‹
            </button>
            <button onClick={() => setIndex((index + 1) % data.length)}>
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
