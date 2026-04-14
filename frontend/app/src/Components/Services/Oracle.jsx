import React from "react";
import "./Oracle.css";

import {
  FaDatabase,
  FaTools,
  FaChartLine,
  FaProjectDiagram,
  FaCogs,
  FaCheckCircle,
  FaShieldAlt,
  FaRocket
} from "react-icons/fa";

const Oracle = () => {
  return (
    <div className="oracle-page">

      {/* 🔥 HERO */}
      <div className="oracle-hero">

        {/* LEFT */}
        <div className="oracle-hero-left">
          <span className="oracle-badge">Service Overview</span>

          <h1>Oracle Solutions built for enterprise delivery.</h1>

          <p>
            Modernize Oracle platforms with services spanning enterprise
            applications, databases, performance optimization, and
            transformation planning.
          </p>
        </div>

        {/* RIGHT */}
        <div className="oracle-hero-right">
          <img src="/images/Oracle.png" alt="Oracle Solutions" />
        </div>

      </div>

      {/* OVERVIEW */}
      <div className="oracle-overview">
        <h2>Service Overview</h2>

        <div className="oracle-container">

          {/* LEFT */}
          <div className="oracle-card">
            <h3>Key Capabilities</h3>

            <ul>
              <li><FaTools /> Oracle application support and enhancement</li>
              <li><FaDatabase /> Database administration and tuning</li>
              <li><FaChartLine /> Modernization and migration planning</li>
              <li><FaProjectDiagram /> Governance and reliability improvements</li>
              <li><FaCogs /> Integration across enterprise systems</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="oracle-card">
            <h3>Business Benefits</h3>

            <ul>
              <li><FaCheckCircle /> Better data performance</li>
              <li><FaShieldAlt /> Lower operational risk</li>
              <li><FaChartLine /> Improved system reliability</li>
              <li><FaRocket /> Clear modernization roadmaps</li>
            </ul>
          </div>

        </div>
      </div>

      {/* TECHNOLOGIES */}
      <div className="oracle-tech">

        <span className="oracle-badge-light">RELATED TECHNOLOGIES</span>

        <h2>Platforms and technologies we use in delivery.</h2>

        <p>
          Technology choices are aligned to business context, integration needs,
          security requirements, and long-term maintainability.
        </p>

        <div className="oracle-tech-grid">
          <div className="oracle-tech-card">Oracle Database</div>
          <div className="oracle-tech-card">PL/SQL</div>
          <div className="oracle-tech-card">Oracle Cloud Infrastructure</div>
          <div className="oracle-tech-card">Oracle EBS</div>
          <div className="oracle-tech-card">Oracle APEX</div>
          <div className="oracle-tech-card">Oracle Fusion</div>
          <div className="oracle-tech-card">Oracle RAC</div>
          <div className="oracle-tech-card">Oracle Data Integrator</div>
        </div>

      </div>

    </div>
  );
};

export default Oracle;
