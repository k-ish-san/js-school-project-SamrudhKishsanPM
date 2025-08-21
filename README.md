# Timeline App

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


## ✅ Stage 2: CSS and Preprocessors
This stage focuses on styling the html skeleton using css using external stylesheet.

### **Included in this stage:**
- **CSS variables using SASS**
- **Used Flexbox for responsiveness and adjusted the space and size for different screen sizes using media queries**.
- **Made the dark mode toggle theme UI(Header styling)**.
- **Created circular markers with dates above them for reference to the timeline**.
- **Completed the content for the modal pop-up window**.
- **Changed the modal visibility to hidden by default**.


## ✅ Stage 3: Adding interactivity with Javascript
This stage focuses on building the **interactivity** for the timeline app, ensuring events are displayed when you click the markers.

### **Included in this stage:**
- **data/events.json** containing the event information in json format.
- **script.js** file for fetching and parsing the events.json file.
- **Initialized each attributes in the html to javascript in script.js**
- **Created a function named OpenModal for the DOM manipulation which is called when you click the markers.** 
- **Added click event to openModal for displaying the events using textContent, src for image source**.
- **Added closeModal function with and red cross button at the top-right that closes the event when you click the button or outside the content.**
- **Main content** with:
  - One **article** representing a timeline event.
  - A **heading** (`<h3>`) for the event title.
  - A **date element** for the date.
  - A **paragraph** describing the event.
  - A **figure** with an image and caption.
  - A **category** with mention of category which is "timeline of computing".

## ✅ Stage 4: Adding Static typing and modules using typescript.
This stage focuses on building the **type safety and reliablility of code** for the timeline app, ensuring only certain types are used to avoid errors during run time.

### **Included in this stage:**
- **`data/events.json` containing the event information in json format.(same as before)**
- **src folder containing index.ts and other .ts modules**.
- **src/interfaces/types containing the types of the event data.**
- **Created modules for fetching, rendering, modal display/close of events.** 
- **Created a tsconfig.json file with root src folder(for only .ts files) with compiler options default js ES6 and enabled strict.**.
- **Added dist folder containing the js files that are build using `npm run build` command.**
- **Modified the src in index.html to dist/index.js and also corrected some typos and responsiveness**.
- **Modified the src in index.html to dist/index.js and also corrected some typos and responsiveness**.

## ✅ Stage 5: Building the dynamic user interfacing using react + ts.
This stage focuses on building the **UI of the app using react(JSX) and typescript with vite build setup** using features like component architecture, custom hooks, Virtual DOM.

### **Included in this stage:**
- **`data/events.json` containing the event information in json format(same as before)**.
- **src folder containing assets, components, data, hooks, styles(SASS)**.
- **components folder contains all the components (.tsx)**.
- **styles folder contains all the styles for the corresponding components including variables and globalscss file for main(using SASS)** .
- **custom hooks like useTheme for theme toggle, useTimeline for handling events, and useModal for opening and closing modal(the events)**.
- **Used Vite + react + typescript setup.**


