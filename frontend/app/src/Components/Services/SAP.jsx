import React from "react";
import "./SAP.css";

import {
  FaCogs,
  FaDatabase,
  FaChartLine,
  FaProjectDiagram,
  FaTools,
  FaCheckCircle,
  FaRocket,
  FaShieldAlt
} from "react-icons/fa";

const SAP = () => {
  return (
    <div className="sap-page">

      {/* 🔥 HERO */}
      <div className="sap-hero">

        {/* LEFT */}
        <div className="sap-hero-left">
          <span className="sap-badge">Service Overview</span>

          <h1>SAP Solutions built for enterprise delivery.</h1>

          <p>
            Support enterprise operations with SAP implementation,
            enhancement, and integration services grounded in process
            efficiency and business alignment.
          </p>
        </div>

        {/* RIGHT */}
        <div className="sap-hero-right">
          <img src="/images/sap.png" alt="SAP Solutions" />
        </div>

      </div>

      {/* OVERVIEW */}
      <div className="sap-overview">
        <h2>Service Overview</h2>

        <div className="sap-container">

          {/* LEFT */}
          <div className="sap-card">
            <h3>Key Capabilities</h3>

            <ul>
              <li><FaCogs /> SAP implementation and rollout support</li>
              <li><FaTools /> Module customization and enhancement</li>
              <li><FaChartLine /> Process analysis and optimization</li>
              <li><FaProjectDiagram /> Enterprise integration planning</li>
              <li><FaDatabase /> Operational support and improvement</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="sap-card">
            <h3>Business Benefits</h3>

            <ul>
              <li><FaCheckCircle /> Improved process consistency</li>
              <li><FaRocket /> Better system adoption</li>
              <li><FaChartLine /> Operational efficiency gains</li>
              <li><FaShieldAlt /> Lower implementation risk</li>
            </ul>
          </div>

        </div>
      </div>

      {/* TECHNOLOGIES */}
      <div className="sap-tech">

        <span className="sap-badge-light">RELATED TECHNOLOGIES</span>

        <h2>Platforms and technologies we use in delivery.</h2>

        <p>
          Technology choices are aligned to business context, integration needs,
          security requirements, and long-term maintainability.
        </p>

        <div className="sap-tech-grid">
          <div className="sap-tech-card">SAP S/4HANA</div>
          <div className="sap-tech-card">SAP Fiori</div>
          <div className="sap-tech-card">ABAP</div>
          <div className="sap-tech-card">SAP BTP</div>
          <div className="sap-tech-card">SAP Basis</div>
          <div className="sap-tech-card">SAP Integration Suite</div>
          <div className="sap-tech-card">SAP BW/4HANA</div>
          <div className="sap-tech-card">Power BI</div>
        </div>

      </div>

    </div>
  );
};

export default SAP;
