document.getElementById("renameButton").addEventListener("click", () => {
    const newTitle = document.getElementById("titleInput").value;
  
    if (newTitle) {
      chrome.runtime.sendMessage({ action: "renameTab", newTitle: newTitle });
    } else {
      alert("Por favor, insira um nome para a aba.");
    }
  });
  