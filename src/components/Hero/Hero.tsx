import { useEffect, useState } from "react";
import { Section } from "./Hero.styles";
import { artist } from "../../data/portfolio";
import { Button, Container, Eyebrow } from "../Shared";

const titleLines = ["Golden Mustang", "Studio"];
const titleLength = titleLines.join("").length;

export function Hero() {
  const [visibleLetters, setVisibleLetters] = useState(titleLength);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    setVisibleLetters(0);
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      const count = Math.min(
        titleLength,
        Math.max(0, Math.floor((Date.now() - startedAt - 250) / 90) + 1),
      );
      setVisibleLetters(count);
      if (count === titleLength) window.clearInterval(timer);
    }, 45);
    const finish = () => {
      if (motion.matches) {
        window.clearInterval(timer);
        setVisibleLetters(titleLength);
      }
    };
    motion.addEventListener("change", finish);
    return () => {
      window.clearInterval(timer);
      motion.removeEventListener("change", finish);
    };
  }, []);
  return (
    <Section id="home">
      <Container>
        <div>
          <Eyebrow>Independent tattoo artist · Original artwork</Eyebrow>
          <h1 aria-label="Golden Mustang Studio">
            <em aria-hidden="true">
              {titleLines.map((line, lineIndex) => (
                <span className="title-line" key={line}>
                  <span className="title-sizer">{line}</span>
                  <span className="title-text">
                    {line.slice(
                      0,
                      Math.max(
                        0,
                        visibleLetters -
                          (lineIndex === 0 ? 0 : titleLines[0].length),
                      ),
                    )}
                  </span>
                </span>
              ))}
            </em>
          </h1>
          <p className="intro">{artist.introduction}</p>
          <div className="actions">
            <Button href="#work">Explore the work</Button>
            <Button $outline href="#contact">
              Booking information
            </Button>
          </div>
        </div>
        <div className="art">
          <div className="paper">
            <img
              src="images/main.webp"
              width="976"
              height="1255"
              alt="Black and grey tattoo featuring a female portrait, snakes and flowers"
              fetchPriority="high"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
