let userName = localStorage.getItem("user-name");

if (!userName) {
    userName = prompt("What is your name?");
    localStorage.setItem("user-name", userName);
}

document.querySelector("h1").innerText = `Welcome Back, ${userName}!`;
