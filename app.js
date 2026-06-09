const projects = [
  {
    title: "Atividade Catalogo Final",
    type: "Web",
    category: "web",
    summary: "Sistema web de catalogo.",
    repoName: "arthur-prado1/atividadeCatalogoJava-Spring",
    repoUrl: "https://github.com/arthur-prado1/atividadeCatalogoJava-Spring",
    description:
      "Aplicacao de catalogo com Spring Boot, Thymeleaf, Spring Security e PostgreSQL para cadastro e gerenciamento de itens.",
    tags: ["Java", "Spring Boot", "Thymeleaf", "PostgreSQL", "Security"]
  },
  {
    title: "Projeto Boer",
    type: "Mobile + Backend",
    category: "mobile",
    summary: "Aplicativo com backend e API de produtos.",
    repoName: "arthur-prado1/projetoBoer",
    repoUrl: "https://github.com/arthur-prado1/projetoBoer",
    description:
      "App em Expo React Native com backend Node.js e Firebase, incluindo uma API aberta com endpoints para cadastro, listagem, edicao e exclusao de produtos.",
    tags: ["Expo", "React Native", "Node.js", "Firebase", "TypeScript"]
  },
  {
    title: "Disparos Massa WhatsApp",
    type: "Automacao",
    category: "automacao",
    summary: "Automacao de envios em escala no WhatsApp.",
    repoName: "arthur-prado1/automacoesWhatsApp",
    repoUrl: "https://github.com/arthur-prado1/automacoesWhatsApp",
    description:
      "Workflow em n8n para disparos em massa no WhatsApp com controle de fila, intervalo entre envios e organizacao do processo.",
    tags: ["n8n", "WhatsApp", "Automacao", "Workflow JSON"]
  },
  {
    title: "Agente Inteligencia Artificial",
    type: "Automacao",
    category: "automacao",
    summary: "Fluxo de atendimento automatizado com IA.",
    repoName: "arthur-prado1/automacoesWhatsApp",
    repoUrl: "https://github.com/arthur-prado1/automacoesWhatsApp",
    description:
      "Workflow com IA para receber mensagens, interpretar conteudo e responder automaticamente dentro do fluxo do WhatsApp.",
    tags: ["n8n", "OpenAI", "WhatsApp", "IA", "Workflow JSON"]
  }
];

const projectList = document.querySelector("#project-list");
const template = document.querySelector("#project-card-template");
const filterButtons = document.querySelectorAll(".filter-button");

function renderProjects(filter = "todos") {
  projectList.innerHTML = "";

  const visibleProjects = projects.filter((project) => {
    return filter === "todos" ? true : project.category === filter;
  });

  visibleProjects.forEach((project) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".project-card");

    fragment.querySelector(".project-type").textContent = project.type;
    fragment.querySelector(".project-title").textContent = project.title;
    fragment.querySelector(".project-summary").textContent = project.summary;
    fragment.querySelector(".project-description").textContent = project.description;
    fragment.querySelector(".project-repo").textContent = project.repoName;

    const link = fragment.querySelector(".project-link");
    link.href = project.repoUrl;

    const tagList = fragment.querySelector(".tag-list");
    project.tags.forEach((tag) => {
      const item = document.createElement("li");
      item.textContent = tag;
      tagList.appendChild(item);
    });

    card.dataset.category = project.category;
    projectList.appendChild(fragment);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects();
