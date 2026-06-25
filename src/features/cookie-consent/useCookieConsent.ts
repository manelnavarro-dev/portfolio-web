import { useState } from "react";

const CONSENT_KEY = "cookie-consent";
type ConsentChoice = "accepted" | "rejected";

function readConsent(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function storeConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // The banner can still close when storage is unavailable (for example, strict privacy mode).
  }
}

export function useCookieConsent() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !readConsent();
  });

  const choose = (choice: ConsentChoice) => {
    storeConsent(choice);
    setIsVisible(false);
  };

  return {
    isVisible,
    accept: () => choose("accepted"),
    reject: () => choose("rejected"),
  };
}
