const toggles = document.querySelectorAll(".toggle_btn");
toggles.forEach(btn =>
    btn.addEventListener("click", () => {
        const content = btn.parentElement.nextElementSibling;
        content.classList.toggle("active");
        if (content.classList.contains("active")) {
            btn.textContent = "▲";
        } else {
            btn.textContent = "▼";
        }
    }
    ))