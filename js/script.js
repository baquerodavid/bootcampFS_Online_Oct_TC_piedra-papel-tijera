//opciones
const opciones = ["piedra", "papel", "tijera"];
let userPoints = 0;
let pcPoints = 0;
//capturar los botones
const btnPiedra = document.querySelector('button[data-jugada="piedra"]');
const btnPapel = document.querySelector('button[data-jugada="papel"]');
const btnTijera = document.querySelector('button[data-jugada="tijera"]');
const contadorUsuario = document.getElementById("contador-usuario");
const contadorMaquina = document.getElementById("contador-ordenador");
const resultados = document.getElementById("resultados");
//iconos
const iconos = ["✊", "✋", "✌️"];
const win = document.createElement("p");
const textWin = "Ganaste";
const textLose = "Perdiste";
const jugada = document.createElement("p");
const loading = document.createElement("p");
let pcIcon = "";
let userWin = false;
let pcWin = false;

btnPiedra.addEventListener("click", function () {
  //inicializamos valores
  const userIcon = "✊";
  const pcJugada = opciones[Math.floor(Math.random() * 3)];
  win.className = ""; //eliminamos las clases de win

  //comparar con la maquina
  if (pcJugada === "tijera") {
    pcIcon = "✌️";
    //sumar puntos
    userPoints++; //gana user
    win.textContent = textWin;
    win.classList.add("win");
    userWin = true;
  } else if (pcJugada === "papel") {
    pcIcon = "✋";
    pcPoints++; //gana pc
    pcWin = true;
    win.textContent = textLose;
    win.classList.add("lose");
  } else {
    pcIcon = userIcon;
    win.classList.add("win");
    win.textContent = "Empate";
  }
  //mostar la jugada en el html
  resultados.textContent = "";
  loading.textContent = "Jugando CPU...";
  loading.classList.add("loading");
  resultados.appendChild(loading);
  setTimeout(() => {
    loading.textContent = "";
    jugada.textContent = ` ✊ VS ${pcIcon}`;
    resultados.appendChild(jugada);
    win.classList.add("pulse");
    resultados.appendChild(win);
  }, 800);

  //contadores
  contadorUsuario.innerHTML = `<p id="contador-usuario">Tus puntos: ${userPoints}</p>`;
  contadorMaquina.innerHTML = `<p id='contador-ordenador'>Punatos de la máquina: ${pcPoints}</p>`;
});

btnPapel.addEventListener("click", function () {
  const userIcon = "✋";
  const pcJugada = opciones[Math.floor(Math.random() * 3)];
  win.className = ""; //eliminamos las clases de win

  //comparar con la maquina
  if (pcJugada === "tijera") {
    pcIcon = "✌️";
    pcPoints++; //gana Pc
    win.textContent = textLose;
    win.classList.add("lose");
    pcWin = true;
  } else if (pcJugada === "piedra") {
    pcIcon = "✊";
    userPoints++; //gana user
    userWin = true;
    win.textContent = textWin;
    win.classList.add("win");
  } else {
    pcIcon = userIcon;
    win.classList.add("win");
    win.textContent = "Empate";
  }
  //mostar la jugada en el html
  resultados.textContent = "";
  loading.textContent = "Jugando CPU...";
  loading.classList.add("loading");
  resultados.appendChild(loading);
  setTimeout(() => {
    loading.textContent = "";
    jugada.textContent = ` ${userIcon} VS ${pcIcon}`;
    resultados.appendChild(jugada);
    win.classList.add("pulse");
    resultados.appendChild(win);
  }, 800);

  //contadores
  contadorUsuario.innerHTML = `<p id="contador-usuario">Tus puntos: ${userPoints}</p>`;
  contadorMaquina.innerHTML = `<p id='contador-ordenador'>Punatos de la máquina: ${pcPoints}</p>`;
});

btnTijera.addEventListener("click", function () {
  const userIcon = "✌️";
  const pcJugada = opciones[Math.floor(Math.random() * 3)];
  win.className = ""; //eliminamos las clases de win

  //comparar con la maquina
  if (pcJugada === "piedra") {
    pcIcon = "✊";
    pcPoints++; //gana Pc
    win.textContent = textLose;
    win.classList.add("lose");
    pcWin = true;
  } else if (pcJugada === "papel") {
    pcIcon = "✋";
    userPoints++; //gana user
    userWin = true;
    win.textContent = textWin;
    win.classList.add("win");
  } else {
    pcIcon = userIcon;
    win.classList.add("win");
    win.textContent = "Empate";
  }
  //mostar la jugada en el html
  resultados.textContent = "";
  loading.textContent = "Jugando CPU...";
  loading.classList.add("loading");
  resultados.appendChild(loading);
  setTimeout(() => {
    loading.textContent = "";
    jugada.textContent = ` ${userIcon} VS ${pcIcon}`;
    resultados.appendChild(jugada);
    win.classList.add("pulse");
    resultados.appendChild(win);
  }, 700);

  //contadores
  contadorUsuario.innerHTML = `<p id="contador-usuario">Tus puntos: ${userPoints}</p>`;
  contadorMaquina.innerHTML = `<p id='contador-ordenador'>Punatos de la máquina: ${pcPoints}</p>`;
});
