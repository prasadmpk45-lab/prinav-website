import React from "react";
import "./WebPage.css";

import {
  FaCode,
  FaMobileAlt,
  FaCogs,
  FaRocket,
  FaShieldAlt,
  FaChartLine
} from "react-icons/fa";

const WebPage = () => {
  return (
    <div className="web-page">

      {/* 🔥 HERO */}
      <div className="web-hero">

        {/* LEFT */}
        <div className="web-hero-left">
          <span className="web-badge">Technology Service</span>

          <h1>
            Web Development <br /> Services
          </h1>

          <p>
            Create responsive digital products and enterprise web platforms
            with modern frontend architecture, strong UX, and scalable integrations.
          </p>
        </div>

        {/* RIGHT */}
        <div className="web-hero-right">
          <img src="/images/web.jpg" alt="Web Development" />
        </div>

      </div>

      {/* 🔥 INTRO */}
      <div className="web-intro">
        <p>
          Build scalable web applications with performance, usability,
          and modern architecture at the core of every solution.
        </p>
      </div>

      {/* 🔥 SERVICE OVERVIEW */}
      <div className="web-container">

        {/* LEFT */}
        <div className="web-card">
          <h2>Key Capabilities</h2>

          <div className="web-item">
            <div className="web-icon"><FaCode /></div>
            <span>Frontend architecture and design systems</span>
          </div>

          <div className="web-item">
            <div className="web-icon"><FaMobileAlt /></div>
            <span>Responsive enterprise web applications</span>
          </div>

          <div className="web-item">
            <div className="web-icon"><FaCogs /></div>
            <span>CMS and API integrations</span>
          </div>

          <div className="web-item">
            <div className="web-icon"><FaRocket /></div>
            <span>Performance optimization across devices</span>
          </div>

          <div className="web-item">
            <div className="web-icon"><FaShieldAlt /></div>
            <span>Accessibility and usability improvements</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="web-card">
          <h2>Business Benefits</h2>

          <div className="web-item">
            <div className="web-icon"><FaChartLine /></div>
            <span>Stronger digital user experiences</span>
          </div>

          <div className="web-item">
            <div className="web-icon"><FaRocket /></div>
            <span>Better frontend performance</span>
          </div>

          <div className="web-item">
            <div className="web-icon"><FaCogs /></div>
            <span>Scalable web platform foundations</span>
          </div>

          <div className="web-item">
            <div className="web-icon"><FaMobileAlt /></div>
            <span>Improved conversion and usability</span>
          </div>
        </div>

      </div>

      {/* 🔥 TECHNOLOGIES */}
      <div className="web-tech">

        <h2>Platforms and technologies we use in delivery.</h2>
        <p>
          Technology choices aligned to business needs, integration,
          and long-term scalability.
        </p>

        <div className="web-tech-grid">
          <div className="web-tech-card">React</div>
          <div className="web-tech-card">TypeScript</div>
          <div className="web-tech-card">Next.js</div>
          <div className="web-tech-card">Node.js</div>
          <div className="web-tech-card">REST APIs</div>
          <div className="web-tech-card">Tailwind CSS</div>
          <div className="web-tech-card">Figma</div>
          <div className="web-tech-card">WordPress</div>
        </div>

      </div>

    </div>
  );
};

export default WebPage;
