import React from "react";
import "./Microsoft.css";

import {
  FaCloud,
  FaUsers,
  FaProjectDiagram,
  FaCogs,
  FaRocket,
  FaCheckCircle,
  FaShieldAlt,
  FaChartLine
} from "react-icons/fa";

const Microsoft = () => {
  return (
    <div className="microsoft-page">

      {/* 🔥 HERO */}
      <div className="microsoft-hero">

        {/* LEFT */}
        <div className="microsoft-hero-left">
          <span className="microsoft-badge">Service Overview</span>

          <h1>Microsoft Solutions built for enterprise delivery.</h1>

          <p>
            Deliver Microsoft ecosystem solutions across cloud,
            collaboration, productivity, and enterprise modernization initiatives.
          </p>
        </div>

        {/* RIGHT */}
        <div className="microsoft-hero-right">
          <img src="/images/Microsoft.png" alt="Microsoft Solutions" />
        </div>

      </div>

      {/* OVERVIEW */}
      <div className="microsoft-overview">
        <h2>Service Overview</h2>

        <div className="microsoft-container">

          {/* LEFT */}
          <div className="microsoft-card">
            <h3>Key Capabilities</h3>

            <ul>
              <li><FaCloud /> Azure architecture and migration support</li>
              <li><FaUsers /> Collaboration and productivity solutions</li>
              <li><FaProjectDiagram /> Integration across Microsoft platforms</li>
              <li><FaCogs /> Cloud operations and governance</li>
              <li><FaRocket /> Platform modernization programs</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="microsoft-card">
            <h3>Business Benefits</h3>

            <ul>
              <li><FaCheckCircle /> Improved cloud maturity</li>
              <li><FaUsers /> Stronger team collaboration</li>
              <li><FaChartLine /> Operational consistency</li>
              <li><FaShieldAlt /> Better platform scalability</li>
            </ul>
          </div>

        </div>
      </div>

      {/* TECHNOLOGIES */}
      <div className="microsoft-tech">

        <span className="microsoft-badge-light">RELATED TECHNOLOGIES</span>

        <h2>Platforms and technologies we use in delivery.</h2>

        <p>
          Technology choices are aligned to business context, integration needs,
          security requirements, and long-term maintainability.
        </p>

        <div className="microsoft-tech-grid">
          <div className="microsoft-tech-card">Azure</div>
          <div className="microsoft-tech-card">Microsoft 365</div>
          <div className="microsoft-tech-card">Power Platform</div>
          <div className="microsoft-tech-card">Dynamics 365</div>
          <div className="microsoft-tech-card">SharePoint</div>
          <div className="microsoft-tech-card">Entra ID</div>
          <div className="microsoft-tech-card">Teams</div>
          <div className="microsoft-tech-card">Azure DevOps</div>
        </div>

      </div>

    </div>
  );
};

export default Microsoft;
