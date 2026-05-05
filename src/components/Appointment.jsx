import React, { useState } from "react";
import "../Styles/Appointment.css";

/* ── Doctors list for dropdown (from your data) ── */
const doctorsList = [
  { name: "Dr. Rishi Raman",       spec: "Gastroenterologist", days: "Monday",             timing: "1:00 PM – 2:00 PM"   },
  { name: "Dr. Anuj Jain",         spec: "Orthopedic",         days: "Wednesday",           timing: "9:00 AM – 11:00 AM"  },
  { name: "Dr. Ashok Grover",      spec: "Medicine",           days: "Tuesday / Saturday",  timing: "9:00 AM – 11:00 AM"  },
  { name: "Dr. Virendra Kumar",    spec: "Neurologist",        days: "Thursday",            timing: "6:30 PM – 7:30 PM"   },
  { name: "Dr. Madhu Ahuja",       spec: "Gynaecologist",      days: "Friday",              timing: "2:00 PM – 3:00 PM"   },
  { name: "Dr. Ruhi Jain",         spec: "Psychologist",       days: "Monday & Friday",     timing: "12:30 PM – 2:00 PM"  },
  { name: "Dr. Vipin Rai Sood",    spec: "Internal Medicine",  days: "Wednesday / Saturday",timing: "5:00 PM – 6:00 PM"   },
  { name: "Dr. Sameer Aeron",      spec: "ENT",                days: "Wednesday / Friday",  timing: "5:00 PM – 6:00 PM"   },
  { name: "Dr. Sajal Gupta",       spec: "Cardiologist",       days: "Tuesday",             timing: "4:00 PM – 5:00 PM"   },
  { name: "Dr. Puja Kuswah",       spec: "Neurologist",        days: "Saturday",            timing: "9:30 AM – 10:30 AM"  },
  { name: "Dr. Varun Tyagi",       spec: "Dermatologist",      days: "Saturday",            timing: "10:00 AM – 11:00 AM" },
  { name: "Dr. Shekhar Srivastava",spec: "Orthopedic",         days: "Saturday",            timing: "4:00 PM – 6:00 PM"   },
];

const initialForm = {
  patientName: "",
  age:         "",
  gender:      "",
  phone:       "",
  email:       "",
  doctor:      "",
  date:        "",
  reason:      "",
};

const statusColors = {
  Pending:   { bg: "#fff8e1", text: "#f59e0b", border: "#fde68a" },
  Confirmed: { bg: "#e6f7ec", text: "#28a745", border: "#a3d9b1" },
  Cancelled: { bg: "#ffeaea", text: "#e63946", border: "#f5b8bb" },
};

