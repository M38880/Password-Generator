function generatePassword() {
    var length = 12; 
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=";
    var password = '';

    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    var passwordDisplay = document.getElementById("password-display");
    passwordDisplay.innerText = password;
    resetClipboardMessage(passwordDisplay);
}

function copyToClipboard() {
    var passwordDisplay = document.getElementById("password-display");
    var passwordText = passwordDisplay.innerText;

    var textarea = document.createElement("textarea");
    textarea.value = passwordText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    if (!passwordDisplay.hasAttribute("data-copied")) {
        passwordDisplay.setAttribute("data-copied", "true");
        passwordDisplay.innerHTML += "<br>Password copied to clipboard";
    }
}

function resetClipboardMessage(element) {
    if (element.hasAttribute("data-copied")) {
        element.removeAttribute("data-copied");
        element.innerHTML = element.innerText;
    }
}
