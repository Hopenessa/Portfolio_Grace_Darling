import { Section } from "./Contact.styles";
import { artist } from "../../data/portfolio";
import { Button, Container, Eyebrow, Title } from "../Shared";
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
            {artist.instagram ? (
              <a
                href={artist.instagram}
                aria-label="Grace Darling on Instagram"
              >
                <ContactIcon kind="instagram" />
                <span>{artist.instagramHandle}</span>
              </a>
            ) : (
              <>
                <ContactIcon kind="instagram" />
                <span aria-label="Instagram — coming soon">Coming soon</span>
              </>
            )}
          </p>
          <p className="contact-row">
            <ContactIcon kind="phone" />
            {artist.phone ? (
              <a href={"tel:" + artist.phoneHref}>{artist.phone}</a>
            ) : (
              <span aria-label="Phone — coming soon">Coming soon</span>
            )}
          </p>
          <p className="contact-row">
            <ContactIcon kind="email" />
            {artist.email ? (
              <a href={"mailto:" + artist.email}>{artist.email}</a>
            ) : (
              <span aria-label="Email — coming soon">Coming soon</span>
            )}
          </p>
          <p className="contact-row">
            <ContactIcon kind="location" />
            <span>
              {artist.studio}, {artist.location.city || "City"},{" "}
              {artist.location.state || "State"},{" "}
              {artist.location.country || "Country"}
            </span>
          </p>
        </div>
      </Container>
    </Section>
  );
}
