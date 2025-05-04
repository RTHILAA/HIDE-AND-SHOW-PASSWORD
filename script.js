let pwd = document.getElementById("password");
let slash = document.getElementById("slash");

pwd.addEventListener("input", () => {
    if (pwd.value.length > 0) {
        slash.style.display = "block";
    } else {
        slash.style.display = "none";
    }
});

slash.addEventListener("click", () => {
    if (pwd.type === "password") {
        pwd.type = "text";
        slash.classList.remove("fa-eye-slash");
        slash.classList.add("fa-eye");
    } else {
        pwd.type = "password";
        slash.classList.remove("fa-eye");
        slash.classList.add("fa-eye-slash");
    }
});