import React from "react";

function About() {
  return (
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">About me</p>
        <h2>A quick introduction</h2>
      </div>

      <div className="content-card about-card">
        <p>
          I am a Computer Science undergraduate with backend-focused
          full-stack development experience. I like building systems that are
          reliable, easy to use, and structured well enough to grow.
        </p>
        <p>
          As a Full Stack Developer Intern at JBB Technologies, I have worked
          on backend APIs, analytics, and reporting features while using
          tools such as PHP, MySQL, JavaScript, Django, and REST APIs.
        </p>
        <p>
          I also have experience working with data analysis and visualization.
          I have built dashboards using Microsoft Excel and Power BI, and have
          worked with databases using SQL and PostgreSQL for efficient data
          handling and reporting.
        </p>
        <p>
          I enjoy solving technical problems, debugging carefully, and working
          with a team to move projects from ideas to working applications.
        </p>

        <div className="about-grid">
          <div className="info-block">
            <h3>Education</h3>
            <p>
              B.Tech in Computer Science and Engineering at Maharashtra
              Institute of Technology, Chhatrapati Sambhaji Nagar.
              B.tech,Minor degree in Data Science from Electronics technology & Communication.
            </p>
          </div>
          <div className="info-block">
            <h3>Experience</h3>
            <p>
              Full Stack Developer Intern at JBB Technologies, working on
              backend APIs, analytics, reporting features, and full-stack
              application development.
            </p>
          </div>
          <div className="info-block">
            <h3>Focus</h3>
            <p>
              REST APIs, database-backed applications, system design,
              data analytics, dashboard development, and practical
              problem solving.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;