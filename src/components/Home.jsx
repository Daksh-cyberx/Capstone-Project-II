import React, { useEffect, useRef } from "react";
import "../Styles/HeroSection.css"
import img from "../assets/img-1.jpg"

const Home = () => {
  return (
    <section className="hero">
      {/* Animated Background Circles */}
      <div className="hero__bg">
        <span className="hero__circle hero__circle--1"></span>
        <span className="hero__circle hero__circle--2"></span>
        <span className="hero__circle hero__circle--3"></span>
        <span className="hero__circle hero__circle--4"></span>
        <span className="hero__circle hero__circle--5"></span>
      </div>

      {/* Left Content */}
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__heading">
            Excellence in{" "}
            <span className="hero__heading--accent">Healthcare</span>{" "}
            With Compassionate Care
          </h1>
          <p className="hero__subtext">
            We provide world-class medical services with a team of dedicated
            professionals committed to your well-being. Your health, our
            priority — every step of the way.
          </p>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">15+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">5000+</span>
              <span className="hero__stat-label">Patients Treated</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">50+</span>
              <span className="hero__stat-label">Medical Experts</span>
            </div>
          </div>

          {/* CTA */}
          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary">
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="hero__image-wrap">
        {/* Animated rings around image */}
        <div className="hero__ring hero__ring--1"></div>
        <div className="hero__ring hero__ring--2"></div>
        <div className="hero__ring hero__ring--3"></div>

        {/* 
          =============================================
          IMAGE PLACEHOLDER
          Replace the src below with your doctor/healthcare image URL.
          Recommended: A professional photo of a doctor or nurse
          on a light/clinic background, portrait orientation.
          Example: src="/images/doctor.png"
          =============================================
        */}
        <div className="hero__image-container">
          <img
            src={img}
            alt="Healthcare Professional"
            className="hero__image"
          />
          {/* If no image yet, the placeholder div below will show */}
          <div className="hero__image-placeholder">
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="28" r="16" fill="#007bff" opacity="0.15" />
              <circle cx="40" cy="28" r="10" fill="#007bff" opacity="0.25" />
              <path d="M16 68c0-13.255 10.745-24 24-24s24 10.745 24 24" fill="#007bff" opacity="0.15" />
              <text x="40" y="85" textAnchor="middle" fontSize="10" fill="#007bff" opacity="0.6">Add Image Here</text>
            </svg>
          </div>
        </div>

        

        {/* Floating Card: Rating */}
        <div className="hero__card hero__card--rating">
          <div className="hero__stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f5a623">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <span className="hero__rating-score">4.9/5</span>
          <span className="hero__rating-count">1,234 Reviews</span>
        </div>
      </div>
    </section>
  );
};

export default Home;