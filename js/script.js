let currentLang = "en";

async function loadLang(lang) {
	const res = await fetch(`/i18n/${lang}.json`);
	const data = await res.json();

	document.querySelectorAll("[data-i18n]").forEach(el => {
		const keys = el.dataset.i18n.split(".");
		let value = data;

		keys.forEach(k => value = value[k]);
		el.textContent = value;
	});

	currentLang = lang;
	localStorage.setItem("lang", lang);

	const toggleBtn = document.getElementById("lang-toggle");
	const toggleBtnMobile = document.getElementById("lang-toggle-mobile");
	if (toggleBtn) {
		toggleBtn.textContent = lang === "en" ? "Slovenčina" : "English";
		toggleBtnMobile.textContent = lang === "en" ? "Slovenčina" : "English";

		const navLinks = document.querySelector('.nav-links');
    if (navLinks && navLinks.classList.contains('active')) {
			navLinks.classList.remove('active');
    }
	}
}

function toggleLang() {
	const newLang = currentLang === "en" ? "sk" : "en";
	loadLang(newLang);
}

window.addEventListener("DOMContentLoaded", () => {
	const saved = localStorage.getItem("lang") || "en";
	loadLang(saved);
});