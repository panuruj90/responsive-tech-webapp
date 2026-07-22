import { useEffect, useMemo, useState } from "react";

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

const copy = {
  en: {
    eyebrow: "Responsive Tech Webapp",
    heroTitle: "Webapp That Works Across Devices And Modern Tech Stacks",
    heroLead:
      "Built with responsive-first principles so the same product feels right on mobile, tablet, laptop, and desktop. Includes project previews, stack filters, and compatibility sections.",
    viewProjects: "View Projects",
    techCompatibility: "Tech Compatibility",
    about: "About",
    contact: "Contact",
    language: "Language",
    livePreview: "Live Preview",
    openSourceRepo: "Open Source Repo",
    backToProjects: "Back To Projects",
    projectsTitle: "Project Repositories With Preview",
    sourceRepo: "Source Repo",
    aboutEyebrow: "About This Webapp",
    aboutTitle: "Responsive Architecture For Every Device",
    aboutBody:
      "This project is designed as a reusable webapp shell that works across phones, tablets, laptops, and large desktop screens. The layout relies on flexible grids, robust breakpoints, and compact action grouping to keep navigation and content readable at any size.",
    coverageEyebrow: "Tech Coverage",
    coverageTitle: "Frontend, Backend, Data, And DevOps",
    coverageBody:
      "The project catalog includes React, Vue, Node, Python, SQL, Docker, and TypeScript-oriented samples so you can show stack breadth in one place while keeping each card focused and scan-friendly for recruiters.",
    contactTitle: "Let's Build The Next Version",
    contactBody:
      "Looking for a responsive webapp, a dashboard with clean UX, or a full-stack delivery flow? Send a short message and project context.",
    yourName: "Your name",
    yourEmail: "Your email",
    projectDetails: "Project details",
    sendMessage: "Send Message",
    sendSuccess: "Thanks, your message is ready to send.",
    location: "Location"
  },
  th: {
    eyebrow: "เว็บแอปสายเทคแบบ Responsive",
    heroTitle: "เว็บแอปที่ใช้งานได้ดีทุกอุปกรณ์ และรองรับเทคสแต็กสมัยใหม่",
    heroLead:
      "ออกแบบด้วยแนวคิด responsive-first เพื่อให้ใช้งานได้ลื่นทั้งมือถือ แท็บเล็ต แล็ปท็อป และเดสก์ท็อป พร้อมส่วน preview โปรเจกต์ ระบบกรองเทค และโครงสร้างที่อ่านง่าย",
    viewProjects: "ดูโปรเจกต์",
    techCompatibility: "ความเข้ากันได้ของเทค",
    about: "เกี่ยวกับ",
    contact: "ติดต่อ",
    language: "ภาษา",
    livePreview: "พรีวิว",
    openSourceRepo: "เปิดซอร์สโค้ด",
    backToProjects: "กลับไปที่โปรเจกต์",
    projectsTitle: "รายการโปรเจกต์พร้อม Preview",
    sourceRepo: "Repo ต้นฉบับ",
    aboutEyebrow: "เกี่ยวกับเว็บแอปนี้",
    aboutTitle: "โครงสร้าง Responsive ที่รองรับทุกอุปกรณ์",
    aboutBody:
      "โปรเจกต์นี้ออกแบบเป็นโครงเว็บแอปที่นำไปใช้ต่อได้จริง ทั้งบนมือถือ แท็บเล็ต แล็ปท็อป และจอเดสก์ท็อป โดยเน้นกริดที่ยืดหยุ่น จุดตัดหน้าจอที่เหมาะสม และการจัดกลุ่มปุ่มให้ใช้งานง่าย",
    coverageEyebrow: "ขอบเขตเทคโนโลยี",
    coverageTitle: "รองรับ Frontend, Backend, Data และ DevOps",
    coverageBody:
      "แคตตาล็อกโปรเจกต์ครอบคลุม React, Vue, Node, Python, SQL, Docker และ TypeScript เพื่อแสดงความหลากหลายของสกิลในหน้าเดียว และยังอ่านง่ายสำหรับผู้รีวิว",
    contactTitle: "มาสร้างเวอร์ชันถัดไปด้วยกัน",
    contactBody:
      "ถ้าต้องการเว็บแอป responsive, dashboard ที่ UX ชัดเจน หรือระบบ full-stack ครบวงจร ส่งรายละเอียดโปรเจกต์เข้ามาได้เลย",
    yourName: "ชื่อของคุณ",
    yourEmail: "อีเมลของคุณ",
    projectDetails: "รายละเอียดโปรเจกต์",
    sendMessage: "ส่งข้อความ",
    sendSuccess: "ขอบคุณครับ ข้อความของคุณพร้อมส่งแล้ว",
    location: "ที่อยู่"
  }
};

