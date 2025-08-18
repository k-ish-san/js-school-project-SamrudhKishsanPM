import { EventData } from "./interfaces/types.js";

// open modal function initialization
export function openModal(event: EventData) {
  (document.querySelector(".modal-title") as HTMLElement).textContent =
    event.title;
  (document.getElementById("modal-date") as HTMLElement).textContent =
    event.date;
  (document.getElementById("modal-category") as HTMLElement).textContent =
    event.category;
  (document.getElementById("modal-description") as HTMLElement).textContent =
    event.description;
  (document.getElementById("modal-image") as HTMLImageElement).src =
    event.image;
  (document.getElementById("modal-caption") as HTMLElement).textContent =
    event.caption;

  document.getElementById("modal")!.style.display = "block";
}

// close modal function

export function closeModal() {
  document.getElementById("modal-close")?.addEventListener("click", () => {
    document.getElementById("modal")!.style.display = "none";
  });
}
