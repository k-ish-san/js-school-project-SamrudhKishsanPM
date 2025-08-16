// Fetch events data from events.json
fetch("data/events.json")
  .then(res => res.json())
  .then(events => {
    const timeline = document.querySelector("#timeline ul");

    // Render markers
    timeline.innerHTML = ""; // clear content
    events.forEach(event => {
      const li = document.createElement("li");
      li.classList.add("marker");
      li.dataset.year = event.year;
      li.textContent = event.year;
      li.addEventListener("click", () => openModal(event));
      timeline.appendChild(li);
    });
  })
    .catch(err => console.error("Error loading events:", err));
  
    
// Modal elements initialization
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const modalTitle = document.querySelector(".modal-title");
const modalDate = document.getElementById("modal-date");
const modalDescription = document.getElementById("modal-description");
const modalImage = document.getElementById("modal-image");
const modalCaption = document.getElementById("modal-caption");
const modalCategory = document.getElementById("modal-category");

// Open modal with event data
function openModal(eventData) {
  modalTitle.textContent = eventData.title;
  modalDate.textContent = eventData.date;
  modalDescription.textContent = eventData.description;
  modalImage.src = eventData.image;
  modalCaption.textContent = eventData.caption;
  modalCategory.textContent = `Category: ${eventData.category}`;
// display: block; for modal
  modal.style.display = "block";
}

// Close modal function
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

// close on background click outside content
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});