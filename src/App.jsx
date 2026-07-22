import { useMemo, useState } from "react";

const techFilters = [
  "All",
  "React",
  "Vue",
  "Node",
  "Python",
  "SQL",
  "Docker",
  "TypeScript"
];

const projects = [
  {
    id: 1,
    name: "Hiring Dashboard Pro",
    summary: "Admin dashboard for recruiters with analytics, candidate lanes, and role-based actions.",
    tags: ["Vue", "Node", "SQL"],
    previewTone: "tone-blue",
    source: "https://github.com/panuruj90/Portfolio/tree/main/apps/backoffice-vue",
    live: "#"
  },
  {
    id: 2,
    name: "Portfolio Frontend X",
    summary: "Personal portfolio web UI focused on performance, clean storytelling, and contact conversion.",
    tags: ["React", "TypeScript"],
    previewTone: "tone-cyan",
    source: "https://github.com/panuruj90/Portfolio/tree/main/apps/frontend-react",
    live: "#"
  },
  {
    id: 3,
    name: "Insights Engine",
    summary: "Python service for engagement analysis, trend snapshots, and weekly summaries.",
    tags: ["Python", "SQL"],
    previewTone: "tone-orange",
    source: "https://github.com/panuruj90/Portfolio/tree/main/services/analytics-python",
    live: "#"
  },
  {
    id: 4,
    name: "API Core Suite",
    summary: "REST API with auth, content workflow, message routing, and audit-ready endpoints.",
    tags: ["Node", "Docker"],
    previewTone: "tone-indigo",
    source: "https://github.com/panuruj90/Portfolio/tree/main/services/backend-node",
    live: "#"
  },
  {
    id: 5,
    name: "Data Bootstrap Kit",
    summary: "Reusable SQL schema + seed pack for fast local setup and predictable test data.",
    tags: ["SQL", "Docker"],
    previewTone: "tone-violet",
    source: "https://github.com/panuruj90/Portfolio/tree/main/data",
    live: "#"
  },
  {
    id: 6,
    name: "Cross Device UI Lab",
    summary: "Component playground that validates layout quality from small phones to wide desktop screens.",
    tags: ["React", "Vue", "TypeScript"],
    previewTone: "tone-green",
    source: "https://github.com/panuruj90/Portfolio",
    live: "#"
  },
  {
    id: 7,
    name: "Automation Bot Panel",
    summary: "Workflow panel for automation tasks, logs, and status summaries from multiple services.",
    tags: ["Node", "Python"],
    previewTone: "tone-slate",
    source: "https://github.com/panuruj90/Portfolio",
    live: "#"
  },
  {
    id: 8,
    name: "Realtime Metrics Wall",
    summary: "Realtime dashboard with stream-based updates and compact cards for operations teams.",
    tags: ["React", "Node", "SQL"],
    previewTone: "tone-rose",
    source: "https://github.com/panuruj90/Portfolio",
    live: "#"
  }
];

const compatibility = [
  { tech: "Frontend", items: ["React", "Vue", "Responsive CSS", "Accessibility"] },
  { tech: "Backend", items: ["Node API", "Auth", "Validation", "Service Layer"] },
  { tech: "Data", items: ["SQLite", "Schema Control", "Seed Sync", "Migration Ready"] },
  { tech: "DevOps", items: ["Docker Ready", "Build Scripts", "Env Config", "Preview Mode"] }
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Responsive Tech Webapp</p>
        <h1>Webapp That Works Across Devices And Modern Tech Stacks</h1>
        <p className="lead">
          Built with responsive-first principles so the same product feels right on mobile, tablet, laptop, and
          desktop. Includes project previews, stack filters, and compatibility sections.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#compatibility" className="btn ghost">Tech Compatibility</a>
        </div>
      </header>

      <section id="compatibility" className="compatibility-grid">
        {compatibility.map((block) => (
          <article className="compat-card" key={block.tech}>
            <h2>{block.tech}</h2>
            <ul>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section id="projects" className="projects-section">
        <div className="section-top">
          <h2>Project Repositories With Preview</h2>
          <div className="filter-row">
            {techFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`chip${activeFilter === filter ? " is-active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className={`preview-tile ${project.previewTone}`} aria-label={`${project.name} preview`}>
                <span>Preview</span>
              </div>
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <ul className="tag-row">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="card-actions">
                  <a href={project.source} target="_blank" rel="noreferrer">Source Repo</a>
                  <a href={project.live} target="_blank" rel="noreferrer">Live Preview</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
