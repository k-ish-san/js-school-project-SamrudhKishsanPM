# Timeline App (Stage 1)


## ✅ Stage 1: Static Skeleton (HTML Only)
This stage focuses on building the **semantic HTML structure** for the timeline app, ensuring accessibility and a clear layout.

### **Included in this stage:**
- **Header** with:
  - **Logo** (SVG) from logoipsum.
  - A **theme toggle placeholder** (checkbox input).
- **Navigation (`<nav>`)** for future filters (currently empty).
- **Timeline section (`<section id="timeline">`)** placeholder for event markers.
- **Modal container (`<div id="modal">`)** for future pop-ups.
- **Main content** with:
  - One **article** representing a timeline event.
  - A **heading** (`<h3>`) for the event title.
  - A **time element** for the date.
  - A **paragraph** describing the event.
  - A **figure** with an image and caption.

# Timeline App (Stage 2)

## ✅ Stage 2: CSS and Preprocessors
This stage focuses on styling the html skeleton using css using external stylesheet.

### **Included in this stage:**
- **CSS variables using SASS**
- **Used Flexbox for responsiveness and adjusted the space and size for different screen sizes using media queries.**
- **Made the dark mode toggle theme UI(Header styling)**
- **Created circular markers with dates above them for reference to the timeline**
- **Completed the content for the modal pop-up window**
- **Changed the modal visibility to hidden by default**
=======
# Timeline App (Stage 3)


## ✅ Stage 1: Adding interactivity with Javascript
This stage focuses on building the **interactivity** for the timeline app, ensuring events are displayed when you click the markers.

### **Included in this stage:**
- **data/events.json** containing the event information in json format.
- **script.js** file for fetching and parsing the events.json file.
- **Initialized each attributes in the html to javascript in script.js**
- **Created a function named OpenModal for the DOM manipulation which is called when you click the markers.** 
- **Added click event to openModal for displaying the events using textContent, src for image source.**.
- **Added closeModal function with and red cross button at the top-right that closes the event when you click the button or outside the content.**
- **Main content** with:
  - One **article** representing a timeline event.
  - A **heading** (`<h3>`) for the event title.
  - A **date element** for the date.
  - A **paragraph** describing the event.
  - A **figure** with an image and caption.
  - A **category** with mention of category which is "timeline of computing".

