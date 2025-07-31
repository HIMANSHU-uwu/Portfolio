document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.querySelector(".theme-toggle");

    const savedTheme = localStorage.getItem("theme") || "light";
    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
        themeToggleButton.textContent = "🌞";
    } else {
        themeToggleButton.textContent = "🌙";
    }

    window.toggleTheme = function () {
        document.body.classList.toggle("dark-theme");
        const isDarkTheme = document.body.classList.contains("dark-theme");
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
        themeToggleButton.textContent = isDarkTheme ? "🌞" : "🌙";
    };
});
