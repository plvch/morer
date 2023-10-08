document.addEventListener('DOMContentLoaded', function() {
  const inputField = document.getElementById('input-field');
  const activateButton = document.getElementById('activate-button');
  const clearButton = document.getElementById('clear-button');
  
  // Load stored user input
  chrome.storage.local.get(['userInput', 'isActive'], function({ userInput, isActive }) {
      inputField.value = userInput || '';
      activateButton.innerText = isActive ? 'Deactivate' : 'Activate';
  });

  // Save input changes to local storage
  inputField.addEventListener('input', function() {
      chrome.storage.local.set({ userInput: inputField.value });
  });

  // Toggle active state and update button text
  activateButton.addEventListener('click', function() {
      chrome.storage.local.get('isActive', function({ isActive }) {
          const newIsActive = !isActive;
          chrome.storage.local.set({ isActive: newIsActive });
          activateButton.innerText = newIsActive ? 'Deactivate' : 'Activate';
      });
  });

  // Clear input and local storage
  clearButton.addEventListener('click', function() {
      inputField.value = '';
      chrome.storage.local.set({ userInput: '' });
  });
});
