import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "2rem",
      background: "linear-gradient(135deg, #f7fafc, #edf2f7)",
      borderRadius: "12px",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#2d3748",
      textAlign: "center",
      marginBottom: "1.5rem",
    },
    description: {
      fontSize: "1.25rem",
      color: "#4a5568",
      textAlign: "center",
      marginBottom: "2rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "1.5rem",
    },
    card: {
      background: "#ffffff",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    cardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
    },
    image: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    content: {
      padding: "1rem",
    },
    projectTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#2d3748",
      marginBottom: "0.5rem",
    },
    projectDescription: {
      fontSize: "1rem",
      color: "#4a5568",
      marginBottom: "1rem",
    },
    links: {
      display: "flex",
      gap: "1rem",
    },
    link: {
      fontSize: "0.875rem",
      color: "#4299e1",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    linkHover: {
      color: "#2b6cb0",
    },
  };

  return (
    <main style={styles.container}>
      <section>
        <h1 style={styles.title}>My Projects</h1>
        <p style={styles.description}>
          Explore some of the projects I've worked on, showcasing my skills in development and design.
        </p>
        <div style={styles.grid}>
          {projectDetails.map(
            ({ title, image, description, techstack, previewLink, githubLink }, index) => (
              <div
                key={index}
                style={styles.card}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img src={image} alt={title} style={styles.image} />
                <div style={styles.content}>
                  <h2 style={styles.projectTitle}>{title}</h2>
                  <p style={styles.projectDescription}>{description}</p>
                  <div style={styles.links}>
                    <a href={previewLink} style={styles.link}>Preview</a>
                    <a href={githubLink} style={styles.link}>GitHub</a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;