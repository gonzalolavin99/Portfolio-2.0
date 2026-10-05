export type Lang = 'es' | 'en'
export type Text = { es: string; en: string }

export const links = {
  email: 'gonzalolavin99@gmail.com',
  phone: '+56 9 9236 3770',
  whatsapp: 'https://wa.me/56992363770',
  github: 'https://github.com/gonzalolavin99',
  linkedin: 'https://www.linkedin.com/in/gonzalo-lavin-cordova',
  cv: '/CV_Gonzalo_Lavin_Cordova.pdf',
}

export const ui = {
  nav: {
    about: { es: 'Perfil', en: 'About' },
    experience: { es: 'Experiencia', en: 'Experience' },
    work: { es: 'Proyectos', en: 'Work' },
    stack: { es: 'Stack', en: 'Stack' },
    contact: { es: 'Contacto', en: 'Contact' },
  },
  hero: {
    role: { es: 'Ingeniero de Software', en: 'Software Engineer' },
    kicker: { es: 'Full stack · Cloud · IA aplicada', en: 'Full stack · Cloud · Applied AI' },
    lede: {
      es: 'Construyo y opero aplicaciones web en producción, desde el prototipo hasta el monitoreo a las 3 a.m. Hoy en Switch S.A., llevando video, IoT e IA a usuarios reales.',
      en: 'I build and run production web apps, from the first prototype to the 3 a.m. alert. Currently at Switch S.A., shipping video, IoT and AI to real users.',
    },
    location: { es: 'Santiago, Chile — remoto', en: 'Santiago, Chile — remote' },
    status: { es: 'Abierto a nuevos desafíos', en: 'Open to new roles' },
    scroll: { es: 'Desliza', en: 'Scroll' },
    cta: { es: 'Escríbeme', en: 'Get in touch' },
    cv: { es: 'Descargar CV', en: 'Download CV' },
  },
  about: {
    label: { es: 'Perfil', en: 'About' },
    title: { es: 'Software que se sostiene en producción.', en: 'Software that holds up in production.' },
    p1: {
      es: 'Soy ingeniero de software full stack con casi tres años construyendo productos con usuarios reales. Trabajo en React, TypeScript y Next.js sobre backends en Node.js y Python, con PostgreSQL, MySQL y DynamoDB, desplegado en AWS con contenedores y CI/CD.',
      en: 'I’m a full stack software engineer with almost three years building products people actually use. I work in React, TypeScript and Next.js on top of Node.js and Python backends, with PostgreSQL, MySQL and DynamoDB, deployed on AWS with containers and CI/CD.',
    },
    p2: {
      es: 'He llevado IA a producción: un chatbot multi-tenant con RAG, agentes de voz con LLMs y asistentes multicanal. Me importa lo que pasa después del deploy — pruebas, observabilidad, seguridad desde el diseño y runbooks que cualquiera del equipo pueda seguir.',
      en: 'I’ve taken AI to production: a multi-tenant RAG chatbot, LLM voice agents and multichannel assistants. I care about what happens after the deploy — tests, observability, security by design and runbooks anyone on the team can follow.',
    },
    p3: {
      es: 'Uso Claude Code a diario para acelerar entregas sin bajar el estándar de ingeniería.',
      en: 'I use Claude Code daily to ship faster without lowering the engineering bar.',
    },
    stats: [
      { value: '~3', label: { es: 'años en producción', en: 'years in production' } },
      { value: '60%+', label: { es: 'consultas de soporte automatizadas', en: 'support queries automated' } },
      { value: '−40%', label: { es: 'tiempo de validación de sesiones', en: 'session validation time' } },
      { value: '70%', label: { es: 'cobertura mínima exigida en CI', en: 'minimum test coverage gated in CI' } },
    ],
  },
  experience: {
    label: { es: 'Experiencia', en: 'Experience' },
    title: { es: 'Dónde he estado construyendo.', en: 'Where I’ve been building.' },
    present: { es: 'Presente', en: 'Present' },
    projects: { es: 'proyectos', en: 'projects' },
  },
  work: {
    label: { es: 'Proyectos', en: 'Selected work' },
    title: { es: 'Cosas que he llevado a producción.', en: 'Things I’ve shipped.' },
    visit: { es: 'Visitar', en: 'Visit' },
    code: { es: 'Código', en: 'Code' },
    internal: { es: 'Producto interno', en: 'Internal product' },
    archive: { es: 'Archivo', en: 'Archive' },
  },
  stack: {
    label: { es: 'Stack', en: 'Stack' },
    title: { es: 'Herramientas con las que trabajo a diario.', en: 'Tools I reach for every day.' },
  },
  contact: {
    label: { es: 'Contacto', en: 'Contact' },
    title: { es: 'Hablemos', en: 'Let’s talk' },
    lede: {
      es: '¿Tienes un producto que construir o un equipo que necesita manos? Respondo en menos de 24 horas.',
      en: 'Got a product to build or a team that needs hands? I usually reply within a day.',
    },
    copy: { es: 'Copiar', en: 'Copy' },
    copied: { es: 'Copiado', en: 'Copied' },
    name: { es: 'Nombre', en: 'Name' },
    email: { es: 'Email', en: 'Email' },
    company: { es: 'Empresa (opcional)', en: 'Company (optional)' },
    phone: { es: 'Teléfono', en: 'Phone' },
    message: { es: 'Cuéntame sobre el proyecto', en: 'Tell me about the project' },
    send: { es: 'Enviar mensaje', en: 'Send message' },
    sending: { es: 'Enviando…', en: 'Sending…' },
    success: { es: 'Mensaje enviado. Te respondo pronto.', en: 'Message sent. I’ll get back to you soon.' },
    error: {
      es: 'No se pudo enviar. Escríbeme directo por email o WhatsApp.',
      en: 'Couldn’t send it. Reach me directly by email or WhatsApp.',
    },
  },
  footer: {
    local: { es: 'Hora local', en: 'Local time' },
    top: { es: 'Volver arriba', en: 'Back to top' },
    made: { es: 'Diseñado y desarrollado por Gonzalo Lavín', en: 'Designed & built by Gonzalo Lavín' },
  },
}

