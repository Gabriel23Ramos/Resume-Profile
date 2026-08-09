let currentLang = "pt";

const translations = {
  pt: {
    navAbout: "Sobre",
    navExp: "Experiência",
    navProjects: "Projetos",
    navContact: "Contato",
    heroBadge: "Disponível para novos desafios",
    titulo: 'Olá, eu sou <span class="accent-name">Gabriel Ramos</span>',
    cargo: "Desenvolvedor Full Stack",
    descricao: "Transformando ideias em experiências digitais memoráveis com código limpo e design intuitivo.",
    btnProjetos: 'Ver Projetos <i class="fas fa-arrow-right"></i>',
    btnContato: "Entrar em contato",
    sobreSub: "Quem sou eu",
    sobreTitulo: "Sobre mim",
    sobreTexto: "Sou formado em Análise e Desenvolvimento de Sistemas e estou focado em me tornar desenvolvedor. Apaixonado por tecnologia e design, busco sempre criar experiências digitais que unam estética e funcionalidade. Tenho facilidade em aprender novas ferramentas e foco total em entregar valor através do código.",
    statEdu: "Formação",
    statProj: "Projetos",
    statExp: "Estágio",
    factEduValue: "Análise e Desenvolvimento de Sistemas",
    factExpValue: "4 meses — DWC Consult",
    skillsTitulo: "Tecnologias & Ferramentas",
    idiomasTitulo: "Idiomas",
    langPt: "Português",
    langPtNivel: "nativo",
    langEn: "Inglês",
    langEnNivel: "fluente",
    expTitulo: "Experiência Profissional",
    exp2Empresa: "Professor de Inglês",
    exp2Date: "2024 — Atual",
    exp2Cargo: "Aulas particulares (2 anos)",
    exp2Texto: "Leciono inglês há 2 anos, o que me ajuda a ler documentações e códigos com mais fluência, entender materiais técnicos na fonte e me comunicar melhor em contextos internacionais — abrindo portas para atuar em projetos e equipes fora do Brasil.",
    expEmpresa: "DWC Consult",
    expCargo: "Estágio em Desenvolvimento (4 meses)",
    expTexto: "Atuação no desenvolvimento de soluções utilizando HTML, CSS e JavaScript, com foco na plataforma Fluig para automação de processos e criação de interfaces corporativas. Experiência focada em agilidade e entrega de componentes funcionais.",
    projSub: "Meu Portfólio",
    projetosTitulo: "Projetos em Destaque",
    proj1Titulo: "Ericka Ramos Nails",
    proj1Desc: "Site completo para o estúdio de unhas da minha irmã: agenda de horários com disponibilidade real por dia da semana, reserva automática direto no banco de dados (Supabase), painel administrativo protegido por PIN para gerenciar horários e reservas manuais, e integração com WhatsApp para confirmação.",
    proj1Btn: 'Ver Projeto <i class="fas fa-arrow-up-right-from-square"></i>',
    proj2Titulo: "Weather App",
    proj2Desc: "Previsão do tempo por cidade ou geolocalização, com dados em tempo real via API pública.",
    proj2Btn: 'Ver Projeto <i class="fas fa-arrow-up-right-from-square"></i>',
    proj3Titulo: "To-do List",
    proj3Desc: "Gerenciador de tarefas diárias, com foco em simplicidade e eficiência.",
    proj3Btn: 'Ver Projeto <i class="fas fa-arrow-up-right-from-square"></i>',
    proj4Titulo: "English Course Landing Page",
    proj4Desc: "Landing page de alta conversão para cursos de inglês, com design moderno.",
    proj4Btn: 'Ver Projeto <i class="fas fa-arrow-up-right-from-square"></i>',
    featStatus: "projeto pessoal completo, em produção",
    featTitulo: "WealthPath — Gestão Financeira Pessoal",
    featDesc: "Dashboard completo de finanças pessoais: visão geral de saldo, receitas e despesas em tempo real, controle de metas e dívidas, gastos fixos recorrentes, categorização automática de transações e geração de relatórios em PDF. Interface com múltiplos temas, totalmente responsiva. O projeto mais completo que já construí, unindo várias tecnologias do front ao back.",
    featBtnLive: 'Ver site <i class="fas fa-arrow-up-right-from-square"></i>',
    featBtnCode: '<i class="fab fa-github"></i> Código-fonte',
    contatoTitulo: "Vamos conversar?",
    contatoDesc: "Estou sempre aberto a novas oportunidades e colaborações.",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    linkedinLabel: "LinkedIn",
    footerText: "© 2026 Gabriel Ramos.",
    langBtn: "EN"
  },
  en: {
    navAbout: "About",
    navExp: "Experience",
    navProjects: "Projects",
    navContact: "Contact",
    heroBadge: "Available for new challenges",
    titulo: 'Hi, I\'m <span class="accent-name">Gabriel Ramos</span>',
    cargo: "Full Stack Developer",
    descricao: "Transforming ideas into memorable digital experiences with clean code and intuitive design.",
    btnProjetos: 'View Projects <i class="fas fa-arrow-right"></i>',
    btnContato: "Get in touch",
    sobreSub: "Who am I",
    sobreTitulo: "About me",
    sobreTexto: "I have a degree in Systems Analysis and Development and I am focused on becoming a developer. Passionate about technology and design, I always seek to create digital experiences that combine aesthetics and functionality. I have a natural ability to learn new tools and a total focus on delivering value through code.",
    statEdu: "Education",
    statProj: "Projects",
    statExp: "Internship",
    factEduValue: "Systems Analysis and Development",
    factExpValue: "4 months — DWC Consult",
    skillsTitulo: "Technologies & Tools",
    idiomasTitulo: "Languages",
    langPt: "Portuguese",
    langPtNivel: "native",
    langEn: "English",
    langEnNivel: "fluent",
    expTitulo: "Professional Experience",
    exp2Empresa: "English Teacher",
    exp2Date: "2024 — Present",
    exp2Cargo: "Private lessons (2 years)",
    exp2Texto: "I've been teaching English for 2 years, which helps me read documentation and code more fluently, understand technical material at the source, and communicate better in international contexts — opening doors to work on projects and teams outside Brazil.",
    expEmpresa: "DWC Consult",
    expCargo: "Development Intern (4 months)",
    expTexto: "Working on the development of solutions using HTML, CSS, and JavaScript, focusing on the Fluig platform for process automation and creation of corporate interfaces. Experience focused on agility and delivering functional components.",
    projSub: "My Portfolio",
    projetosTitulo: "Featured Projects",
    proj1Titulo: "Ericka Ramos Nails",
    proj1Desc: "Full site for my sister's nail studio: a booking calendar with real weekly availability, automatic reservations saved straight to the database (Supabase), a PIN-protected admin panel to manage schedules and manual bookings, and WhatsApp integration for confirmation.",
    proj1Btn: 'View Project <i class="fas fa-arrow-up-right-from-square"></i>',
    proj2Titulo: "Weather App",
    proj2Desc: "Weather forecast by city or geolocation, with real-time data from a public API.",
    proj2Btn: 'View Project <i class="fas fa-arrow-up-right-from-square"></i>',
    proj3Titulo: "To-do List",
    proj3Desc: "Daily task manager focused on simplicity and efficiency.",
    proj3Btn: 'View Project <i class="fas fa-arrow-up-right-from-square"></i>',
    proj4Titulo: "English Course Landing Page",
    proj4Desc: "High-conversion landing page for English courses, with modern design.",
    proj4Btn: 'View Project <i class="fas fa-arrow-up-right-from-square"></i>',
    featStatus: "personal project, fully built and in production",
    featTitulo: "WealthPath — Personal Finance Management",
    featDesc: "A complete personal finance dashboard: real-time overview of balance, income and expenses, goal and debt tracking, recurring fixed expenses, automatic transaction categorization, and PDF report generation. Multi-theme interface, fully responsive. The most complete project I've built so far, bringing together many technologies from front to back.",
    featBtnLive: 'View site <i class="fas fa-arrow-up-right-from-square"></i>',
    featBtnCode: '<i class="fab fa-github"></i> Source code',
    contatoTitulo: "Let's talk?",
    contatoDesc: "I'm always open to new opportunities and collaborations.",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    linkedinLabel: "LinkedIn",
    footerText: "© 2026 Gabriel Ramos.",
    langBtn: "PT"
  }
};

