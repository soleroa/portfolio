export const translations = {
  en: {
    meta: {
      title: "Soledad Roa — Full-Stack Developer",
      description:
        "Portfolio of Soledad Roa — full-stack developer and Systems Engineering student building thoughtful, scalable web applications.",
    },
    nav: { about: "About", work: "Work", contact: "Contact" },
    hero: {
      kicker: "Full-stack developer — Argentina",
      tagline:
        "I build thoughtful, scalable web applications — from front-end interfaces to the systems behind them.",
      cta: "Get in touch",
    },
    about: {
      label: "About",
      heading: "About Me",
      body: [
        `I'm Soledad Roa, a full-stack developer and Systems Engineering student with a solid foundation across front-end and back-end technologies. I enjoy building scalable, efficient applications, combining modern frameworks and tools to deliver high-quality solutions.`,
        `Beyond HTML, CSS, JavaScript, and Angular, I'm actively expanding into machine learning — an area I'm genuinely passionate about.`,
        `I'm driven by solving complex problems, improving workflows, and contributing to meaningful projects. If you're looking for a versatile, committed developer for your team, let's talk.`,
      ],
      resumeBtn: "My Resume",
      resumeEnglish: "English",
      resumeSpanish: "Español",
    },
    work: {
      label: "Work",
      heading: "Selected Work",
      visit: "Visit site",
    },
    projects: {
      "order-summary": {
        desc: "A front-end challenge focused on semantic HTML, responsive layouts with Flexbox, and accessible UI patterns — built mobile-first with SCSS and bundled with Parcel.",
      },
      landcap: {
        chip: "In development — private",
        desc: "A project currently in development. More details will be shared once it's ready to go public.",
      },
    },
    contact: {
      label: "Contact",
      heading: "Let's Talk",
      body: "Have an interesting project, a job opportunity, or just want to say hi? My inbox is always open — I'll get back to you as soon as I can.",
    },
  },
  es: {
    meta: {
      title: "Soledad Roa — Desarrolladora Full-Stack",
      description:
        "Portfolio de Soledad Roa — desarrolladora full-stack y estudiante de Ingeniería en Sistemas, construyendo aplicaciones web prolijas y escalables.",
    },
    nav: { about: "Sobre mí", work: "Proyectos", contact: "Contacto" },
    hero: {
      kicker: "Desarrolladora full-stack — Argentina",
      tagline:
        "Construyo aplicaciones web prolijas y escalables — desde interfaces de front-end hasta los sistemas que las sostienen.",
      cta: "Contactarme",
    },
    about: {
      label: "Sobre mí",
      heading: "Sobre mí",
      body: [
        `Soy Soledad Roa, desarrolladora full-stack y estudiante de Ingeniería en Sistemas, con una base sólida tanto en front-end como en back-end. Disfruto construir aplicaciones escalables y eficientes, combinando frameworks y herramientas modernas para ofrecer soluciones de calidad.`,
        `Además de HTML, CSS, JavaScript y Angular, estoy ampliando mis conocimientos en machine learning, un área que me apasiona.`,
        `Me motiva resolver problemas complejos, optimizar procesos y aportar a proyectos con sentido. Si buscás una desarrolladora versátil y comprometida para tu equipo, hablemos.`,
      ],
      resumeBtn: "Mi CV",
      resumeEnglish: "Inglés",
      resumeSpanish: "Español",
    },
    work: {
      label: "Proyectos",
      heading: "Proyectos Seleccionados",
      visit: "Ver sitio",
    },
    projects: {
      "order-summary": {
        desc: "Un desafío de front-end enfocado en HTML semántico, layouts responsive con Flexbox y patrones de UI accesibles — construido mobile-first con SCSS y empaquetado con Parcel.",
      },
      landcap: {
        chip: "En desarrollo — privado",
        desc: "Un proyecto actualmente en desarrollo. Voy a compartir más detalles cuando esté listo para hacerse público.",
      },
    },
    contact: {
      label: "Contacto",
      heading: "Hablemos",
      body: "¿Tenés un proyecto interesante, una propuesta laboral, o simplemente querés saludar? Mi bandeja está siempre abierta — te voy a responder apenas pueda.",
    },
  },
} satisfies Record<Lang, unknown>;

export type Lang = "en" | "es";
export type Translation = (typeof translations)["en"];
export type ProjectId = keyof Translation["projects"];
