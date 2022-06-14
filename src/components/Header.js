import { Link } from "react-router-dom";
import "../stylesheets/Header.css";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="header-link">Home</Link>
      <Link to="/about" className="header-link">About</Link>
    </div>
  );
};