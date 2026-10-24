import { Section } from "./WorkGallery.styles";
import { useEffect, useRef, useState } from "react";
import { works, type Work } from "../../data/portfolio";
import { Container, Eyebrow, Title } from "../Shared";

export function WorkGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Work>(works[0]);
  const [page, setPage] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [resetting, setResetting] = useState(false);
  const pageCount = Math.ceil(works.length / 4);
  const currentPage = (page - 1 + pageCount) % Math.max(pageCount, 1);

  const slides =
    pageCount > 1
      ? [
          pageCount - 1,
          ...Array.from({ length: pageCount }, (_, index) => index),
          0,
        ]
      : [0];
  const gallery = useRef<HTMLDivElement>(null);
  const nextAdvanceAt = useRef<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [tabVisible, setTabVisible] = useState(true);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motion.matches);
    const updateVisibility = () => setTabVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    motion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    if (gallery.current) observer.observe(gallery.current);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);
  useEffect(() => {
    if (!animating) return;
    const timer = window.setTimeout(
      () => {
        if (page === 0 || page === pageCount + 1) {
          setResetting(true);
          setPage(page === 0 ? pageCount : 1);
        }
        setAnimating(false);
      },
      reducedMotion ? 0 : 720,
    );
    return () => window.clearTimeout(timer);
  }, [animating, page, pageCount, reducedMotion]);
  useEffect(() => {
    if (!resetting) return;
    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => setResetting(false));
    });
    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, [resetting]);
  useEffect(() => {
    if (
      pageCount < 2 ||
      hovered ||
      focused ||
      dialogOpen ||
      !inView ||
      reducedMotion ||
      !tabVisible
    ) {
      nextAdvanceAt.current = null;
      return;
    }

    if (resetting) return;
    const now = performance.now();
    nextAdvanceAt.current ??= now + 3300;
    const timer = window.setTimeout(
      () => {
        nextAdvanceAt.current = performance.now() + 4000;
        setAnimating(true);
        setPage((previous) => previous + 1);
      },
      Math.max(0, nextAdvanceAt.current - now),
    );
    return () => window.clearTimeout(timer);
  }, [
    page,
    pageCount,
    resetting,
    hovered,
    focused,
    dialogOpen,
    inView,
    reducedMotion,
    tabVisible,
  ]);
  function changePage(direction: number) {
    if (animating || resetting || pageCount < 2) return;
    nextAdvanceAt.current = performance.now() + 4000;
    setAnimating(true);
    setPage((previous) => previous + direction);
  }
  function show(work: Work) {
    setSelected(work);
    setDialogOpen(true);
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
        <div
          className="gallery"
          ref={gallery}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget))
              setFocused(false);
          }}
        >
          <div
            className="viewport"
            id="work-pages"
            aria-label="Selected artwork"
          >
            <div
              className="track"
              style={{
                transform: `translateX(-${(pageCount > 1 ? page : 0) * 100}%)`,
              }}
              data-resetting={resetting}
            >
              {slides.map((pageIndex, slideIndex) => (
                <div
                  className="grid"
                  key={slideIndex}
                  ref={(element) => {
                    element?.toggleAttribute(
                      "inert",
                      slideIndex !== (pageCount > 1 ? page : 0),
                    );
                  }}
                  aria-hidden={slideIndex !== (pageCount > 1 ? page : 0)}
                >
                  {works.slice(pageIndex * 4, pageIndex * 4 + 4).map((work) => (
                    <article className="card" key={work.id}>
                      <button
                        className="image"
                        onClick={() => show(work)}
                        aria-label={"View " + work.title}
                      >
                        <img src={work.image} alt={work.alt} loading="lazy" />
                      </button>
                      <h3>{work.title}</h3>
                      <p>{work.category}</p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {pageCount > 1 && (
            <div className="controls" aria-label="Gallery navigation">
              <span
                className="page-status"
                role="status"
                aria-live={focused ? "polite" : "off"}
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
          onClose={() => setDialogOpen(false)}
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
