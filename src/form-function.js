"use Strict";

const createError = (text, input) => {
    const error = document.createElement("div");
    error.className = "error";
    error.textContent = text;
    input.after(error);
};

divFormElemInfo.addEventListener("input", () => {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    document.querySelectorAll(".error").forEach((el) => el.remove());

    if (!regExp.test(password.value) || password.value === "") {
        createError(
            "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.",
            password,
        );
    } else if (passwordConfirm.value !== password.value) {
        createError("Passwords must match", passwordConfirm);
    }
});

email.addEventListener("click", () => {
    const regExpForMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regExpForMail.test(email.value)) {
        createError("Please enter a valid email address.", email);
    }
});
