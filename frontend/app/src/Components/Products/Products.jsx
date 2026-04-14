import React, { useEffect, useState } from "react";
import {
  Brain,
  CalendarDays,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  CreditCard,
  FileText,
  Globe,
  Layers3,
  LayoutDashboard,
  MessageSquareText,
  MonitorCog,
  Shield,
  ShieldCheck,
  UserCheck2,
  Users,
  X,
} from "lucide-react";
import "./Products.css";
import {
  hasErrors,
  sanitizeFormPayload,
  validateDemoForm,
} from "../../utils/formValidation";

const CONTACT_API = "https://farrandly-interalar-talon.ngrok-free.dev/api/Contact";

const productCatalog = [
  {
    category: "EMS",
    title: "Employee Management System",
    shortLabel: "Internal Ops",
    logoText: "EMS",
    description:
      "A streamlined internal platform for attendance, employee records, workflow approvals, and day-to-day operations.",
    accent: "from-cyan",
    icon: Users,
    features: ["HR workflows", "Attendance tracking", "Role-based access"],
    screens: [
      {
        title: "Attendance Console",
        description: "Live status for shifts, leaves, approvals, and team availability.",
        icon: LayoutDashboard,
        metrics: ["128 Active", "09 Requests", "94% On Time"],
      },
      {
        title: "People Directory",
        description: "A clean employee overview with department, reporting line, and access context.",
        icon: UserCheck2,
        metrics: ["Teams", "Roles", "Access"],
      },
    ],
  },
  {
    category: "Booking Platform",
    title: "Pick and Book",
    shortLabel: "Reservations",
    logoText: "P&B",
    description:
      "A real-time booking experience for reservation-driven businesses, designed around availability, payments, and smooth user journeys.",
    accent: "from-orange",
    icon: CalendarCheck2,
    features: ["Live availability", "Booking workflows", "Payment-ready flow"],
    screens: [
      {
        title: "Booking Snapshot",
        description: "A reservation board showing routes, seats, occupancy, and today’s demand.",
        icon: CalendarDays,
        metrics: ["146 Seats", "82 Booked", "12 Routes"],
      },
      {
        title: "Payment Flow",
        description: "A focused checkout view for fare selection, passenger details, and payment confirmation.",
        icon: CreditCard,
        metrics: ["Cards", "UPI", "Invoices"],
      },
    ],
  },
  {
    category: "CA Portal",
    title: "Chartered Accounting Portal",
    shortLabel: "Accounting Workspace",
    logoText: "CA",
    description:
      "A dedicated workspace for chartered accounting teams to manage client records, compliance work, documents, and reporting.",
    accent: "from-gold",
    icon: ShieldCheck,
    features: ["Client records", "Compliance tracking", "Document workflow"],
    screens: [
      {
        title: "Document Vault",
        description: "Accounting files, approvals, and compliance records organized in one secure workspace.",
        icon: FileText,
        metrics: ["45 Files", "12 Reviews", "03 Pending"],
      },
      {
        title: "Compliance Activity",
        description: "Task trails, uploads, filings, and request timelines for every accounting engagement.",
        icon: MessageSquareText,
        metrics: ["Messages", "Tasks", "Updates"],
      },
    ],
  },
  {
    category: "AI Writer",
    title: "AI Content Generator",
    shortLabel: "Content Automation",
    logoText: "AI",
    description:
      "An AI-powered platform for generating blogs, marketing copy, captions, and content drafts for digital teams.",
    accent: "from-cyan",
    icon: Brain,
    features: ["Blog writing", "Social captions", "Content drafts"],
    screens: [
      {
        title: "Content Studio",
        description: "Create blogs, captions, and campaign content from guided prompts in one workspace.",
        icon: FileText,
        metrics: ["24 Drafts", "08 Campaigns", "05 Brands"],
      },
      {
        title: "Publishing Queue",
        description: "Review, refine, and organize generated content for scheduled publishing and team approval.",
        icon: MonitorCog,
        metrics: ["16 Posts", "07 Scheduled", "03 Pending"],
      },
    ],
  },
  {
    category: "Inventory Suite",
    title: "Inventory Management System",
    shortLabel: "Upcoming",
    logoText: "IMS",
    description:
      "A centralized inventory platform for stock visibility, warehouse movement, reorder planning, and day-to-day inventory control.",
    accent: "from-indigo",
    icon: Layers3,
    features: ["Stock visibility", "Warehouse tracking", "Reorder alerts"],
    screens: [
      {
        title: "Inventory Overview",
        description: "Monitor available stock, low inventory items, inward movement, and category-wise totals in one place.",
        icon: LayoutDashboard,
        metrics: ["1.2K Items", "18 Low Stock", "04 Warehouses"],
      },
      {
        title: "Reorder Workflow",
        description: "Track replenishment requests, supplier follow-ups, and approval-driven procurement flow.",
        icon: MonitorCog,
        metrics: ["12 Requests", "07 Approved", "03 Pending"],
      },
    ],
  },
  {
    category: "Retail Platform",
    title: "Point of Sale",
    shortLabel: "Upcoming",
    logoText: "POS",
    description:
      "An upcoming point-of-sale solution for billing, product lookup, sales tracking, and day-to-day retail operations.",
    accent: "from-orange",
    icon: CreditCard,
    features: ["Billing workflow", "Sales tracking", "Retail operations"],
    screens: [
      {
        title: "Checkout Counter",
        description: "A fast billing view for cart handling, payment capture, and instant invoice generation.",
        icon: CreditCard,
        metrics: ["32 Bills", "05 Counters", "Live Sales"],
      },
      {
        title: "Store Dashboard",
        description: "Track daily sales, top-moving items, cashier activity, and store performance in one place.",
        icon: LayoutDashboard,
        metrics: ["Sales", "Products", "Reports"],
      },
    ],
  },
];

