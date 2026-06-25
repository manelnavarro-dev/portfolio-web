import { useEffect, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 600;

export function useMobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInsideNav = navRef.current?.contains(target) ?? false;
      const clickedToggle = toggleRef.current?.contains(target) ?? false;

      if (!clickedInsideNav && !clickedToggle) setIsOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isOpen,
    navRef,
    toggleRef,
    toggle: () => setIsOpen((current) => !current),
    close: () => setIsOpen(false),
  };
}
