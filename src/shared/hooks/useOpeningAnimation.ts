import { useEffect, useState } from "react";

export function useOpeningAnimation(animationKey: string, duration = 2200): boolean {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    let frame = 0;
    let timer = 0;

    frame = window.requestAnimationFrame(() => {
      setIsOpening(true);
      timer = window.setTimeout(() => setIsOpening(false), duration);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [animationKey, duration]);

  return isOpening;
}
