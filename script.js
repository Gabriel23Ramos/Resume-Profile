let idioma = "pt";

function trocarIdioma() {
  if (idioma === "pt") {
    idioma = "en";

    document.getElementById("titulo").innerText = "Hi, I'm Gabriel Ramos";
    document.getElementById("cargo").innerText = "Front-end Developer";
    document.getElementById("descricao").innerText = "Building modern interfaces";

    document.getElementById("btn-projetos").innerText = "View Projects";
    document.getElementById("btn-contato").innerText = "Contact";

    document.getElementById("sobre-titulo").innerText = "👨‍💻 About me";
    document.getElementById("sobre-texto").innerText =
      "I have a degree in Systems Analysis and Development and I am focused on becoming a developer.";

    document.getElementById("skills-titulo").innerText = "🚀 Technologies";
    document.getElementById("idiomas-titulo").innerText = "🌍 Languages";

    document.getElementById("lang-pt").innerText = "Portuguese";
    document.getElementById("lang-pt-nivel").innerText = "Native";

    document.getElementById("lang-en").innerText = "English";
    document.getElementById("lang-en-nivel").innerText = "Fluent";

    document.getElementById("exp-titulo").innerText = "💼 Experience";
    document.getElementById("exp-cargo").innerText = "Internship in Development";
    document.getElementById("exp-texto").innerText =
      "Worked with HTML, CSS and JavaScript using the Fluig platform.";

    document.getElementById("projetos-titulo").innerText = "🚀 Projects";
    document.getElementById("proj1-titulo").innerText = "Weather App";
    document.getElementById("proj1-desc").innerText = "Weather forecast site with city search and geolocation. Shows temperature, weather description and 3-day forecast.";
    document.getElementById("proj1-btn").innerHTML = "View project <span>→</span>";
    document.getElementById("proj2-titulo").innerText = "To-do List";
    document.getElementById("proj2-desc").innerText = "Task list app to organize your day. Add, complete and remove tasks in a simple and intuitive way.";
    document.getElementById("proj2-btn").innerHTML = "View project <span>→</span>";

    document.getElementById("contato-titulo").innerText = "📞 Contact";
    document.getElementById("email-label").innerText = "Email";
    document.getElementById("whatsapp-label").innerText = "WhatsApp";
    document.getElementById("linkedin-label").innerText = "LinkedIn";

    document.getElementById("lang-btn").innerText = "PT";
  } else {
    location.reload();
  }
}