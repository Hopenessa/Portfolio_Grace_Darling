import { Bar } from "./Header.styles";
import { useEffect, useRef, useState } from "react";
import { Container } from "../Shared";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    const sections = [
      ...document.querySelectorAll<HTMLElement>("main > section[id]"),
    ];
    let frame = 0;
    const update = () => {
      frame = 0;
      const height = header.current?.getBoundingClientRect().height ?? 96;
      let current = "home";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= height + 40)
          current = section.id;
      }
      if (
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4
      )
        current = sections.at(-1)?.id ?? current;
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <Bar ref={header}>
      <Container>
        <a
          className="brand"
          href="#home"
          aria-label="Golden Mustang Studio home"
        >
          <img
            src="images/studio-logo.svg"
            alt="Golden Mustang Studio"
            width="84"
            height="84"
          />
        </a>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
        <nav id="navigation" data-open={open} aria-label="Main navigation">
          {[
            ["home", "Home"],
            ["work", "My works"],
            ["about", "The artist"],
            ["process", "Services"],
            ["contact", "Booking information"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={"#" + id}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </Container>
    </Bar>
  );
}
