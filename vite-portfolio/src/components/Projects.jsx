import '../styles/projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive portfolio built with React and CSS.',
    link: 'https://github.com/your-username/portfolio',
  },
  {
    title: 'Todo App',
    description: 'A simple todo app with add, delete, and mark-as-done functionality.',
    link: 'https://github.com/your-username/todo-app',
  },
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>My Projects</h2>
    <div className="project-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
