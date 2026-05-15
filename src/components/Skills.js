import React from "react";

const skills = [
  {
    title: "Programming",
    icon: "CS",
    items: ["Python", "SQL", "PHP", "JavaScript"],
  },
  {
    title: "Frameworks & Backend",
    icon: "API",
    items: ["CodeIgniter 4", "Django", "REST APIs"],
  },
  {
    title: "Databases & Tools",
    icon: "DB",
    items: [
      "MySQL",
      "PostgreSQL",
      "Supabase",
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
    ],
  },

  // ✅ NEW SECTION (important upgrade)
  {
    title: "Data Analytics & Visualization",
    icon: "BI",
    items: [
      "Power BI",
      "Microsoft Excel (Dashboards)",
      "Data Analysis",
      "Reporting & Insights",
    ],
  },

  {
    title: "Soft Skills",
    icon: "TEAM",
    items: [
      "Problem Solving",
      "Analytical Thinking",
      "Debugging",
      "Team Collaboration",
    ],
  },
];

function Skills() {
  return (
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>What I work with</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <article className="skill-card" key={skill.title}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <ul>
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Skills;