export interface SubProject {
  name: string
  context: Text
  stack: string
  bullets: Text[]
}

export interface Job {
  role: Text
  company: string
  location: string
  start: Text
  end?: Text
  summary?: Text
  bullets?: Text[]
  projects?: SubProject[]
}

export const jobs: Job[] = [
  {
    role: { es: 'Ingeniero de Software', en: 'Software Engineer' },
    company: 'Switch S.A.',
    location: 'Santiago, Chile',
    start: { es: 'Oct 2024', en: 'Oct 2024' },
    summary: {
      es: 'Producto, plataforma e IA para clientes de salud, utilities y contact center.',
      en: 'Product, platform and AI work for healthcare, utilities and contact-center clients.',
    },
    projects: [
      {
        name: 'FlexVideo Essbio',
        context: { es: 'Videoatención en tótems de sucursal', en: 'Video service on in-branch kiosks' },
        stack: 'Next.js · Node/TS · AWS SQS · PostgreSQL',
        bullets: [
          {
            es: 'Lideré la modernización de la plataforma: nuevo frontend en Next.js 14 + TypeScript sobre 3 microservicios Node/TS (REST con Prisma/PostgreSQL, tiempo real con WebSockets y cola SQS, video con OpenVidu).',
            en: 'Led the platform modernization: a new Next.js 14 + TypeScript frontend over 3 Node/TS microservices (REST with Prisma/PostgreSQL, real-time via WebSockets and SQS, video with OpenVidu).',
          },
          {
            es: 'Instalé prácticas DevOps: GitLab CI/CD en los 3 repos, imágenes Docker multi-stage, entorno local con Docker Compose, migración a Node 22 y runbooks de despliegue.',
            en: 'Set up DevOps practice: GitLab CI/CD across all 3 repos, multi-stage Docker images, a reproducible Docker Compose setup, a Node 22 migration and deployment runbooks.',
          },
          {
            es: 'Resolví un incidente de llamadas perdidas en SQS (ambientes compartiendo cola) aislando colas por ambiente, con timeouts y logs de arranque. Monitoreo con CloudWatch y Grafana.',
            en: 'Fixed a production incident of dropped calls in SQS (environments sharing a queue) by isolating queues per environment, adding timeouts and boot logs. Monitoring with CloudWatch and Grafana.',
          },
          {
            es: 'Pentesting OWASP WSTG y pruebas de carga, estrés y failover para medir latencias p95/p99 antes de salir a producción.',
            en: 'Ran OWASP WSTG pentesting plus load, stress and failover tests to measure p95/p99 latency before go-live.',
          },
        ],
      },
      {
        name: 'FlexTrack',
        context: { es: 'Seguimiento de pacientes en pabellón con IoT/BLE', en: 'Real-time patient tracking in surgical wards via IoT/BLE' },
        stack: 'Next.js · AWS IoT Core · Lambda · Redis',
        bullets: [
          {
            es: 'Diseñé la ingesta serverless: gateways BLE publican por MQTT con certificados X.509 a IoT Core, y Lambdas filtran señales, calculan la zona del paciente y persisten eventos.',
            en: 'Designed the serverless ingestion: BLE gateways publish over MQTT with X.509 certs to IoT Core, and Lambdas filter signals, resolve the patient’s zone and persist events.',
          },
          {
            es: 'Construí el dashboard (mapa del hospital, timeline por paciente, métricas) con Express/TS, Socket.IO y Redis. En producción en una clínica.',
            en: 'Built the dashboard (hospital map, per-patient timeline, metrics) with Express/TS, Socket.IO and Redis. Live in a clinic.',
          },
        ],
      },
      {
        name: 'FlexAgent IA',
        context: { es: 'Agentes de voz para llamadas entrantes y salientes', en: 'Voice agents for inbound and outbound calls' },
        stack: 'Python · FastAPI · LiveKit · LangGraph · React 19',
        bullets: [
          {
            es: 'Agentes de voz sobre SIP y LiveKit con STT/TTS (Groq, OpenAI, ElevenLabs) y flujos LangGraph para recepción y cobranza.',
            en: 'Voice agents over SIP and LiveKit with STT/TTS (Groq, OpenAI, ElevenLabs) and LangGraph flows for reception and collections.',
          },
          {
            es: 'Microservicios FastAPI (orquestador, discador, inbound, IAM con JWT RS256) y dashboard en React 19; pytest con 70% de cobertura mínima.',
            en: 'FastAPI microservices (orchestrator, dialer, inbound, IAM with RS256 JWT) and a React 19 dashboard; pytest with a 70% coverage gate.',
          },
        ],
      },
      {
        name: 'FlexGPT · FlexAgent CX',
        context: { es: 'IA conversacional y contact center omnicanal', en: 'Conversational AI and omnichannel contact center' },
        stack: 'RAG · ChromaDB · React · IBM Watson',
        bullets: [
          {
            es: 'Diseñé FlexGPT, chatbot multi-tenant con RAG (embeddings + ChromaDB), como web app y widget embebible, en producción para clientes.',
            en: 'Designed FlexGPT, a multi-tenant RAG chatbot (embeddings + ChromaDB), shipped as a web app and embeddable widget for clients.',
          },
          {
            es: 'Capa web en React sobre ViciDial que unifica voz, correo, chat y WhatsApp. Asistentes con IBM Watson que automatizan 60%+ de las consultas.',
            en: 'A React layer over ViciDial unifying voice, email, chat and WhatsApp. IBM Watson assistants automating 60%+ of recurring queries.',
          },
        ],
      },
      {
        name: 'Auth · SAAM · WyseFlow',
        context: { es: 'Auth, gestor documental y ERP', en: 'Auth, document storage and ERP' },
        stack: 'Node.js · OAuth 2.0 · S3 · DynamoDB',
        bullets: [
          {
            es: 'Middleware centralizado de autenticación (OAuth 2.0, Redis) que redujo 40% el tiempo de validación de sesiones.',
            en: 'Centralized auth middleware (OAuth 2.0, Redis) that cut session validation time by 40%.',
          },
          {
            es: 'Gestor documental SAAM en S3 + DynamoDB con claves modeladas según patrones de consulta, e interfaces del ERP WyseFlow en React.',
            en: 'SAAM document manager on S3 + DynamoDB with keys modeled around access patterns, plus WyseFlow ERP interfaces in React.',
          },
        ],
      },
    ],
  },
  {
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    company: 'MonteBlanco SPA',
    location: 'Santiago, Chile',
    start: { es: 'Ago 2024', en: 'Aug 2024' },
    end: { es: 'Sep 2024', en: 'Sep 2024' },
    bullets: [
      {
        es: 'Módulos de un ERP de bodegas e inventario con React/TypeScript y backend NestJS bajo Clean Architecture, con esquemas PostgreSQL optimizados.',
        en: 'Built modules for a warehouse & inventory ERP with React/TypeScript and a NestJS backend following Clean Architecture, on tuned PostgreSQL schemas.',
      },
    ],
  },
  {
    role: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
    company: 'JrMichelson SPA',
    location: 'Santiago, Chile',
    start: { es: 'Ene 2024', en: 'Jan 2024' },
    end: { es: 'Jul 2024', en: 'Jul 2024' },
    bullets: [
      {
        es: 'Llevé a producción una plataforma transaccional de rifas online (React, Node.js/Express) con pagos integrados vía Khipu.',
        en: 'Shipped a transactional online raffle platform (React, Node.js/Express) with Khipu payments built in.',
      },
    ],
  },
]

