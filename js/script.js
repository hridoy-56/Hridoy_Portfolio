// ===== Form Validation =====
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // page reload বন্ধ করে

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value.trim();

            // Basic validation
            if (name === "" || email === "" || subject === "" || message === "") {
                formMessage.style.color = "red";
                formMessage.textContent = "Please fill in all required fields.";
                return;
            }

            // Email format check
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                formMessage.style.color = "red";
                formMessage.textContent = "Please enter a valid email address.";
                return;
            }

            // Success
            formMessage.style.color = "green";
            formMessage.textContent = "Thank you, " + name + "! Your message has been sent successfully.";
            form.reset();
        });
    }
});