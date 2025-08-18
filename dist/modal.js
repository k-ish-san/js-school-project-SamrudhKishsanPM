// open modal function initialization
export function openModal(event) {
    document.querySelector(".modal-title").textContent =
        event.title;
    document.getElementById("modal-date").textContent =
        event.date;
    document.getElementById("modal-category").textContent =
        event.category;
    document.getElementById("modal-description").textContent =
        event.description;
    document.getElementById("modal-image").src =
        event.image;
    document.getElementById("modal-caption").textContent =
        event.caption;
    document.getElementById("modal").style.display = "block";
}
// close modal function
export function closeModal() {
    var _a;
    (_a = document.getElementById("modal-close")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
    });
}
