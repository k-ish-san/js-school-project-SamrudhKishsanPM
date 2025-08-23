import { useRef } from "react";

export function useTimelineNavigation(totalMarkers: number) {
  const markersRef = useRef<(HTMLElement | null)[]>([]);

  const handleKeyDown = (
    e: React.KeyboardEvent,
    index: number,
    onActivate: () => void
  ) => {
    // if nothing selected ref length to 0
    if (!markersRef.current || markersRef.current.length === 0) return;
    // increment and decrement index to navigate
    const nextIndex = (index + 1) % totalMarkers;
    const prevIndex = (index - 1 + totalMarkers) % totalMarkers;
    // navigate using arrow keys
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        markersRef.current[nextIndex]?.focus();
        break;
      case "ArrowLeft":
        e.preventDefault();
        markersRef.current[prevIndex]?.focus();
        break;
      // enter to select or click the focused element
      case "Enter":
      case " ":
        e.preventDefault();
        onActivate();
        break;
    }
  };

  return { markersRef, handleKeyDown };
}
