import "../styles/EventMarker.scss";
import { useTimelineNavigation } from "../hooks/useTimelineNavigation";
interface Props {
  year: string;
  onClick: () => void;
  isActive?: boolean;
  index: number;
  totalMarkers: number;
  
}

export default function EventMarker({ year, onClick, isActive, index, totalMarkers }: Props) {
  const { markersRef, handleKeyDown } = useTimelineNavigation(totalMarkers);
  return (
    // button for year marker
    <button
      type="button"
      onClick={onClick}
      ref={(el) => { markersRef.current[index] = el }}
      tabIndex={0}
      onKeyDown={(e) => handleKeyDown(e, index, onClick)}
      aria-current={isActive ? "true" : undefined} // add isActive to highlight active marker/button
      className={isActive ? "active" : undefined}
    >
      {year}
    </button>
  );
}
