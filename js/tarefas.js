const botaoNovaTarefa = document.getElementById("btnNovaTarefa");
const listaTarefas = document.getElementById("listaTarefas");

let tarefas = JSON.parse(localStorage.getItem("tarefasStudyFlow")) || [];

function salvarTarefas() {
  localStorage.setItem("tarefasStudyFlow", JSON.stringify(tarefas));
}

function renderizarTarefas() {

  listaTarefas.innerHTML = "";

  tarefas.forEach((tarefa, index) => {

    const novaTarefa = document.createElement("div");

    novaTarefa.className =
      "bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 shadow-2xl flex items-center justify-between hover:-translate-y-1 transition duration-300";

    novaTarefa.innerHTML = `
    
      <div class="flex items-center gap-5">

        <div class="w-6 h-6 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/30"></div>

        <div>
          <h3 class="text-2xl font-bold">
            ${tarefa.nome}
          </h3>

          <p class="text-slate-400 mt-1">
            Tarefa salva no sistema.
          </p>
        </div>
      </div>

      <button class="bg-red-500/20 text-red-300 px-5 py-3 rounded-2xl text-sm font-semibold border border-red-500/20 hover:bg-red-500/30 transition">
        Remover
      </button>
    `;

    const botaoRemover = novaTarefa.querySelector("button");

    botaoRemover.addEventListener("click", () => {

      tarefas.splice(index, 1);

      salvarTarefas();

      renderizarTarefas();

    });

    listaTarefas.prepend(novaTarefa);

  });

}

botaoNovaTarefa.addEventListener("click", () => {

  const nomeTarefa = prompt("Digite o nome da tarefa:");

  if(nomeTarefa === null || nomeTarefa.trim() === ""){
    return;
  }

  tarefas.push({
    nome: nomeTarefa
  });

  salvarTarefas();

  renderizarTarefas();

});

renderizarTarefas();