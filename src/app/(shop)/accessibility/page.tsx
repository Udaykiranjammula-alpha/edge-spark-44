import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility — EDGE SPARK",
  description: "EDGE SPARK accessibility statement.",
  metadataBase: new URL("https://edgespark.in"),
};

export default function AccessibilityPage() {
  return (
    <>
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[var(--color-accent)]">
            Making the site work for everyone
          </p>
          <h1 className="font-display text-[var(--text-display-min)] leading-[0.9] tracking-tight text-[var(--color-text-primary)]">
            Accessibility
          </h1>
        </div>
      </header>

      <section aria-labelledby="statement-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] max-w-3xl mx-auto px-5 py-24 sm:px-8">
        <div className="prose prose-invert max-w-none text-[var(--text-lead-min)] text-[var(--color-text-secondary)]">
          <h2
            id="statement-heading"
            className="font-display text-[var(--text-headline-min)] tracking-tight text-[var(--color-text-primary)]"
          >
            Our commitment
          </h2>
          <p className="mt-4 leading-relaxed">
            EDGE SPARK aims to make this site usable for as many people as possible. We work to support common assistive technologies, clear navigation, readable text, and a consistent experience across devices.
          </p>
          <h3 className="mt-8 text-base font-medium tracking-tight text-[var(--color-text-primary)]">What we focus on</h3>
          <ul className="mt-3 space-y-2 list-disc list-inside">
            <li>Clear focus indicators and keyboard navigation</li>
            <li>Sufficient color contrast and readable type</li>
            <li>Alternate text for product and editorial imagery</li>
            <li>Semantic structure for headings, links, and forms</li>
            <li>Reduced-motion support for visitors who prefer it</li>
          </ul>
          <h3 className="mt-8 text-base font-medium tracking-tight text-[var(--color-text-primary)]">Reporting an issue</h3>
          <p className="mt-2 leading-relaxed">
            If you encounter a barrier on the site, please tell us. We review feedback and work to improve the experience. Contact the studio at studio@edgespark.in.
          </p>
        </div>
      </section>
    </>
  );
}