export interface Project {
  name: string
  year: string
  kind: Text
  description: Text
  stack: string[]
  live?: string
  code?: string
}

export const projects: Project[] = [
  {
    name: 'TherapyHub',
    year: '2025',
    kind: { es: 'SaaS propio · Salud', en: 'Own SaaS · Healthcare' },
    description: {
      es: 'SaaS multi-tenant para fonoaudiólogos y psicólogos: roles, invitaciones y planes, datos clínicos protegidos con Row Level Security, análisis clínico asistido por LLM con salida validada, boletas en PDF y auditoría.',
      en: 'Multi-tenant SaaS for speech therapists and psychologists: roles, invites and plans, clinical data locked down with Row Level Security, LLM-assisted clinical analysis with validated output, PDF invoices and audit logs.',
    },
    stack: ['React 18', 'TypeScript', 'Supabase', 'PostgreSQL', 'LLM'],
    live: 'https://speech-therapy-hub.vercel.app',
  },
  {
    name: 'FlexTrack',
    year: '2025',
    kind: { es: 'IoT · Salud', en: 'IoT · Healthcare' },
    description: {
      es: 'Seguimiento en tiempo real de pacientes en pabellón. Gateways BLE → MQTT → AWS IoT Core → Lambda, y un dashboard en vivo con mapa del hospital y timeline por paciente.',
      en: 'Real-time patient tracking across surgical wards. BLE gateways → MQTT → AWS IoT Core → Lambda, and a live dashboard with a hospital map and per-patient timeline.',
    },
    stack: ['Next.js', 'AWS IoT Core', 'Lambda', 'Socket.IO', 'Redis'],
  },
  {
    name: 'FlexAgent IA',
    year: '2025',
    kind: { es: 'IA de voz', en: 'Voice AI' },
    description: {
      es: 'Agentes telefónicos que atienden y llaman: STT/TTS, LLMs y grafos de LangGraph sobre LiveKit y SIP, con discador de campañas e IAM propio.',
      en: 'Phone agents that answer and dial out: STT/TTS, LLMs and LangGraph flows over LiveKit and SIP, with a campaign dialer and in-house IAM.',
    },
    stack: ['Python', 'FastAPI', 'LiveKit', 'LangGraph', 'React 19'],
  },
  {
    name: 'FlexVideo Essbio',
    year: '2024',
    kind: { es: 'Video · Tiempo real', en: 'Video · Real-time' },
    description: {
      es: 'Videoatención en tótems de sucursal para una sanitaria. Frontend nuevo, wallboard en vivo, CI/CD, observabilidad y pruebas de carga antes de producción.',
      en: 'Video customer service on in-branch kiosks for a water utility. New frontend, live wallboard, CI/CD, observability and load testing before launch.',
    },
    stack: ['Next.js 14', 'Node/TS', 'AWS SQS', 'OpenVidu', 'Grafana'],
  },
  {
    name: 'FlexGPT',
    year: '2024',
    kind: { es: 'IA conversacional', en: 'Conversational AI' },
    description: {
      es: 'Chatbot multi-tenant con RAG, como aplicación web y widget embebible. Iteración de prompts y validación de respuestas para reducir alucinaciones.',
      en: 'Multi-tenant RAG chatbot, as a web app and embeddable widget. Prompt iteration and answer validation to keep hallucinations down.',
    },
    stack: ['RAG', 'Embeddings', 'ChromaDB', 'React', 'Node.js'],
  },
]

