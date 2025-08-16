import { EventData } from "./interfaces/types.js";

export async function loadEvents(): Promise<EventData[]> {
  const res = await fetch("data/events.json");
  if (!res.ok) {
    throw new Error(`Failed to load events.json: ${res.status}`);
  }
  return res.json();
}
