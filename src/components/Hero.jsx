import "./Hero.css";
import heroVideo from "../assets/hero.mp4";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <h1 className="font">TURN YOUR AUDIENCE INTO <br/> RECURRING CASH</h1>
        <p className="text">
          Join the Profit First Affiliate Program and<br/> earn
          <strong> ₹1,00,000+ </strong> every month, effortlessly.
        </p>

        <button className="green-btn-hero">Become Our Affiliate</button>
      </div>
       <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}
