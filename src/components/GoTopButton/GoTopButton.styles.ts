import { styled } from "styled-components";

export const Button = styled.button<{ $visible: boolean }>`
  position: fixed;
  right: max(24px, env(safe-area-inset-right));
  bottom: max(24px, env(safe-area-inset-bottom));
  z-index: 60;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border: 1px solid #edc451;
  border-radius: 50%;
  color: #edc451;
  background: #060606;
  box-shadow: 0 4px 20px #0006;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  pointer-events: ${({ $visible }) => ($visible ? "auto" : "none")};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "12px")});
  transition:
    opacity 250ms ease,
    transform 250ms ease,
    visibility 250ms,
    background-color 200ms ease;

  &:hover {
    background: #302510;
  }
`;
