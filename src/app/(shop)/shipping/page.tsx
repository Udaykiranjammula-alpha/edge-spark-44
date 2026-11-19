import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery — EDGE SPARK",
  description: "EDGE SPARK delivery, shipping, and order updates.",
  metadataBase: new URL("https://edgespark.in"),
};

export default function ShippingPage() {
  return (
    <>
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[var(--color-accent)]">
            Getting your pieces to you
          </p>
          <h1 className="font-display text-[var(--text-display-min)] leading-[0.9] tracking-tight text-[var(--color-text-primary)]">
            Delivery
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[var(--text-lead-min)] text-[var(--color-text-secondary)]">
            Orders are packed with care and shipped from Guntur, Andhra Pradesh.
          </p>
        </div>
      </header>

      <section aria-labelledby="processing-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2
            id="processing-heading"
            className="mb-12 font-display text-[var(--text-headline-min)] leading-[0.95] tracking-tight text-[var(--color-text-primary)]"
          >
            Processing
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-6">
              <h3 className="flex items-center gap-2 text-base font-medium tracking-tight text-[var(--color-text-primary)]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)] text-white text-xs font-medium">1</span>
                Order confirmation
              </h3>
              <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                You will receive an order confirmation by email as soon as your order is received.
              </p>
            </div>
            <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-6">
              <h3 className="flex items-center gap-2 text-base font-medium tracking-tight text-[var(--color-text-primary)]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)] text-white text-xs font-medium">2</span>
                Preparation
              </h3>
              <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Orders are prepared and quality-checked before dispatch, with packaging designed to protect the piece.
              </p>
            </div>
            <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-6">
              <h3 className="flex items-center gap-2 text-base font-medium tracking-tight text-[var(--color-text-primary)]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)] text-white text-xs font-medium">3</span>
                Dispatch
              </h3>
              <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Dispatched within two business days where available. You will receive a tracking update once your order ships.
              </p>
            </div>
            <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-6">
              <h3 className="flex items-center gap-2 text-base font-medium tracking-tight text-[var(--color-text-primary)]">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)] text-white text-xs font-medium">4</span>
                Delivery
              </h3>
              <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Delivered to the address provided at checkout. Signature may be required on delivery for higher-value pieces.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-6">
            <h3 className="text-base font-medium tracking-tight text-[var(--color-text-primary)]">Express shipping</h3>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              Express shipping options are available at checkout where offered. Availability and pricing depend on destination.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="international-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2
            id="international-heading"
            className="mb-12 font-display text-[var(--text-headline-min)] leading-[0.95] tracking-tight text-[var(--color-text-primary)]"
          >
            International delivery
          </h2>
          <div className="mx-auto max-w-2xl">
            <p className="text-[var(--text-lead-min)] text-[var(--color-text-secondary)] leading-relaxed">
              EDGE SPARK ships internationally where available. Duties and local taxes, if applicable, are the responsibility of the recipient. We recommend checking your local customs rules before placing an order.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="contact-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2
            id="contact-heading"
            className="mb-12 font-display text-[var(--text-headline-min)] leading-[0.95] tracking-tight text-[var(--color-text-primary)]"
          >
            Delivery questions
          </h2>
          <div className="mx-auto max-w-2xl">
            <p className="text-[var(--text-lead-min)] text-[var(--color-text-secondary)] leading-relaxed">
              If you have a question about an order, delivery time, or address change, contact the studio.
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
