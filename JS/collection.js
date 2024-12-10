// JavaScript to add basic interactivity or enhancements
document.addEventListener("DOMContentLoaded", () => {
    console.log("Perfume collection page loaded.");

    // Example: Alert when clicking on a card (Optional)
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            alert(`You clicked on ${card.querySelector("h3").innerText}`);
        });
    });
});
