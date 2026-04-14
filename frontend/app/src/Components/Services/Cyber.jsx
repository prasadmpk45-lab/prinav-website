import React from "react";
import "./cyber.css";

// ICONS
import {
  FaShieldAlt,
  FaUserLock,
  FaBug,
  FaCloud,
  FaClipboardCheck,
  FaLock,
  FaGlobe,
  FaCheckCircle,
  FaEye
} from "react-icons/fa";

const Cybersecurity = () => {
  return (
    <div className="cyber-page">

      {/* HERO */}
      <section className="cyber-hero">

        <div className="cyber-hero-left">
          <span className="cyber-badge">Technology Service</span>
          <h1>Cybersecurity Services</h1>

          <p>
            Protect critical platforms with cybersecurity services that strengthen
            applications, cloud environments, identities, and operational controls.
          </p>
        </div>

        <div className="cyber-hero-right">
          <img src="/images/cyber.png" alt="Cyber" />
        </div>

      </section>

      {/* OVERVIEW */}
      <section className="cyber-overview">
        <h2>Service Overview</h2>

        <div className="cyber-container">

          {/* LEFT */}
          <div className="cyber-card">
            <h3>Key Capabilities</h3>

            <ul>
              <li><FaShieldAlt /> Security posture assessments</li>
              <li><FaUserLock /> Identity & access design</li>
              <li><FaBug /> Threat monitoring</li>
              <li><FaCloud /> Cloud security governance</li>
              <li><FaClipboardCheck /> Compliance readiness</li>
            </ul>

          </div>

          {/* RIGHT */}
          <div className="cyber-card">
            <h3>Business Benefits</h3>

            <ul>
              <li><FaLock /> Reduced security risk</li>
              <li><FaGlobe /> Stronger protection</li>
              <li><FaCheckCircle /> Compliance readiness</li>
              <li><FaEye /> Better visibility</li>
            </ul>

          </div>

        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="cyber-tech">

        <span className="cyber-badge-light">RELATED TECHNOLOGIES</span>

        <h2>Platforms and technologies we use in delivery.</h2>

        <p>
          Technology choices aligned to business context and long-term maintainability.
        </p>

        <div className="cyber-tech-grid">
          {[
            "Microsoft Defender",
            "CrowdStrike",
            "Okta",
            "AWS Security Hub",
            "Microsoft Sentinel",
            "Splunk",
            "Palo Alto Prisma Cloud",
            "IAM"
          ].map((item, index) => (
            <div key={index} className="cyber-tech-card">
              {item}
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};

export default Cybersecurity;
