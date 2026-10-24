import { styled } from "styled-components";
import { Container } from "../Shared";

export const Section = styled.section`
  .about-title {
    text-transform: uppercase;
  }

  .about-title .more {
    color: #f5d993;
  }

  .about-title .than {
    display: inline-block;
    color: #f5d993;
    background: linear-gradient(110deg, #ffffff 0%, #fff5dc 45%, #f5d993 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  background: #0c0c0c;
  border-block: 1px solid #40351e;
  padding: 90px 0;

  ${Container} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
    align-items: center;
  }

  .portrait {
    border: 1px solid #40351e;
    overflow: hidden;
  }

  .portrait img {
    width: 100%;
    height: auto;
  }

  .portrait span {
    font-size: 100px;
    color: #edc451;
  }

  .portrait p {
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #ffffff;
    margin-top: 25px;
  }

  .copy {
    color: #ffffff;
    font-size: 16px;
  }

  .signature {
    font-family: Georgia, serif;
    font-style: italic;
    color: #edc451;
    font-size: 30px;
    margin: 30px 0 0;
  }

  @media (max-width: 900px) {
    ${Container} {
      gap: 35px;
    }
  }
  @media (max-width: 600px) {
    padding: 65px 0;
    ${Container} {
      grid-template-columns: 1fr;
    }
  }
`;
