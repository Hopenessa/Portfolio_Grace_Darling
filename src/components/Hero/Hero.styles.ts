import { styled } from "styled-components";
import { Container } from "../Shared";
import { Eyebrow } from "../Shared";
import { theme } from "../../styles/theme";

export const Section = styled.section`
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #40351e;
  ${Container} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    min-height: 700px;
    gap: 50px;
    padding-top: 65px;
    padding-bottom: 70px;
  }
  h1 {
    font-family: "Tinos", serif;
    font-size: clamp(32px, 5vw, 72px);
    letter-spacing: -0.065em;
    line-height: 0.93;
    margin-bottom: 30px;
    padding: 0.08em 0.12em 0.12em;
    margin-left: -0.12em;
    margin-right: -0.12em;
  }
  h1 em {
    display: inline-block;
    padding-inline: 0.08em;
    margin-inline: -0.08em;
    font-weight: 400;
    color: #edc451;
    background: none;
    -webkit-text-fill-color: #edc451;
  }
  h1 em > span {
    display: grid;
    white-space: nowrap;
  }
  .title-line > span {
    grid-area: 1 / 1;
  }
  .title-sizer {
    visibility: hidden;
  }
  .title-text {
    padding: 0.08em 0.12em 0.12em;
    margin: -0.08em -0.12em -0.12em;
    color: #edc451;
    background: ${theme.gradients.gold};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  ${Eyebrow} {
    color: #edc451;
  }
  .intro {
    color: #ffffff;
    max-width: 390px;
    font-size: 16px;
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 32px;
  }
  .art {
    position: relative;
    width: 90%;
    justify-self: center;
    border: 2px solid rgba(237, 196, 81, 0.65);
    padding: 0;
    transform: rotate(-3deg);
  }
  .art::before {
    content: "";
    position: absolute;
    inset: -2px;
    border: 2px solid rgba(237, 196, 81, 0.45);
    transform: rotate(6deg);
    pointer-events: none;
  }
  .paper {
    background: #060606;
  }
  .paper img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 900px) {
    ${Container} {
      grid-template-columns: 1fr;
      gap: 65px;
      min-height: auto;
    }
    .art {
      max-width: 650px;
    }
  }
`;
