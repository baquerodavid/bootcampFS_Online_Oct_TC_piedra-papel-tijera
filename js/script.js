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

btnPiedra.addEventListener("click", function () {
  //guardar eleccion
  const userJugada = "piedra";
  //compararar con maquina
  const pcJugada = opciones[Math.floor(Math.random() * 3)];
  //comparar con la maquina
  if (pcJugada === "tijera") {
    //sumar puntos
    userPoints++; //gana user
  } else if (pcJugada === "papel") {
    pcPoints++; //gana pc
  }
  //   console.log("Maquina Jugó ", pcJugada);
  //   console.log("Usuario Jugó ", userJugada);
  //   console.log("Maquina: ", pcPoints, "user: ", userPoints);
  const jugada = document.createElement("p");
  jugada.textContent = `La jugada del usuario es: ${userJugada} y la jugada del ordenador es: ${pcJugada}.`;
  resultados.textContent = "";
  resultados.appendChild(jugada);

  contadorUsuario.innerHTML = `<p id="contador-usuario">Tus puntos: ${userPoints}</p>`;
  contadorMaquina.innerHTML = `<p id='contador-ordenador'>Punatos de la máquina: ${pcPoints}</p>`;
});

btnPapel.addEventListener("click", function () {
  const userJugada = "papel";
  const pcJugada = opciones[Math.floor(Math.random() * 3)];
  if (pcJugada == "piedra") {
    userPoints += 1;
  } else if (pcJugada == "tijera") {
    pcPoints += 1;
  }
  //   console.log("Maquina Jugó", pcJugada);
  //   console.log("Usuario Jugó", userJugada);
  //   console.log("Maquina: ", pcPoints, "user: ", userPoints);
  const jugada = document.createElement("p");
  jugada.innerHTML = `<p>La jugada del <em>usuario</em> es: ${userJugada} y la jugada del <em>ordenador</em> es: ${pcJugada}.</p>`;
  resultados.textContent = "";
  resultados.appendChild(jugada);

  contadorUsuario.innerHTML = `<p id="contador-usuario">Tus puntos: ${userPoints}</p>`;
  contadorMaquina.innerHTML = `<p id='contador-ordenador'>Punatos de la máquina: ${pcPoints}</p>`;
});

//tijera
btnTijera.addEventListener("click", function () {
  //guardar eleccion
  const userJugada = "tijera";
  //compararar con maquina
  const pcJugada = opciones[Math.floor(Math.random() * 3)];

  //comparar con la maquina
  if (pcJugada === "papel") {
    //sumar puntos
    userPoints++; //gana user
  } else if (pcJugada === "piedra") {
    pcPoints++; //gana pc
  }
  //   console.log("Maquina Jugó", pcJugada);
  //   console.log("Usuario Jugó", userJugada);
  //   console.log("Maquina: ", pcPoints, "user: ", userPoints);
  const jugada = document.createElement("p");
  jugada.innerHTML = `<p>La jugada del <span class="jugador">usuario</span> es: <span class='jugada'>${userJugada}</span> y la jugada del ordenador es: <span class="jugada">${pcJugada}</span>.</p>`;
  // jugada.textContent = `La jugada del usuario es: ${userJugada} y la jugada del ordenador es: ${pcJugada}.`;
  // resultados.textContent = "";
  // resultados.appendChild(jugada);
  //   setTimeout(() => {
  //     resultados.removeChild(jugada);
  //   }, 5000);

  contadorUsuario.innerHTML = `<p id="contador-usuario">Tus puntos: ${userPoints}</p>`;
  contadorMaquina.innerHTML = `<p id='contador-ordenador'>Punatos de la máquina: ${pcPoints}</p>`;
});

//actualizar puntos en el dom
