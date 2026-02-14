// For Search Box Toggle

const searchIcon = document.getElementById("searchIcon");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");

searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle("active");
    searchInput.focus();
});

async function setLanguage(lang) {
    const response = await fetch(`lang/${lang}.json`);
    const translations = await response.json();

    document.querySelectorAll("body *").forEach(el => {
        if (el.children.length === 0) {
            const text = el.innerText.trim();
            if (translations[text]) {
                el.innerText = translations[text];
            }
        }
    });

    localStorage.setItem("language", lang);
}

// page load pe saved language
const savedLang = localStorage.getItem("language");
if (savedLang) {
    setLanguage(savedLang);
}
