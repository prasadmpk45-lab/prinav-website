import React from "react";
import { Link } from "react-router-dom";
import "./Testing&Automation.css";

import {
  FaCloud,
  FaCogs,
  FaProjectDiagram,
  FaRocket,
  FaCode,
  FaChartLine,
  FaClock,
  FaShieldAlt,
  FaSyncAlt,
  FaTools,
} from "react-icons/fa";

const technologies = [
  "Selenium",
  "Cypress",
  "Playwright",
  "Postman",
  "JMeter",
  "JUnit",
  "Azure DevOps",
  "TestNG",
];

const Testing = () => {
  return (
    <div className="testing-page">
      <div className="testing-hero-new">
        <div className="hero-left">
          <span className="badge">Technology Service</span>

          <h1>
            Testing <br /> &amp; Automation Services
          </h1>

          <p>
            Ensure software quality with automation frameworks, continuous testing,
            and performance validation aligned to modern enterprise delivery.
          </p>

          <div className="breadcrumb">
            <Link to="/">Home</Link> &gt; Testing-Automation
          </div>
        </div>

        <div className="hero-right">
          <img src="/images/team-work.jpg" alt="Testing and automation team collaboration" />
        </div>
      </div>

      <section className="section">
        <div className="container">

          <h2>Service Overview</h2>
        </div>
      </section>

      <section className="section gray">
        <div className="grid-2">
          <div className="card">
            <h3>Key Capabilities</h3>

            <div className="feature">
              <FaProjectDiagram className="icon teal" />
              <span>UI, API, and regression test automation</span>
            </div>

            <div className="feature">
              <FaCloud className="icon teal" />
              <span>Continuous testing in CI/CD pipelines</span>
            </div>

            <div className="feature">
              <FaCode className="icon teal" />
              <span>API validation and contract testing</span>
            </div>

            <div className="feature">
              <FaCogs className="icon teal" />
              <span>Performance, load, and reliability testing</span>
            </div>

            <div className="feature">
              <FaRocket className="icon teal" />
              <span>Test reporting and release readiness support</span>
            </div>
          </div>

          <div className="card">
            <h3>Business Benefits</h3>

            <div className="feature">
              <FaChartLine className="icon teal" />
              <span>Better release confidence</span>
            </div>

            <div className="feature">
              <FaClock className="icon teal" />
              <span>Faster feedback cycles</span>
            </div>

            <div className="feature active">
              <FaShieldAlt className="icon teal" />
              <span>Higher product reliability</span>
            </div>

            <div className="feature">
              <FaSyncAlt className="icon teal" />
              <span>Lower regression risk</span>
            </div>

            <div className="feature">
              <FaTools className="icon teal" />
              <span>Repeatable quality processes</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Platforms and technologies we use in delivery.</h2>

          <p className="subtext">
            Technology choices are aligned to business context, integration
            needs, security requirements, and long-term maintainability.
          </p>

          <div className="tech-grid">
            {technologies.map((tech) => (
              <div key={tech} className="tech-card">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testing;
