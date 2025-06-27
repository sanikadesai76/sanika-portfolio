import "./Project.css";
import { FaGithub } from "react-icons/fa"; // ← React GitHub Icon

const projects = [
  {
    title: "Number Shifting Game",
    description: [
      "A console-based logic puzzle built using C++",
      "Practices number manipulation and logical loops",
    ],
    image: "number-shift.png",
    tags: ["C++"],
    github: "https://github.com/sanikadesai76/CPP-Project",
  },
  {
    title: "YouTube Clone",
    description: [
      "Frontend-only YouTube clone using HTML, CSS, & JavaScript",
      "Responsive UI with homepage and video layout",
    ],
    image: "youtube-clone.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sanikadesai76/Youtube-Clone",
  },
  {
    title: "Emotion Detection Web App",
    description: [
      "Detects emotions using a Python ML model",
      "Provide Letter with Solutions",
    ],
    image: "emotion-detect.png",
    tags: ["ReactJS", "Spring Boot", "Python"],
    github: "https://github.com/sanikadesai76/Hackthone_Team_Coders",
  },
];

const Project = () => {
  return (
    <section className="projects-section">
      <h2 className="project-title">My Projects</h2>
      <div className="project-list">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.image} alt={proj.title} className="project-image" />
            <h3>{proj.title}</h3>
            <ul className="project-desc">
              {proj.description.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
            <div className="project-tags">
              {proj.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-buttons">
              <a
                href={proj.github}
                className="code-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18} /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
