document.addEventListener("DOMContentLoaded", () => {
    function flipCard(card) {
        card.classList.toggle("flipped");
    }
    // ✅ 1. Update Google Maps link
    const mapLink = document.querySelector('#location a[href*="google.com/maps"]');
    if (mapLink) {
        mapLink.href = "https://maps.app.goo.gl/qQG5QujccSDWbQZc6";
        mapLink.textContent = "https://maps.app.goo.gl/qQG5QujccSDWbQZc6";
    }

    // ✅ 2. Add vertical padding to gallery section
    const galleryContainer = document.querySelector("#gallery .container");
    if (galleryContainer) {
        galleryContainer.classList.add("py-6");
    }

    // ✅ 3. Replace textarea content with placeholder
    const feedbackTextarea = document.querySelector("#message");
    if (feedbackTextarea) {
        feedbackTextarea.setAttribute("placeholder", "Enter feedback");
        feedbackTextarea.textContent = "";
    }

    // ✅ 4. Enable smooth scroll
    document.documentElement.classList.add("scroll-smooth");

    // ✅ 5. Optional: Add footer with café hours
    const footer = document.createElement("footer");
    footer.className = "text-center text-gray-700 p-4 mt-10 bg-gray-100";
    footer.innerHTML = `
        <p class="text-sm">&copy; 2025 The Caffeine Lab. All rights reserved.</p>
        <p class="text-sm">Open: Mon–Sat, 8AM – 10PM | Sunday: 9AM – 9PM</p>
    `;
    document.body.appendChild(footer);
});