export const archive: { name: string; year: string; note: Text; href?: string }[] = [
  { name: 'Car Raffle', year: '2024', note: { es: 'Rifas online con pagos Khipu', en: 'Online raffles with Khipu payments' }, href: 'https://jr-michelson.vercel.app/' },
  { name: 'Marketplace', year: '2023', note: { es: 'E-commerce con auth JWT', en: 'E-commerce with JWT auth' }, href: 'https://front-marketplace.onrender.com/' },
]

export const stack: { group: Text; items: string[] }[] = [
  { group: { es: 'Frontend', en: 'Frontend' }, items: ['React 18/19', 'TypeScript', 'Next.js', 'TailwindCSS', 'Vite'] },
  { group: { es: 'Backend', en: 'Backend' }, items: ['Node.js', 'Express', 'NestJS', 'Python · FastAPI', 'Socket.IO', 'Prisma'] },
  { group: { es: 'Datos', en: 'Data' }, items: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Redis', 'Supabase · RLS'] },
  { group: { es: 'Cloud & DevOps', en: 'Cloud & DevOps' }, items: ['AWS Lambda · S3 · SQS · IoT Core', 'GitLab CI/CD', 'Docker', 'Nginx', 'Vercel'] },
  { group: { es: 'IA', en: 'AI' }, items: ['Claude Code', 'OpenAI · Groq', 'RAG · ChromaDB', 'LangGraph', 'LiveKit · ElevenLabs'] },
  { group: { es: 'Calidad', en: 'Quality' }, items: ['Jest', 'Playwright', 'pytest', 'OWASP WSTG', 'OAuth 2.0 · JWT', 'Grafana · CloudWatch'] },
]

export const marquee = ['React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'AWS', 'PostgreSQL', 'Docker', 'LangGraph', 'LiveKit', 'Redis', 'FastAPI']
