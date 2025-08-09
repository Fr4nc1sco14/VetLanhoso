const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".navbar_menu");
const modal = document.querySelector("#serviceModal");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const closeModal = document.querySelector(".modal-close");
const serviceButtons = document.querySelectorAll(".service-btn");

// Dados dos serviços para o modal
const servicesData = {
  consultas: {
    title: "Consultas e Check-ups",
    description:
      "As nossas consultas veterinárias são realizadas por profissionais experientes, garantindo um acompanhamento completo para a saúde do seu pet. Incluímos check-ups detalhados, diagnósticos precisos e planos de tratamento personalizados para assegurar o bem-estar do seu animal de estimação.",
  },
  vacinacao: {
    title: "Vacinação e Prevenção",
    description:
      "Os nossos programas de vacinação são adaptados às necessidades específicas de cada animal, considerando a sua espécie, idade e estilo de vida. Além disso, oferecemos aconselhamento sobre medidas preventivas para proteger o seu pet contra doenças comuns e sazonais.",
  },
  cirurgia: {
    title: "Cirurgia e Cuidados Pós-Operatórios",
    description:
      "Realizamos uma ampla gama de procedimentos cirúrgicos, desde cirurgias gerais até intervenções mais especializadas. A nossa equipa garante monitorização contínua durante o procedimento e cuidados pós-operatórios completos para uma recuperação segura e confortável.",
  },
};

// Função para abrir o modal
function openModal(service) {
  modalTitle.textContent = servicesData[service].title;
  modalDescription.textContent = servicesData[service].description;
  modal.style.display = "flex";
}

// Função para fechar o modal
function closeModalFunc() {
  modal.style.display = "none";
}

// Evento para o toggle do menu
toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// Eventos para os botões de serviço
serviceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const service = button.getAttribute("data-service");
    openModal(service);
  });
});

// Evento para fechar o modal
closeModal.addEventListener("click", closeModalFunc);

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModalFunc();
  }
});

// Fechar o modal com a tecla Esc
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "flex") {
    closeModalFunc();
  }
});