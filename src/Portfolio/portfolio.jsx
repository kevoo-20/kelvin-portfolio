import React from "react";
import "./portfolio.css";
import profileImage from "../assets/profile.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Business Registration System",
      category: "Web App",
      description:
        "A digital platform for business registration, application tracking, and district-level record management with a clean and efficient workflow.",
      tech: ["React", "CSS", "SQL"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Sales Analytics Dashboard",
      category: "Data Analytics",
      description:
        "An interactive dashboard for analyzing sales performance, product trends, and revenue insights using clean visuals and structured reporting.",
      tech: ["Python", "Pandas", "Matplotlib"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Enterprise Landing Page",
      category: "Frontend",
      description:
        "A premium responsive landing page built to present services, attract users, and create a polished first impression for organizations.",
      tech: ["React", "Vite", "CSS"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Brand Identity & Social Media Designs",
      category: "Graphic Design",
      description:
        "A collection of creative brand visuals, promotional materials, flyers, and social media graphics designed to communicate ideas clearly and professionally.",
      tech: ["Photoshop", "Canva", "Branding"],
      link: "#",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const skills = [
    "React",
    "JavaScript",
    "Python",
    "SQL",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "UI Design",
    "Graphic Design",
    "Brand Identity Design",
    "Adobe Photoshop",
    "Canva",
    "Data Analysis",
    "Git & GitHub",
  ];

  return (
    <div className="portfolio-page">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-grid"></div>

      <header className="portfolio-header">
        <a href="#home" className="nav-brand">
          <div className="brand-mark">K</div>
          <div className="brand-text">
            <h2>Kelvin Opoku</h2>
            <span>Software Developer • Graphic Designer</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-actions">
          <a href="#projects" className="nav-btn nav-btn-light">
            View Work
          </a>
          <a href="#contact" className="nav-btn nav-btn-solid">
            Hire Me
          </a>
        </div>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-left">
          <div className="hero-pill">
            <span className="pill-dot"></span>
            Software Developer • Graphic Designer • Data Solutions Specialist
          </div>

          <h1 className="hero-title">
            Building <span>world-class digital experiences</span> with clean
            code, sharp design, and real impact.
          </h1>

          <p className="hero-description">
            I’m Kelvin Opoku, a university graduate, IT professional, software
            developer, and graphic designer with over 5 years of experience
            creating premium digital experiences through modern web
            applications, smart data solutions, and strong visual design.
          </p>

         <div className="hero-actions">
  <a href="#projects" className="hero-btn hero-btn-primary">
    Explore Projects
  </a>

  <a
    href="/my-cv.pdf"
    download
    className="hero-btn hero-btn-secondary"
  >
    Download CV
  </a>
</div>

          <div className="hero-stats">
            <div className="stat-card">
              <h3>04+</h3>
              <p>Featured Projects</p>
            </div>
            <div className="stat-card">
              <h3>5+ Years</h3>
              <p>Hands-on Experience</p>
            </div>
            <div className="stat-card">
              <h3>Design + Code</h3>
              <p>Creative Advantage</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrap">
            <img
              src={profileImage}
              alt="Kelvin Opoku"
              className="hero-profile-image"
            />
          </div>

          <div className="floating-tag tag-1">Frontend Developer</div>
          <div className="floating-tag tag-2">Graphic Designer</div>
          <div className="floating-tag tag-3">Data Projects</div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="section-heading">
          <span className="section-label">About Me</span>
          <h2>Creative, experienced, and focused on building standout solutions</h2>
        </div>

        <div className="about-grid">
          <div className="about-card about-main">
            <p>
              I am a university graduate, IT professional, software developer,
              and graphic designer with over 5 years of experience building
              modern web applications, data-driven systems, and visually
              compelling digital products.
            </p>

            <p>
              My work blends technology and creativity, allowing me to create
              solutions that are not only functional and responsive but also
              attractive, polished, and user-focused. I enjoy turning ideas into
              premium digital experiences that solve real-world problems and
              leave a lasting impression.
            </p>
          </div>

          <div className="about-card about-side">
            <h3>What I bring</h3>
            <ul>
              <li>Modern React interfaces</li>
              <li>Responsive and clean layouts</li>
              <li>Structured SQL-backed solutions</li>
              <li>Data analysis and visual reporting</li>
              <li>Graphic design and branding assets</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <span className="section-label">Featured Work</span>
          <h2>Projects crafted to solve problems and leave a strong impression</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-top">
                <span className="project-number">0{index + 1}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>

              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                View Project →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <span className="section-label">Skills</span>
          <h2>Tools and technologies I use to build modern products</h2>
        </div>

        <div className="skills-wrapper">
          {skills.map((skill, index) => (
            <div className="skill-chip" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-card">
          <span className="section-label">Contact</span>
          <h2>Let&apos;s build something exceptional together</h2>
          <p>
            I&apos;m open to internships, freelance projects, collaborations,
            and exciting opportunities in software development, graphic design,
            web development, and digital product creation.
          </p>

          <div className="contact-actions">
            <a href="mailto:kelvin@example.com" className="contact-primary">
              kelvinopoku981@gmail.com
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;