import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brand — EDGE SPARK",
  description:
    "A contemporary luxury clothing brand from Guntur, Andhra Pradesh, India. Sharp structure, quiet movement, and pieces built to stay in rotation.",
  metadataBase: new URL("https://edgespark.in"),
};

const FIT_NOTES = [
  { label: "Archive Blazer", note: "Tailored fit with a clean shoulder line. Size for a structured, modern silhouette." },
  { label: "Signal Oxford", note: "Regular fit with a controlled collar. Designed to sit cleanly under a jacket or on its own." },
  { label: "Nightline Trousers", note: "Regular ease with enough weight to hold the line. True to the measurement chart." },
  { label: "Spark Shell", note: "Architectural fit with controlled ease. Size for the intended structured look." },
];

export default function AboutPage() {
  return (
    <>
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[var(--color-accent)]">
            The point of view
          </p>
          <h1 className="font-display text-[var(--text-display-min)] leading-[0.9] tracking-tight text-[var(--color-text-primary)]">
            Brand
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[var(--text-lead-min)] text-[var(--color-text-secondary)]">
            A small, deliberate label built from Guntur, Andhra Pradesh.
          </p>
        </div>
      </header>

      <section aria-labelledby="about-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                id="about-heading"
                className="font-display text-[var(--text-headline-min)] leading-[0.95] tracking-tight text-[var(--color-text-primary)]"
              >
                Architecture over
                <br />
                trend.
              </h2>
              <div className="mt-6 space-y-4 text-[var(--text-lead-min)] leading-relaxed text-[var(--color-text-secondary)]">
                <p>
                  EDGE SPARK is a small label with a big point of view. We build garments that read as architecture first: clean lines, quiet structure, and materials that hold their shape long after the season has passed.
                </p>
                <p>
                  Everything is made in small volumes, reviewed before it reaches the edit, and designed to stay in rotation rather than sit in a closet waiting for a trend to return.
                </p>
                <p>
                  The name carries the idea honestly. Edge as in sharpness and intention. Spark as in the moment a room notices you, without you asking for it.
                </p>
              </div>
            </div>

            <div className="grid gap-6 rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-8">
              <Fact label="Origin" value="Guntur, Andhra Pradesh — India" />
              <Fact label="Point of view" value="Contemporary luxury, small volumes" />
              <Fact label="Materials" value="Refined, long-life fabrics and finishes" />
              <Fact label="Edit size" value="Deliberate, not expanded" />
              <Fact label="Currency" value="INR" />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-center text-sm uppercase tracking-[0.32em] text-[var(--color-text-secondary)]">
            What we work toward
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              number="01"
              title="Structure"
              description="Clean forms and quiet hardware. Garments that read well from across a room and better in person."
            />
            <ValueCard
              number="02"
              title="Longevity"
              description="Pieces built to be worn often and noticed late. Made for rotation, not cancellation."
            />
            <ValueCard
              number="03"
              title="Restraint"
              description="No loud by default. Presence through proportion, finish, and the right detail in the right place."
            />
            <ValueCard
              number="04"
              title="Craft"
              description="Small volumes, careful handling, and a respect for the garment as something worth keeping."
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="studio-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                id="studio-heading"
                className="font-display text-[var(--text-headline-min)] leading-[0.95] tracking-tight text-[var(--color-text-primary)]"
              >
                The studio
              </h2>
              <p className="mt-6 text-[var(--text-lead-min)] leading-relaxed text-[var(--color-text-secondary)]">
                The studio is small by design. A tight team working across design, fit, sourcing, and the edit. Decisions are slow on purpose; the edit is small on purpose.
              </p>
              <p className="mt-4 text-[var(--text-lead-min)] leading-relaxed text-[var(--color-text-secondary)]">
                When something is ready, it earns its place. When it does not, it stays in the notebook.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="/collections/new"
                className="inline-flex items-center justify-between rounded-full border border-[var(--color-border)] px-6 py-3 text-sm uppercase tracking-widest text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-text-secondary)]"
              >
                Read the current edit
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link
                href="/collections/archives"
                className="inline-flex items-center justify-between rounded-full border border-[var(--color-border)] px-6 py-3 text-sm uppercase tracking-widest text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
              >
                Explore the archive
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="press-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-12 text-center text-sm uppercase tracking-[0.32em] text-[var(--color-text-secondary)]">
            Press and inquiries
          </p>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="press-heading"
              className="font-display text-[var(--text-headline-min)] leading-[0.95] tracking-tight text-[var(--color-text-primary)]"
            >
              Talk to the studio.
            </h2>
            <p className="mt-5 text-[var(--text-lead-min)] text-[var(--color-text-secondary)]">
              Press, wholesale, and collaborations are handled by the studio directly.
            </p>
            <a
              href="mailto:studio@edgespark.in"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm uppercase tracking-widest text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-text-secondary)] sm:text-base"
            >
              studio@edgespark.in
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] pb-4 last:border-0 last:pb-0">
      <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)]">{label}</span>
      <span className="text-sm text-[var(--color-text-primary)]">{value}</span>
    </div>
  );
}

function ValueCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-6">
      <span className="text-2xl font-display text-[var(--color-accent)]">{number}</span>
      <h3 className="mt-2 text-base font-medium tracking-tight text-[var(--color-text-primary)]">{title}</h3>
      <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">{description}</p>
    </div>
  );
}
