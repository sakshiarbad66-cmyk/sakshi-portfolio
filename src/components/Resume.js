import React from "react";
import resumePdf from "../assets/resume.pdf";

function Resume() {
  return (
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Resume</p>
        <h2>Download the full PDF</h2>
      </div>

      <div className="content-card resume-card">
        <p>
          If you want the full details of my education, experience, projects,
          and certifications, you can download my resume here.
        </p>
        <a className="primary-button" href={resumePdf} download>
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
