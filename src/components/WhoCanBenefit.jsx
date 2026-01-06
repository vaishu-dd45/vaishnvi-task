import creator from "../assets/creator.png";
import agency from "../assets/agency.png";
import marketer from "../assets/marketer.png";
import freelancer from "../assets/freelancer.png";
import "./WhoCanBenefit.css";

export default function WhoCanBenefit() {
  return (
    <section className="benefit-v2" id="Keybenefits">
      {/* HEADER */}
      <div className="benefit-header">
        <div>
          <h2>WHO CAN BENEFIT ?</h2>
          <p>
            This is tailor-made for people who already influence
            D2C<br/> brands and e-commerce businesses.
          </p>
        </div>

        <button className="green-btn-who">Become Our Affiliate</button>
      </div>

      {/* CONTENT CREATOR */}
      <div className="box">
      <div className="benefit-row">
        <div className="benefit-text">
          <h3 className="cn">CONTENT CREATOR AND INFLUENCER</h3>
          <p className="cnp">
            You talk to store owners every day. Recommend Profit First
            in videos, reels, or emails and get paid monthly.
          </p>
        </div>
        <img src={creator} alt="creator" />
      </div>

      {/* AGENCY OWNER */}
      <div className="benefit-row reverse">
        <img src={agency} alt="agency" />
        <div className="benefit-text">
          <h3 className="ag">AGENCY OWNER</h3>
          <p className="agp">
            Add a recurring revenue stream to your agency ROAS and
            profit. Give them the tool that actually shows profit and
            collect recurring fees for the referral.
          </p>
        </div>
      </div>

      {/* DIGITAL MARKETER */}
      <div className="benefit-row">
        <div className="benefit-text">
          <h3 className="di">DIGITAL MARKETER AND PAID MEDIA EXPERT</h3>
          <p className="dip">
            This is tailor-made for people who already influence
            D2C brands and e-commerce businesses.
          </p>
        </div>
        <img src={marketer} alt="marketer" />
      </div>

      {/* FREELANCER */}
      <div className="benefit-row reverse">
        <img src={freelancer} alt="freelancer" />
        <div className="benefit-text">
          <h3 className="fr">FREELANCER</h3>
          <p className="frp">
            This is tailor-made for people who already influence
            D2C brands and e-commerce businesses.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}
