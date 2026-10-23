import { useRef, useState } from "react";
import { styled } from "styled-components";
import { works, type Work } from "../data/portfolio";
import { Container, Eyebrow, Title } from "./Shared";
const Section = styled.section`
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
    margin-top: 0;
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
  .placeholder {
    background: radial-gradient(
      ellipse at 50% 60%,
      #3c3b2c 0%,
      #20221b 55%,
      #181a15 90%
    );
    flex-direction: column;
    gap: 24px;
  }
  .placeholder span {
    color: #827453;
    font-family: Georgia, serif;
    font-size: 80px;
  }
  .placeholder small {
    display: none;
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
export function WorkGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Work>(works[0]);
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(works.length / 4);
  const currentPage = page % Math.max(pageCount, 1);
  const visibleWorks = works.slice(currentPage * 4, currentPage * 4 + 4);
  function changePage(direction: number) {
    setPage((previous) => (previous + direction + pageCount) % pageCount);
  }
  function show(work: Work) {
    setSelected(work);
    dialog.current?.showModal();
  }
  return (
    <Section id="work">
      <Container>
        <div className="heading">
          <div>
            <Eyebrow>01 / My works</Eyebrow>
            <Title>Drawn with intention</Title>
          </div>
        </div>
        <div className="gallery">
          <div className="grid" id="work-pages" aria-label="Selected artwork">
            {visibleWorks.map((work, i) => (
              <article className="card" key={work.id}>
                {work.image ? (
                  <button
                    className="image"
                    onClick={() => show(work)}
                    aria-label={"View " + work.title}
                  >
                    <img src={work.image} alt={work.alt} loading="lazy" />
                  </button>
                ) : (
                  <div className="image placeholder">
                    <span aria-hidden="true">{["❋", "☾", "✳", "❋"][i]}</span>
                    <small>Gallery coming soon</small>
                  </div>
                )}
                <h3>{work.title}</h3>
                <p>{work.category}</p>
              </article>
            ))}
          </div>
          {pageCount > 1 && (
            <div className="controls" aria-label="Gallery navigation">
              <span
                className="page-status"
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                {currentPage + 1} / {pageCount}
              </span>
              <div className="rail">
                <button
                  type="button"
                  aria-label="Previous four works"
                  aria-controls="work-pages"
                  onClick={() => changePage(-1)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <path d="m14 6-6 6 6 6" />
                  </svg>
                </button>
              </div>
              <div className="rail">
                <button
                  type="button"
                  aria-label="Next four works"
                  aria-controls="work-pages"
                  onClick={() => changePage(1)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    <path d="m10 6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
        <dialog
          ref={dialog}
          aria-label={selected.title}
          onClick={(event) => {
            const target = event.target as HTMLElement;
            if (target.closest("img, button")) return;
            dialog.current?.close();
          }}
        >
          <button
            type="button"
            className="close-artwork"
            onClick={() => dialog.current?.close()}
            aria-label="Close artwork"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
          <img src={selected.image} alt={selected.alt} />
          <p>{selected.note}</p>
        </dialog>
      </Container>
    </Section>
  );
}
