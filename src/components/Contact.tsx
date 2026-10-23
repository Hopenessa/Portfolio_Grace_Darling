import {styled} from "styled-components";
import {artist} from "../data/portfolio";
import {Button, Container, Eyebrow, Title} from "./Shared";
import {ContactIcon} from "./ContactIcon";

const Section = styled.section`
    padding: 85px 0;
    background: #0b0a08;
    border-block: 1px solid #40351e;

    ${Container} {
        display: grid;
        grid-template-columns: 1.3fr 1fr;
        gap: 80px;
    }

    .details {
        border-left: 1px solid #61573e;
        padding-left: 50px;
        align-self: center;
    }

    .details p {
        font-size: 15px;
        color: #ffffff;
    }

    .contact-row,
    .contact-row a {
        display: flex;
        align-items: center;
        gap: 16px;
        min-height: 44px;
    }

    .contact-row {
        margin: 12px 0;
    }

    .contact-row a {
        text-decoration: none;
    }

    .contact-row a:hover {
        text-decoration: underline;
    }

    .contact-row svg {
        color: #edc451;
        flex-shrink: 0;
    }

    .status {
        display: inline-block;
        color: #ffffff;
        border: 1px solid #61573e;
        padding: 10px 14px;
        font-size: 12px;
        letter-spacing: 0.13em;
        text-transform: uppercase;
    }

    .description {
        color: #ffffff;
        font-size: 16px;
        max-width: 430px;
    }

    @media (max-width: 600px) {
        padding: 65px 0;
        ${Container} {
            grid-template-columns: 1fr;
            gap: 30px;
        }

        .details {
            padding-left: 20px;
        }
    }
`;

export function Contact() {
    return (
        <Section id="contact">
            <Container>
                <div>
                    <Eyebrow>04 / Booking information</Eyebrow>
                    <Title>
                        Let’s make
                        <br/>
                        something meaningful
                    </Title>
                    <p className="description">
                        Have a question or ready to bring an idea to life? Get in touch to book a consultation or chat
                        about what you have in mind. I’ll get back to you as soon as I can, and I look forward to
                        hearing from you!
                    </p>

                </div>
                <div className="details">
                    <p className="contact-row">
                        {artist.instagram ? (
                            <a
                                href={artist.instagram}
                                aria-label="Grace Darling on Instagram"
                            >
                                <ContactIcon kind="instagram"/>
                                <span>{artist.instagramHandle}</span>
                            </a>
                        ) : (
                            <>
                                <ContactIcon kind="instagram"/>
                                <span aria-label="Instagram — coming soon">Coming soon</span>
                            </>
                        )}
                    </p>
                    <p className="contact-row">
                        <ContactIcon kind="phone"/>
                        {artist.phone ? (
                            <a href={"tel:" + artist.phoneHref}>
                                {artist.phone}
                            </a>
                        ) : (
                            <span aria-label="Phone — coming soon">Coming soon</span>
                        )}
                    </p>
                    <p className="contact-row">
                        <ContactIcon kind="email"/>
                        {artist.email ? (
                            <a href={"mailto:" + artist.email}>{artist.email}</a>
                        ) : (
                            <span aria-label="Email — coming soon">Coming soon</span>
                        )}
                    </p>
                    <p className="contact-row">
                        <ContactIcon kind="location"/>
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
