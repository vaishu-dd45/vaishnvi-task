import "./KeyBenefit.css";
import benefits from "../assets/benefits.png";
import upperColum from "../assets/uppercolun.jpg";
import lowerColum from "../assets/lowercolun.jpg";

export default function KeyBenefits() {
  return (
    <section className="key">
      <h2>Key Benefits</h2>

      <div className="key-box">
        <div className="key-container">
          <img src={benefits} alt="Benefits" className="key-image" />

          <div className="benefit-card left-top">
            <img src={upperColum} className="icon icon-top" alt="" />
            RECURRING ₹1,000/MONTH PER ACTIVE REFERRAL – PAID EVERY MONTH.
            <img src={lowerColum} className="icon icon-bottom" alt="" />
          </div>

          <div className="benefit-card right-top">
            <img src={upperColum} className="icon icon-top" alt="" />
            INSTANT CREDIBILITY: WE’RE AN AI-DRIVEN FINANCE PLATFORM FOR D2C BRANDS.
            <img src={lowerColum} className="icon icon-bottom" alt="" />
          </div>

          <div className="benefit-card left-bottom">
            <img src={upperColum} className="icon icon-top" alt="" />
            DONE-FOR-YOU CREATIVES, SWIPE COPY, AND TRACKING LINKS – PLUG-AND-PLAY.
            <img src={lowerColum} className="icon icon-bottom" alt="" />
          </div>

          <div className="benefit-card right-bottom">
            <img src={upperColum} className="icon icon-top" alt="" />
            TRANSPARENT REPORTING SO YOU CAN SEE EXACTLY WHAT YOU EARNED.
            <img src={lowerColum} className="icon icon-bottom" alt="" />
          </div>

          <div className="benefit-card center-bottom">
            <img src={upperColum} className="icon icon-top" alt="" />
            HIGH PERCEIVED VALUE – EASY CONVERSIONS TO YOUR AUDIENCE.
            <img src={lowerColum} className="icon icon-bottom" alt="" />
          </div>
        </div>
      </div>
    </section>
);
}