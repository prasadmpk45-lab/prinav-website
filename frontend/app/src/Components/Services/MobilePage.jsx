import React from "react";
import "./MobilePage.css";

import {
  FaMobileAlt,
  FaServer,
  FaChartLine,
  FaTools,
  FaUsers,
  FaRocket,
  FaSyncAlt,
  FaNetworkWired
} from "react-icons/fa";

const MobilePage = () => {
  return (
    <div className="mobile-page">

      {/* 🔥 HERO SECTION */}
      <div className="mobile-hero-new">

        {/* LEFT */}
        <div className="mobile-hero-left">
          <span className="mobile-badge">Technology Service</span>

          <h1>
            Mobile App <br /> Development Services
          </h1>

          <p>
            Build polished mobile experiences that connect users, business operations,
            and backend systems through secure, API-first product delivery.
          </p>
        </div>

        {/* RIGHT */}
        <div className="mobile-hero-right">
          <img src="/images/Mobile.jpg" alt="Mobile Development" />
        </div>

      </div>

      {/* SERVICE OVERVIEW */}
      <div className="mobile-overview">
        <h2>Service Overview</h2>

        <div className="mobile-container">

          {/* LEFT */}
          <div className="mobile-card">
            <h3>Key Capabilities</h3>

            <ul>
              <li>
                <span className="mobile-icon"><FaMobileAlt /></span>
                Cross-platform and native mobile delivery
              </li>

              <li>
                <span className="mobile-icon"><FaServer /></span>
                Mobile backend and authentication integration
              </li>

              <li>
                <span className="mobile-icon"><FaChartLine /></span>
                Analytics and performance instrumentation
              </li>

              <li>
                <span className="mobile-icon"><FaTools /></span>
                App lifecycle support and enhancement
              </li>

              <li>
                <span className="mobile-icon"><FaUsers /></span>
                UX optimization for mobile workflows
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="mobile-card">
            <h3>Business Benefits</h3>

            <ul>
              <li>
                <span className="mobile-icon"><FaRocket /></span>
                Higher user adoption
              </li>

              <li>
                <span className="mobile-icon"><FaSyncAlt /></span>
                Reliable mobile release pipelines
              </li>

              <li>
                <span className="mobile-icon"><FaMobileAlt /></span>
                Consistent cross-platform experiences
              </li>

              <li>
                <span className="mobile-icon"><FaNetworkWired /></span>
                Improved operational connectivity
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* TECHNOLOGIES */}
      <div className="mobile-tech">
        <span className="mobile-badge">RELATED TECHNOLOGIES</span>
        <h2>Platforms and technologies we use in delivery.</h2>

        <p>
          Technology choices are aligned to business context, integration needs,
          security requirements, and long-term maintainability.
        </p>

        <div className="mobile-tech-grid">
          <div className="mobile-tech-card">React Native</div>
          <div className="mobile-tech-card">Flutter</div>
          <div className="mobile-tech-card">Swift</div>
          <div className="mobile-tech-card">Kotlin</div>
          <div className="mobile-tech-card">Firebase</div>
          <div className="mobile-tech-card">SQLite</div>
          <div className="mobile-tech-card">REST APIs</div>
          <div className="mobile-tech-card">App Center</div>
        </div>
      </div>

    </div>
  );
};

export default MobilePage;
