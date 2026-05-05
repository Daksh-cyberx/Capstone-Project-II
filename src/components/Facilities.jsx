import React, { useState } from "react";
import "../Styles/Facilities.css";

const facilitiesData = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    tag: "Critical Care",
    title: "Emergency & Trauma Center",
    desc: "Round-the-clock emergency care with rapid-response trauma teams, advanced resuscitation units, and dedicated triage protocols ensuring zero delay in critical situations.",
    features: ["24/7 Availability", "Rapid Triage", "Trauma ICU"],
    color: "#e63946",
    lightColor: "#ffeaea",
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8h2v5H7zM11 6h2v7h-2zM15 10h2v3h-2z"/>
      </svg>
    ),
    tag: "Diagnostics",
    title: "Advanced Imaging & Diagnostics",
    desc: "State-of-the-art MRI, CT, PET scans, and digital X-ray suites powered by AI-assisted reporting for faster, more accurate diagnoses.",
    features: ["MRI & CT Scan", "AI Reporting", "Same-Day Results"],
    color: "#007bff",
    lightColor: "#e8f2ff",
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    tag: "Cardiology",
    title: "Cardiac Care & Catheterization",
    desc: "Dedicated cardiac unit with cath labs, echocardiography, electrophysiology studies, and 24/7 interventional cardiology for heart attacks and complex arrhythmias.",
    features: ["Cath Lab", "Echocardiography", "EP Studies"],
    color: "#e63946",
    lightColor: "#ffeaea",
  },
  {
    id: 4,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    tag: "Surgery",
    title: "Modular Operation Theatres",
    desc: "12 fully equipped modular OTs with laminar airflow, robotic surgery assistance, and integrated imaging — designed for laparoscopic, orthopedic, and neurosurgical precision.",
    features: ["Robotic Surgery", "Laminar Airflow", "12 OT Suites"],
    color: "#28a745",
    lightColor: "#e6f7ec",
  },
  {
    id: 5,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2a5 5 0 100 10A5 5 0 0012 2z"/>
        <path d="M12 14c-5 0-9 2.5-9 4v2h18v-2c0-1.5-4-4-9-4z"/>
        <path d="M16 7h6M19 4v6"/>
      </svg>
    ),
    tag: "Maternity",
    title: "Mother & Child Care Unit",
    desc: "Comprehensive obstetrics and neonatology services — from antenatal consultations to Level III NICU — ensuring safe deliveries and optimal newborn care.",
    features: ["Level III NICU", "Antenatal Classes", "Lactation Support"],
    color: "#e91e8c",
    lightColor: "#fde8f4",
  },
  {
    id: 6,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="7" height="9" rx="1"/>
        <rect x="14" y="3" width="7" height="5" rx="1"/>
        <rect x="14" y="12" width="7" height="9" rx="1"/>
        <rect x="3" y="16" width="7" height="5" rx="1"/>
      </svg>
    ),
    tag: "Digital Health",
    title: "Smart Patient Portal & Telehealth",
    desc: "Seamless digital experience — book appointments, access reports, consult doctors virtually, and manage prescriptions through our HIPAA-compliant patient portal.",
    features: ["Online Booking", "Video Consults", "Digital Records"],
    color: "#007bff",
    lightColor: "#e8f2ff",
  },
  {
    id: 7,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    tag: "Rehabilitation",
    title: "Physiotherapy & Rehab Center",
    desc: "Fully equipped physiotherapy gym, hydrotherapy pools, occupational therapy suites, and speech therapy — helping patients regain independence and quality of life.",
    features: ["Hydrotherapy", "Occupational Therapy", "Speech Therapy"],
    color: "#ff6b35",
    lightColor: "#fff0eb",
  },
  {
    id: 8,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
      </svg>
    ),
    tag: "Laboratory",
    title: "Integrated Pathology Labs",
    desc: "NABL-accredited labs with automated analyzers, molecular diagnostics, microbiology, histopathology, and home sample collection — results delivered within hours.",
    features: ["NABL Accredited", "Home Collection", "Molecular Diagnostics"],
    color: "#28a745",
    lightColor: "#e6f7ec",
  },
];

const statsData = [
  { value: "200+", label: "Beds", icon: "🛏️" },
  { value: "12",   label: "Operation Theatres", icon: "🏥" },
  { value: "24/7", label: "Emergency Services", icon: "🚨" },
  { value: "50+",  label: "Specializations", icon: "⚕️" },
];

const Facilities = () => {
  const [activeId, setActiveId] = useState(null);

  const handleCardClick = (id) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <section className="facilities" id="facilities">

      {/* ── Background decoration ── */}
      <div className="facilities__bg" aria-hidden="true">
        <div className="facilities__bg-circle facilities__bg-circle--1" />
        <div className="facilities__bg-circle facilities__bg-circle--2" />
        <div className="facilities__bg-grid" />
      </div>

      {/* ── Header ── */}
      <div className="facilities__header">
        <span className="facilities__eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="13" height="13">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          World-Class Infrastructure
        </span>
        <h1 className="facilities__title">
          Our <span className="facilities__title--accent">Facilities</span>
        </h1>
        <p className="facilities__desc">
          Built to international standards, every facility at MediCare is designed with
          one purpose — delivering the highest quality of care with precision, comfort,
          and compassion at every step of your healthcare journey.
        </p>
      </div>

      {/* ── Stats Strip ── */}
      <div className="facilities__stats">
        {statsData.map((s, i) => (
          <div key={i} className="facilities__stat" style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="facilities__stat-emoji">{s.icon}</span>
            <span className="facilities__stat-value">{s.value}</span>
            <span className="facilities__stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Cards Grid ── */}
      <div className="facilities__grid">
        {facilitiesData.map((f, i) => (
          <div
            key={f.id}
            className={`fac-card ${activeId === f.id ? "fac-card--active" : ""}`}
            style={{
              "--fac-color": f.color,
              "--fac-light": f.lightColor,
              animationDelay: `${i * 0.08}s`,
            }}
            onClick={() => handleCardClick(f.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleCardClick(f.id)}
          >
            {/* Top accent bar */}
            <div className="fac-card__bar" />

            {/* Icon */}
            <div className="fac-card__icon-wrap">
              {f.icon}
            </div>

            {/* Tag */}
            <span className="fac-card__tag">{f.tag}</span>

            {/* Title */}
            <h3 className="fac-card__title">{f.title}</h3>

            {/* Description — revealed on active */}
            <p className="fac-card__desc">{f.desc}</p>

            {/* Feature chips */}
            <div className="fac-card__chips">
              {f.features.map((feat, j) => (
                <span key={j} className="fac-card__chip">{feat}</span>
              ))}
            </div>

            {/* Expand indicator */}
            <div className="fac-card__expand">
              <svg
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                width="16" height="16"
                style={{ transform: activeId === f.id ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s ease" }}
              >
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>

            {/* Hover glow blob */}
            <div className="fac-card__glow" />
          </div>
        ))}
      </div>

      {/* ── Bottom CTA ── */}
      <div className="facilities__cta">
        <p className="facilities__cta-text">
          Want to explore our facilities in person?
        </p>
        <button className="facilities__cta-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
            <polyline points="9 16 11 18 15 14"/>
          </svg>
          Book a Tour
        </button>
      </div>

    </section>
  );
};

export default Facilities;