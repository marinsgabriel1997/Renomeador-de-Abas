chrome.storage.local.get([window.location.href], (result) => {
    if (result[window.location.href]) {
      document.title = result[window.location.href];  // Aplica o título salvo
    }
  });
  