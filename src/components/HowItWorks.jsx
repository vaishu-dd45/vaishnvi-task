import "./HowitWorks.css";
import step3 from "../assets/step3.png"
import step4 from "../assets/step4.png"
import step5 from "../assets/step5.png"
import step2 from "../assets/step2.png"
const HowItWorks = () => {
  return (
    <section className="how-wrapper" id="how">
      <h2 className="how-title">
        HOW IT WORKS ? <br />
        <span>IN 5 SIMPLE STEPS</span>
      </h2>

      <div className="steps-grid">

        {/* STEP 1 */}
        <div className="card">
          <h3>SIGN UP</h3>
          <input placeholder="Affiliate ID" />
          <button className="green-btn">Create</button>
          <p className="or">or</p>
          <button className="google-btn">Continue with Google</button>
          <p className="step-text">
            1. SIGN UP <br />
            Instant access to your link and dashboard
          </p>
        </div>

        {/* STEP 2 */}
        <div className="card light">
           <img src={step2} alt="Referral" className="hoim"/>
          <p className="step-text">
            2. SHARE <br />
            Use your emails, social posts and banners
          </p>
        </div>

        {/* STEP 3 */}
        <div className="card">
          <img src={step3} alt="Referral"  className="hoim"/>
          <p className="step-text">
            3. REFERRAL SIGNS UP <br />
            Shopify, Meta Ads, Shipping portals
          </p>
        </div>

        {/* STEP 4 */}
        <div className="card">
          <img src={step4} alt="Growth" className="hoim"/>
          <p className="step-text">
            4. THEY SEE RESULTS <br />
            Net profit margins & instant revenue
          </p>
        </div>

        {/* STEP 5 */}
        <div className="card">
          <img src={step5} alt="Payment" className="hoim"/>
          <p className="step-text">
            5. YOU GET PAID <br />
            ₹1000 every month till referral stays active
          </p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
