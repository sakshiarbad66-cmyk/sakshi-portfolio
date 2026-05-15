import React from "react";

function Contact() {
  return (
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s connect</h2>
      </div>

      <div className="content-card about-card">
        <p>
          If you want to reach me about opportunities, projects, or
          collaboration, you can use any of the contacts below.
        </p>
      </div>

      <div className="contact-grid" style={{ marginTop: "18px" }}>
        <a className="contact-card" href="mailto:sakshiarabad2004@gmail.com">
          <span>Email</span>
          <strong>sakshiarabad2004@gmail.com</strong>
        </a>
        <a className="contact-card" href="tel:+918080498408">
          <span>Phone</span>
          <strong>+91 8080498408</strong>
        </a>
        <a
          className="contact-card"
          href="https://github.com/sakshiarbad66-cmyk"
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub</span>
          <strong>github.com/sakshiarbad66-cmyk</strong>
        </a>
        <a
          className="contact-card"
          href="https://www.linkedin.com/in/sakshi-arbad-93a080378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
        >
          <span>LinkedIn</span>
          <strong>linkedin.com/in/sakshi-arbad-93a080378</strong>
        </a>
      </div>
    </div>
  );
}

export default Contact;
