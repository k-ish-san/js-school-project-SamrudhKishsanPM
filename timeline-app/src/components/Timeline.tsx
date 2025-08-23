import { useTimeline } from "../hooks/useTimeline";
import { useModal } from "../hooks/useModal";
import EventMarker from "./EventMarker";
import EventModal from "./EventModal";
import "../styles/Timeline.scss";

export default function Timeline() {
  const { events } = useTimeline();
  const { isOpen, selected, open, close } = useModal<(typeof events)[0]>(); //array destructuring

  return (
    <section id="timeline" aria-label="Timeline of Computing">
      <ul aria-label="Timeline Markers">
        {events.map(
          ( event, idx ) => (
            <li
              key={event.year} // key for each event
              className="marker"
              data-year={event.year} // no additional accessibility required since semantic elements are used
              aria-label={`Event marker for ${event.year}`}
            >
              <EventMarker
                index={idx} // index for each event
                year={event.year}
                totalMarkers={events.length}
                onClick={() => open(event)} // identify event based on year and  open the event
                isActive={selected?.year === event.year} // check if event is active
              />
            </li>
          )
        )}
      </ul>
      {/* check if open  then display modal base on selected*/}
      {isOpen && selected && (
        <EventModal event={selected} onClose={close} isOpen={isOpen} />
      )}
    </section>
  );
}
