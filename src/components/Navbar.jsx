import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />

      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#Keybenefits">Benefits</a></li>
        <li><a href="#how">How it works</a></li>
        <li><a href="#FAQ">FAQ</a></li>
      </ul>
    </nav>
  );
}
