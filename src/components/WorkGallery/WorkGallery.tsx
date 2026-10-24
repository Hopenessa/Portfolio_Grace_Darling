import { Section } from "./WorkGallery.styles";
import { useRef, useState } from "react";
import { works, type Work } from "../../data/portfolio";
import { Container, Eyebrow, Title } from "../Shared";

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
