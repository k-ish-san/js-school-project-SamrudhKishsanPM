import "../styles/EventMarker.scss"

interface Props
{
  year: string;
  onClick: () => void;
}

export default function EventMarker({ year, onClick }: Props) {
    return (
      // button for year marker
     <button onClick={onClick}>  
      {year}
    </button>
  );
}