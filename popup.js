document.getElementById("renameButton").addEventListener("click", () => {
    const newTitle = document.getElementById("titleInput").value;
  
    if (newTitle) {
      chrome.runtime.sendMessage({ action: "renameTab", newTitle: newTitle });
    }
  });
  