function trocarIdioma() {
  currentLang = currentLang === "pt" ? "en" : "pt";
  const t = translations[currentLang];

  // Update elements
  document.getElementById("nav-about").innerText = t.navAbout;
  document.getElementById("nav-exp").innerText = t.navExp;
  document.getElementById("nav-projects").innerText = t.navProjects;
  document.getElementById("nav-contact").innerText = t.navContact;
  document.getElementById("hero-badge").innerText = t.heroBadge;
  document.getElementById("titulo").innerHTML = t.titulo;
  document.getElementById("cargo").innerText = t.cargo;
  document.getElementById("descricao").innerText = t.descricao;
  document.getElementById("btn-projetos").innerHTML = t.btnProjetos;
  document.getElementById("btn-contato").innerText = t.btnContato;
  document.getElementById("sobre-sub").innerText = t.sobreSub;
  document.getElementById("sobre-titulo").innerText = t.sobreTitulo;
  document.getElementById("sobre-texto").innerText = t.sobreTexto;
  document.getElementById("stat-edu").innerText = t.statEdu;
  document.getElementById("stat-proj").innerText = t.statProj;
  document.getElementById("stat-exp").innerText = t.statExp;
  document.getElementById("fact-edu-value").innerText = t.factEduValue;
  document.getElementById("fact-exp-value").innerText = t.factExpValue;
  document.getElementById("skills-titulo").innerText = t.skillsTitulo;
  document.getElementById("idiomas-titulo").innerText = t.idiomasTitulo;
  document.getElementById("lang-pt").innerText = t.langPt;
  document.getElementById("lang-pt-nivel").innerText = t.langPtNivel;
  document.getElementById("lang-en").innerText = t.langEn;
  document.getElementById("lang-en-nivel").innerText = t.langEnNivel;
  document.getElementById("exp-titulo").innerText = t.expTitulo;
  document.getElementById("exp2-empresa").innerText = t.exp2Empresa;
  document.getElementById("exp2-date").innerText = t.exp2Date;
  document.getElementById("exp2-cargo").innerText = t.exp2Cargo;
  document.getElementById("exp2-texto").innerText = t.exp2Texto;
  document.getElementById("exp-empresa").innerText = t.expEmpresa;
  document.getElementById("exp-cargo").innerText = t.expCargo;
  document.getElementById("exp-texto").innerText = t.expTexto;
  document.getElementById("proj-sub").innerText = t.projSub;
  document.getElementById("projetos-titulo").innerText = t.projetosTitulo;
  document.getElementById("proj1-titulo").innerText = t.proj1Titulo;
  document.getElementById("proj1-desc").innerText = t.proj1Desc;
  document.getElementById("proj1-btn").innerHTML = t.proj1Btn;
  document.getElementById("proj1-btn-code").innerHTML = t.featBtnCode;
  document.getElementById("proj2-titulo").innerText = t.proj2Titulo;
  document.getElementById("proj2-desc").innerText = t.proj2Desc;
  document.getElementById("proj2-btn").innerHTML = t.proj2Btn;
  document.getElementById("proj2-btn-code").innerHTML = t.featBtnCode;
  document.getElementById("proj3-titulo").innerText = t.proj3Titulo;
  document.getElementById("proj3-desc").innerText = t.proj3Desc;
  document.getElementById("proj3-btn").innerHTML = t.proj3Btn;
  document.getElementById("proj3-btn-code").innerHTML = t.featBtnCode;
  document.getElementById("proj4-titulo").innerText = t.proj4Titulo;
  document.getElementById("proj4-desc").innerText = t.proj4Desc;
  document.getElementById("proj4-btn").innerHTML = t.proj4Btn;
  document.getElementById("proj4-btn-code").innerHTML = t.featBtnCode;
  document.getElementById("feat-status").innerText = t.featStatus;
  document.getElementById("feat-titulo").innerText = t.featTitulo;
  document.getElementById("feat-desc").innerText = t.featDesc;
  document.getElementById("feat-btn-live").innerHTML = t.featBtnLive;
  document.getElementById("contato-titulo").innerText = t.contatoTitulo;
  document.getElementById("contato-desc").innerText = t.contatoDesc;
  document.getElementById("email-label").innerText = t.emailLabel;
  document.getElementById("whatsapp-label").innerText = t.whatsappLabel;
  document.getElementById("linkedin-label").innerText = t.linkedinLabel;
  document.getElementById("footer-text").innerText = t.footerText;
  document.querySelector(".lang-text").innerText = t.langBtn;
}

