import { useState, useMemo } from 'react'
import {
  ThemeProvider, createTheme, CssBaseline,
  Box, Container, Stack, Grid, Typography,
  AppBar, Toolbar, Button, IconButton,
  Card, CardContent, CardMedia,
  Chip, Avatar, Paper, Divider,
  Drawer, List, ListItem, ListItemButton, ListItemText,
   Fade, Zoom
} from '@mui/material'
import { Menu, Close, Visibility } from '@mui/icons-material'
import {
  FaReact, FaVuejs, FaLaravel, FaGithub, FaLinkedin, FaEnvelope,
  FaNodeJs, FaGitAlt, FaSun, FaMoon, FaAngular, FaPython, FaWhatsapp
} from 'react-icons/fa'
import {
  SiSpringboot, SiMysql, SiOpencv, SiTensorflow, SiJsonwebtokens,
  SiRender, SiPostgresql, SiFirebase, SiIonic, SiVite
} from 'react-icons/si'
import './App.css'

export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [darkMode, setDarkMode] = useState(true)


  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: '#6366f1' },
      background: {
        default: darkMode ? '#0a0a0f' : '#f8fafc',
        paper: darkMode ? '#12121a' : '#ffffff',
      },
    },
    typography: { fontFamily: "'Inter', system-ui, sans-serif" },
    components: {
      MuiCard: { styleOverrides: { root: { borderRadius: 20, transition: 'all 0.3s' } } },
      MuiButton: { styleOverrides: { root: { borderRadius: 12, textTransform: 'none' } } },
    }
  }), [darkMode])

  const gradient = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)'

  const projects = [
    { id: 1, title: "Sistema Comercial de Alquiler y Venta de Vehículos (Infonerc)", description: "Sistema web monolítico desarrollado con Laravel e Inertia para la gestión de alquiler y venta de vehículos.", image: "/images/vehiculos.png", techs: [<FaLaravel key="l" />, <FaVuejs key="v" />, <SiPostgresql key="p" />] },
    { id: 2, title: "Sistema de Gestión de Almacén (SAETA)", description: "Sistema web para la gestión de almacén. Desarrollo del módulo de salidas de mercadería con validación de stock.", image: "/images/almacen.png", techs: [<FaLaravel key="l" />, <FaReact key="r" />, <SiPostgresql key="p" />] },
    { id: 3, title: "Sistema de Gestión Hotelera", description: "Sistema web para la gestión de habitaciones, reservas y huéspedes con API REST.", image: "/images/hotel.png", techs: [<FaAngular key="a" />, <SiSpringboot key="s" />, <SiMysql key="m" />] },
    { id: 4, title: "Aplicación Agrícola Offline", description: "Aplicación móvil para productores agrícolas con funcionamiento offline y sincronización en la nube.", image: "/images/cacao.png", techs: [<SiIonic key="i" />, <SiFirebase key="f" />] },
    { id: 5, title: "Reconocimiento de Monedas con Visión Artificial", description: "Proyecto de reconocimiento de monedas mediante procesamiento de imágenes.", image: "/images/monedas.png", techs: [<FaPython key="p" />, <SiOpencv key="o" />, <SiTensorflow key="t" />] },
    { id: 6, title: "Sistema de Seguridad y Control de Accesos", description: "Sistema web orientado a la implementación de seguridad y control de accesos.", image: "/images/seguridad.png", techs: [<SiSpringboot key="s" />, <FaAngular key="a" />, <SiJsonwebtokens key="j" />] },
  ]

  const experiences = [
    { icon: <FaLaravel />, title: "Desarrollador Full Stack", company: "Infonerc", date: "2025 - Presente", description: "Desarrollo y reimplementación de sistema web para alquiler y venta de vehículos con Laravel 12, Inertia y Vue 3." },
    { icon: <FaReact />, title: "Desarrollador Full Stack", company: "SAETA", date: "2025", description: "Desarrollo de módulos de salidas de almacén con validación de stock por lotes y series." },
    { icon: <FaAngular />, title: "Proyecto Universitario", company: "Desarrollo de Software", date: "2024", description: "Sistema web de gestión hotelera con Spring Boot, Angular 16 y Spring Security." },
  ]

  const skills = [
    { icon: <FaReact />, name: "React", color: "#61DAFB" },
    { icon: <FaVuejs />, name: "Vue 3", color: "#4FC08D" },
    { icon: <FaAngular />, name: "Angular", color: "#DD0031" },
    { icon: <SiSpringboot />, name: "Spring Boot", color: "#6DB33F" },
    { icon: <FaLaravel />, name: "Laravel", color: "#FF2D20" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
    { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
    { icon: <SiVite />, name: "Vite", color: "#646CFF" },
    { icon: <SiIonic />, name: "Ionic", color: "#3880FF" },
    { icon: <FaPython />, name: "Python", color: "#3776AB" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
    { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
    { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
    { icon: <SiRender />, name: "Render", color: "#46E3B7" },
  ]

  const contacts = [
    { icon: <FaGithub />, label: "jeysonlee", href: "https://github.com/jeysonlee" },
    { icon: <FaLinkedin />, label: "jeysonlee", href: "https://linkedin.com/in/jeysonlee/" },
    { icon: <FaEnvelope />, label: "jsndlgl@gmail.com", href: "mailto:jsndlgl@gmail.com" },
    { icon: <FaWhatsapp />, label: "+51929106759", href: "https://wa.me/51929106759" },
  ]

  const navLinks = ["Inicio", "Experiencia", "Proyectos"]

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* NAVBAR */}
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'rgba(10,10,15,0.8)', backdropFilter: 'blur(20px)', borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h5" fontWeight={700} sx={{ background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Jeyson.dev
            </Typography>
            <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navLinks.map(link => (
                <Button key={link} href={`#${link.toLowerCase()}`} sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                  {link}
                </Button>
              ))}
            </Stack>
            <Stack direction="row" spacing={1}>
              <IconButton onClick={() => setDarkMode(!darkMode)} sx={{ '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'rotate(180deg)' }, transition: 'all 0.3s' }}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </IconButton>
              
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>



      {/* HERO */}
    <Box id="inicio" component="section" sx={{ pt: 20, pb: 18 }}>
    <Container maxWidth="xl">
      <Grid container spacing={10}>

        {/* COLUMNA IZQUIERDA — FOTO + CONTACTOS */}
        <Grid item xs={12} md={4}>
          <Grid
            container
            direction="column"
            spacing={4}
            alignItems="center"
          >
            {/* FOTO */}
            <Grid item>
              <Box className="profile-wrapper">
                <Box className="profile-glow" />
                <Box className="profile-photo">
                  <Avatar
                    src="/images/carnet.png"
                    alt="Jeyson"
                    sx={{
                      width: { xs: 200, md: 280 },
                      height: { xs: 200, md: 280 }
                    }}
                  />
                </Box>
              </Box>
            </Grid>

            {/* CONTACTOS */}
            <Grid item>
              <Grid container spacing={3} justifyContent="center">
                {contacts.map((c, i) => (
                  <Grid item key={i}>
                    <Box textAlign="center">
                      <IconButton
                        href={c.href}
                        target="_blank"
                        className="contact-btn"
                        sx={{
                          width: 50,
                          height: 50,
                          border: 1,
                          borderColor: 'divider',
                          fontSize: '1.8rem',
                          transition: 'all 0.3s',
                          '&:hover': {
                            background: gradient,
                            color: 'white',
                            transform: 'translateY(-5px)',
                            boxShadow:
                              '0 10px 30px rgba(99,102,241,0.4)'
                          }
                        }}
                      >
                        {c.icon}
                      </IconButton>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="block"
                        fontSize='1rem'
                      >
                        {c.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* COLUMNA DERECHA — INFO */}
        <Grid item xs={12} md={8}>
          <Fade in timeout={1200}>
            <Box sx={{ maxWidth: 720 }}>


              <Typography
                variant="h2"
                fontWeight={800}
                sx={{
                  fontSize: { xs: '2rem', md: '3rem' },
                  mb: 0.5
                }}
              >
                Hola, soy
              </Typography>
              <Typography
                variant="h2"
                fontWeight={800}
                sx={{
                  fontSize: { xs: '2.2rem', md: '3.5rem' },
                  background: gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 0.5
                }}
              >
                Jeyson del Aguila
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.2rem', md: '1.8rem' },
                  background: gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3
                }}
              >
                Desarrollador Full Stack
              </Typography>
              <Chip
                label="Disponible"
                color="success"
                size="small"
                sx={{ mb: 2 }}
              />
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  bgcolor: 'rgba(255,255,255,0.03)',
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 4
                }}
              >
                <Typography variant="h4" color="primary" sx={{ mb: 1 }}>
                  Sobre mí
                </Typography>

                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  Soy un desarrollador de software apasionado por crear soluciones web modernas, eficientes y escalables. 
                  Con experiencia en frontend, backend y aplicaciones móviles, transformo ideas en productos digitales 
                  funcionales. Me especializo en React, Vue, Laravel y tecnologías cloud.
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
                  Tecnologías
                </Typography>

                <Box className="skills-marquee" sx={{ overflow: 'hidden' }}>
                  <Box className="skills-track" sx={{ display: 'flex', gap: 1.8, width: 'max-content' }}>
                    {[...skills, ...skills].map((s, i) => (
                      <Chip
                        key={i}
                        className="skill-chip"
      
                        icon={
                          <Box
                            className="skill-icon"
                            sx={{
                              color: s.color,
                              fontSize: '1.5rem',
                              display: 'flex'
                            }}
                          >
                            {s.icon}
                          </Box>
                        }
                        label={s.name}
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Fade>
        </Grid>

      </Grid>
    </Container>
    </Box>

      {/* EXPERIENCE */}
      <Box id="experiencia" component="section" sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl" >
          <Typography variant="h4" fontWeight={700} sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 4, height: 30, background: gradient, borderRadius: 1 }} /> Experiencia
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3
          }}>
            {experiences.map((exp, i) => (
              <Zoom in timeout={500 + i * 200} key={i}>
                <Card elevation={0} sx={{ height: '100%', bgcolor: 'rgba(255,255,255,0.03)', border: 1, borderColor: 'divider', '&:hover': { borderColor: 'primary.main', transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' } }}>
                  <CardContent>
                    <Stack direction="row" spacing={2}>
                      <Box className="exp-icon" sx={{ width: 50, height: 50, minWidth: 50, background: gradient, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem' }}>
                        {exp.icon}
                      </Box>
                      <Box flex={1}>
                        <Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap={1}>
                          <Typography fontWeight={600}>{exp.title}</Typography>
                          <Chip label={exp.date} size="small" color="primary" variant="outlined" />
                        </Stack>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{exp.company}</Typography>
                        <Typography variant="body2" color="text.secondary">{exp.description}</Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Zoom>
            ))}
          </Box>
        </Container>
      </Box>

      {/* PROJECTS */}
      <Box id="proyectos" component="section" sx={{ py: 6 }}>
        <Container maxWidth="xl">
          <Typography variant="h4" fontWeight={700} sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 4, height: 30, background: gradient, borderRadius: 1 }} /> Mis Proyectos
          </Typography>
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3
          }}>
            {(showAllProjects ? projects : projects.slice(0, 4)).map((p, i) => (
              <Zoom in timeout={500 + i * 150} key={p.id}>
                <Card elevation={0} sx={{ height: '100%', bgcolor: 'rgba(255,255,255,0.03)', border: 1, borderColor: 'divider', overflow: 'hidden', '&:hover': { borderColor: 'primary.main', transform: 'translateY(-8px)', boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }, '&:hover .eye-icon': { opacity: 1, transform: 'scale(1)' }, '&:hover img': { transform: 'scale(1.1)' } }}>
                  <Box sx={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                    <CardMedia component="img" image={p.image} alt={p.title} sx={{ height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                    <IconButton
                      className="eye-icon"
                      sx={{
                        position: 'absolute',
                        bottom: 12,
                        right: 12,
                        bgcolor: 'rgba(255,255,255,0.95)',
                        color: 'primary.main',
                        opacity: 0,
                        transform: 'scale(0.8)',
                        transition: 'all 0.3s ease',
                        '&:hover': { bgcolor: 'white', transform: 'scale(1.1) !important' }
                      }}
                    >
                      <Visibility />
                    </IconButton>
                  </Box>
                  <CardContent>
                    <Typography fontWeight={600} sx={{ mb: 0.5 }}>{p.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {p.description}
                    </Typography>
                    <Stack direction="row" spacing={1.5} sx={{ color: 'primary.main', fontSize: '1.4rem' }}>
                      {p.techs.map((tech, idx) => (
                        <Box key={idx} className="tech-icon">{tech}</Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Zoom>
            ))}
          </Box>
          {projects.length > 4 && (
            <Stack alignItems="center" sx={{ mt: 4 }}>
              <Button variant="outlined" size="large" onClick={() => setShowAllProjects(!showAllProjects)} sx={{ px: 5, borderWidth: 2, '&:hover': { background: gradient, borderColor: 'transparent', color: 'white' } }}>
                {showAllProjects ? "Ver menos" : "Ver más proyectos"}
              </Button>
            </Stack>
          )}
        </Container>
      </Box>

      {/* FOOTER */}
      <Box component="footer" sx={{ py: 6, bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider' }}>
        <Container maxWidth="xl">
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={3}>
            <Box textAlign={{ xs: 'center', md: 'left' }}>
              <Typography variant="h6" sx={{ background: gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Jeyson.dev</Typography>
              <Typography variant="body2" color="text.secondary">Desarrollador Full Stack</Typography>
            </Box>
            <Stack direction="row" spacing={2}>
              {contacts.map((c, i) => (
                <IconButton key={i} href={c.href} target="_blank" sx={{ border: 1, borderColor: 'divider', '&:hover': { background: gradient, color: 'white' }, transition: 'all 0.3s' }}>
                  {c.icon}
                </IconButton>
              ))}
            </Stack>
          </Stack>
          <Typography variant="body2" color="text.secondary" textAlign="center" sx={{ mt: 4 }}>
            © {new Date().getFullYear()} Jeyson. Todos los derechos reservados.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
