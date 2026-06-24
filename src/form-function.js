"use Strict";

const createError = (text, input) => {
    const error = document.createElement("div");
    error.className = "error";
    error.textContent = text;
    input.after(error);
};

password.addEventListener("input", () => {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    document.querySelectorAll(".error").forEach((el) => el.remove());

    if (!regExp.test(password.value) || password.value === "") {
        createError(
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.",
            password,
        );
    }
});

passwordConfirm.addEventListener("input", () => {
    document.querySelectorAll(".error").forEach((el) => el.remove());

    if (passwordConfirm.value !== password.value) {
        createError("Passwords must match", passwordConfirm);
    }
});

email.addEventListener("input", () => {
    const regExpForMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    document.querySelectorAll(".error").forEach((el) => el.remove());

    if (!regExpForMail.test(email.value)) {
        createError("Please enter a valid email address.", email);
    }
});
