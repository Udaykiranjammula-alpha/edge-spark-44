import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout — EDGE SPARK",
  description: "Complete your order with EDGE SPARK.",
  metadataBase: new URL("https://edgespark.in"),
};

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <header className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-[var(--color-text-secondary)]">
          Complete your order
        </p>
        <h1 className="mt-2 font-display text-[var(--text-display-min)] leading-[0.9] tracking-tight text-[var(--color-text-primary)]">
          Checkout
        </h1>
      </header>

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3 rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <h2 className="text-lg font-medium tracking-tight text-[var(--color-text-primary)]">
            Contact & shipping
          </h2>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            Checkout is a stub in this preview. Connect a payment provider and shipping settings to accept real orders.
          </p>
        </div>

        <div className="lg:col-span-2 rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-6">
          <h2 className="text-lg font-medium tracking-tight text-[var(--color-text-primary)]">
            Order summary
          </h2>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            Cart totals would render here from your cart provider.
          </p>
        </div>
      </div>
    </div>
  );
}