// Active nav link on scroll
const navMap = {
  sobre: "nav-about",
  experiencia: "nav-exp",
  projetos: "nav-projects",
  contato: "nav-contact"
};

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const navId = navMap[entry.target.id];
    if (!navId) return;
    const link = document.getElementById(navId);
    if (entry.isIntersecting) {
      document.querySelectorAll(".nav-links a").forEach((a) => a.classList.remove("active"));
      link.classList.add("active");
    }
  });
}, { rootMargin: "-45% 0px -45% 0px" });

document.addEventListener("DOMContentLoaded", () => {
  Object.keys(navMap).forEach((id) => {
    const el = document.getElementById(id);
    if (el) navObserver.observe(el);
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinksEl = document.getElementById("nav-links");

if (menuToggle && navLinksEl) {
  menuToggle.addEventListener("click", () => {
    navLinksEl.classList.toggle("open");
    const icon = menuToggle.querySelector("i");
    const isOpen = navLinksEl.classList.contains("open");
    icon.className = isOpen ? "fas fa-xmark" : "fas fa-bars";
  });

  navLinksEl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinksEl.classList.remove("open");
      menuToggle.querySelector("i").className = "fas fa-bars";
    });
  });
}

// Scroll Reveal Effect
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal");
    }
  });
}, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.classList.add("reveal-hidden");
    observer.observe(section);
  });
  // Trigger for home
  const home = document.querySelector(".hero");
  home.classList.remove("reveal-hidden");
  home.classList.add("reveal");
});
