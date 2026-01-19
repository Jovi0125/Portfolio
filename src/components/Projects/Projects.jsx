import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

/**
 * Projects Component
 * Grid layout displaying project cards
 */
const Projects = () => {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative project management tool with drag-and-drop functionality, team workspaces, and real-time notifications.',
      techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'A data visualization dashboard with interactive charts, customizable widgets, and export capabilities.',
      techStack: ['React', 'D3.js', 'Python', 'FastAPI'],
      githubUrl: 'https://github.com',
      liveUrl: null,
    },
    {
      id: 4,
      title: 'Social Media API',
      description: 'A RESTful API powering a social media platform with authentication, content moderation, and scalable architecture.',
      techStack: ['Node.js', 'Express', 'Redis', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: null,
    },
    {
      id: 5,
      title: 'Weather Application',
      description: 'A responsive weather app with location-based forecasts, interactive maps, and severe weather alerts.',
      techStack: ['React', 'OpenWeather API', 'Mapbox', 'PWA'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 6,
      title: 'Portfolio Generator',
      description: 'A CLI tool that generates customizable portfolio websites from a simple configuration file.',
      techStack: ['Node.js', 'Handlebars', 'SCSS', 'CLI'],
      githubUrl: 'https://github.com',
      liveUrl: null,
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-header__title">Featured Projects</h2>
          <div className="section-header__line"></div>
          <p className="section-header__subtitle">
            A selection of projects I've worked on, showcasing my skills in 
            full-stack development and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
