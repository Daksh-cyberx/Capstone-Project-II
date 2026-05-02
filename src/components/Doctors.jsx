import React, { useState, useMemo } from "react";
import Data from "../Data"; // adjust path to your data file
import "../Styles/Doctors.css";

// ── Specialization options derived from data ──
const ALL = "All Specializations";

const specializations = [ALL, ...Array.from(new Set(Data.map((d) => d.specializations))).sort()];

// ── Icon map per specialization ──
const specIcon = {
  Gastroenterologist: "🫀",
  Orthopedic:         "🦴",
  Medicine:           "💊",
  Neurologist:        "🧠",
  Gynaecologist:      "🌸",
  Psychologist:       "🧩",
  "Internal Medicine":"🩺",
  ENT:                "👂",
  Cardiologist:       "❤️",
  Dermatologist:      "🔬",
};

// ── Day badge color map ──
const dayColor = {
  Monday:    "#007bff",
  Tuesday:   "#28a745",
  Wednesday: "#fd7e14",
  Thursday:  "#6f42c1",
  Friday:    "#e83e8c",
  Saturday:  "#20c997",
  Sunday:    "#dc3545",
};

function getDayColor(days) {
  for (const [day, color] of Object.entries(dayColor)) {
    if (days.toLowerCase().includes(day.toLowerCase())) return color;
  }
  return "#007bff";
}

// ── Doctor Card ──
const DoctorCard = ({ doctor, onClick }) => (
  <div className="doc-card" onClick={() => onClick(doctor)} role="button" tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onClick(doctor)}>
    <div className="doc-card__img-wrap">
      <img src={doctor.img} alt={doctor.name} className="doc-card__img" />
      <span className="doc-card__spec-badge">
        {specIcon[doctor.specializations] || "🏥"} {doctor.specializations}
      </span>
    </div>
    <div className="doc-card__body">
      <h3 className="doc-card__name">{doctor.name}</h3>
      <p className="doc-card__qual">{doctor.qualification}</p>
      <div className="doc-card__meta">
        <div className="doc-card__meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          {doctor.timing}
        </div>
        <div className="doc-card__meta-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          {doctor.days}
        </div>
      </div>
      <button className="doc-card__btn">View Profile →</button>
    </div>
    <div className="doc-card__day-bar" style={{ background: getDayColor(doctor.days) }} />
  </div>
);

// ── Doctor Detail View ──
const DoctorDetail = ({ doctor, onBack }) => (
  <div className="doc-detail" style={{ "--day-color": getDayColor(doctor.days) }}>
    <button className="doc-detail__back" onClick={onBack}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
      Back to Doctors
    </button>

    <div className="doc-detail__card">
      <div className="doc-detail__left">
        <div className="doc-detail__img-wrap">
          <img src={doctor.img} alt={doctor.name} className="doc-detail__img" />
          <div className="doc-detail__img-ring" />
        </div>
        <div className="doc-detail__spec-pill">
          {specIcon[doctor.specializations] || "🏥"} {doctor.specializations}
        </div>
      </div>

      <div className="doc-detail__right">
        <h2 className="doc-detail__name">{doctor.name}</h2>
        <p className="doc-detail__qual">{doctor.qualification}</p>

        <div className="doc-detail__divider" />

        <div className="doc-detail__info-grid">
          <div className="doc-detail__info-block">
            <span className="doc-detail__info-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Consultation Hours
            </span>
            <span className="doc-detail__info-value">{doctor.timing}</span>
          </div>

          <div className="doc-detail__info-block">
            <span className="doc-detail__info-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Available Days
            </span>
            <span className="doc-detail__info-value">{doctor.days}</span>
          </div>

          <div className="doc-detail__info-block">
            <span className="doc-detail__info-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              Department
            </span>
            <span className="doc-detail__info-value">{doctor.specializations}</span>
          </div>

          <div className="doc-detail__info-block">
            <span className="doc-detail__info-label">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8"/>
                <path d="M1 1l22 22"/>
              </svg>
              Appointments
            </span>
            <span className="doc-detail__info-value">Available during listed hours</span>
          </div>
        </div>

        <div className="doc-detail__note">
          <svg viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" width="18" height="18">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Please arrive 10 minutes early for your appointment. Bring any previous medical records.
        </div>

        <button className="doc-detail__appt-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
            <polyline points="9 16 11 18 15 14"/>
          </svg>
          Book Appointment
        </button>
      </div>
    </div>
  </div>
);

// ── Main Doctors Component ──
const Doctors = () => {
  const [selected, setSelected]   = useState(null);
  const [filter, setFilter]       = useState(ALL);
  const [dropOpen, setDropOpen]   = useState(false);

  const filtered = useMemo(() =>
    filter === ALL ? Data : Data.filter((d) => d.specializations === filter),
    [filter]
  );

  if (selected) {
    return (
      <div className="doctors">
        <DoctorDetail doctor={selected} onBack={() => setSelected(null)} />
      </div>
    );
  }

  return (
    <section className="doctors" id="doctors">

      {/* ── Header ── */}
      <div className="doctors__header">
        <span className="doctors__eyebrow">Meet the Team</span>
        <h1 className="doctors__title">
          Our <span className="doctors__title--accent">Doctors</span>
        </h1>
        <p className="doctors__desc">
          Our team of board-certified specialists brings decades of combined expertise,
          unwavering compassion, and a commitment to evidence-based care. Every doctor
          on our roster was handpicked for both their clinical excellence and their
          dedication to treating each patient as a person — not a case number.
        </p>
      </div>

      {/* ── Filter Bar ── */}
      <div className="doctors__filter-bar">
        <span className="doctors__filter-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
          </svg>
          Filter by Specialization
        </span>

        <div className="doctors__dropdown">
          <button
            className="doctors__dropdown-btn"
            onClick={() => setDropOpen((p) => !p)}
            aria-haspopup="listbox"
            aria-expanded={dropOpen}
          >
            <span>{specIcon[filter] || "🏥"} {filter}</span>
            <svg
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              width="16" height="16"
              style={{ transform: dropOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.25s" }}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          {dropOpen && (
            <ul className="doctors__dropdown-list" role="listbox">
              {specializations.map((spec) => (
                <li
                  key={spec}
                  role="option"
                  aria-selected={filter === spec}
                  className={`doctors__dropdown-item ${filter === spec ? "doctors__dropdown-item--active" : ""}`}
                  onClick={() => { setFilter(spec); setDropOpen(false); }}
                >
                  {spec === ALL ? "🏥 " : `${specIcon[spec] || "🏥"} `}{spec}
                  {filter === spec && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2.5" width="14" height="14">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <span className="doctors__count">
          {filtered.length} doctor{filtered.length !== 1 ? "s" : ""} found
        </span>
      </div>

      {/* ── Grid ── */}
      {filtered.length === 0 ? (
        <div className="doctors__empty">
          <span>😔</span>
          <p>No doctors found for <strong>{filter}</strong>.</p>
          <button className="doctors__empty-btn" onClick={() => setFilter(ALL)}>Clear Filter</button>
        </div>
      ) : (
        <div className="doctors__grid">
          {filtered.map((doc, i) => (
            <div key={doc.id} className="doctors__grid-item" style={{ animationDelay: `${i * 0.07}s` }}>
              <DoctorCard doctor={doc} onClick={setSelected} />
            </div>
          ))}
        </div>
      )}

    </section>
  );
};

export default Doctors;