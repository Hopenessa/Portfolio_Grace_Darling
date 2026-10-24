import { styled } from "styled-components";
import { Container } from "../Shared";

export const Bar = styled.footer`
  padding: 32px 0;
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  p {
    font-size: 12px;
    color: #ffffff;
    margin: 0;
  }
  a {
    font-size: 12px;
    text-decoration: none;
    letter-spacing: 0.12em;
  }
  .name {
    font-family: Georgia, serif;
    font-size: 18px;
    color: #eeeadf;
  }
`;
