import { openModal } from "./modal.js";
// display the event or render it on clicking the marker
export function renderer(events) {
    document.querySelectorAll(".marker").forEach((marker) => {
        marker.addEventListener("click", () => {
            const year = marker.dataset.year;
            const event = events.find((e) => e.year === year);
            // call openModal to display the event based on year clicked
            if (event)
                openModal(event);
        });
    });
}
