import "./ApplicationDevelopment.css";
import {
  FaCubes,
  FaCloud,
  FaLink,
  FaCogs,
  FaRocket,
  FaMicrochip,
} from "react-icons/fa";

import {
  MdSpeed,
  MdOutlineAccessTime,
  MdSecurity,
  MdSync,
  MdBuild,
} from "react-icons/md";

const Application = () => {
  const service = {
    title: "Application Development",
    intro:
      "Design, build, and modernize secure business applications with architectures that support scale, integration, and long-term maintainability.",
    image: "/images/Application.png",

    capabilities: [
      { text: "Application architecture and platform design", icon: <FaCubes /> },
      { text: "Cloud-native product engineering", icon: <FaCloud /> },
      { text: "API design and systems integration", icon: <FaLink /> },
      { text: "Microservices and modular application delivery", icon: <FaCogs /> },
      { text: "DevOps-enabled release management", icon: <FaRocket /> },
    ],

    benefits: [
      { text: "Improved scalability and performance", icon: <MdSpeed /> },
      { text: "Faster time-to-market", icon: <MdOutlineAccessTime /> },
      { text: "High system reliability", icon: <MdSecurity /> },
      { text: "Better integration across platforms", icon: <MdSync /> },
      { text: "Long-term maintainability", icon: <MdBuild /> },
    ],

    technologies: [
      "React",
      "Angular",
      ".NET",
      "Spring Boot",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
  };

  return (
    <div className="application-page">

      {/* HERO */}
      <section className="app-hero">
        <div className="app-container hero-flex">

          <div className="hero-left">
            <span className="app-eyebrow">Technology Service</span>
            <h1>{service.title} Services</h1>
            <p>{service.intro}</p>
          </div>

          <div className="hero-right">
            <img src={service.image} alt="Application Development" />
          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section className="app-section">
        <div className="app-container">
          <h2 className="section-title">Service Overview</h2>

          <div className="app-grid">

            {/* CAPABILITIES */}
            <div className="app-card">
              <h3>Key Capabilities</h3>
              <ul>
                {service.capabilities.map((item, i) => (
                  <li key={i}>
                    <span className="list-icon">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BENEFITS */}
            <div className="app-card">
              <h3>Business Benefits</h3>
              <ul>
                {service.benefits.map((item, i) => (
                  <li key={i}>
                    <span className="list-icon">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="app-section alt">
        <div className="app-container">
          <h2 className="section-title">
            Platforms and technologies we use in delivery.
          </h2>
          <p className="section-sub">
            Technology choices are aligned to business context, integration needs,
            security requirements, and long-term maintainability.
          </p>

          <div className="tech-grid">
            {service.technologies.map((tech, i) => (
              <div key={i} className="tech-card">

                <div className="tech-icon">
                  <FaMicrochip />
                </div>

                <span>{tech}</span>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Application;
