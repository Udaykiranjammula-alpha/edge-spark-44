import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Size Guide — EDGE SPARK",
  description: "EDGE SPARK size guide and fit notes.",
  metadataBase: new URL("https://edgespark.in"),
};

const FIT_NOTES = [
  { label: "Archive Blazer", note: "Tailored fit with a clean shoulder line. Size for a structured, modern silhouette." },
  { label: "Signal Oxford", note: "Regular fit with a controlled collar. Designed to sit cleanly under a jacket or on its own." },
  { label: "Nightline Trousers", note: "Regular ease with enough weight to hold the line. True to the measurement chart." },
  { label: "Spark Shell", note: "Architectural fit with controlled ease. Size for the intended structured look." },
];

export default function SizeGuidePage() {
  return (
    <>
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[var(--color-accent)]">
            Fit and measurements
          </p>
          <h1 className="font-display text-[var(--text-display-min)] leading-[0.9] tracking-tight text-[var(--color-text-primary)]">
            Size guide
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[var(--text-lead-min)] text-[var(--color-text-secondary)]">
            Find the right fit for the current edit. Measurements are in centimeters.
          </p>
        </div>
      </header>

      <section aria-labelledby="key-measurements-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2
            id="key-measurements-heading"
            className="mb-12 font-display text-[var(--text-headline-min)] leading-[0.95] tracking-tight text-[var(--color-text-primary)]"
          >
            Key measurements
          </h2>
          <div className="overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Size</th>
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Chest (cm)</th>
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Waist (cm)</th>
                  <th className="px-6 py-4 text-left text-xs uppercase tracking-widest text-[var(--color-text-muted)]">Hip (cm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {[
                  { size: "XS", chest: 88, waist: 66, hip: 90 },
                  { size: "S", chest: 94, waist: 72, hip: 95 },
                  { size: "M", chest: 100, waist: 78, hip: 100 },
                  { size: "L", chest: 106, waist: 84, hip: 105 },
                  { size: "XL", chest: 112, waist: 90, hip: 110 },
                ].map((row) => (
                  <tr key={row.size} className="hover:bg-[var(--color-bg-secondary)]">
                    <td className="px-6 py-4 text-sm text-[var(--color-text-primary)]">{row.size}</td>
                    <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)] tabular-nums">{row.chest}</td>
                    <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)] tabular-nums">{row.waist}</td>
                    <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)] tabular-nums">{row.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-[var(--color-text-muted)]">
            Body measurements only. Garment measurements vary by piece and are listed where relevant.
          </p>
        </div>
      </section>

      <section aria-labelledby="fit-notes-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2
            id="fit-notes-heading"
            className="mb-12 font-display text-[var(--text-headline-min)] leading-[0.95] tracking-tight text-[var(--color-text-primary)]"
          >
            Fit notes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FIT_NOTES.map((item) => (
              <div key={item.label} className="rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-5">
                <h3 className="text-sm font-medium tracking-tight text-[var(--color-text-primary)]">{item.label}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="measure-ourselves-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-2xl">
          <h2
            id="measure-ourselves-heading"
            className="font-display text-[var(--text-headline-min)] leading-[0.95] tracking-tight text-[var(--color-text-primary)]"
          >
            How we measure
          </h2>
          <div className="mt-6 space-y-4 text-[var(--text-lead-min)] leading-relaxed text-[var(--color-text-secondary)]">
            <p>
              Chest: measured at the fullest part, with the tape level and close to the body.
            </p>
            <p>
              Waist: measured at the natural waistline, where the garment would sit.
            </p>
            <p>
              Hip: measured at the fullest part of the hip, with the tape level.
            </p>
          </div>
          <p className="mt-6 text-sm text-[var(--color-text-muted)]">
            If you are between sizes, size up for a more relaxed fit. When in doubt, reach out and the studio will help you choose.
          </p>
        </div>
      </section>
    </>
  );
}
