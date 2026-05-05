import React, { useState } from "react";
import "../Styles/About.css";

/* ── Timeline milestones ── */
const milestones = [
  { year: "2009", title: "Founded", desc: "MediCare opened its doors with a 50-bed facility and a team of 10 dedicated physicians committed to community health." },
  { year: "2013", title: "Expansion", desc: "Grew to a 120-bed multi-specialty hospital, adding cardiology, orthopedics, and neurology departments." },
  { year: "2017", title: "Accreditation", desc: "Received NABH accreditation and launched our advanced diagnostics wing with AI-assisted imaging." },
  { year: "2021", title: "Digital Leap", desc: "Launched our patient portal and telehealth platform, serving 10,000+ patients remotely during the pandemic." },
  { year: "2025", title: "Today", desc: "200+ beds, 50+ specialists, 12 modular OTs, and a Level III NICU — setting new standards in compassionate care." },
];

/* ── Core values ── */
const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    ),
    title: "Compassion",
    desc: "Every patient is treated with empathy, dignity, and respect — as a person, not a case number.",
    color: "#e63946",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "Excellence",
    desc: "We pursue the highest clinical standards through continuous learning, research, and innovation.",
    color: "#007bff",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
    title: "Integrity",
    desc: "Transparent, honest, and ethical practice — from diagnosis to billing — always.",
    color: "#28a745",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Community",
    desc: "Rooted in the community we serve — through free camps, health drives, and awareness programmes.",
    color: "#ff6b35",
  },
];

/* ── Team members ── */
const team = [
  { name: "Dr. Arvind Mehta", role: "Chairman & Chief Surgeon", initials: "AM", color: "#007bff" },
  { name: "Dr. Priya Sharma", role: "Medical Director", initials: "PS", color: "#28a745" },
  { name: "Dr. Rajan Kapoor", role: "Head of Cardiology", initials: "RK", color: "#e63946" },
  { name: "Ms. Neha Gupta", role: "Chief Nursing Officer", initials: "NG", color: "#ff6b35" },
];

