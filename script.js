const savedNameDisplay = document.getElementById("savedName");
const savedName = localStorage.getItem("nome");

const nameInput = document.getElementById("nameInput");
const saveButton = document.getElementById("saveButton");
const removeButton = document.getElementById("removeButton");

if (savedName) {
  savedNameDisplay.innerText = "Nome salvato:" + savedName;
} else {
  savedNameDisplay.innerText = "Nessun nome salvato.";
}
saveButton.addEventListener("click", () => {
  const name = nameInput.value;
  if (name) {
    localStorage.setItem("nome", name);
    savedNameDisplay.innerText = `Nome salvato: ${name} `;
  }
});

removeButton.addEventListener("click", () => {
  localStorage.removeItem("nome");
  savedNameDisplay.innerText = "Nessun nome salvato.";
  nameInput.value = "";
});
// SECONDO ESERICIZO
const contatore = () => {
  let tempoTrascorso = parseInt(sessionStorage.getItem("timeElapsed")) || 0;

  function updateCounter() {
    tempoTrascorso++;
    sessionStorage.setItem("timeElapsed", tempoTrascorso);
    document.getElementById("timer").innerText = tempoTrascorso;
  }

  setInterval(updateCounter, 1000);
};
contatore();
