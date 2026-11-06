function toggleMenu() {
    document.getElementById("menu").classList.toggle("open");
}
function checkForm(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var result = document.getElementById("formMessage");

    if (name.length < 2) {
        result.textContent = "Please write your name.";
    } else if (email.indexOf("@") === -1) {
        result.textContent = "The email must have the @ sign.";
    } else if (message.length < 10) {
        result.textContent = "The message must have at least 10 characters.";
    } else {
        result.textContent = "Thank you, " + name + "! Your message is OK.";
    }
}
function openModal(photo) {
    document.getElementById("modalImage").src = photo.src;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}