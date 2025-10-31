import React, { useState, useMemo, useCallback } from "react";
import { projects } from "../data/projects";

// ✅ GitHub Icon Component
const GitHubIcon = React.memo(({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
));

// ✅ Demo Icon Component
const DemoIcon = React.memo(({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
));

// ✅ Project Card Component
const ProjectCard = React.memo(({ project, featured = false }) => {
  return (
    <div className={`project-card ${featured ? "featured" : ""}`}>
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
        <div className="project-overlay">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-link ${!featured ? "icon-only" : ""}`}
            aria-label={`View ${project.title} on GitHub`}
          >
            <GitHubIcon size={featured ? 20 : 28} />
            {featured && <span>View Code</span>}
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-link ${!featured ? "icon-only" : ""}`}
            aria-label={`View ${project.title} live demo`}
          >
            <DemoIcon size={featured ? 20 : 28} />
            {featured && <span>Live Demo</span>}
          </a>
        </div>
      </div>
      <div className="project-content">
        {featured && <span className="project-badge">Featured</span>}
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        {featured && project.highlights && (
          <ul className="project-highlights">
            {project.highlights.map((highlight, idx) => (
              <li key={idx}>✓ {highlight}</li>
            ))}
          </ul>
        )}

        <div className="project-tech">
          {featured
            ? project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))
            : project.technologies.slice(0, 3).map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
          {!featured && project.technologies.length > 3 && (
            <span className="tech-tag">+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

// Filter Button Component
const FilterButton = React.memo(({ active, onClick, children }) => (
  <button className={`filter-btn ${active ? "active" : ""}`} onClick={onClick}>
    {children}
  </button>
));

FilterButton.displayName = "FilterButton";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const featuredProjects = useMemo(() => {
    return projects.filter((p) => p.featured);
  }, []);

  const filteredProjects = useMemo(() => {
    return filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);
  }, [filter]);

  const nonFeaturedProjects = useMemo(() => {
    return filteredProjects.filter((p) => filter !== "all" || !p.featured);
  }, [filteredProjects, filter]);

  const handleFilterAll = useCallback(() => setFilter("all"), []);
  const handleFilterReact = useCallback(() => setFilter("react"), []);
  const handleFilterVanilla = useCallback(() => setFilter("vanilla"), []);

  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Showcase of my best work in web development
        </p>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <FilterButton active={filter === "all"} onClick={handleFilterAll}>
            All Projects
          </FilterButton>
          <FilterButton active={filter === "react"} onClick={handleFilterReact}>
            React Projects
          </FilterButton>
          <FilterButton
            active={filter === "vanilla"}
            onClick={handleFilterVanilla}
          >
            Vanilla JS
          </FilterButton>
        </div>

        {/* Featured Projects */}
        {filter === "all" && featuredProjects.length > 0 && (
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        )}

        {/* All Projects Grid */}
        <div className="projects-grid">
          {nonFeaturedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Projects);