const projects = [
  {
    id: 1,
    slug: "hiring-dashboard-pro",
    name: "Hiring Dashboard Pro",
    summary: "Admin dashboard for recruiters with analytics, candidate lanes, and role-based actions.",
    previewSummary:
      "A recruiter operations layout with role-aware actions, KPI cards, and mobile-safe table fallbacks for on-the-go review.",
    tags: ["Vue", "Node", "SQL"],
    previewTone: "tone-blue",
    source: "https://github.com/panuruj90/Portfolio/tree/main/apps/backoffice-vue",
    live: "#preview/hiring-dashboard-pro"
  },
  {
    id: 2,
    slug: "portfolio-frontend-x",
    name: "Portfolio Frontend X",
    summary: "Personal portfolio web UI focused on performance, clean storytelling, and contact conversion.",
    previewSummary:
      "A conversion-friendly portfolio layout featuring clear CTA spacing, responsive typography, and lightweight content sections.",
    tags: ["React", "TypeScript"],
    previewTone: "tone-cyan",
    source: "https://github.com/panuruj90/Portfolio/tree/main/apps/frontend-react",
    live: "#preview/portfolio-frontend-x"
  },
  {
    id: 3,
    slug: "insights-engine",
    name: "Insights Engine",
    summary: "Python service for engagement analysis, trend snapshots, and weekly summaries.",
    previewSummary:
      "A report-focused preview for analytics snapshots, highlighting trend cards and status blocks that remain readable on small screens.",
    tags: ["Python", "SQL"],
    previewTone: "tone-orange",
    source: "https://github.com/panuruj90/Portfolio/tree/main/services/analytics-python",
    live: "#preview/insights-engine"
  },
  {
    id: 4,
    slug: "api-core-suite",
    name: "API Core Suite",
    summary: "REST API with auth, content workflow, message routing, and audit-ready endpoints.",
    previewSummary:
      "An API service surface with endpoint groups, auth scope tags, and structured health diagnostics for rapid debugging.",
    tags: ["Node", "Docker"],
    previewTone: "tone-indigo",
    source: "https://github.com/panuruj90/Portfolio/tree/main/services/backend-node",
    live: "#preview/api-core-suite"
  },
  {
    id: 5,
    slug: "data-bootstrap-kit",
    name: "Data Bootstrap Kit",
    summary: "Reusable SQL schema + seed pack for fast local setup and predictable test data.",
    previewSummary:
      "A data foundation preview that demonstrates schema consistency, seed orchestration, and testable local dataset flows.",
    tags: ["SQL", "Docker"],
    previewTone: "tone-violet",
    source: "https://github.com/panuruj90/Portfolio/tree/main/data",
    live: "#preview/data-bootstrap-kit"
  },
  {
    id: 6,
    slug: "cross-device-ui-lab",
    name: "Cross Device UI Lab",
    summary: "Component playground that validates layout quality from small phones to wide desktop screens.",
    previewSummary:
      "A design QA workspace focused on breakpoints, spacing rhythm, and component durability across device classes.",
    tags: ["React", "Vue", "TypeScript"],
    previewTone: "tone-green",
    source: "https://github.com/panuruj90/Portfolio",
    live: "#preview/cross-device-ui-lab"
  },
  {
    id: 7,
    slug: "automation-bot-panel",
    name: "Automation Bot Panel",
    summary: "Workflow panel for automation tasks, logs, and status summaries from multiple services.",
    previewSummary:
      "A multi-service operations panel for queued jobs, execution traces, and compact status scanning from one dashboard.",
    tags: ["Node", "Python"],
    previewTone: "tone-slate",
    source: "https://github.com/panuruj90/Portfolio",
    live: "#preview/automation-bot-panel"
  },
  {
    id: 8,
    slug: "realtime-metrics-wall",
    name: "Realtime Metrics Wall",
    summary: "Realtime dashboard with stream-based updates and compact cards for operations teams.",
    previewSummary:
      "A monitoring wall with signal-first cards and fast visual hierarchy tuned for desktop control rooms and mobile checks.",
    tags: ["React", "Node", "SQL"],
    previewTone: "tone-rose",
    source: "https://github.com/panuruj90/Portfolio",
    live: "#preview/realtime-metrics-wall"
  },
  {
    id: 9,
    slug: "portfolio-repository",
    name: "Portfolio Repository",
    summary: "Main portfolio monorepo containing frontend, backoffice, backend API, and analytics service.",
    previewSummary:
      "A complete repository preview showing how UI apps and backend services connect in one full-stack workflow.",
    tags: ["React", "Vue", "Node", "Python", "SQL"],
    previewTone: "tone-amber",
    source: "https://github.com/panuruj90/Portfolio",
    live: "#preview/portfolio-repository"
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
  const [language, setLanguage] = useState("en");
  const [contactState, setContactState] = useState({ name: "", email: "", message: "" });
  const [contactStatus, setContactStatus] = useState("idle");
  const [hash, setHash] = useState(() => (typeof window !== "undefined" ? window.location.hash : ""));
  const labels = copy[language];

  useEffect(() => {
    function onHashChange() {
      setHash(window.location.hash);
    }

    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const previewSlug = hash.startsWith("#preview/") ? hash.replace("#preview/", "") : "";

  const activePreviewProject = useMemo(() => {
    if (!previewSlug) {
      return null;
    }

    return projects.find((project) => project.slug === previewSlug) || null;
  }, [previewSlug]);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.tags.includes(activeFilter));
  }, [activeFilter]);

  function handleContactSubmit(event) {
    event.preventDefault();
    setContactStatus("sent");
    setContactState({ name: "", email: "", message: "" });
  }

  return (
    <div className="page">
      <header className="hero">
        <div className="hero-topbar">
          <p className="eyebrow">{labels.eyebrow}</p>
          <div className="language-switcher" aria-label={labels.language}>
            <button
              type="button"
              className={`language-button${language === "en" ? " is-active" : ""}`}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={`language-button${language === "th" ? " is-active" : ""}`}
              onClick={() => setLanguage("th")}
            >
              TH
            </button>
          </div>
        </div>
        <h1>{labels.heroTitle}</h1>
        <p className="lead">{labels.heroLead}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">{labels.viewProjects}</a>
          <a href="#compatibility" className="btn ghost">{labels.techCompatibility}</a>
          <a href="#about" className="btn ghost">{labels.about}</a>
          <a href="#contact" className="btn ghost">{labels.contact}</a>
        </div>
      </header>

      {activePreviewProject && (
        <section id="preview" className="preview-panel">
          <div className={`preview-banner ${activePreviewProject.previewTone}`}>
            <p className="preview-kicker">{labels.livePreview}</p>
            <h2>{activePreviewProject.name}</h2>
          </div>
          <div className="preview-content">
            <p>{activePreviewProject.previewSummary}</p>
            <ul className="tag-row">
              {activePreviewProject.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <div className="card-actions">
              <a href={activePreviewProject.source} target="_blank" rel="noreferrer">{labels.openSourceRepo}</a>
              <a href="#projects">{labels.backToProjects}</a>
            </div>
          </div>
        </section>
      )}

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
          <h2>{labels.projectsTitle}</h2>
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
                  <a href={project.source} target="_blank" rel="noreferrer">{labels.sourceRepo}</a>
                  <a href={project.live}>{labels.livePreview}</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <article className="about-card">
          <p className="eyebrow">{labels.aboutEyebrow}</p>
          <h2>{labels.aboutTitle}</h2>
          <p>{labels.aboutBody}</p>
        </article>
        <article className="about-card">
          <p className="eyebrow">{labels.coverageEyebrow}</p>
          <h2>{labels.coverageTitle}</h2>
          <p>{labels.coverageBody}</p>
        </article>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-info">
          <p className="eyebrow">{labels.contact}</p>
          <h2>{labels.contactTitle}</h2>
          <p>{labels.contactBody}</p>
          <ul>
            <li>Email: panuruj905@gmail.com</li>
            <li>GitHub: github.com/panuruj90</li>
            <li>{labels.location}: Samut Prakan, Thailand</li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleContactSubmit}>
          <input
            type="text"
            placeholder={labels.yourName}
            value={contactState.name}
            onChange={(event) => setContactState({ ...contactState, name: event.target.value })}
            required
          />
          <input
            type="email"
            placeholder={labels.yourEmail}
            value={contactState.email}
            onChange={(event) => setContactState({ ...contactState, email: event.target.value })}
            required
          />
          <textarea
            placeholder={labels.projectDetails}
            value={contactState.message}
            onChange={(event) => setContactState({ ...contactState, message: event.target.value })}
            required
          />
          <button className="btn primary" type="submit">{labels.sendMessage}</button>
          {contactStatus === "sent" && <p className="form-success">{labels.sendSuccess}</p>}
        </form>
      </section>
    </div>
  );
}
