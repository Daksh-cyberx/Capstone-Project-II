import React, { useState } from "react";
import "../Styles/Contact.css";

/*
  =====================================================================
  GOOGLE MAPS API KEY:
  Replace "YOUR_GOOGLE_MAPS_API_KEY" below with your actual key.

  To get a free API key:
  1. Go to: https://console.cloud.google.com/
  2. Create a project → Enable "Maps Embed API"
  3. Go to Credentials → Create API Key
  4. Copy and paste it below

  The embed URL format used:
  https://www.google.com/maps/embed/v1/place?key=YOUR_KEY&q=YOUR_ADDRESS
  =====================================================================
*/
const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";
const CLINIC_ADDRESS = "1842+Maple+Avenue,Portland,Oregon+97204";

const ContactInfo = ({ icon, title, lines }) => (
  <div className="contact__info-card">
    <div className="contact__info-icon">{icon}</div>
    <div className="contact__info-text">
      <h3 className="contact__info-title">{title}</h3>
      {lines.map((line, i) => (
        <p key={i} className="contact__info-line">{line}</p>
      ))}
    </div>
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate send — wire up to your backend/emailjs here
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1400);
  };

  return (
    <section className="contact" id="contact">

      {/* ── Top Header ── */}
      <div className="contact__header">
        <span className="contact__eyebrow">Get In Touch</span>
        <h1 className="contact__title">Contact <span className="contact__title--accent">Us</span></h1>
        <p className="contact__desc">
          Have questions about appointments, services, or anything else?
          Our team is here to help. Reach out and we'll get back to you promptly.
        </p>
      </div>

      {/* ── Main Body ── */}
      <div className="contact__body">

        {/* LEFT: Info cards */}
        <div className="contact__left">
          <ContactInfo
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            }
            title="Our Address"
            lines={["1842 Maple Avenue, Portland,", "Oregon 97204"]}
          />

          <ContactInfo
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            }
            title="Email Address"
            lines={["info@clinic.com", "contact@clinic.com"]}
          />

          <ContactInfo
            icon={
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
            }
            title="Phone Number"
            lines={["+1 (555) 911-2468", "+1 (555) 234-5678"]}
          />

          {/* Decorative blob */}
          <div className="contact__left-blob" aria-hidden="true" />
        </div>

        {/* RIGHT: Form */}
        <div className="contact__right">
          <div className="contact__form-wrap">
            <h2 className="contact__form-title">Send us a Message</h2>
            <p className="contact__form-sub">
              Have questions or want to learn more? Reach out and our team will get back to you shortly.
            </p>

            {sent ? (
              <div className="contact__success">
                <svg viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2.2" width="48" height="48">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
                <p>Message sent! We'll be in touch soon.</p>
                <button className="contact__send-btn" onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="contact__field">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact__field">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`contact__send-btn ${loading ? "contact__send-btn--loading" : ""}`}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="contact__spinner" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="18" height="18">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Google Map ── */}
      <div className="contact__map-wrap">
        <div className="contact__map-label">
          <svg viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" width="18" height="18">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
          </svg>
          Find Us on the Map
        </div>
        <div className="contact__map">
          {GOOGLE_MAPS_API_KEY === "YOUR_GOOGLE_MAPS_API_KEY" ? (
            /* Placeholder shown until API key is added */
            <div className="contact__map-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="1.5" width="48" height="48">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              <p>
                Add your Google Maps API key in <code>Contact.jsx</code>
                <br />
                <span>Replace <strong>YOUR_GOOGLE_MAPS_API_KEY</strong> at the top of the file</span>
              </p>
              <a
                href="https://console.cloud.google.com/"
                target="_blank"
                rel="noreferrer"
                className="contact__map-link"
              >
                Get a free API key →
              </a>
            </div>
          ) : (
            <iframe
              title="Clinic Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${CLINIC_ADDRESS}&zoom=15`}
            />
          )}
        </div>
      </div>

    </section>
  );
};

export default Contact;