import { Section } from "./Contact.styles";
import { artist } from "../../data/portfolio";
import { Container, Eyebrow, Title } from "../Shared";
import { ContactIcon } from "../ContactIcon";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <div>
          <Eyebrow>04 / Booking information</Eyebrow>
          <Title>
            Let’s make
            <br />
            something meaningful
          </Title>
          <p className="description">
            Have a question or ready to bring an idea to life? Get in touch to
            book a consultation or chat about what you have in mind. I’ll get
            back to you as soon as I can, and I look forward to hearing from
            you!
          </p>
        </div>
        <div className="details">
          <p className="contact-row">
            <a href={artist.instagram} aria-label="Grace Darling on Instagram">
              <ContactIcon kind="instagram" />
              <span>{artist.instagramHandle}</span>
            </a>
          </p>
          <p className="contact-row">
            <ContactIcon kind="phone" />
            <a href={"tel:" + artist.phoneHref}>{artist.phone}</a>
          </p>
          <p className="contact-row">
            <ContactIcon kind="email" />
            <a href={"mailto:" + artist.email}>{artist.email}</a>
          </p>
          <p className="contact-row">
            <ContactIcon kind="location" />
            <span>
              {artist.studio}, {artist.location.city}, {artist.location.state},{" "}
              {artist.location.country}
            </span>
          </p>
        </div>
      </Container>
    </Section>
  );
}
