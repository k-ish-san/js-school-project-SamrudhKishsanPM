import { useState } from "react";

export function useModal<T>() {
  const [isOpen, setIsOpen] = useState(false);  // default closed
  const [selected, setSelected] = useState<T | null>(null);  // empty at the start no events displayed or stored
 // open modal
  const open = (data: T) => {
    setSelected(data);
    setIsOpen(true);
  };

  // close modal
  const close = () => {
    setIsOpen(false);
    setSelected(null);
  };

  return { isOpen, selected, open, close }
}