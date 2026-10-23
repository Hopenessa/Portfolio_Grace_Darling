import { styled } from "styled-components";
import { services } from "../data/portfolio";
import { Container } from "./Shared";
const Section = styled.section`
  padding: 70px 0 85px;
  h2 {
    font:
      400 12px Arial,
      sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    color: #edc451;
    margin: 0 0 45px;
  }
  .services {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 40px;
  }
  article {
    text-align: center;
  }
  svg {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto 24px;
    color: #edc451;
  }
  h3 {
    font-family: "Tinos", serif;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin: 0 0 15px;
  }
  p {
    font-size: 15px;
    line-height: 1.6;
    white-space: pre-line;
    margin: 0;
    color: #fff;
  }
  @media (max-width: 900px) {
    .services {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 45px 25px;
    }
  }
  @media (max-width: 400px) {
    .services {
      grid-template-columns: 1fr;
    }
  }
`;
function ServiceIcon({ kind }: { kind: (typeof services)[number]["icon"] }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {kind === "star" && (
        <>
          <path d="m32 3 4 23 23 6-23 4-4 25-5-25-24-4 24-6Z" />
          <path d="m18 18 14 9 14-9-9 14 9 14-14-9-14 9 9-14Z" />
          <circle cx="32" cy="32" r="4" />
        </>
      )}
      {kind === "moon" && (
        <>
          <path d="M29 5a27 27 0 1 0 28 35C34 56 9 29 29 5Z" />
        </>
      )}
      {kind === "sun" && (
        <>
          <circle cx="32" cy="32" r="16" />
          {Array.from({ length: 16 }, (_, i) => (
            <path
              key={i}
              d="m30 14 2-12 2 12"
              transform={`rotate(${i * 22.5} 32 32)`}
            />
          ))}
        </>
      )}
      {kind === "branch" && (
        <>
          <path d="M13 59C24 42 29 25 50 5" />
          <path d="M42 14c-1-8 5-12 13-12-1 8-6 12-13 12ZM33 25c-4-7-2-13 3-17 5 6 4 12-3 17ZM25 39c-7-5-7-12-3-18 6 4 8 10 3 18ZM18 51c-8-3-10-9-8-16 7 2 11 8 8 16ZM38 20c7-6 13-5 18-1-5 6-11 7-18 1ZM30 32c7-6 14-5 19 0-6 5-12 6-19 0ZM23 44c7-4 13-2 17 3-7 4-13 3-17-3Z" />
        </>
      )}
    </svg>
  );
}
export function Process() {
  return (
    <Section id="process" aria-labelledby="services-title">
      <Container>
        <h2 id="services-title">03 / Services</h2>
        <div className="services">
          {services.map((service) => (
            <article key={service.icon}>
              <ServiceIcon kind={service.icon} />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