/* ── Single appointment card ── */
const AppointmentCard = ({ appt, index, onCancel }) => {
  const doctor = doctorsList.find(d => d.name === appt.doctor) || {};
  const status = statusColors[appt.status];

  return (
    <div className="appt-card" style={{ animationDelay: `${index * 0.08}s` }}>
      {/* Status ribbon */}
      <div className="appt-card__ribbon" style={{ background: status.bg, color: status.text, borderColor: status.border }}>
        <span className="appt-card__ribbon-dot" style={{ background: status.text }} />
        {appt.status}
      </div>

      {/* Header */}
      <div className="appt-card__header">
        <div className="appt-card__avatar">
          {appt.patientName.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 className="appt-card__patient">{appt.patientName}</h3>
          <p className="appt-card__id">ID: {appt.id}</p>
        </div>
      </div>

      {/* Info rows */}
      <div className="appt-card__info">
        <div className="appt-card__info-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>{appt.age} yrs • {appt.gender}</span>
        </div>
        <div className="appt-card__info-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          <span>{appt.phone}</span>
        </div>
        <div className="appt-card__info-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>{new Date(appt.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
        </div>
        <div className="appt-card__info-row appt-card__info-row--doctor">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          <span>{appt.doctor}</span>
        </div>
        <div className="appt-card__info-row">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>{doctor.timing || "—"}</span>
        </div>
      </div>

      {/* Reason */}
      {appt.reason && (
        <div className="appt-card__reason">
          <span>Reason:</span> {appt.reason}
        </div>
      )}

      {/* Actions */}
      {appt.status === "Pending" && (
        <button
          className="appt-card__cancel"
          onClick={() => onCancel(appt.id)}
        >
          Cancel Appointment
        </button>
      )}
    </div>
  );
};

/* ══════════════════════════════
   MAIN COMPONENT
══════════════════════════════ */
const Appointment = () => {
  const [form, setForm]               = useState(initialForm);
  const [errors, setErrors]           = useState({});
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading]         = useState(false);
  const [submitted, setSubmitted]     = useState(false);
  const [activeTab, setActiveTab]     = useState("form"); // "form" | "list"

  const selectedDoctor = doctorsList.find(d => d.name === form.doctor);

  /* ── Validation ── */
  const validate = () => {
    const e = {};
    if (!form.patientName.trim()) e.patientName = "Full name is required";
    if (!form.age || form.age < 1 || form.age > 120) e.age = "Enter a valid age";
    if (!form.gender)  e.gender  = "Select gender";
    if (!form.phone || !/^\d{10}$/.test(form.phone)) e.phone = "Enter a valid 10-digit number";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.doctor)  e.doctor  = "Select a doctor";
    if (!form.date)    e.date    = "Select appointment date";
    else {
      const today = new Date(); today.setHours(0,0,0,0);
      if (new Date(form.date) < today) e.date = "Date cannot be in the past";
    }
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      const newAppt = {
        ...form,
        id:     `MC-${Date.now().toString().slice(-6)}`,
        status: "Pending",
        bookedAt: new Date().toISOString(),
      };
      setAppointments(prev => [newAppt, ...prev]);
      setForm(initialForm);
      setErrors({});
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setActiveTab("list");
      }, 2200);
    }, 1400);
  };

  const handleCancel = (id) => {
    setAppointments(prev =>
      prev.map(a => a.id === id ? { ...a, status: "Cancelled" } : a)
    );
  };

  /* ── Today's date string for min date ── */
  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <section className="appt-section" id="appointment">

      {/* ── Background ── */}
      <div className="appt-section__bg" aria-hidden="true">
        <div className="appt-bg-blob appt-bg-blob--1" />
        <div className="appt-bg-blob appt-bg-blob--2" />
        <div className="appt-bg-dots" />
      </div>

      {/* ── Page Header ── */}
      <div className="appt-section__header">
        <span className="appt-eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="13" height="13">
            <rect x="3" y="4" width="18" height="18" rx="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
            <polyline points="9 16 11 18 15 14"/>
          </svg>
          Online Booking
        </span>
        <h1 className="appt-section__title">
          Book an <span className="appt-section__title--accent">Appointment</span>
        </h1>
        <p className="appt-section__desc">
          Schedule your visit with our specialists in minutes. Fill in your details,
          choose your doctor, and we'll confirm your slot right away.
        </p>
      </div>

      {/* ── Tab switcher ── */}
      <div className="appt-tabs">
        <button
          className={`appt-tab ${activeTab === "form" ? "appt-tab--active" : ""}`}
          onClick={() => setActiveTab("form")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
          Book Appointment
        </button>
        <button
          className={`appt-tab ${activeTab === "list" ? "appt-tab--active" : ""}`}
          onClick={() => setActiveTab("list")}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16">
            <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
          </svg>
          My Appointments
          {appointments.length > 0 && (
            <span className="appt-tab__badge">{appointments.length}</span>
          )}
        </button>
        <div className={`appt-tab__slider ${activeTab === "list" ? "appt-tab__slider--right" : ""}`} />
      </div>

      {/* ══════════════════════════════
          BOOKING FORM
      ══════════════════════════════ */}
      {activeTab === "form" && (
        <div className="appt-form-wrap">

          {/* Success overlay */}
          {submitted && (
            <div className="appt-success">
              <div className="appt-success__circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2.5" width="40" height="40">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <h3>Appointment Booked!</h3>
              <p>Redirecting to your appointments…</p>
            </div>
          )}

          {!submitted && (
            <form className="appt-form" onSubmit={handleSubmit} noValidate>

              {/* ── Section: Patient Info ── */}
              <div className="appt-form__section">
                <div className="appt-form__section-title">
                  <div className="appt-form__section-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" width="16" height="16">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  Patient Information
                </div>

                <div className="appt-form__grid appt-form__grid--2">
                  {/* Full Name */}
                  <div className={`appt-field ${errors.patientName ? "appt-field--error" : ""}`}>
                    <label>Full Name <span>*</span></label>
                    <input
                      type="text" name="patientName"
                      placeholder="John Doe"
                      value={form.patientName} onChange={handleChange}
                      autoComplete="name"
                    />
                    {errors.patientName && <span className="appt-field__err">{errors.patientName}</span>}
                  </div>

                  {/* Age */}
                  <div className={`appt-field ${errors.age ? "appt-field--error" : ""}`}>
                    <label>Age <span>*</span></label>
                    <input
                      type="number" name="age" min="1" max="120"
                      placeholder="25"
                      value={form.age} onChange={handleChange}
                    />
                    {errors.age && <span className="appt-field__err">{errors.age}</span>}
                  </div>

                  {/* Gender */}
                  <div className={`appt-field ${errors.gender ? "appt-field--error" : ""}`}>
                    <label>Gender <span>*</span></label>
                    <select name="gender" value={form.gender} onChange={handleChange}>
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && <span className="appt-field__err">{errors.gender}</span>}
                  </div>

                  {/* Phone */}
                  <div className={`appt-field ${errors.phone ? "appt-field--error" : ""}`}>
                    <label>Phone Number <span>*</span></label>
                    <input
                      type="tel" name="phone" maxLength={10}
                      placeholder="9876543210"
                      value={form.phone} onChange={handleChange}
                      autoComplete="tel"
                    />
                    {errors.phone && <span className="appt-field__err">{errors.phone}</span>}
                  </div>

                  {/* Email */}
                  <div className={`appt-field ${errors.email ? "appt-field--error" : ""} appt-field--full`}>
                    <label>Email Address <span style={{color:"#a0aec0",fontWeight:400}}>(optional)</span></label>
                    <input
                      type="email" name="email"
                      placeholder="john@example.com"
                      value={form.email} onChange={handleChange}
                      autoComplete="email"
                    />
                    {errors.email && <span className="appt-field__err">{errors.email}</span>}
                  </div>
                </div>
              </div>

              {/* ── Section: Doctor & Schedule ── */}
              <div className="appt-form__section">
                <div className="appt-form__section-title">
                  <div className="appt-form__section-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" width="16" height="16">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  Doctor & Schedule
                </div>

                <div className="appt-form__grid appt-form__grid--2">
                  {/* Doctor */}
                  <div className={`appt-field ${errors.doctor ? "appt-field--error" : ""} appt-field--full`}>
                    <label>Select Doctor <span>*</span></label>
                    <select name="doctor" value={form.doctor} onChange={handleChange}>
                      <option value="">Choose a doctor</option>
                      {doctorsList.map((d, i) => (
                        <option key={i} value={d.name}>{d.name} — {d.spec}</option>
                      ))}
                    </select>
                    {errors.doctor && <span className="appt-field__err">{errors.doctor}</span>}
                  </div>

                  {/* Doctor info preview */}
                  {selectedDoctor && (
                    <div className="appt-doctor-preview appt-field--full">
                      <div className="appt-doctor-preview__avatar">
                        {selectedDoctor.name.split(" ")[1]?.charAt(0)}{selectedDoctor.name.split(" ")[2]?.charAt(0)}
                      </div>
                      <div className="appt-doctor-preview__info">
                        <p className="appt-doctor-preview__name">{selectedDoctor.name}</p>
                        <p className="appt-doctor-preview__spec">{selectedDoctor.spec}</p>
                      </div>
                      <div className="appt-doctor-preview__schedule">
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                            <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                          {selectedDoctor.days}
                        </span>
                        <span>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
                            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                          </svg>
                          {selectedDoctor.timing}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Date */}
                  <div className={`appt-field ${errors.date ? "appt-field--error" : ""}`}>
                    <label>Appointment Date <span>*</span></label>
                    <input
                      type="date" name="date"
                      min={todayStr}
                      value={form.date} onChange={handleChange}
                    />
                    {errors.date && <span className="appt-field__err">{errors.date}</span>}
                  </div>

                  {/* Reason */}
                  <div className="appt-field">
                    <label>Reason for Visit</label>
                    <input
                      type="text" name="reason"
                      placeholder="e.g. Routine checkup, fever, back pain…"
                      value={form.reason} onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`appt-submit ${loading ? "appt-submit--loading" : ""}`}
                disabled={loading}
              >
                {loading ? (
                  <><span className="appt-spinner" /> Processing…</>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18">
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                      <polyline points="9 16 11 18 15 14"/>
                    </svg>
                    Confirm Appointment
                  </>
                )}
              </button>

            </form>
          )}
        </div>
      )}

      {/* ══════════════════════════════
          APPOINTMENTS LIST
      ══════════════════════════════ */}
      {activeTab === "list" && (
        <div className="appt-list-wrap">
          {appointments.length === 0 ? (
            <div className="appt-empty">
              <div className="appt-empty__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#cce0ff" strokeWidth="1.4" width="64" height="64">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </div>
              <h3>No Appointments Yet</h3>
              <p>You haven't booked any appointments. Fill in the form to get started.</p>
              <button className="appt-empty__btn" onClick={() => setActiveTab("form")}>
                Book Now →
              </button>
            </div>
          ) : (
            <>
              {/* Summary bar */}
              <div className="appt-list__summary">
                <div className="appt-list__summary-item">
                  <span className="appt-list__summary-num">{appointments.length}</span>
                  <span>Total</span>
                </div>
                <div className="appt-list__summary-item">
                  <span className="appt-list__summary-num" style={{ color: "#f59e0b" }}>
                    {appointments.filter(a => a.status === "Pending").length}
                  </span>
                  <span>Pending</span>
                </div>
                <div className="appt-list__summary-item">
                  <span className="appt-list__summary-num" style={{ color: "#28a745" }}>
                    {appointments.filter(a => a.status === "Confirmed").length}
                  </span>
                  <span>Confirmed</span>
                </div>
                <div className="appt-list__summary-item">
                  <span className="appt-list__summary-num" style={{ color: "#e63946" }}>
                    {appointments.filter(a => a.status === "Cancelled").length}
                  </span>
                  <span>Cancelled</span>
                </div>
              </div>

              {/* Cards grid */}
              <div className="appt-cards-grid">
                {appointments.map((appt, i) => (
                  <AppointmentCard
                    key={appt.id}
                    appt={appt}
                    index={i}
                    onCancel={handleCancel}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

    </section>
  );
};

export default Appointment;