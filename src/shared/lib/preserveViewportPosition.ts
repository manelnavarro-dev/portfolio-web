export function preserveViewportPosition(
  element: HTMLElement | null,
  updateLayout: () => void,
): void {
  if (!element) {
    updateLayout();
    return;
  }

  const previousTop = element.getBoundingClientRect().top;
  updateLayout();

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      const newTop = element.getBoundingClientRect().top;
      const difference = newTop - previousTop;

      if (Math.abs(difference) < 1) return;

      const html = document.documentElement;
      const previousScrollBehavior = html.style.scrollBehavior;

      html.style.scrollBehavior = "auto";
      window.scrollBy(0, difference);
      html.style.scrollBehavior = previousScrollBehavior;
    });
  });
}
