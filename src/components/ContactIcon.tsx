type ContactKind = "instagram" | "phone" | "email" | "location";

export function ContactIcon({ kind }: { kind: ContactKind }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {kind === "instagram" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
        </>
      )}
      {kind === "phone" && (
        <path d="M21 16.5v3a1.5 1.5 0 0 1-1.65 1.5A18.5 18.5 0 0 1 3 4.65 1.5 1.5 0 0 1 4.5 3h3a1.5 1.5 0 0 1 1.48 1.25c.12.82.32 1.62.59 2.39a1.5 1.5 0 0 1-.36 1.58L7.8 9.63a15 15 0 0 0 6.57 6.57l1.41-1.41a1.5 1.5 0 0 1 1.58-.36c.77.27 1.57.47 2.39.59A1.5 1.5 0 0 1 21 16.5Z" />
      )}
      {kind === "location" && (
        <>
          <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}
      {kind === "email" && (
        <>
          <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
          <path d="m3 6 9 7 9-7" />
        </>
      )}
    </svg>
  );
}
