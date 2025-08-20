import ReactDOM from "react-dom";
import { type Event } from "../hooks/useTimeline";
import "../styles/EventModal.scss";
interface Props {
  event: Event;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: Props) {
  return ReactDOM.createPortal(
    <div id="modal">
      <main>
        <article>
          {/*  close button */}
          <button id="modal-close" onClick={onClose}>
            X
          </button>
          <h3 className="modal-title">{event.title}</h3>
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
