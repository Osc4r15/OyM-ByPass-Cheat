chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggleAntiTrampa') {
    const { enabled, tabId, url } = request;
    const hostname = new URL(url).hostname;

    chrome.storage.local.get(['sites'], result => {
      let sites = result.sites || {};
      sites[hostname] = enabled;
      chrome.storage.local.set({ sites });

      if (enabled) {
        chrome.scripting.executeScript({
          target: { tabId },
          files: ["blocker.js"]
        });
      } else {
        chrome.tabs.reload(tabId); // recargar para quitar efecto
      }
    });
  }
});

// Al cargar una página, aplicar si está en la lista
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url) {
    const hostname = new URL(tab.url).hostname;
    chrome.storage.local.get(['sites'], result => {
      let sites = result.sites || {};
      if (sites[hostname]) {
        chrome.scripting.executeScript({
          target: { tabId },
          files: ["blocker.js"]
        });
      }
    });
  }
});
