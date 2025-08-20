import { useTimeline } from "../hooks/useTimeline";
import { useModal } from "../hooks/useModal";
import EventMarker from "./EventMarker";
import EventModal from "./EventModal";
import "../styles/Timeline.scss";
    
export default function Timeline() {
  const { events } = useTimeline();
  const { isOpen, selected, open, close } = useModal<typeof events[0]>();   //array destructuring

  return (
    <section id="timeline">
      <ul>
        {events.map((event, idx) => (  // array mapping
          <li
            key={idx}  // key for each event
            className="marker"
            data-year={event.year}
          >
            <EventMarker
              year={event.year}
              onClick={() => open(event)}  // identify event based on year
            />
          </li>
        ))}
          </ul>
          {/* check if open  then display modal base on selected*/}
      {isOpen && selected && <EventModal event={selected} onClose={close} />}  
    </section>
  );
}