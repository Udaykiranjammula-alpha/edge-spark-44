import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orders — EDGE SPARK",
  description: "Your EDGE SPARK orders.",
  metadataBase: new URL("https://edgespark.in"),
};

export default function OrdersPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <header className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-[var(--color-text-secondary)]">
          Your orders
        </p>
        <h1 className="mt-2 font-display text-[var(--text-display-min)] leading-[0.9] tracking-tight text-[var(--color-text-primary)]">
          Orders
        </h1>
      </header>

      <div className="mx-auto max-w-2xl">
        <p className="rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6 text-sm text-[var(--color-text-secondary)]">
          Order history is stubbed in this preview. Connect a database and auth to render real orders for signed-in customers.
        </p>
      </div>
    </div>
  );
}
