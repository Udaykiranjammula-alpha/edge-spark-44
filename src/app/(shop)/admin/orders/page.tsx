export default function AdminOrdersPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <header className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-[var(--color-text-secondary)]">
          Orders
        </p>
        <h1 className="mt-2 font-display text-[var(--text-display-min)] leading-[0.9] tracking-tight text-[var(--color-text-primary)]">
          Order management
        </h1>
      </header>
      <p className="mx-auto max-w-2xl text-sm text-[var(--color-text-secondary)]">
        Order administration is stubbed in this preview. Connect a database to list, filter, and fulfill orders.
      </p>
    </div>
  );
}
