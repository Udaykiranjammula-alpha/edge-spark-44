import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "EDGE SPARK — The New Frequency",
  description:
    "A contemporary luxury clothing brand from Guntur, Andhra Pradesh, India. Sharp structure, quiet movement, and pieces built to stay in rotation.",
  metadataBase: new URL("https://edgespark.in"),
};

export default function RootPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8">
      <h1 className="font-display text-[var(--text-display-min)] text-[var(--color-text-primary)]">
        EDGE SPARK
      </h1>
      <p className="mt-4 text-[var(--text-lead-min)] text-[var(--color-text-secondary)]">
        This route now renders from the (shop) group layout.
      </p>
      <a
        href="/"
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm uppercase tracking-widest text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
      >
        Go to the homepage
      </a>
    </div>
  );
}
