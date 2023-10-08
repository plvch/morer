chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete') { // Ensures the script runs after the page is loaded
        chrome.storage.local.get(['userInput', 'isActive'], function({ userInput, isActive }) {
            const action = isActive ? 'putData' : 'clearData';
            chrome.tabs.sendMessage(tabId, { action: action, data: userInput });
        });
    }
});
