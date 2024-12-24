import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    vscode,
    github,
    flask,
    DotNet,
    python,
    VS,
    Jupyter,
    C,
    MySql,
    MongoDb,
    Azure,
    Postgres
  } = techStackDetails;

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
      marginBottom: "1rem",
    },
    description: {
      fontSize: "1.25rem",
      color: "#4a5568",
      textAlign: "center",
      marginBottom: "2rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
      gap: "1.5rem",
      alignItems: "center",
      justifyItems: "center",
    },
    techCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "#ffffff",
      padding: "1rem",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      position: "relative",
    },
    techCardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    },
    techImage: {
      width: "80px",
      height: "80px",
      objectFit: "contain",
      marginBottom: "1rem",
    },
    techTitle: {
      fontSize: "1rem",
      fontWeight: "600",
      color: "#2d3748",
      textAlign: "center",
      marginTop: "0.5rem",
    },
    tooltip: {
      position: "absolute",
      bottom: "-2rem",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#2d3748",
      color: "#fff",
      padding: "0.5rem 1rem",
      borderRadius: "4px",
      fontSize: "0.875rem",
      whiteSpace: "nowrap",
      opacity: 0,
      visibility: "hidden",
      transition: "opacity 0.3s ease, visibility 0.3s ease",
    },
    tooltipVisible: {
      opacity: 1,
      visibility: "visible",
    },
  };

  const techDetails = [
    { src: html, name: "HTML" },
    { src: css, name: "CSS" },
    { src: js, name: "JavaScript" },
    { src: react, name: "React" },
    { src: DotNet, name: ".NET" },
    { src: flask, name: "Flask" },
    { src: python, name: "Python" },
    { src: MongoDb, name: "MongoDB" },
    { src: C, name: "C++" },
    { src: MySql, name: "MySQL" },
    { src: Azure, name: "Azure" },
    { src: Postgres, name: "PostgreSQL" },
  ];

  const toolDetails = [
    { src: vscode, name: "Visual Studio Code" },
    { src: github, name: "GitHub" },
    { src: VS, name: "Visual Studio" },
    { src: Jupyter, name: "Jupyter Notebook" },
  ];

  return (
    <main style={styles.container}>
      <section>
        <h1 style={styles.title}>Tech Stack</h1>
        <p style={styles.description}>
          Technologies I've been learning and working with recently
        </p>
        <div style={styles.grid}>
          {techDetails.map((tech, index) => (
            <div
              key={index}
              style={styles.techCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.querySelector(".tooltip").style.opacity = "1";
                e.currentTarget.querySelector(".tooltip").style.visibility = "visible";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.querySelector(".tooltip").style.opacity = "0";
                e.currentTarget.querySelector(".tooltip").style.visibility = "hidden";
              }}
            >
              <img src={tech.src} alt="Tech Icon" style={styles.techImage} />
              <div className="tooltip" style={styles.tooltip}>{tech.name}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h1 style={{ ...styles.title, marginTop: "2rem" }}>Tools</h1>
        <div style={styles.grid}>
          {toolDetails.map((tool, index) => (
            <div
              key={index}
              style={styles.techCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.querySelector(".tooltip").style.opacity = "1";
                e.currentTarget.querySelector(".tooltip").style.visibility = "visible";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.querySelector(".tooltip").style.opacity = "0";
                e.currentTarget.querySelector(".tooltip").style.visibility = "hidden";
              }}
            >
              <img src={tool.src} alt="Tool Icon" style={styles.techImage} />
              <div className="tooltip" style={styles.tooltip}>{tool.name}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Technologies;
