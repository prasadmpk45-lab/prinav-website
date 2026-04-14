import React from "react";
import { Link } from "react-router-dom";
import "./Maintainance.css";

import {
  FaServer,
  FaTools,
  FaChartLine,
  FaShieldAlt,
  FaBug,
  FaCloud,
} from "react-icons/fa";

const Maintainance = () => {
  return (
    <div className="maintainance-page">

      {/* HERO */}
      <div className="maintainance-hero-new">

  {/* LEFT */}
  <div className="hero-left">
    <span className="badge">Technology Service</span>

    <h1>
      Maintenance and <br /> Support Services
    </h1>

    <p>
      We keep long-running enterprise systems healthy with structured
      support operations, proactive monitoring, and targeted enhancement work.
    </p>
  </div>

  {/* RIGHT */}
  <div className="hero-right">
    <img src="/images/maintainance.png" alt="Maintenance" />
  </div>

</div>
      {/* INTRO */}
      <div className="maintainance-intro">
        <h2>Service Overview</h2>
      </div>

      {/* MAIN SECTION */}
      <div className="maintainance-container">

        {/* LEFT */}
        <div className="card">
          <h2>Key Capabilities</h2>

          <div className="card-item">
            <div className="icon-box"><FaTools /></div>
            <span>L2 and L3 application support</span>
          </div>

          <div className="card-item">
            <div className="icon-box"><FaBug /></div>
            <span>Monitoring and incident management</span>
          </div>

          <div className="card-item">
            <div className="icon-box"><FaChartLine /></div>
            <span>Performance tuning and optimization</span>
          </div>

          <div className="card-item">
            <div className="icon-box"><FaServer /></div>
            <span>Enhancement backlog execution</span>
          </div>

          <div className="card-item">
            <div className="icon-box"><FaShieldAlt /></div>
            <span>Operational reporting and SLA tracking</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="card">
          <h2>Business Benefits</h2>

          <div className="card-item">
            <div className="icon-box"><FaCloud /></div>
            <span>Less downtime for core platforms</span>
          </div>

          <div className="card-item">
            <div className="icon-box"><FaChartLine /></div>
            <span>Faster incident resolution</span>
          </div>

          <div className="card-item">
            <div className="icon-box"><FaShieldAlt /></div>
            <span>Stable business operations</span>
          </div>

          <div className="card-item">
            <div className="icon-box"><FaServer /></div>
            <span>Improved support accountability</span>
          </div>
        </div>

      </div>

      {/* TECHNOLOGY */}
      <div className="tech-section">
        <h2>Platforms & Technologies</h2>

        <div className="tech-grid">
          <div className="tech-card">ServiceNow</div>
          <div className="tech-card">Splunk</div>
          <div className="tech-card">Azure Monitor</div>
          <div className="tech-card">Datadog</div>
          <div className="tech-card">Dynatrace</div>
          <div className="tech-card">Grafana</div>
          <div className="tech-card">Linux</div>
          <div className="tech-card">Windows Server</div>
        </div>
      </div>

    </div>
  );
};

export default Maintainance;