const deliveryPoints = [
  {
    icon: Layers3,
    title: "Designed Around Workflows",
    text: "Each product is structured to reduce repetitive tasks and give teams a cleaner operational rhythm.",
  },
  {
    icon: MonitorCog,
    title: "Ready For Customization",
    text: "We adapt modules, interfaces, and integrations so the product fits your process instead of forcing a generic setup.",
  },
  {
    icon: Clock3,
    title: "Built For Faster Rollout",
    text: "Our approach combines product foundations with implementation support to shorten the time to launch.",
  },
];

function Products() {
  const [demoProduct, setDemoProduct] = useState(null);
  const [activeScreenProduct, setActiveScreenProduct] = useState(productCatalog[0].title);
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [demoLoading, setDemoLoading] = useState(false);
  const [demoStatus, setDemoStatus] = useState("");
  const [demoErrors, setDemoErrors] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [demoTouched, setDemoTouched] = useState({});

  useEffect(() => {
    const elements = document.querySelectorAll(".products-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -30px 0px" }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [activeScreenProduct]);

  useEffect(() => {
    if (!demoProduct) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setDemoProduct(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [demoProduct]);

  useEffect(() => {
    if (demoStatus !== "success") {
      return undefined;
    }

    const timeoutId = setTimeout(() => {
      setDemoStatus("");
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, [demoStatus]);

  const activeProduct =
    productCatalog.find((product) => product.title === activeScreenProduct) || productCatalog[0];

  const openDemoModal = (product) => {
    setDemoProduct(product);
    setDemoStatus("");
    setDemoErrors({ name: "", email: "", company: "", message: "" });
    setDemoTouched({});
    setDemoForm({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  const closeDemoModal = () => {
    setDemoProduct(null);
    setDemoStatus("");
    setDemoLoading(false);
  };

  const handleDemoChange = (event) => {
    const { name, value } = event.target;
    setDemoForm((prev) => {
      const nextValues = { ...prev, [name]: value };
      setDemoErrors(validateDemoForm(nextValues));
      return nextValues;
    });
  };

  const handleDemoBlur = (event) => {
    const { name } = event.target;
    setDemoTouched((current) => ({ ...current, [name]: true }));
    setDemoErrors(validateDemoForm(demoForm));
  };

  const handleDemoSubmit = async (event) => {
    event.preventDefault();

    if (!demoProduct) {
      return;
    }

    const nextErrors = validateDemoForm(demoForm);
    setDemoTouched({
      name: true,
      email: true,
      company: true,
      message: true,
    });
    setDemoErrors(nextErrors);

    if (hasErrors(nextErrors)) {
      setDemoStatus("");
      return;
    }

    setDemoLoading(true);
    setDemoStatus("");

    try {
      const payload = sanitizeFormPayload(demoForm);
      const response = await fetch(CONTACT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          email: payload.email,
          subject: `Product Demo Request - ${demoProduct.title}`,
          message: `Company: ${payload.company || "Not provided"}\n\nProduct: ${demoProduct.title}\n\nRequirement: ${payload.message}`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      await response.json();
      setDemoStatus("success");
      setDemoForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      setDemoErrors({ name: "", email: "", company: "", message: "" });
      setDemoTouched({});
    } catch {
      setDemoStatus("error");
    } finally {
      setDemoLoading(false);
    }
  };

  return (
    <div className="products-page">
      <section className="products-hero">
        <div className="products-hero-overlay" />
        <div className="products-hero-glow products-hero-glow-one" />
        <div className="products-hero-glow products-hero-glow-two" />

        <div className="products-hero-content">
          <div className="products-hero-copy products-reveal">
            <h1>Business-ready products for modern teams.</h1>
            <p>
              Explore Pirnav product offerings built to support operations,
              collaboration, booking experiences, and modern business delivery.
            </p>

            <div className="products-hero-actions">
              <button
                type="button"
                className="products-primary-btn"
                onClick={() => openDemoModal(productCatalog[0])}
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="products-intro products-reveal">
        <span className="products-section-label">What We Offer</span>
        <h2>Simple products built for daily business needs.</h2>
        <p>
          These products are made to support daily work, team tasks, and simple business operations.
        </p>
      </section>

      <section className="products-grid-section">
        <div className="products-grid">
          {productCatalog.map((product, index) => {
            const Icon = product.icon;

            return (
              <article
                key={product.title}
                className="product-card products-reveal"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className={`product-card-media ${product.accent}`}>
                    <div className="product-card-overlay" />
                    <div className="product-card-topline">
                      <span className="product-card-chip">{product.category}</span>
                    <span
                      className={`product-card-mini-tag ${
                        product.shortLabel.toLowerCase() === "upcoming"
                          ? "product-card-mini-tag-upcoming"
                          : ""
                      }`}
                    >
                      {product.shortLabel}
                    </span>
                    </div>

                  <div className="product-card-logo-shell">
                    <span className="product-card-logo-icon">
                      <Icon size={30} aria-hidden="true" />
                    </span>
                    <div className="product-card-logo-copy">
                      <strong>{product.logoText}</strong>
                      <span>{product.category}</span>
                    </div>
                  </div>
                </div>

                <div className="product-card-body">
                  <div className="product-card-heading">
                    <span className="product-card-icon">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <div className="product-card-title-block">
                      <span className="product-card-label">Product Solution</span>
                      <h3>{product.title}</h3>
                    </div>
                  </div>

                  <p>{product.description}</p>

                  <div className="product-feature-list">
                    {product.features.map((feature) => (
                      <span key={feature}>{feature}</span>
                    ))}
                  </div>

                  <div className="product-card-actions">
                    <button
                      type="button"
                      className="product-demo-btn"
                      onClick={() => openDemoModal(product)}
                    >
                      Book a Demo
                    </button>
                    <button
                      type="button"
                      className="product-explore-btn"
                      onClick={() => {
                        setActiveScreenProduct(product.title);
                        const target = document.getElementById("product-screens");
                        target?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="product-screens" className="products-screens-section">
        <div className="products-screens-header products-reveal">
          <span className="products-section-label">Project Screens</span>
          <h2>Preview screens inspired by how these products work in practice.</h2>
          <p>
            Explore concept screens for dashboards, workflows, and booking journeys related
            to each product line.
          </p>
        </div>

        <div className="products-screen-tabs products-reveal">
          {productCatalog.map((product) => (
            <button
              key={product.title}
              type="button"
              className={`products-screen-tab ${
                activeScreenProduct === product.title ? "active" : ""
              }`}
              onClick={() => setActiveScreenProduct(product.title)}
            >
              {product.title}
            </button>
          ))}
        </div>

        <div className="products-screen-grid">
          {activeProduct.screens.map((screen, index) => {
            const ScreenIcon = screen.icon;

            return (
              <article
                key={screen.title}
                className="product-screen-card products-reveal"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className={`product-screen-frame ${activeProduct.accent}`}>
                  <div className="product-screen-bar">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="product-screen-body">
                    <div className="product-screen-icon">
                      <ScreenIcon size={22} aria-hidden="true" />
                    </div>
                    <strong>{screen.title}</strong>
                    <p>{screen.description}</p>
                    <div className="product-screen-metrics">
                      {screen.metrics.map((metric) => (
                        <span key={metric}>{metric}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="product-fit" className="products-fit-section">
        <div className="products-fit-copy products-reveal">
          <span className="products-section-label">Why These Products</span>
          <h2>Products that can fit the way your business works.</h2>
          <p>
            Whether you need an internal system, a portal, a web app, or a booking tool,
            we can adjust the product to fit your work.
          </p>
        </div>

        <div className="products-fit-grid">
          {deliveryPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="products-fit-card products-reveal"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <span className="products-fit-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {demoProduct && (
        <div
          className="products-modal-overlay"
          onClick={closeDemoModal}
        >
          <div
            className="products-demo-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="products-modal-close"
              onClick={closeDemoModal}
              aria-label="Close demo popup"
            >
              <X size={18} />
            </button>

            <span className="products-section-label">Book A Demo</span>
            <h3>{demoProduct.title}</h3>
            <p>
              Share your interest in this product and our team will connect with a relevant
              walkthrough and next steps.
            </p>

            <form className="products-demo-form" onSubmit={handleDemoSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={demoForm.name}
                onChange={handleDemoChange}
                onBlur={handleDemoBlur}
                aria-invalid={Boolean(demoTouched.name && demoErrors.name)}
              />
              {demoTouched.name && demoErrors.name ? (
                <p className="products-demo-inline-error">{demoErrors.name}</p>
              ) : null}
              <input
                type="email"
                name="email"
                placeholder="Work email"
                value={demoForm.email}
                onChange={handleDemoChange}
                onBlur={handleDemoBlur}
                aria-invalid={Boolean(demoTouched.email && demoErrors.email)}
              />
              {demoTouched.email && demoErrors.email ? (
                <p className="products-demo-inline-error">{demoErrors.email}</p>
              ) : null}
              <input
                type="text"
                name="company"
                placeholder="Company name"
                value={demoForm.company}
                onChange={handleDemoChange}
                onBlur={handleDemoBlur}
                aria-invalid={Boolean(demoTouched.company && demoErrors.company)}
              />
              {demoTouched.company && demoErrors.company ? (
                <p className="products-demo-inline-error">{demoErrors.company}</p>
              ) : null}
              <textarea
                rows="4"
                name="message"
                placeholder={`Tell us what you need from ${demoProduct.title}`}
                value={demoForm.message}
                onChange={handleDemoChange}
                onBlur={handleDemoBlur}
                aria-invalid={Boolean(demoTouched.message && demoErrors.message)}
              />
              {demoTouched.message && demoErrors.message ? (
                <p className="products-demo-inline-error">{demoErrors.message}</p>
              ) : null}
              <button type="submit" className="products-demo-submit" disabled={demoLoading}>
                {demoLoading ? "Sending..." : "Request Demo"}
              </button>

              {demoStatus === "error" && (
                <p className="products-demo-status error">Something went wrong. Please try again.</p>
              )}

              {demoStatus === "success" && (
                <p className="products-demo-status success">Demo request sent successfully.</p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
