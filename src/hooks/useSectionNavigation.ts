import { useEffect } from "react";

export function useSectionNavigation() {
  useEffect(() => {
    let frame = 0;

    const navigate = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey ||
        !(event.target instanceof Element)
      )
        return;

      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link || link.hasAttribute("download") || link.target === "_blank")
        return;

      const id = link.getAttribute("href")?.slice(1);
      const section = id ? document.getElementById(id) : null;
      if (!section) return;

      event.preventDefault();
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        if (!section.hasAttribute("tabindex")) {
          section.setAttribute("tabindex", "-1");
          section.addEventListener(
            "blur",
            () => section.removeAttribute("tabindex"),
            { once: true },
          );
        }
        section.focus({ preventScroll: true });
        section.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
          block: "start",
        });
      });
    };

    document.addEventListener("click", navigate);
    return () => {
      document.removeEventListener("click", navigate);
      window.cancelAnimationFrame(frame);
    };
  }, []);
}
