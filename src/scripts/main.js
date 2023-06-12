AOS.init();

const dataDoEvento = new Date("Jul 06, 2023 19:00");
const timeStampEvento = dataDoEvento.getTime();

const contagem = setInterval(function () {
  const agora = new Date();
  const timeStampAgora = agora.getTime();

  const distanciaAteEvento = timeStampEvento - timeStampAgora;

  const diaEmMS = 1000 * 60 * 60 * 24;
  const horaEmMS = 1000 * 60 * 60;
  const minutosEmMS = 1000 * 60;

  const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMS);
  const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMS) / horaEmMS);
  const minutosAteEvento = Math.floor(
    (distanciaAteEvento % horaEmMS) / minutosEmMS
  );
  const segundosAteEvento = Math.floor(
    (distanciaAteEvento % minutosEmMS) / 1000
  );

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteEvento} dia(s) ${horasAteEvento}hr(s) ${minutosAteEvento}min ${segundosAteEvento}seg`;

  if (distanciaAteEvento < 0) {
    clearInterval(contagem);
    document.getElementById("contador").innerHTML = `Evento já iniciado`;
  }
}, 1000);
