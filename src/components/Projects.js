import React from "react";

const projects = [
  {
    title: "Smart Traffic Congestion And Prediction Dashboard",
    description:
      "-To detect and predict traffic congestion in real time using AI and ML techniques to reduce time-consuming delays and improve traffic flow to enhance road safety and support smart city development.",
  },
  {
    title: "Gas Agency Management System",
    description:
      "A web-based system used to manage gas bookings, customer details, delivery tracking, and billing,It helps customers book cylinders online and allows the agency to manage deliveries and records efficiently.",
  },
  {
    title: "Automated Mcq Generator Dashboard",
    description:
      "To develop an AI-powered system using Python and NLP for automatic MCQ generation to create high-quality, contextually relevant questions from text or PDFs to simplify assessment and exam preparation processes.",
  },
  {
    title: "Language Detection System (NLP/ML)",
    description:
      "-Using Python, NLP, and Machine Learning, developed a system that accurately detects the language of a given text,Applied NLP, and ML techniques for efficient language classification and text processing.",
  },
  {
    title: "Fraud-Analytics-Using-AI-ML",
    description:
      "Built a machine learning fraud detection system to identify fraudulent transactions,Performed data cleaning and analysis, handling imbalanced data,Evaluated model using precision, recall, and F1-score.",
  },
  {
    title: "Internship project-JPCB (Jalgaon People Co-operative Bank Website)",
    description:
      "A web-based banking system for managing customer accounts, services, and enquiries digitally, improving accessibility and efficiency.",
  },


  // ✅ NEW PROJECT ADDED (SQL Query Collection)
  {
    title: "Internship project- Service CRM System",
    description:
      "A system used to manage customer queries and service requests. It helps track, assign, and resolve issues efficiently to improve customer support.",
  },
];

function Projects() {
  return (
    <div className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;