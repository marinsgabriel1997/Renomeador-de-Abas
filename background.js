chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "renameTab") {
    // Armazena o novo título no chrome.storage
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab) {
        // Salva o novo título no chrome.storage
        chrome.storage.local.set({ [activeTab.id]: request.newTitle }, () => {
          // Aplica o título imediatamente
          chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            func: changeTitle,
            args: [request.newTitle]
          });
        });
      }
    });
  }
});

function changeTitle(newTitle) {
  document.title = newTitle;  // Altera o título da página
}
