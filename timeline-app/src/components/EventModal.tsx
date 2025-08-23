import ReactDOM from "react-dom";
import { type Event } from "../hooks/useTimeline";
import "../styles/EventModal.scss";
import { useModalAccessibility } from "../hooks/useModalAccessibility";
interface Props {
  event: Event;
  onClose: () => void;
  isOpen: boolean;
}

export default function EventModal({ event, onClose, isOpen }: Props) {
  const { modalRef, handleKeyDown } = useModalAccessibility(isOpen, onClose);
  
  // if initially not open return null
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      id="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <main
        id="modal-content"
        ref={modalRef}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        <article>
          {/*  close button */}
          <button id="modal-close" onClick={onClose} arial-label="Close modal">
            X
          </button>
          {/* fixed h3  -> h2 */}
          <h2 className="modal-title">{event.title}</h2>
          <time id="modal-date">{event.date}</time>
          <p id="modal-category">{event.category}</p>
          <p id="modal-description">{event.description}</p>
          <figure>
            <img
              id="modal-image"
              src={event.image}
              alt={event.title}
              className="img-fluid"
            />
            <figcaption id="modal-caption">{event.title}</figcaption>
          </figure>
        </article>
      </main>
    </div>,
    document.body
  );
}
