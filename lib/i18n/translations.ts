export const translations = {
  en: {
    meta: {
      title: "Soledad Roa — Full-Stack Developer & AI Engineer",
      description:
        "Portfolio of Soledad Roa — full-stack developer & AI engineer and Systems Engineering student building thoughtful, scalable web applications and intelligent systems.",
    },
    nav: { about: "About", work: "Work", contact: "Contact" },
    hero: {
      kicker: "Full-Stack Developer & AI Engineer — Argentina",
      tagline:
        "I build thoughtful, scalable web applications and AI-powered systems — from front-end interfaces to the models behind them.",
      cta: "Get in touch",
    },
    about: {
      label: "About",
      heading: "About Me",
      body: [
        `I'm Soledad Roa, a full-stack developer based in Argentina, currently completing my degree in Systems Engineering. My core stack spans React, NestJS, Java/Spring Boot, and Python/FastAPI — and I'm actively expanding into AI engineering, building agents and LLM-powered applications (most recently, a ReAct-pattern travel planning agent using NestJS and Ollama).`,
        `I like projects where the front-end, back-end, and — increasingly — the AI layer all have to work together cleanly. Open to full-stack or AI engineering roles, or interesting freelance work.`,
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
      "movie-review-classifier": {
        desc: "A binary sentiment classifier for movie reviews, fine-tuning a pretrained DistilBERT model on the IMDB dataset to predict positive or negative sentiment.",
      },
      landcap: {
        chip: "In production",
        desc: "A self-service platform that uses AI to generate professional websites from photos or an Instagram profile — no code and no manual work required.",
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
      title: "Soledad Roa — Desarrolladora Full-Stack & AI Engineer",
      description:
        "Portfolio de Soledad Roa — desarrolladora full-stack & AI engineer y estudiante de Ingeniería en Sistemas, construyendo aplicaciones web prolijas y escalables, y sistemas inteligentes.",
    },
    nav: { about: "Sobre mí", work: "Proyectos", contact: "Contacto" },
    hero: {
      kicker: "Desarrolladora Full-Stack & AI Engineer — Argentina",
      tagline:
        "Construyo aplicaciones web prolijas y escalables, y sistemas potenciados por IA — desde interfaces de front-end hasta los modelos que las sostienen.",
      cta: "Contactarme",
    },
    about: {
      label: "Sobre mí",
      heading: "Quién soy",
      body: [
        `Soy Soledad Roa, desarrolladora full-stack radicada en Argentina, cursando actualmente la carrera de Ingeniería en Sistemas. Mi stack principal incluye React, NestJS, Java/Spring Boot y Python/FastAPI — y estoy ampliando activamente mi perfil hacia AI engineering, construyendo agentes y aplicaciones potenciadas por LLMs (el más reciente, un agente de planificación de viajes con patrón ReAct usando NestJS y Ollama).`,
        `Me gustan los proyectos donde el front-end, el back-end y, cada vez más, la capa de IA tienen que funcionar en conjunto de forma prolija. Abierta a roles full-stack o de AI engineering, o a freelance interesante.`,
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
      "movie-review-classifier": {
        desc: "Un clasificador de sentimiento binario para reseñas de películas, que ajusta un modelo DistilBERT preentrenado sobre el dataset de IMDB para predecir sentimiento positivo o negativo.",
      },
      landcap: {
        chip: "En producción",
        desc: "Plataforma self-service que genera sitios web profesionales con IA a partir de fotos o Instagram, sin código ni intervención manual.",
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
