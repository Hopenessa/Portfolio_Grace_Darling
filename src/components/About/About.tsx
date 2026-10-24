import { Section } from "./About.styles";
import { Container, Eyebrow, Title } from "../Shared";

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="portrait">
          <img
            src="images/Grace.webp"
            alt="Portrait of tattoo artist Grace Darling"
            width="1164"
            height="1247"
            loading="lazy"
          />
        </div>
        <div>
          <Eyebrow>02 / The artist</Eyebrow>
          <Title className="about-title">
            <span className="more">More</span>
            <br />
            <span className="than">Than Tattoos</span>
          </Title>
          <p className="copy">
            Hello, my name is Grace Darling! I am the owner and artist of Golden
            Mustang Studio. I’ve been in the industry for 6 years, specializing
            in gothic illustrative tattoos. I enjoy bringing my love of all
            things strange and beautiful to my work. I’m excited to hear your
            ideas and create something you’ll love wearing for eternity.
          </p>
          <p className="signature">Grace Darling</p>
        </div>
      </Container>
    </Section>
  );
}
