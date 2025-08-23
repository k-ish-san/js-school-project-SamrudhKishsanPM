import { useState } from "react";

export function useActiveMarker(initialIndex: number = 0) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
// To check the index of the active marker and set it as activeIndex
  const isActive = (index: number) => activeIndex === index;

  return { activeIndex, setActiveIndex, isActive };
}