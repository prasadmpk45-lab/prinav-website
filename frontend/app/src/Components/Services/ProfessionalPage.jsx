import React from "react";
import "./Professional.css";

import {
  FaUserTie,
  FaUsers,
  FaLightbulb,
  FaProjectDiagram,
  FaChartLine,
  FaCheckCircle,
  FaRocket,
  FaHandshake
} from "react-icons/fa";

const ProfessionalPage = () => {
  return (
    <div className="professional-page">

      {/* HERO */}
      <div className="professional-hero">

        {/* LEFT */}
        <div className="professional-hero-left">
          <span className="professional-badge">Service Overview</span>

          <h1>Professional Services built for enterprise delivery.</h1>

          <p>
            Scale execution with consulting, staff augmentation, and leadership hiring
            models aligned to enterprise delivery needs and growth priorities.
          </p>
        </div>

        {/* RIGHT */}
        <div className="professional-hero-right">
          <img src="/images/Service.jpg" alt="Professional Services" />
        </div>

      </div>

      {/* OVERVIEW */}
      <div className="professional-overview">
        <h2>Service Overview</h2>

        <div className="professional-container">

          {/* LEFT */}
          <div className="professional-card">
            <h3>Key Capabilities</h3>

            <ul>
              <li><FaUserTie /> Technology consulting and advisory support</li>
              <li><FaUsers /> Staff augmentation for delivery programs</li>
              <li><FaLightbulb /> Leadership hiring and talent solutions</li>
              <li><FaProjectDiagram /> Flexible engagement models</li>
              <li><FaChartLine /> Capability planning around business demand</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="professional-card">
            <h3>Business Benefits</h3>

            <ul>
              <li><FaCheckCircle /> Faster access to specialized talent</li>
              <li><FaRocket /> Greater delivery flexibility</li>
              <li><FaChartLine /> Improved execution capacity</li>
              <li><FaHandshake /> Better alignment across teams</li>
            </ul>
          </div>

        </div>
      </div>

      {/* TECHNOLOGIES */}
      <div className="professional-tech">

        <span className="professional-badge-light">RELATED TECHNOLOGIES</span>

        <h2>Platforms and technologies we use in delivery.</h2>

        <p>
          Technology choices are aligned to business context, integration needs,
          security requirements, and long-term maintainability.
        </p>

        <div className="professional-tech-grid">
          <div className="professional-tech-card">Solution Architecture</div>
          <div className="professional-tech-card">Project Management</div>
          <div className="professional-tech-card">Business Analysis</div>
          <div className="professional-tech-card">AWS</div>
          <div className="professional-tech-card">Azure</div>
          <div className="professional-tech-card">SAP</div>
          <div className="professional-tech-card">Oracle</div>
          <div className="professional-tech-card">Data Platforms</div>
        </div>

      </div>

    </div>
  );
};

export default ProfessionalPage;
