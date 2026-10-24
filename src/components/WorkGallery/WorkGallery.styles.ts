import { styled } from "styled-components";

export const Section = styled.section`
  dialog {
    padding: 44px 20px 20px;
  }
  dialog .close-artwork {
    position: absolute;
    top: 6px;
    right: 6px;
    display: grid;
    place-items: center;
    width: 36px;
    height: 36px;
    float: none;
    padding: 0;
    margin: 0;
    border: 0;
    background: transparent;
    color: #edc451;
  }
  .close-artwork svg {
    width: 24px;
    height: 24px;
  }
  dialog .close-artwork:hover {
    color: #fff;
  }
  padding: 100px 0;
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 30px;
  }
  .gallery {
    position: relative;
    margin: 32px 34px 0;
  }
  .controls {
    position: absolute;
    inset: -12px -60px;
    pointer-events: none;
  }
  .rail {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 46px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
  .rail:first-of-type {
    left: 0;
  }
  .rail:last-of-type {
    right: 0;
  }
  .rail::before,
  .rail::after {
    content: "";
    width: 1px;
    flex: 1;
    background: linear-gradient(#f7d880, #b87c2c);
  }
  .controls button {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1px solid #edc451;
    color: #edc451;
    background: #060606;
    transition: background-color 0.2s;
    flex-shrink: 0;
    pointer-events: auto;
  }
  .controls button:hover {
    background: #302510;
  }
  .controls svg {
    width: 22px;
    height: 22px;
  }
  .page-status {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
  }
  .grid {
    flex: 0 0 100%;
    min-width: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
    margin-top: 0;
  }
  .viewport {
    overflow: hidden;
  }
  .track {
    display: flex;
    transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
  }
  .track[data-resetting="true"] {
    transition: none;
  }
  @media (prefers-reduced-motion: reduce) {
    .track {
      transition: none;
    }
  }
  .card {
    position: relative;
    min-width: 0;
    aspect-ratio: 1;
    padding: 1px;
    background: linear-gradient(135deg, #ffe39a, #eba23e 55%, #f2c44e);
  }
  .card h3,
  .card p {
    position: absolute;
    left: 16px;
    right: 12px;
    z-index: 1;
    pointer-events: none;
  }
  .card h3 {
    bottom: 32px;
  }
  .card p {
    bottom: 8px;
    margin: 0;
  }
  .card::after {
    content: "";
    position: absolute;
    inset: 40% 1px 1px;
    pointer-events: none;
    background: linear-gradient(transparent, #000e);
  }
  .image {
    aspect-ratio: 1;
    height: 100%;
    background: #24251e;
    border: 0;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0;
    color: #ffffff;
  }
  .image img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .image:focus-visible {
    outline: 3px solid #fff0b3;
    outline-offset: -5px;
  }
  .card h3 {
    font-family: Georgia, serif;
    font-size: 22px;
    margin: 19px 0 8px;
  }
  .card p {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: #ffffff;
  }
  @media (max-width: 900px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 600px) {
    padding: 70px 0;
    .heading {
      display: block;
    }
    .grid {
      gap: 16px;
    }
    .card h3 {
      font-size: 16px;
      left: 10px;
    }
    .card p {
      font-size: 9px;
      left: 10px;
      letter-spacing: 0.05em;
    }
    .gallery {
      margin-inline: 28px;
    }
    .controls {
      left: -42px;
      right: -42px;
    }
    .rail,
    .controls button {
      width: 34px;
    }
    .controls button {
      height: 34px;
    }
  }
`;
