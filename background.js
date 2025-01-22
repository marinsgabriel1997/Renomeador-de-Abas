chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "renameTab") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.update(activeTab.id, { title: request.newTitle });
    });
  }
});
