import { useState, useEffect } from "react";
import eventsData from "../data/events.json";

export interface Event {   
  year: string;
  title: string;
  date: string;
  description: string;
  image: string;
  category: string;
}

export function useTimeline() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    setEvents(eventsData);
  }, []);

  return { events };
}