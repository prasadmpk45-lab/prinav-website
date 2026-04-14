// src/components/Navbar.jsx
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Briefcase,
  Package,
  UserPlus,
  Phone,
  Code2,
  FlaskConical,
  Wrench,
  Globe,
  Smartphone,
  Database,
  ServerCog,
  AppWindow,
  ShieldCheck,
  BrainCircuit,
  BarChart3,
  BriefcaseBusiness,
} from "lucide-react";
import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const serviceLinks = [
  { label: "Application Development", to: "/services/application-development", icon: Code2 },
  { label: "Testing / Automation", to: "/services/testing-automation", icon: FlaskConical },
  { label: "Maintenance & Support", to: "/services/maintainance-support", icon: Wrench },
  { label: "Web Development", to: "/services/web-development", icon: Globe },
  { label: "Mobile App Development", to: "/services/mobile-app-development", icon: Smartphone },
  { label: "SAP Solutions", to: "/services/sap-solutions", icon: Database },
  { label: "Oracle Solutions", to: "/services/oracle-solutions", icon: ServerCog },
  { label: "Microsoft Solutions", to: "/services/microsoft-solutions", icon: AppWindow },
  { label: "Cyber Security", to: "/services/cyber-security", icon: ShieldCheck },
  { label: "AI/ML Ops", to: "/services/ai-ml", icon: BrainCircuit },
  { label: "Data Science", to: "/services/data-science", icon: BarChart3 },
  { label: "Professional Services", to: "/services/professional-services", icon: BriefcaseBusiness },
];

const Navbar = () => {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const isServicesRoute = location.pathname.startsWith("/services");
  const isProductsRoute = location.pathname.startsWith("/products");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">

        <div className="nav-logo">
          <img src={logo} alt="Pirnav Logo" />
        </div>

        <nav className="nav-links">

          <NavLink to="/" className={({ isActive }) => (isActive ? "nav-item-active" : "")}>
            <Home size={18}/> Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-item-active" : "")}>
            <Users size={18}/> Who We Are
          </NavLink>

          <li className="dropdown">
            <NavLink
              to="/services"
              className={isServicesRoute ? "nav-item-active" : ""}
            >
              <Briefcase size={20}/> What We Do
            </NavLink>

            <ul className="dropdown-menu">
              {serviceLinks.map((service) => {
                const Icon = service.icon;

                return (
                  <li key={service.to}>
                    <NavLink
                      to={service.to}
                      className={({ isActive }) => (isActive ? "dropdown-item-active" : "")}
                    >
                      <span className="dropdown-link-content">
                        <span className="dropdown-service-icon">
                          <Icon size={16} aria-hidden="true" />
                        </span>
                        <span>{service.label}</span>
                      </span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </li>

          <NavLink
            to="/products"
            className={isProductsRoute ? "nav-item-active" : ""}
          >
            <Package size={18} /> Our Products
          </NavLink>

          <NavLink to="/careers" className={({ isActive }) => (isActive ? "nav-item-active" : "")}>
            <UserPlus size={18}/> Careers
          </NavLink>

          <Link to="/contact" className="nav-btn">
            <Phone size={18}/> Get In Touch
          </Link>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;
