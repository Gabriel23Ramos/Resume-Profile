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
    btnCv: '<i class="fas fa-arrow-down"></i> Currículo',
    sobreSub: "Quem sou eu",
    sobreTitulo: "Sobre mim",
    sobreTexto: "Sou desenvolvedor full stack formado em Análise e Desenvolvimento de Sistemas, com projetos reais em produção do front ao back — de dashboards com dados em tempo real a sistemas de agendamento integrados a banco de dados. Gosto de resolver problemas concretos, aprendo ferramentas novas com rapidez e entrego código limpo unindo estética e funcionalidade.",
    statEdu: "Formação",
    statProj: "Projetos",
    statExp: "Experiência",
    factEduValue: "Análise e Desenvolvimento de Sistemas",
    factExpValue: "Freelancer há 1 ano",
    skillsTitulo: "Tecnologias & Ferramentas",
    skillsFrontendLabel: "Frontend",
    skillsBackendLabel: "Backend & Dados",
    skillsToolsLabel: "Ferramentas",
    idiomasTitulo: "Idiomas",
    langPt: "Português",
    langPtNivel: "nativo",
    langEn: "Inglês",
    langEnNivel: "fluente",
    expTitulo: "Experiência Profissional",
    exp0Empresa: "Desenvolvedor Freelancer",
    exp0Date: "2025 — Atual",
    exp0Cargo: "Projetos independentes (1 ano)",
    exp0Texto: "Atuo como freelancer há 1 ano desenvolvendo sites e sistemas sob demanda, aplicando toda a stack que domino: HTML5, CSS3, JavaScript, React, Node.js, Supabase, Fluig e Git, do front ao back, com foco em entregas responsivas e funcionais.",
    exp2Empresa: "Professor de Inglês",
    exp2Date: "2024 — Atual",
    exp2Cargo: "Aulas particulares (2 anos)",
    exp2Texto: "Leciono inglês há 2 anos, o que me ajuda a ler documentações e códigos com mais fluência, entender materiais técnicos na fonte e me comunicar melhor em contextos internacionais — abrindo portas para atuar em projetos e equipes fora do Brasil.",
    expEmpresa: "DWC Consult",
    expCargo: "Estágio em Desenvolvimento (4 meses)",
    expTexto1: "Desenvolvi interfaces corporativas responsivas na plataforma Fluig, usando HTML, CSS e JavaScript.",
    expTexto2: "Contribuí para a automação de processos internos, substituindo etapas manuais por fluxos configurados na plataforma.",
    expTexto3: "Entreguei componentes funcionais dentro de prazos ágeis, em contato direto com a equipe de consultoria.",
    projSub: "Meu Portfólio",
    projetosTitulo: "Projetos em Destaque",
    otherProjectsLabel: "Outros projetos",
    proj1Titulo: "Ericka Ramos Nails",
    proj1Desc: "Site para um negócio real: o estúdio de unhas da minha irmã. Substituiu o agendamento manual por WhatsApp por um sistema de reservas self-service com disponibilidade real por dia da semana, gravando direto no banco (Supabase). Inclui painel administrativo protegido por PIN para gerenciar horários e reservas, com confirmação automática via WhatsApp.",
    proj1Btn: 'Ver Projeto <i class="fas fa-arrow-up-right-from-square"></i>',
    proj2Titulo: "Weather App",
    proj2Desc: "Previsão do tempo por cidade ou geolocalização, com dados em tempo real via API pública.",
    proj2BtnText: "Ver Projeto",
    proj2CodeText: "Código",
    proj3Titulo: "Gabriel English Academy",
    proj3Desc: "Landing page para uma escola de inglês: quiz de nível interativo, seção de planos, certificado de conclusão com preview em modal e identidade visual própria construída do zero.",
    proj3Btn: 'Ver Projeto <i class="fas fa-arrow-up-right-from-square"></i>',
    proj4Titulo: "To-do List",
    proj4Desc: "Gerenciador de tarefas diárias, com foco em simplicidade e eficiência.",
    proj4BtnText: "Ver Projeto",
    proj4CodeText: "Código",
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
    formTitle: "Ou me mande uma mensagem",
    formNameLabel: "Nome",
    formNamePlaceholder: "Seu nome",
    formEmailLabel: "Email",
    formEmailPlaceholder: "seu@email.com",
    formMessageLabel: "Mensagem",
    formMessagePlaceholder: "Como posso ajudar?",
    formSubmit: "Enviar mensagem",
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
    btnCv: '<i class="fas fa-arrow-down"></i> Resume',
    sobreSub: "Who am I",
    sobreTitulo: "About me",
    sobreTexto: "I'm a full stack developer with a degree in Systems Analysis and Development, with real projects in production from front to back — from dashboards with real-time data to booking systems integrated with a database. I like solving concrete problems, I pick up new tools quickly, and I ship clean code that combines aesthetics and functionality.",
    statEdu: "Education",
    statProj: "Projects",
    statExp: "Experience",
    factEduValue: "Systems Analysis and Development",
    factExpValue: "Freelancer for 1 year",
    skillsTitulo: "Technologies & Tools",
    skillsFrontendLabel: "Frontend",
    skillsBackendLabel: "Backend & Data",
    skillsToolsLabel: "Tools",
    idiomasTitulo: "Languages",
    langPt: "Portuguese",
    langPtNivel: "native",
    langEn: "English",
    langEnNivel: "fluent",
    expTitulo: "Professional Experience",
    exp0Empresa: "Freelance Developer",
    exp0Date: "2025 — Present",
    exp0Cargo: "Independent projects (1 year)",
    exp0Texto: "I've been working as a freelancer for 1 year, building sites and systems on demand, applying my full stack: HTML5, CSS3, JavaScript, React, Node.js, Supabase, Fluig, and Git, from front to back, with a focus on responsive, functional delivery.",
    exp2Empresa: "English Teacher",
    exp2Date: "2024 — Present",
    exp2Cargo: "Private lessons (2 years)",
    exp2Texto: "I've been teaching English for 2 years, which helps me read documentation and code more fluently, understand technical material at the source, and communicate better in international contexts — opening doors to work on projects and teams outside Brazil.",
    expEmpresa: "DWC Consult",
    expCargo: "Development Intern (4 months)",
    expTexto1: "Built responsive corporate interfaces on the Fluig platform using HTML, CSS, and JavaScript.",
    expTexto2: "Contributed to internal process automation, replacing manual steps with flows configured on the platform.",
    expTexto3: "Delivered functional components within agile deadlines, working directly with the consulting team.",
    projSub: "My Portfolio",
    projetosTitulo: "Featured Projects",
    otherProjectsLabel: "Other projects",
    proj1Titulo: "Ericka Ramos Nails",
    proj1Desc: "A site for a real business: my sister's nail studio. It replaced manual WhatsApp scheduling with a self-service booking system with real weekly availability, saving straight to the database (Supabase). Includes a PIN-protected admin panel to manage schedules and bookings, with automatic WhatsApp confirmation.",
    proj1Btn: 'View Project <i class="fas fa-arrow-up-right-from-square"></i>',
    proj2Titulo: "Weather App",
    proj2Desc: "Weather forecast by city or geolocation, with real-time data from a public API.",
    proj2BtnText: "View Project",
    proj2CodeText: "Code",
    proj3Titulo: "Gabriel English Academy",
    proj3Desc: "Landing page for an English school: interactive level quiz, pricing plans, a completion certificate with a modal preview, and a custom visual identity built from scratch.",
    proj3Btn: 'View Project <i class="fas fa-arrow-up-right-from-square"></i>',
    proj4Titulo: "To-do List",
    proj4Desc: "Daily task manager focused on simplicity and efficiency.",
    proj4BtnText: "View Project",
    proj4CodeText: "Code",
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
    formTitle: "Or send me a message",
    formNameLabel: "Name",
    formNamePlaceholder: "Your name",
    formEmailLabel: "Email",
    formEmailPlaceholder: "you@email.com",
    formMessageLabel: "Message",
    formMessagePlaceholder: "How can I help?",
    formSubmit: "Send message",
    footerText: "© 2026 Gabriel Ramos.",
    langBtn: "PT"
  }
};

