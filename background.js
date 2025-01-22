chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "renameTab") {
    // Obtém a aba ativa e injeta um script nela para alterar o título
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab) {
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          func: changeTitle,
          args: [request.newTitle]
        });
      }
    });
  }
});

function changeTitle(newTitle) {
  document.title = newTitle;  // Altera o título da página
}
