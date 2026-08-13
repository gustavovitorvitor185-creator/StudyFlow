const botaoNovaMateria = document.getElementById("btnNovaMateria");
const listaMaterias = document.getElementById("listaMaterias");

let materias = JSON.parse(localStorage.getItem("materiasStudyFlow")) || [];

function salvarMaterias() {
  localStorage.setItem("materiasStudyFlow", JSON.stringify(materias));
}

function renderizarMaterias() {

  listaMaterias.innerHTML = "";

  materias.forEach((materia, index) => {

    const novaMateria = document.createElement("div");

    novaMateria.className =
      "bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 shadow-2xl hover:-translate-y-1 transition duration-300";

    novaMateria.innerHTML = `
    
      <div class="flex items-center justify-between mb-6">

        <div class="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-3xl">
          📘
        </div>

        <button class="bg-red-500/20 text-red-300 px-4 py-2 rounded-xl text-sm border border-red-500/20 hover:bg-red-500/30 transition">
          Remover
        </button>
      </div>

      <h3 class="text-3xl font-black mb-2">
        ${materia.nome}
      </h3>

      <p class="text-slate-400">
        Matéria salva no sistema.
      </p>

      <div class="w-full h-3 bg-slate-700/50 rounded-full mt-6 overflow-hidden">
        <div class="h-full w-[50%] bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full"></div>
      </div>

      <div class="mt-6 flex justify-between text-sm text-slate-400">
        <span>0 tarefas</span>
        <span>0h estudadas</span>
      </div>
    `;

    const botaoRemover = novaMateria.querySelector("button");

    botaoRemover.addEventListener("click", () => {

      materias.splice(index, 1);

      salvarMaterias();

      renderizarMaterias();

    });

    listaMaterias.prepend(novaMateria);

  });

}

botaoNovaMateria.addEventListener("click", () => {

  const nomeMateria = prompt("Digite o nome da matéria:");

  if(nomeMateria === null || nomeMateria.trim() === ""){
    return;
  }

  materias.push({
    nome: nomeMateria
  });

  salvarMaterias();

  renderizarMaterias();

});

renderizarMaterias();