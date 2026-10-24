import { styled } from "styled-components";
import { theme } from "../../styles/theme";
export const Container = styled.div`
  width: min(1200px, calc(100% - 96px));
  margin: auto;
  @media (max-width: 600px) {
    width: calc(100% - 40px);
  }
`;
export const Eyebrow = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  color: #edc451;
  margin-bottom: 22px;
`;
export const Title = styled.h2`
  font-family: "Tinos", serif;
  font-size: clamp(36px, 5vw, 62px);
  line-height: 1.08;
  letter-spacing: -0.035em;
  margin-bottom: 24px;
`;
export const Button = styled.a<{ $outline?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 17px 24px;
  border: 1px solid #edc451;
  background-color: ${(p) => (p.$outline ? "transparent" : "#f2c44e")};
  background-image: ${(p) => (p.$outline ? "none" : theme.gradients.gold)};
  position: relative;
  isolation: isolate;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    background: linear-gradient(120deg, #e78421 0%, #ffd34f 55%, #fff0b3 100%);
    opacity: 0;
    transition: opacity 0.25s;
    display: ${(p) => (p.$outline ? "none" : "block")};
  }
  color: ${(p) => (p.$outline ? "#eeeadf" : "#060606")};
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${(p) => (p.$outline ? "#343124" : "#f2c44e")};
  }
  &:hover::before {
    opacity: 1;
  }
`;
