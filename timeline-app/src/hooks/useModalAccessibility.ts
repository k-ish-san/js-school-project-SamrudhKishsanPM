import { useEffect, useRef } from "react";

export function useModalAccessibility(isOpen: boolean, onClose: () => void) {
  // modal reference for div element
  const modalRef = useRef<HTMLDivElement>(null);
  // prev focused element any html element
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
    } else {
      previousFocus.current?.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // close modal using Esc key
    if (e.key === "Escape") {
      onClose();
    }
    // navigate using tab key
    if (e.key === "Tab") {
      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      // if nothing to focus return length as 0 which is first
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0]; //start
      const last = focusable[focusable.length - 1]; //end
      // forward navigate just tab key
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
      // backward navigate shift + tab
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    }
  };

  return { modalRef, handleKeyDown };
}
