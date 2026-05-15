import React from "react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "JBB Technologies",
    duration: "Present",
    description: [
      "Worked on backend API development and full-stack application features.",
      "Built analytics and reporting modules for financial systems.",
      "Used technologies like PHP, MySQL, JavaScript, and Django.",
      "Contributed to structured, scalable, and maintainable system design.",
    ],
  },
];

function Experience() {
  return (
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Where I’ve worked</h2>
      </div>

      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <article className="experience-card" key={index}>
            <h3>{exp.role}</h3>
            <p className="exp-company">{exp.company}</p>
            <p className="exp-duration">{exp.duration}</p>

            <ul>
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Experience;