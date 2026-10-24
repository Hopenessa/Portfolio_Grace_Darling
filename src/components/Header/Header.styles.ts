import { styled } from "styled-components";
import { Container } from "../Shared";

export const Bar = styled.header`
  border-bottom: 1px solid #40351e;
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(6, 6, 6, 0.94);
  backdrop-filter: blur(18px);
  ${Container} {
    min-height: 96px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
  .brand {
    display: flex;
    flex-shrink: 0;
    text-decoration: none;
    font-family: Georgia, serif;
    font-size: 20px;
  }
  .brand img {
    display: block;
    width: 84px;
    height: 84px;
    object-fit: contain;
  }
  .brand span {
    color: #edc451;
    margin-right: 12px;
  }
  nav {
    display: flex;
    gap: 24px;
  }
  nav a {
    text-decoration: none;
    font-size: 14px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    line-height: 1.5;
  }
  nav a:hover,
  nav a[aria-current="location"] {
    color: #edc451;
  }
  nav a {
    position: relative;
    padding: 10px 0;
  }
  nav a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #ffe39a, #f2c44e, #eba23e);
    transform: scaleX(0);
    transition: transform 0.2s;
  }
  nav a[aria-current="location"]::after {
    transform: scaleX(1);
  }
  button {
    display: none;
    background: none;
    border: 1px solid #edc451;
    color: #eeeadf;
    padding: 10px;
  }
  @media (max-width: 900px) {
    ${Container} {
      min-height: 76px;
      flex-wrap: wrap;
      padding: 6px 0;
    }
    button {
      display: block;
    }
    .brand img {
      width: 64px;
      height: 64px;
    }
    nav {
      display: none;
      width: 100%;
      flex-direction: column;
      padding: 16px 0;
    }
    nav[data-open="true"] {
      display: flex;
    }
  }
`;
