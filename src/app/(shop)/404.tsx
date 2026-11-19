import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — EDGE SPARK",
  description: "Page not found.",
  metadataBase: new URL("https://edgespark.in"),
};

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-5 text-center sm:px-8">
      <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">Page not found</p>
      <h1 className="mt-4 font-display text-[var(--text-display-min)] leading-[0.9] tracking-tight text-[var(--color-text-primary)]">
        404
      </h1>
      <p className="mt-4 max-w-md text-[var(--text-lead-min)] text-[var(--color-text-secondary)]">
        This page does not exist or has been moved.
      </p>
      <a
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm uppercase tracking-widest text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
      >
        Back to EDGE SPARK
      </a>
    </div>
  );
}