function trocarIdioma() {
  currentLang = currentLang === "pt" ? "en" : "pt";
  const t = translations[currentLang];

  document.getElementById("nav-about").innerText = t.navAbout;
  document.getElementById("nav-exp").innerText = t.navExp;
  document.getElementById("nav-projects").innerText = t.navProjects;
  document.getElementById("nav-contact").innerText = t.navContact;
  document.getElementById("hero-badge-value").innerText = '"' + t.heroBadge + '"';
  document.getElementById("titulo").innerHTML = t.titulo;
  document.getElementById("cargo").innerText = t.cargo;
  document.getElementById("descricao").innerText = t.descricao;
  document.getElementById("btn-projetos").innerHTML = t.btnProjetos;
  document.getElementById("btn-contato").innerText = t.btnContato;
  document.getElementById("btn-cv").innerHTML = t.btnCv;
  document.getElementById("sobre-sub").innerText = t.sobreSub;
  document.getElementById("sobre-titulo").innerText = t.sobreTitulo;
  document.getElementById("sobre-texto").innerText = t.sobreTexto;
  document.getElementById("stat-edu").innerText = t.statEdu;
  document.getElementById("stat-proj").innerText = t.statProj;
  document.getElementById("stat-exp").innerText = t.statExp;
  document.getElementById("fact-edu-value").innerText = t.factEduValue;
  document.getElementById("fact-exp-value").innerText = t.factExpValue;
  document.getElementById("skills-titulo").innerText = t.skillsTitulo;
  document.getElementById("skills-frontend-label").innerText = t.skillsFrontendLabel;
  document.getElementById("skills-backend-label").innerText = t.skillsBackendLabel;
  document.getElementById("skills-tools-label").innerText = t.skillsToolsLabel;
  document.getElementById("idiomas-titulo").innerText = t.idiomasTitulo;
  document.getElementById("lang-pt").innerText = t.langPt;
  document.getElementById("lang-pt-nivel").innerText = t.langPtNivel;
  document.getElementById("lang-en").innerText = t.langEn;
  document.getElementById("lang-en-nivel").innerText = t.langEnNivel;
  document.getElementById("exp-titulo").innerText = t.expTitulo;
  document.getElementById("exp0-empresa").innerText = t.exp0Empresa;
  document.getElementById("exp0-date").innerText = t.exp0Date;
  document.getElementById("exp0-cargo").innerText = t.exp0Cargo;
  document.getElementById("exp0-texto").innerText = t.exp0Texto;
  document.getElementById("exp2-empresa").innerText = t.exp2Empresa;
  document.getElementById("exp2-date").innerText = t.exp2Date;
  document.getElementById("exp2-cargo").innerText = t.exp2Cargo;
  document.getElementById("exp2-texto").innerText = t.exp2Texto;
  document.getElementById("exp-empresa").innerText = t.expEmpresa;
  document.getElementById("exp-cargo").innerText = t.expCargo;
  document.getElementById("exp-texto-1").innerText = t.expTexto1;
  document.getElementById("exp-texto-2").innerText = t.expTexto2;
  document.getElementById("exp-texto-3").innerText = t.expTexto3;
  document.getElementById("proj-sub").innerText = t.projSub;
  document.getElementById("projetos-titulo").innerText = t.projetosTitulo;
  document.getElementById("other-projects-label").innerText = t.otherProjectsLabel;
  document.getElementById("proj1-titulo").innerText = t.proj1Titulo;
  document.getElementById("proj1-desc").innerText = t.proj1Desc;
  document.getElementById("proj1-btn").innerHTML = t.proj1Btn;
  document.getElementById("proj1-btn-code").innerHTML = t.featBtnCode;
  document.getElementById("proj2-titulo").innerText = t.proj2Titulo;
  document.getElementById("proj2-desc").innerText = t.proj2Desc;
  document.getElementById("proj2-btn-text").innerText = t.proj2BtnText;
  document.getElementById("proj2-code-text").innerText = t.proj2CodeText;
  document.getElementById("proj3-titulo").innerText = t.proj3Titulo;
  document.getElementById("proj3-desc").innerText = t.proj3Desc;
  document.getElementById("proj3-btn").innerHTML = t.proj3Btn;
  document.getElementById("proj3-btn-code").innerHTML = t.featBtnCode;
  document.getElementById("proj4-titulo").innerText = t.proj4Titulo;
  document.getElementById("proj4-desc").innerText = t.proj4Desc;
  document.getElementById("proj4-btn-text").innerText = t.proj4BtnText;
  document.getElementById("proj4-code-text").innerText = t.proj4CodeText;
  document.getElementById("feat-status").innerText = t.featStatus;
  document.getElementById("feat-titulo").innerText = t.featTitulo;
  document.getElementById("feat-desc").innerText = t.featDesc;
  document.getElementById("feat-btn-live").innerHTML = t.featBtnLive;
  document.getElementById("feat-btn-code").innerHTML = t.featBtnCode;
  document.getElementById("contato-titulo").innerText = t.contatoTitulo;
  document.getElementById("contato-desc").innerText = t.contatoDesc;
  document.getElementById("email-label").innerText = t.emailLabel;
  document.getElementById("whatsapp-label").innerText = t.whatsappLabel;
  document.getElementById("linkedin-label").innerText = t.linkedinLabel;
  document.getElementById("form-title").innerText = t.formTitle;
  document.getElementById("form-name-label").innerText = t.formNameLabel;
  document.getElementById("form-name").placeholder = t.formNamePlaceholder;
  document.getElementById("form-email-label").innerText = t.formEmailLabel;
  document.getElementById("form-email").placeholder = t.formEmailPlaceholder;
  document.getElementById("form-message-label").innerText = t.formMessageLabel;
  document.getElementById("form-message").placeholder = t.formMessagePlaceholder;
  document.getElementById("form-submit-text").innerText = t.formSubmit;
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
  const home = document.querySelector(".hero");
  home.classList.remove("reveal-hidden");
  home.classList.add("reveal");
});

// Contact form
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById("form-submit");
    const submitText = document.getElementById("form-submit-text");
    const status = document.getElementById("form-status");
    const isEN = currentLang === "en";

    submitBtn.disabled = true;
    submitText.textContent = isEN ? "Sending..." : "Enviando...";
    status.textContent = "";
    status.className = "form-status";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
      });
      const data = await res.json();

      if (data.success) {
        status.textContent = isEN
          ? "Message sent! I'll reply soon."
          : "Mensagem enviada! Vou responder em breve.";
        status.classList.add("success");
        contactForm.reset();
      } else {
        throw new Error(data.message || "submit failed");
      }
    } catch (err) {
      status.textContent = isEN
        ? "Something went wrong. Try the email link above instead."
        : "Algo deu errado. Tente pelo link de email acima.";
      status.classList.add("error");
    } finally {
      submitBtn.disabled = false;
      submitText.textContent = isEN ? "Send message" : "Enviar mensagem";
    }
  });
}

