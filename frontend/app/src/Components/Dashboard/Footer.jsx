import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../../assets/logo.png";
import "./Dashboard.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Who We Are", to: "/about" },
  { label: "What We Do", to: "/services" },
  { label: "Our Products", to: "/products" },
  { label: "Careers", to: "/careers" },
  { label: "Get In Touch", to: "/contact#get-in-touch" },
];

const highlightItems = [
  { label: "IT Services", to: "/services" },
  { label: "Testing Support", to: "/services/testing-automation" },
  { label: "Cloud Solutions", to: "/services/microsoft-solutions" },
  { label: "Staffing Services", to: "/about" },
  { label: "Web Development", to: "/services/web-development" },
  { label: "Business Support", to: "/contact#get-in-touch" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-col footer-brand-col">
            <img src={logo} alt="Pirnav Logo" className="footer-logo" />
            <span className="footer-kicker">Since 2016</span>
            <p>
              Pirnav Software Solutions supports businesses with simple, reliable IT
              services, testing, cloud solutions, and staffing support for everyday
              growth. We help teams build dependable digital products with practical
              guidance, quality delivery, and long-term support.
            </p>
          </div>

          <div className="footer-col">
            <span className="footer-label">Company</span>
            <div className="footer-links">
              {navLinks.map((item) => (
                <Link key={item.label} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <span className="footer-label">Highlights</span>
            <div className="footer-text-list">
              {highlightItems.map((item) => (
                <Link key={item.label} to={item.to} className="footer-text-item">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="footer-col footer-contact">
            <span className="footer-label">Contact</span>
            <div className="footer-contact-links">
              <a href="tel:04035339312">040-35339312</a>
              <a href="mailto:contact@pirnav.com">contact@pirnav.com</a>
              <p>Hyderabad, Vijayawada, Tirupati, Bengaluru, Austin, New York City</p>
              <p>Reach out for project discussions, support needs, and business enquiries.</p>
            </div>

            <div className="social-icons">
              <a
                className="social-box"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF aria-hidden="true" />
              </a>
              <a
                className="social-box"
                href="https://www.linkedin.com/company/pirnav/posts/?feedView=all"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn aria-hidden="true" />
              </a>
              <a
                className="social-box"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram aria-hidden="true" />
              </a>
              <a
                className="social-box"
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
              >
                <FaXTwitter aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{`Copyright © ${currentYear} Pirnav Software Solutions. All rights reserved.`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
