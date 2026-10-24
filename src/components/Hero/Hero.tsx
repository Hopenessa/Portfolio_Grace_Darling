import { Section } from "./Hero.styles";
import { artist } from "../../data/portfolio";
import { Button, Container, Eyebrow } from "../Shared";

export function Hero() {
  return (
    <Section id="home">
      <Container>
        <div>
          <Eyebrow>Independent tattoo artist · Original artwork</Eyebrow>
          <h1 aria-label="Golden Mustang Studio">
            <em aria-hidden="true">
              {["Golden Mustang", "Studio"].map((line, lineIndex) => (
                <span key={line}>
                  {Array.from(line).map((letter, letterIndex) => (
                    <span
                      className="title-letter"
                      key={letterIndex}
                      style={{
                        animationDelay: `${250 + ((lineIndex === 0 ? 0 : 14) + letterIndex) * 90}ms`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
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