const About = () => {
  const [activeYear, setActiveYear] = useState("2025");

  const activeMilestone = milestones.find(m => m.year === activeYear);

  return (
    <section className="about" id="about">

      {/* ── Background ── */}
      <div className="about__bg" aria-hidden="true">
        <div className="about__bg-blob about__bg-blob--1" />
        <div className="about__bg-blob about__bg-blob--2" />
        <div className="about__bg-dots" />
      </div>

      {/* ══════════════════════════════
          HERO SPLIT — Story + Visual
      ══════════════════════════════ */}
      <div className="about__intro">

        {/* LEFT: Text */}
        <div className="about__intro-left">
          <span className="about__eyebrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="13" height="13">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Our Story
          </span>

          <h1 className="about__title">
            Healing Lives,<br />
            <span className="about__title--accent">Building Trust</span><br />
            Since 2009
          </h1>

          <p className="about__lead">
            MediCare was born from a simple belief — that exceptional healthcare
            should be accessible to every person, regardless of their background.
            What began as a modest clinic has grown into a full-scale multi-specialty
            hospital trusted by over <strong>5,000 families</strong> across the region.
          </p>

          <p className="about__body">
            Guided by clinical excellence and deep human compassion, our team of
            50+ specialists works tirelessly — not just to treat illness, but to
            restore hope, independence, and quality of life. Every decision we make
            is driven by one question: <em>"What would we want for our own family?"</em>
          </p>

          <div className="about__intro-stats">
            <div className="about__intro-stat">
              <span className="about__intro-stat-num">15+</span>
              <span className="about__intro-stat-label">Years of Service</span>
            </div>
            <div className="about__intro-stat-sep" />
            <div className="about__intro-stat">
              <span className="about__intro-stat-num">50K+</span>
              <span className="about__intro-stat-label">Patients Served</span>
            </div>
            <div className="about__intro-stat-sep" />
            <div className="about__intro-stat">
              <span className="about__intro-stat-num">4.9★</span>
              <span className="about__intro-stat-label">Patient Rating</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Visual card stack */}
        <div className="about__intro-right">
          <div className="about__visual">

            {/* Main card */}
            <div className="about__visual-card about__visual-card--main">
              <div className="about__visual-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="1.6" width="36" height="36">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>To deliver compassionate, evidence-based healthcare that transforms lives and strengthens communities.</p>
              <div className="about__visual-bar">
                <div className="about__visual-bar-fill" />
              </div>
              <span className="about__visual-bar-label">Patient Satisfaction — 97%</span>
            </div>

            {/* Floating accent cards */}
            <div className="about__visual-card about__visual-card--float about__visual-card--top">
              <span className="about__float-emoji">🏆</span>
              <div>
                <p className="about__float-val">NABH</p>
                <p className="about__float-sub">Accredited</p>
              </div>
            </div>

            <div className="about__visual-card about__visual-card--float about__visual-card--bottom">
              <span className="about__float-emoji">❤️</span>
              <div>
                <p className="about__float-val">5,000+</p>
                <p className="about__float-sub">Families Served</p>
              </div>
            </div>

            {/* Decorative rings */}
            <div className="about__visual-ring about__visual-ring--1" />
            <div className="about__visual-ring about__visual-ring--2" />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════
          CORE VALUES
      ══════════════════════════════ */}
      <div className="about__values-section">
        <div className="about__section-header">
          <span className="about__eyebrow">What Drives Us</span>
          <h2 className="about__section-title">
            Our Core <span className="about__section-title--accent">Values</span>
          </h2>
        </div>

        <div className="about__values-grid">
          {values.map((v, i) => (
            <div
              key={i}
              className="about__value-card"
              style={{ "--val-color": v.color, animationDelay: `${i * 0.1}s` }}
            >
              <div className="about__value-icon">{v.icon}</div>
              <div className="about__value-bar" />
              <h3 className="about__value-title">{v.title}</h3>
              <p className="about__value-desc">{v.desc}</p>
              <div className="about__value-glow" />
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════
          TIMELINE
      ══════════════════════════════ */}
      <div className="about__timeline-section">
        <div className="about__section-header">
          <span className="about__eyebrow">Our Journey</span>
          <h2 className="about__section-title">
            Milestones That <span className="about__section-title--accent">Define Us</span>
          </h2>
        </div>

        {/* Year selector */}
        <div className="about__timeline-nav">
          {milestones.map((m) => (
            <button
              key={m.year}
              className={`about__timeline-year ${activeYear === m.year ? "about__timeline-year--active" : ""}`}
              onClick={() => setActiveYear(m.year)}
            >
              {m.year}
              {activeYear === m.year && <span className="about__timeline-dot" />}
            </button>
          ))}
          <div className="about__timeline-line" />
        </div>

        {/* Active milestone detail */}
        {activeMilestone && (
          <div className="about__timeline-detail" key={activeMilestone.year}>
            <div className="about__timeline-detail-year">{activeMilestone.year}</div>
            <div className="about__timeline-detail-content">
              <h3 className="about__timeline-detail-title">{activeMilestone.title}</h3>
              <p className="about__timeline-detail-desc">{activeMilestone.desc}</p>
            </div>
          </div>
        )}
      </div>

      {/* ══════════════════════════════
          LEADERSHIP TEAM
      ══════════════════════════════ */}
      <div className="about__team-section">
        <div className="about__section-header">
          <span className="about__eyebrow">The People Behind the Care</span>
          <h2 className="about__section-title">
            Our <span className="about__section-title--accent">Leadership</span>
          </h2>
        </div>

        <div className="about__team-grid">
          {team.map((member, i) => (
            <div
              key={i}
              className="about__team-card"
              style={{ "--mem-color": member.color, animationDelay: `${i * 0.1}s` }}
            >
              <div className="about__team-avatar" style={{ background: `${member.color}18`, borderColor: `${member.color}30` }}>
                <span style={{ color: member.color }}>{member.initials}</span>
              </div>
              <h3 className="about__team-name">{member.name}</h3>
              <p className="about__team-role">{member.role}</p>
              <div className="about__team-bar" />
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════
          BOTTOM CTA
      ══════════════════════════════ */}
      <div className="about__cta">
        <div className="about__cta-blob" />
        <div className="about__cta-content">
          <h2 className="about__cta-title">Ready to Experience the MediCare Difference?</h2>
          <p className="about__cta-sub">Join thousands of families who trust us with their health every day.</p>
          <div className="about__cta-actions">
            <button className="about__cta-btn about__cta-btn--primary">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
                <polyline points="9 16 11 18 15 14"/>
              </svg>
              Book Appointment
            </button>
            <button className="about__cta-btn about__cta-btn--outline">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18">
                <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 0111.82 19a19.5 19.5 0 01-6-6A19.79 19.79 0 012.1 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Contact Us
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;