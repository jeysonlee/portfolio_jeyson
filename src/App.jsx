import { useState, useEffect } from "react"
import "./App.css"
import {
  FaReact,
  FaVuejs,
  FaLaravel,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaNodeJs,
  FaGitAlt,
  FaSun,
  FaMoon,
  FaPhone,
  FaAngular,
  FaPython, FaWhatsapp
  
  
} from "react-icons/fa"
import { SiSpringboot, SiMysql, SiOpencv, SiTensorflow, SiJsonwebtokens,SiRender} from "react-icons/si"

import { SiPostgresql, SiFirebase, SiIonic, SiTailwindcss, SiTypescript, SiMongodb, SiVite } from "react-icons/si"
import { FaA } from "react-icons/fa6"

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode)
  }, [darkMode])

const projects = [

  {
    id: 1,
    title: "Sistema Comercial de Alquiler y Venta de Vehículos (Infonerc)",
    description:
      "Sistema web monolítico desarrollado con Laravel e Inertia para la gestión de alquiler y venta de vehículos. Reescritura de sistema legacy, análisis funcional, corrección de errores y optimización del rendimiento.",
    image: "/public/images/vehiculos.png",
    techs: [
      <FaLaravel key="l" />,
      <FaVuejs key="v" />,
      <SiPostgresql key="p" />
    ]
  },
  {
    id: 2,
    title: "Sistema de Gestión de Almacén (SAETA)",
    description:
      "Sistema web para la gestión de almacén. Desarrollo del módulo de salidas de mercadería con validación de stock por lotes y series, control de permisos y roles, y aprobación de solicitudes.",
    image: "/public/images/almacen.png",
    techs: [
      <FaLaravel key="l" />,
      <FaReact key="r" />,
      <SiPostgresql key="p" />
    ]
  },
    {
    id: 3,
    title: "Sistema de Gestión Hotelera (Proyecto Universitario)",
    description:
      "Sistema web para la gestión de habitaciones, reservas y huéspedes, con administración de roles y permisos. Arquitectura API REST con autenticación y autorización segura.",
    image: "/public/images/hotel.png",
    techs: [
      <FaAngular key="a" />,
      <SiSpringboot key="s" />,
      <SiMysql key="m" />
    ]
  },
  {
    id: 4,
    title: "Aplicación Agrícola Offline",
    description:
      "Aplicación móvil para productores agrícolas con funcionamiento offline y sincronización en la nube. Registro de actividades productivas y control de información en campo.",
    image: "/public/images/cacao.png",
    techs: [
      <SiIonic key="i" />,
      <SiFirebase key="f" />
    ]
  },
  {
    id: 5,
    title: "Reconocimiento de Monedas con Visión Artificial",
    description:
      "Proyecto de reconocimiento de monedas mediante procesamiento de imágenes, utilizando técnicas de visión artificial para detección, clasificación y validación de objetos.",
    image: "/public/images/monedas.png",
    techs: [
      <FaPython key="p" />,
      <SiOpencv key="o" />,
      <SiTensorflow key="t" />
    ]
  },
  {
    id: 6,
    title: "Sistema de Seguridad y Control de Accesos (Proyecto Universitario)",
    description:
      "Sistema web orientado a la implementación de seguridad y control de accesos a nivel lógico, con gestión de usuarios, roles y autenticación segura basada en tokens.",
    image: "/public/images/seguridad.png",
    techs: [
      <SiSpringboot key="s" />,
      <FaAngular key="a" />,
      <SiJsonwebtokens key="j" />
    ]
  }
];


  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4)

  const skills = [
    { icon: <FaReact />, name: "React", animation: "spin" },
    { icon: <FaVuejs />, name: "Vue 3", animation: "bounce" },
    {icon: <FaAngular />, name: "Angular", animation: "float-icon" },
    {icon: <SiSpringboot />, name: "Spring Boot", animation: "glow-icon" },
    { icon: <FaLaravel />, name: "Laravel", animation: "shake" },
    { icon: <FaNodeJs />, name: "Node.js", animation: "pulse-icon" },
    { icon: <FaGitAlt />, name: "Git", animation: "shake" },
    { icon: <SiVite />, name: "Vite", animation: "spin" },
    { icon: <SiIonic />, name: "Ionic", animation: "spin" },
    { icon: <FaPython />, name: "Python", animation: "spin" },
    { icon: <SiPostgresql />, name: "PostgreSQL", animation: "glow-icon" },
    { icon: <SiMysql />, name: "MySQL", animation: "pulse-icon" },
    { icon: <SiFirebase />, name: "Firebase", animation: "float-icon" },
    { icon: <SiRender />, name: "Render", animation: "spin" }
  ]

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <h1 className="logo">Jeyson<span>.dev</span></h1>
        <nav>
          <a href="#home">Inicio</a>
          <a href="#experience">Experiencia</a>
          <a href="#projects">Proyectos</a>
        </nav>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      {/* HERO + ABOUT + SKILLS - Primera página completa */}
      <section id="home" className="hero-section">
        <div className="hero-bg-decoration"></div>
        <div className="hero-container">
          {/* Lado izquierdo - Foto */}
          <div className="hero-left">
            <div className="profile-wrapper">
              <div className="profile-photo">
                <img src="/public/images/carnet.png" alt="Jeyson" />
              </div>
              <div className="profile-glow"></div>
            </div>
            <div className="contact-buttons">
              <div className="contact-item">
                <a href="https://github.com/jeysonlee" target="_blank" rel="noopener noreferrer" className="contact-btn" style={{ '--icon-animation': 'bounce' }}>
                  <FaGithub />
                </a>
                <span>jeysonlee</span>
              </div>
              <div className="contact-item">
                <a href="https://linkedin.com/in/jeysonlee/" target="_blank" rel="noopener noreferrer" className="contact-btn" style={{ '--icon-animation': 'pulse-icon' }}>
                  <FaLinkedin />
                </a>
                <span>jeysonlee</span>
              </div>
              <div className="contact-item">
                <a href="mailto:jsndlgl@gmail.com" className="contact-btn" style={{ '--icon-animation': 'float-icon' }}>
                  <FaEnvelope />
                </a>
                <span>jsndlgl@gmail.com</span>
              </div>
              <div className="contact-item">
                <a href="https://wa.me/51929106759" target="_blank" rel="noopener noreferrer" className="contact-btn" style={{ '--icon-animation': 'shake' }}>
                  <FaWhatsapp />
                </a>
                <span>+51929106759</span>
              </div>
            </div>
          </div>

          {/* Lado derecho - Info */}
          <div className="hero-right">
            <div className="hero-badge">Disponible para trabajar</div>
            <h2 className="hero-name">Hola, soy <span>Jeyson del Aguila</span></h2>
            <p className="hero-title">Desarrollador Full Stack</p>

            {/* Card con Sobre mí arriba y Skills abajo */}
            <div className="hero-info-card">
              <div className="about-section">
                <h3>Sobre mí</h3>
                <p>
                  Soy un desarrollador de software apasionado por crear soluciones web
                  modernas, eficientes y escalables. Con experiencia en frontend, backend
                  y aplicaciones móviles, transformo ideas en productos digitales funcionales.
                  Me especializo en React, Vue, Laravel y tecnologías cloud.
                </p>
              </div>
              <div className="skills-section">
                <h3>Tecnologías y Herramientas</h3>
                <div className="skills-marquee">
                  <div className="skills-track">
                    <div className="skills-set">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="skill-item"
                          title={skill.name}
                          style={{ '--icon-animation': skill.animation }}
                        >
                          {skill.icon}
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                    {/* Duplicado para loop infinito */}
                    <div className="skills-set">
                      {skills.map((skill, index) => (
                        <div
                          key={`dup-${index}`}
                          className="skill-item"
                          title={skill.name}
                          style={{ '--icon-animation': skill.animation }}
                        >
                          {skill.icon}
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE + PROJECTS - Segunda página */}
      <section id="experience" className="content-section">
        <div className="section-container">
          {/* Experiencia */}
          <div className="experience-grid">
            {/* INFONERC */}
            <div className="experience-card">
              <div className="exp-icon">
                <FaLaravel />
              </div>
              <div className="exp-content">
                <div className="exp-header">
                  <h3>Desarrollador Full Stack</h3>
                  <span className="exp-date">2025 - Presente</span>
                </div>
                <h4>Infonerc</h4>
                <p>
                  Desarrollo y reimplementación de sistema web para alquiler y venta de
                  vehículos utilizando Laravel 12, Inertia y Vue 3 con PostgreSQL.
                </p>
              </div>
            </div>

            {/* SAETA */}
            <div className="experience-card">
              <div className="exp-icon">
                <FaReact />
              </div>
              <div className="exp-content">
                <div className="exp-header">
                  <h3>Desarrollador Full Stack</h3>
                  <span className="exp-date">2025</span>
                </div>
                <h4>SAETA</h4>
                <p>
                  Desarrollo de módulos de salidas de almacén con validación de stock por
                  lotes y series, control de roles y permisos usando Laravel, React y
                  PostgreSQL.
                </p>
              </div>
            </div>

            {/* PROYECTO UNIVERSITARIO */}
            <div className="experience-card">
              <div className="exp-icon">
                <FaAngular />
              </div>
              <div className="exp-content">
                <div className="exp-header">
                  <h3>Proyecto Universitario</h3>
                  <span className="exp-date">2024</span>
                </div>
                <h4>Desarrollo de Software</h4>
                <p>
                  Desarrollo de sistema web de gestión hotelera basado en API REST con
                  Spring Boot, Angular 16, MySQL y seguridad con Spring Security y JWT.
                </p>
              </div>
            </div>
          </div>

          {/* Proyectos */}
          <div id="projects" className="projects-block">
            <h2 className="section-title">
              <span className="title-accent"></span>
              Mis Proyectos
            </h2>
            <div className="projects-grid">
              {visibleProjects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <button className="btn-view">Ver proyecto</button>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-icons">
                      {project.techs}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {projects.length > 4 && (
              <div className="projects-btn-container">
                <button
                  className="btn-ver-mas"
                  onClick={() => setShowAllProjects(!showAllProjects)}
                >
                  {showAllProjects ? "Ver menos" : "Ver más proyectos"}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Jeyson<span>.dev</span></h3>
            <p>Desarrollador Full Stack</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/jeysonlee" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/jeysonlee" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:jsndlgl@gmail.com">
              <FaEnvelope />
            </a>
            <a  href="https://wa.me/51929106759" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Jeyson. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
