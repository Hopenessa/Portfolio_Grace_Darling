import { styled } from "styled-components";
import { Container } from "../Shared";

export const Section = styled.section`
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
