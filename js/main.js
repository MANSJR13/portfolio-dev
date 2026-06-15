document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfólio carregado com sucesso!");

    if(
    document.body.classList.contains(
        "light-theme"
    )
){
    themeButton.textContent = "☀️";
}

});

const skills = [
    "C#",
    ".NET",
    "ASP.NET Core",
    "Entity Framework",
    "SQL Server",
    "SQLite",
    "Git",
    "GitHub",
    "REST API"
];

const projects = [

    {
        title: "Sistema de Barbearia",
        image: "./assets/images/projetos/barbearia.png",

        description:
        "Sistema para gerenciamento de clientes, barbeiros e agendamentos.",

        technologies: [
            "C#",
            ".NET",
            "SQL Server"
        ],

        github:
        "https://github.com/seuusuario/barbearia"
    },

    {
        title: "AulaSocial",

        image:
        "./assets/images/projetos/aulasocial.png",

        description:
        "Projeto para gerenciamento de atividades educacionais.",

        technologies: [
            "C#",
            "SQLite"
        ],

        github:
        "https://github.com/seuusuario/aulasocial"
    }

];

const certificates = [

    {
        title: "C# Completo",
        institution: "Udemy",
        year: "2026"
    },

    {
        title: "Git e GitHub",
        institution: "Curso em Vídeo",
        year: "2026"
    }

];

function renderSkills() {

    const container =
        document.getElementById("skills-container");

    skills.forEach(skill => {

        container.innerHTML += `
            <div class="skill-card">
                ${skill}
            </div>
        `;
    });
}

const themeButton =
    document.getElementById("theme-toggle");

    const savedTheme =
    localStorage.getItem("theme");

if(savedTheme === "light"){

    document.body.classList.add(
        "light-theme"
    );
}

function renderProjects() {

    const container =
        document.getElementById("projects-container");

    projects.forEach(project => {

        const tags =
            project.technologies
            .map(tech => `<span>${tech}</span>`)
            .join("");

        container.innerHTML += `

            <div class="project-card">

                <img
                src="${project.image}"
                alt="${project.title}">

                <h3>${project.title}</h3>

                <p>
                    ${project.description}
                </p>

                <div class="tags">
                    ${tags}
                </div>

                <a
                href="${project.github}"
                target="_blank"
                class="btn-project">

                GitHub

                </a>

            </div>

        `;
    });
}

function renderCertificates() {

    const container =
        document.getElementById(
            "certificates-container"
        );

    certificates.forEach(certificate => {

        container.innerHTML += `

            <div class="certificate-card">

                <h3>
                    ${certificate.title}
                </h3>

                <p>
                    ${certificate.institution}
                </p>

                <p>
                    ${certificate.year}
                </p>

            </div>

        `;
    });
}

function toggleTheme() {

    document.body.classList.toggle(
        "light-theme"
    );

    const isLight =
        document.body.classList.contains(
            "light-theme"
        );

    themeButton.textContent =
        isLight ? "☀️" : "🌙";

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );
}

themeButton.addEventListener(
    "click",
    toggleTheme
);

document.addEventListener(
    "DOMContentLoaded",
    () => {

        renderSkills();

        renderProjects();

        renderCertificates();

    }
);