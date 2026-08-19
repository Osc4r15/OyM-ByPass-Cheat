const antiTrampaSwitch = document.getElementById('antitrapa');
const statusElement = document.getElementById('statusAntitrapa');

function updateUI(enabled) {
  antiTrampaSwitch.checked = enabled;
  statusElement.textContent = enabled ? "Estado Anti-trampa: Activado" : "Estado Anti-trampa: Desactivado";
}

antiTrampaSwitch.addEventListener('change', async function () {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const enabled = antiTrampaSwitch.checked;

  updateUI(enabled);

  chrome.runtime.sendMessage({
    action: 'toggleAntiTrampa',
    enabled: enabled,
    tabId: tab.id,
    url: tab.url
  });
});

// Al abrir popup, cargar estado guardado
(async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const hostname = new URL(tab.url).hostname;
  chrome.storage.local.get(['sites'], result => {
    let sites = result.sites || {};
    updateUI(sites[hostname] || false);
  });
})();

// Otros interruptores (por ahora solo log)
document.getElementById("respuestas").addEventListener("change", function() {
  console.log("Respuestas correctas:", this.checked ? "ON" : "OFF");
});

document.getElementById("tiempo").addEventListener("change", function() {
  console.log("Tiempo:", this.checked ? "ON" : "OFF");
});

document.getElementById("antiafk").addEventListener("change", function() {
  console.log("Anti-AFK:", this.checked ? "ON" : "OFF");
});
