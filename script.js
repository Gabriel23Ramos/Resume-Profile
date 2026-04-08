let currentLang = "pt";

const translations = {
  pt: {
    navAbout: "Sobre",
    navExp: "Experiência",
    navProjects: "Projetos",
    navContact: "Contato",
    heroBadge: "Disponível para novos desafios",
    titulo: 'Olá, eu sou <span class="gradient-text">Gabriel Ramos</span>',
    cargo: "Desenvolvedor Front-end",
    descricao: "Transformando ideias em experiências digitais memoráveis com código limpo e design intuitivo.",
    btnProjetos: 'Ver Projetos <i class="fas fa-arrow-right"></i>',
    btnContato: "Entrar em contato",
    sobreSub: "Quem sou eu",
    sobreTitulo: " Sobre mim",
    sobreTexto: "Sou formado em Análise e Desenvolvimento de Sistemas e estou focado em me tornar desenvolvedor. Apaixonado por tecnologia e design, busco sempre criar experiências digitais que unam estética e funcionalidade. Tenho facilidade em aprender novas ferramentas e foco total em entregar valor através do código.",
    statEdu: "Formação",
    statProj: "Projetos",
    statExp: "Estágio",
    skillsTitulo: " Tecnologias & Ferramentas",
    idiomasTitulo: " Idiomas",
    langPt: "Português",
    langPtNivel: "Nativo",
    langEn: "Inglês",
    langEnNivel: "Fluente",
    expTitulo: " Experiência Profissional",
    expEmpresa: "DWC Consult",
    expCargo: "Estágio em Desenvolvimento (4 meses)",
    expTexto: "Atuação no desenvolvimento de soluções utilizando HTML, CSS e JavaScript, com foco na plataforma Fluig para automação de processos e criação de interfaces corporativas. Experiência focada em agilidade e entrega de componentes funcionais.",
    projSub: "Meu Portfólio",
    projetosTitulo: " Projetos em Destaque",
    proj1Titulo: "Weather App",
    proj1Desc: "Site de previsão do tempo com busca por cidade e geolocalização. Interface limpa e dados em tempo real.",
    proj1Btn: 'Ver Projeto <i class="fas fa-external-link-alt"></i>',
    proj2Titulo: "To-do List",
    proj2Desc: "Aplicação para gerenciamento de tarefas diárias, permitindo organizar sua rotina com eficiência e simplicidade.",
    proj2Btn: 'Ver Projeto <i class="fas fa-external-link-alt"></i>',
    proj3Titulo: "English Course Landing Page",
    proj3Desc: "Landing page de alta conversão para cursos de inglês, com design moderno e foco na experiência do usuário.",
    proj3Btn: 'Ver Projeto <i class="fas fa-external-link-alt"></i>',
    contatoTitulo: " Vamos conversar?",
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
    titulo: 'Hi, I\'m <span class="gradient-text">Gabriel Ramos</span>',
    cargo: "Front-end Developer",
    descricao: "Transforming ideas into memorable digital experiences with clean code and intuitive design.",
    btnProjetos: 'View Projects <i class="fas fa-arrow-right"></i>',
    btnContato: "Get in touch",
    sobreSub: "Who am I",
    sobreTitulo: " About me",
    sobreTexto: "I have a degree in Systems Analysis and Development and I am focused on becoming a developer. Passionate about technology and design, I always seek to create digital experiences that combine aesthetics and functionality. I have a natural ability to learn new tools and a total focus on delivering value through code.",
    statEdu: "Education",
    statProj: "Projects",
    statExp: "Internship",
    skillsTitulo: " Technologies & Tools",
    idiomasTitulo: " Languages",
    langPt: "Portuguese",
    langPtNivel: "Native",
    langEn: "English",
    langEnNivel: "Fluent",
    expTitulo: " Professional Experience",
    expEmpresa: "DWC Consult",
    expCargo: "Development Intern (4 months)",
    expTexto: "Working on the development of solutions using HTML, CSS, and JavaScript, focusing on the Fluig platform for process automation and creation of corporate interfaces. Experience focused on agility and delivering functional components.",
    projSub: "My Portfolio",
    projetosTitulo: " Featured Projects",
    proj1Titulo: "Weather App",
    proj1Desc: "Weather forecast site with city search and geolocation. Clean interface and real-time data.",
    proj1Btn: 'View Project <i class="fas fa-external-link-alt"></i>',
    proj2Titulo: "To-do List",
    proj2Desc: "Application for daily task management, allowing you to organize your routine with efficiency and simplicity.",
    proj2Btn: 'View Project <i class="fas fa-external-link-alt"></i>',
    proj3Titulo: "English Course Landing Page",
    proj3Desc: "High-conversion landing page for English courses, with modern design and focus on user experience.",
    proj3Btn: 'View Project <i class="fas fa-external-link-alt"></i>',
    contatoTitulo: " Let's talk?",
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
  document.getElementById("skills-titulo").innerText = t.skillsTitulo;
  document.getElementById("idiomas-titulo").innerText = t.idiomasTitulo;
  document.getElementById("lang-pt").innerText = t.langPt;
  document.getElementById("lang-pt-nivel").innerText = t.langPtNivel;
  document.getElementById("lang-en").innerText = t.langEn;
  document.getElementById("lang-en-nivel").innerText = t.langEnNivel;
  document.getElementById("exp-titulo").innerText = t.expTitulo;
  document.getElementById("exp-empresa").innerText = t.expEmpresa;
  document.getElementById("exp-cargo").innerText = t.expCargo;
  document.getElementById("exp-texto").innerText = t.expTexto;
  document.getElementById("proj-sub").innerText = t.projSub;
  document.getElementById("projetos-titulo").innerText = t.projetosTitulo;
  document.getElementById("proj1-titulo").innerText = t.proj1Titulo;
  document.getElementById("proj1-desc").innerText = t.proj1Desc;
  document.getElementById("proj1-btn").innerHTML = t.proj1Btn;
  document.getElementById("proj2-titulo").innerText = t.proj2Titulo;
  document.getElementById("proj2-desc").innerText = t.proj2Desc;
  document.getElementById("proj2-btn").innerHTML = t.proj2Btn;
  document.getElementById("proj3-titulo").innerText = t.proj3Titulo;
  document.getElementById("proj3-desc").innerText = t.proj3Desc;
  document.getElementById("proj3-btn").innerHTML = t.proj3Btn;
  document.getElementById("contato-titulo").innerText = t.contatoTitulo;
  document.getElementById("contato-desc").innerText = t.contatoDesc;
  document.getElementById("email-label").innerText = t.emailLabel;
  document.getElementById("whatsapp-label").innerText = t.whatsappLabel;
  document.getElementById("linkedin-label").innerText = t.linkedinLabel;
  document.getElementById("footer-text").innerText = t.footerText;
  document.querySelector(".lang-text").innerText = t.langBtn;
}

// Cursor Glow Effect
const cursorGlow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", (e) => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

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

// Add these styles dynamically for the reveal effect
const style = document.createElement("style");
style.innerHTML = `
  .reveal-hidden {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
  }
  .reveal {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
