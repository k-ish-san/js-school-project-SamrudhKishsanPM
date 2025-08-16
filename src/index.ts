import { loadEvents } from "./fetcher.js";
import { renderer } from "./renderer.js";
import { closeModal } from "./modal.js";  

// call all function here
async function init() {
  try {
    const events = await loadEvents();
    renderer(events); // to open modal
    closeModal(); // to close modal
  } catch (err) {
    console.error(err);
  }
}

init();



