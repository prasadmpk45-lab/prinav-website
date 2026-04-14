import React from "react";
import "./AiMl.css";

import {
  FaBrain,
  FaRobot,
  FaChartLine,
  FaDatabase,
  FaCogs,
  FaBolt,
  FaLightbulb,
  FaProjectDiagram,
  FaEye
} from "react-icons/fa";

const AiMl = () => {
  return (
    <div className="ai-ml-page">

      {/* HERO */}
      <section className="ai-ml-hero">

        <div className="ai-ml-hero-left">
          <span className="ai-ml-badge">Technology Service</span>

          <h1>AI / MLOps Services</h1>

          <p>
            Operationalize AI initiatives with MLOps practices that support
            scalable deployment, monitoring, governance, and measurable impact.
          </p>
        </div>

        <div className="ai-ml-hero-right">
          <img src="/images/ai-ml.png" alt="AI ML" />
        </div>

      </section>

      {/* OVERVIEW */}
      <section className="ai-ml-overview">

        <h2>Service Overview</h2>

        <div className="ai-ml-container">

          {/* LEFT */}
          <div className="ai-ml-card">
            <h3>Key Capabilities</h3>

            <ul>
              <li><FaBrain /> Model training & deployment workflows</li>
              <li><FaRobot /> Feature engineering pipelines</li>
              <li><FaChartLine /> Performance monitoring</li>
              <li><FaDatabase /> Data pipeline integration</li>
              <li><FaCogs /> Governance & reproducibility</li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="ai-ml-card">
            <h3>Business Benefits</h3>

            <ul>
              <li><FaBolt /> Faster production deployment</li>
              <li><FaLightbulb /> Better model confidence</li>
              <li><FaProjectDiagram /> Improved observability</li>
              <li><FaEye /> Scalable AI operations</li>
            </ul>
          </div>

        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="ai-ml-tech">

        <span className="ai-ml-badge-light">RELATED TECHNOLOGIES</span>

        <h2>Platforms and technologies we use in delivery.</h2>

        <p>
          Technology choices aligned to business context, integration needs,
          and long-term maintainability.
        </p>

        <div className="ai-ml-tech-grid">

          {[
            "Python",
            "MLflow",
            "Kubeflow",
            "Docker",
            "Kubernetes",
            "Databricks",
            "AWS SageMaker",
            "Azure Machine Learning"
          ].map((item, index) => (
            <div key={index} className="ai-ml-tech-card">
              {item}
            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default AiMl;
