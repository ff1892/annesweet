let message = document.querySelector('.form-column textarea');
let sendButton = document.querySelector('.transparent-button.form')
let charWarn = document.querySelector('.char-warn');
let charCounter = document.querySelector('.char-counter');


message.oninput = function () {
    charCounter.textContent = message.value.length;
    if (message.value.length < 5 || message.value.length > 140) {
        message.classList.add('warning');
        sendButton.disabled = true;
        charCounter.style.color = 'red';               
    } else {
        message.classList.remove('warning');
        sendButton.disabled = false; 
        charCounter.style.color = '#2E2F22';            
    }

}
