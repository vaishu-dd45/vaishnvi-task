import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import logo from "../assets/logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo clickable */}
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#Keybenefits">Benefits</a></li>
        <li><a href="#how">How it works</a></li>
        <li><a href="#FAQ">FAQ</a></li>
      </ul>
    </nav>
  );
}
