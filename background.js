chrome.tabs.onCreated.addListener((tab) => {
    renameTab(tab);
  });
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      renameTab(tab);
    }
  });
  
  function renameTab(tab) {
    const originalTitle = tab.title;
  
    let newTitle;
  
    // Usando switch para verificar os títulos e renomeá-los
    switch (originalTitle) {
      case "Cadastro de Ramais da RCSF Avaya - Oficial":
        newTitle = "RAMAIS OFICIAL";
        break;
      case "Cadastro de Códigos de Autorização de Chamadas - CACs - Oficial":
        newTitle = "CAC OFICIAL";
        break;
      default:
        newTitle = originalTitle; // Mantém o título original se não atender a nenhum caso
        break;
    }
  
    // Atualiza o título da aba, se necessário
    if (newTitle !== originalTitle) {
      chrome.tabs.update(tab.id, { title: newTitle });
    }
  }
  