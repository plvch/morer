chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'putData') {
      // Save the data to the webpage's local storage
      localStorage.setItem('extensionData', message.data);
  } else if (message.action === 'clearData') {
      // Clear the data from the webpage's local storage
      localStorage.removeItem('extensionData');
  }
});
