import React from "react";
import "./dataScience.css";

import {
  FaChartLine,
  FaFlask,
  FaBrain,
  FaDatabase,
  FaProjectDiagram,
  FaLightbulb,
  FaChartBar,
  FaUsers,
  FaServer
} from "react-icons/fa";

const DataScience = () => {
  return (
    <div className="ds-page">

      {/* HERO */}
      <section className="ds-hero">
        <div className="ds-hero-left">
          <span className="ds-badge">Technology Service</span>
          <h1>Data Science Services</h1>
          <p>
            Use data science to uncover insights, improve forecasting, and build
            analytical models for business decisions.
          </p>
        </div>

        <div className="ds-hero-right">
          <img src="/images/data-science.png" alt="Data Science" />
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="ds-overview">
        <h2>Service Overview</h2>

        <div className="ds-container">

          {/* LEFT */}
          <div className="ds-card">
            <h3>Key Capabilities</h3>

            <ul>
              <li><FaChartLine /> Exploratory data analysis</li>
              <li><FaFlask /> Forecasting & statistical modeling</li>
              <li><FaBrain /> Predictive modeling</li>
              <li><FaDatabase /> Data storytelling dashboards</li>
              <li><FaProjectDiagram /> Analytical frameworks</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="ds-card">
            <h3>Business Benefits</h3>

            <ul>
              <li><FaLightbulb /> Actionable insights</li>
              <li><FaChartBar /> Better forecasting</li>
              <li><FaUsers /> Strong decision support</li>
              <li><FaServer /> Efficient data usage</li>
            </ul>
          </div>

        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="ds-tech">
        <span className="ds-badge-light">RELATED TECHNOLOGIES</span>
        <h2>Platforms and technologies we use in delivery.</h2>

        <p>
          Technology choices aligned to business context and scalability.
        </p>

        <div className="ds-tech-grid">
          {[
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "Jupyter",
            "SQL",
            "Power BI",
            "Apache Spark"
          ].map((item, index) => (
            <div key={index} className="ds-tech-card">
              {item}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default DataScience;
