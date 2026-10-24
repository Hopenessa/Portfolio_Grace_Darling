import { styled } from "styled-components";
import { Container } from "../Shared";

export const Bar = styled.footer`
  padding: 32px 0;
  ${Container} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    gap: 20px;
  }
  p {
    font-size: 12px;
    color: #ffffff;
    margin: 0;
  }
  .artist-details {
    text-align: center;
  }
  .copyright {
    text-align: right;
    justify-self: end;
  }
  .name {
    font-family: Georgia, serif;
    font-size: 18px;
    color: #eeeadf;
  }
  @media (min-width: 1100px) {
    ${Container} {
      grid-template-columns: 1fr 1fr auto;
    }
    .copyright {
      white-space: nowrap;
    }
  }
  @media (max-width: 700px) {
    ${Container} {
      grid-template-columns: 1fr;
      text-align: center;
      padding-bottom: 60px;
    }
    .copyright {
      text-align: center;
      justify-self: center;
    }
  }
`;
