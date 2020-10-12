let message = document.querySelector('.white-form textarea');
let sendButton = document.querySelector('.white-form.col-1 .transparent-button')



message.oninput = function () {
    if (message.value.length < 5 || message.value.length > 140) {
        message.classList.add('warning');
        sendButton.disabled = true;        
    } else {
        message.classList.remove('warning');
        sendButton.disabled = false;         
    }

}

console.log(sendButton);
console.log(message);
