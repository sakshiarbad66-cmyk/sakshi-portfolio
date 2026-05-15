import React from "react";
import profileImage from "../assets/profile.jpg"; // ✅ add your image here

function Home() {
  return (
    <div className="section-shell home-shell">
      <div className="hero-copy">
        <p className="eyebrow">Welcome</p>

        <h1>Hi, I&apos;m Sakshi.</h1>

        <p className="hero-note">
          Computer Science undergraduate | Backend-focused full-stack developer
        </p>

        <p className="lead">
          I&apos;m a Computer Science undergraduate and Full Stack Developer
          Intern at JBB Technologies. I enjoy building practical systems,
          designing REST APIs, and turning ideas into scalable applications
          with a clear structure and thoughtful user flow.
        </p>

        <p className="lead">
          I also work with data-driven systems, building dashboards using
          Microsoft Excel and Power BI, and handling structured data using
          SQL and PostgreSQL for analytics, reporting, and decision support.
        </p>

        <div className="hero-tags">
          <span>Full Stack Development</span>
          <span>REST APIs</span>
          <span>SQL & PostgreSQL</span>
          <span>Power BI & Excel Dashboards</span>
          <span>Problem Solving</span>
        </div>
      </div>

      {/* ✅ UPDATED PROFILE SECTION */}
      <div className="profile-card">
        <div className="profile-frame">
          <img
            src={profileImage}
            alt="Sakshi profile"
            className="profile-image"
          />

          <div className="profile-overlay">
            <h2>Sakshi Arabad</h2>
            <p>Full Stack Developer Intern at JBB Technologies</p>

            <div className="profile-points">
              <span>B.Tech CSE</span>
              <span>RHCSA Certified</span>
              <span>Backend + Data + Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;