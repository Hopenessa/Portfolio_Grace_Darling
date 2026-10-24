import { useEffect, useState } from "react";
import { Button } from "./GoTopButton.styles";

export function GoTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 300);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <Button
      type="button"
      $visible={visible}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      aria-label="Back to top"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        });
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <path d="m6 11 6-6 6 6M12 5v14" />
      </svg>
    </Button>
  );
}
