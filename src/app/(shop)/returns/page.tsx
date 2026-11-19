import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns — EDGE SPARK",
  description: "EDGE SPARK returns, exchanges, and refund policy.",
  metadataBase: new URL("https://edgespark.in"),
};

export default function ReturnsPage() {
  return (
    <>
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[var(--color-accent)]">
            If something is not right
          </p>
          <h1 className="font-display text-[var(--text-display-min)] leading-[0.9] tracking-tight text-[var(--color-text-primary)]">
            Returns
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[var(--text-lead-min)] text-[var(--color-text-secondary)]">
            We want you to keep what works and send back what does not.
          </p>
        </div>
      </header>

      <section aria-labelledby="window-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2
            id="window-heading"
            className="mb-12 font-display text-[var(--text-headline-min)] leading-[0.95] tracking-tight text-[var(--color-text-primary)]"
          >
            Return window
          </h2>
          <div className="mx-auto max-w-2xl">
            <p className="text-[var(--text-lead-min)] text-[var(--color-text-secondary)] leading-relaxed">
              Returns are accepted within seven days of delivery for unworn items with original tags intact. Pieces returned outside this window, or worn, washed, or altered, may not be eligible for return.
            </p>
          </div>
          <div className="mt-8 rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-6">
            <h3 className="text-base font-medium tracking-tight text-[var(--color-text-primary)]">What qualifies</h3>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-secondary)]">
              <li className="flex gap-3">
                <span className="mt-0.5 text-[var(--color-accent)]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg></span>
                <span>Unworn, unwashed, and with original tags attached</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-[var(--color-accent)]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg></span>
                <span>Returned within seven days of delivery</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-[var(--color-accent)]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg></span>
                <span>Returned in the original packaging where provided</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="process-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2
            id="process-heading"
            className="mb-12 font-display text-[var(--text-headline-min)] leading-[0.95] tracking-tight text-[var(--color-text-primary)]"
          >
            The process
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Step 1</span>
              <h3 className="text-base font-medium tracking-tight text-[var(--color-text-primary)]">Contact the studio</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Reach out with your order number and the reason for the return so we can confirm eligibility.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Step 2</span>
              <h3 className="text-base font-medium tracking-tight text-[var(--color-text-primary)]">Return authorization</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                We will confirm the return and share next steps, including any return shipping details where applicable.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Step 3</span>
              <h3 className="text-base font-medium tracking-tight text-[var(--color-text-primary)]">Ship the piece back</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Pack the piece carefully and return it using the instructions we provide.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Step 4</span>
              <h3 className="text-base font-medium tracking-tight text-[var(--color-text-primary)]">Refund or exchange</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Once received and inspected, we will process the refund or exchange as agreed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="refund-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2
            id="refund-heading"
            className="mb-12 font-display text-[var(--text-headline-min)] leading-[0.95] tracking-tight text-[var(--color-text-primary)]"
          >
            Refunds
          </h2>
          <div className="mx-auto max-w-2xl">
            <p className="text-[var(--text-lead-min)] text-[var(--color-text-secondary)] leading-relaxed">
              Approved refunds are issued to the original payment method where possible. Refunds may take several business days to appear depending on your bank or card provider.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="questions-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2
            id="questions-heading"
            className="mb-12 font-display text-[var(--text-headline-min)] leading-[0.95] tracking-tight text-[var(--color-text-primary)]"
          >
            Questions
          </h2>
          <div className="mx-auto max-w-2xl">
            <p className="text-[var(--text-lead-min)] text-[var(--color-text-secondary)] leading-relaxed">
              If you are unsure whether a piece qualifies, or you want to request an exchange, contact the studio and we will help.
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
