alert("dashboard.js funcionando");

const totalMaterias = document.getElementById("totalMaterias");
const totalTarefas = document.getElementById("totalTarefas");
const totalEventos = document.getElementById("totalEventos");

const materias = JSON.parse(localStorage.getItem("materiasStudyFlow")) || [];
const tarefas = JSON.parse(localStorage.getItem("tarefasStudyFlow")) || [];
const eventos = JSON.parse(localStorage.getItem("eventosStudyFlow")) || [];

totalMaterias.textContent = materias.length;
totalTarefas.textContent = tarefas.length;
totalEventos.textContent = eventos.length;

// ===== LOGOUT =====

const btnLogout = document.getElementById("btnLogout");

if (btnLogout) {

    btnLogout.addEventListener("click", () => {

        const confirmar = confirm(
            "Deseja realmente sair da sua conta?"
        );

        if (!confirmar) return;

        localStorage.removeItem("usuarioLogado");

        window.location.href = "login.html";

    });

}
const ultimaTarefa =
  document.getElementById("ultimaTarefa");

if (ultimaTarefa) {

    if (tarefas.length > 0) {

        ultimaTarefa.textContent =
            tarefas[tarefas.length - 1].nome;

    }

}
const proximoEvento =
  document.getElementById("proximoEvento");

if (proximoEvento) {

    if (eventos.length > 0) {

        proximoEvento.textContent =
            eventos[eventos.length - 1].nome;

    }

}

// ===== MENU MOBILE =====

alert("dashboard.js carregou!");

const btnMenu = document.getElementById("btnMenu");
const sidebar = document.getElementById("sidebar");

if (btnMenu && sidebar) {

    btnMenu.addEventListener("click", () => {

        sidebar.classList.toggle("hidden");

    });

}

const usuario = JSON.parse(
  localStorage.getItem("usuarioStudyFlow")
);

const perfilNome =
  document.getElementById("perfilNome");

const perfilEmail =
  document.getElementById("perfilEmail");

if (usuario) {

  perfilNome.textContent =
    usuario.nome;

  perfilEmail.textContent =
    usuario.email;

}

// ===== PERFIL DO USUÁRIO =====


const usuario = JSON.parse(
  localStorage.getItem("usuarioStudyFlow")
);

const nomeUsuario =
  document.getElementById("nomeUsuario");

const perfilNome =
  document.getElementById("perfilNome");

const perfilEmail =
  document.getElementById("perfilEmail");

if (usuario) {

  if (nomeUsuario) {
    nomeUsuario.textContent =
      `Olá, ${usuario.nome} 👋`;
  }

  if (perfilNome) {
    perfilNome.textContent =
      usuario.nome;
  }

  if (perfilEmail) {
    perfilEmail.textContent =
      usuario.email;
  }

}