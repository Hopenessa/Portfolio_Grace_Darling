import { styled } from "styled-components";

export const Section = styled.section`
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
  .service-reveal {
    min-width: 0;
  }
  @media (prefers-reduced-motion: reduce) {
    .service-reveal {
      opacity: 1 !important;
      transform: none !important;
    }
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
