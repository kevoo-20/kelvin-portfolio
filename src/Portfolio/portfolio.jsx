import React from "react";
import "./portfolio.css";
import profileImage from "../assets/profile.png";

const Portfolio = () => {

const projects = [
{
title: "Business Registration System",
category: "Web Application",
description:
"A digital platform that allows district officers to register businesses while a regional manager monitors registrations across districts in real time.",
tech: ["React", "CSS", "SQL"],
live: "https://business-registration-systems.vercel.app",
github: "https://github.com/kevoo-20/business-registration-systems",
image:
"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
},

{
title: "Sales Analytics Dashboard",
category: "Data Analytics",
description:
"An interactive dashboard for analyzing sales performance, product trends, and revenue insights using structured data visualization.",
tech: ["Python", "Pandas", "Matplotlib"],
image:
"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
},

{
title: "Enterprise Landing Page",
category: "Frontend",
description:
"A premium responsive landing page built to present services, attract users, and create a polished first impression for organizations.",
tech: ["React", "Vite", "CSS"],
image:
"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
},

{
title: "Brand Identity & Social Media Designs",
category: "Graphic Design",
description:
"A collection of creative brand visuals, promotional materials, flyers, and social media graphics designed to communicate ideas clearly and professionally.",
tech: ["Photoshop", "Canva", "Branding"],
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
"Brand Identity",
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
Building <span>world-class digital experiences</span> with clean code, sharp design, and real impact.
</h1>

<p className="hero-description">
I'm Kelvin Opoku, an IT professional, software developer, and graphic designer focused on building modern web applications, smart data solutions, and high-quality digital experiences.
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
<p>Projects Built</p>
</div>

<div className="stat-card">
<h3>5+</h3>
<p>Years Experience</p>
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

<h2>
Creative, experienced, and focused on building standout solutions
</h2>
</div>

<div className="about-grid">

<div className="about-card about-main">

<p>
I am passionate about creating modern applications and digital solutions that combine technology, creativity, and strong user experience.
</p>

<p>
My focus is building responsive web applications, data-driven systems, and visually polished digital products that solve real-world problems.
</p>

</div>

<div className="about-card about-side">

<h3>What I Bring</h3>

<ul>
<li>Modern React Interfaces</li>
<li>Responsive UI Development</li>
<li>SQL-Backed Systems</li>
<li>Data Analysis & Visualization</li>
<li>Graphic Design & Branding</li>
</ul>

</div>

</div>

</section>

<section className="section" id="projects">

<div className="section-heading">
<span className="section-label">Projects</span>

<h2>Work that solves real problems</h2>
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

<span className="project-category">
{project.category}
</span>

</div>

<h3>{project.title}</h3>

<p>{project.description}</p>

<div className="project-tech">

{project.tech.map((tech, i) => (
<span key={i}>{tech}</span>
))}

</div>

<div className="project-links">

{project.live && (
<a
href={project.live}
target="_blank"
rel="noreferrer"
className="project-link"
>
Live Demo
</a>
)}

{project.github && (
<a
href={project.github}
target="_blank"
rel="noreferrer"
className="project-link"
>
View Code
</a>
)}

</div>

</article>

))}

</div>

</section>

<section className="section" id="skills">

<div className="section-heading">
<span className="section-label">Skills</span>

<h2>Technologies I work with</h2>
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

<h2>Let's build something exceptional together</h2>

<p>
I'm open to internships, collaborations, freelance work, and exciting opportunities in software development and digital product creation.
</p>

<div className="contact-actions">

<a
href="mailto:kelvinopoku981@gmail.com"
className="contact-primary"
>
kelvinopoku981@gmail.com
</a>

<a
href="https://github.com/kevoo-20"
target="_blank"
rel="noreferrer"
>
GitHub
</a>

</div>

</div>

</section>

</div>
);
};

export default Portfolio;