const timer = document.getElementById("timer");

const btnIniciar = document.getElementById("btnIniciar");
const btnPausar = document.getElementById("btnPausar");
const btnResetar = document.getElementById("btnResetar");

let minutos = 25;
let segundos = 0;

let intervalo = null;

function atualizarTela() {
  timer.textContent =
    `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
}

function iniciarPomodoro() {

  if (intervalo) return;

  intervalo = setInterval(() => {

    if (segundos === 0) {

      if (minutos === 0) {

        clearInterval(intervalo);
        intervalo = null;

        alert("Pomodoro concluído! 🎉");

        return;
      }

      minutos--;
      segundos = 59;

    } else {

      segundos--;

    }

    atualizarTela();

  }, 1000);

}

function pausarPomodoro() {

  clearInterval(intervalo);
  intervalo = null;

}

function resetarPomodoro() {

  clearInterval(intervalo);
  intervalo = null;

  minutos = 25;
  segundos = 0;

  atualizarTela();

}

btnIniciar.addEventListener("click", iniciarPomodoro);
btnPausar.addEventListener("click", pausarPomodoro);
btnResetar.addEventListener("click", resetarPomodoro);

atualizarTela();