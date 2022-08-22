setInterval(setClock, 1000);

const lancettaOre = document.querySelector("#lancetta-ore");
const lancettaMinuti = document.querySelector("#lancetta-minuti");
const lancettaSecondi = document.querySelector("#lancetta-secondi");

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(lancettaSecondi, secondsRatio);
  setRotation(lancettaMinuti, minutesRatio);
  setRotation(lancettaOre, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
