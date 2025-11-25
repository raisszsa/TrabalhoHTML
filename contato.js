const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const confirmEmailInput = document.getElementById("confirm-email");
const msgInput = document.getElementById("mensagem");
const btn = form.querySelector("button[type='submit']");

const campos = [nameInput, emailInput, confirmEmailInput, msgInput];


btn.disabled = true;


function emailValido(email) {
return /\S+@\S+\.\S+/.test(email);
}


function validar() {
let valido = true;

document.querySelectorAll(".erro").forEach(e => e.textContent = "");


campos.forEach(campo => {
campo.classList.remove("is-invalid", "is-valid");
});

if (nameInput.value.trim() === "") {
nameInput.classList.add("is-invalid");
nameInput.nextElementSibling.textContent = "O nome é obrigatório.";
valido = false;
} else {
nameInput.classList.add("is-valid");
}


if (!emailValido(emailInput.value)) {
emailInput.classList.add("is-invalid");
emailInput.nextElementSibling.textContent = "Digite um email válido.";
valido = false;
} else {
emailInput.classList.add("is-valid");
}


if (confirmEmailInput.value !== emailInput.value || confirmEmailInput.value === "") {
confirmEmailInput.classList.add("is-invalid");
confirmEmailInput.nextElementSibling.textContent = "Os emails não coincidem.";
valido = false;
} else {
confirmEmailInput.classList.add("is-valid");
}

if (msgInput.value.trim() === "") {
msgInput.classList.add("is-invalid");
msgInput.nextElementSibling.textContent = "A mensagem não pode estar vazia.";
valido = false;
} else {
msgInput.classList.add("is-valid");
}

btn.disabled = !valido;
}

campos.forEach(campo => campo.addEventListener("input", validar));

form.addEventListener("submit", function (event) {
validar();

if (btn.disabled) {
event.preventDefault();
return;
}

event.preventDefault();
alert("Mensagem enviada com sucesso!");

form.reset();
campos.forEach(campo => campo.classList.remove("is-valid"));
btn.disabled = true;
});
