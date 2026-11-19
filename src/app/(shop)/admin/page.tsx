import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin — EDGE SPARK",
  description: "EDGE SPARK studio admin.",
  metadataBase: new URL("https://edgespark.in"),
};

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <header className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-[var(--color-text-secondary)]">
          Studio administration
        </p>
        <h1 className="mt-2 font-display text-[var(--text-display-min)] leading-[0.9] tracking-tight text-[var(--color-text-primary)]">
          Admin
        </h1>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <DashboardCard
          title="Orders"
          description="Manage incoming and fulfilled orders."
          href="/admin/orders"
        />
        <DashboardCard
          title="Products"
          description="Edit garments, variants, pricing, and media."
          href="/admin/products"
        />
        <DashboardCard
          title="Collections"
          description="Organize the edits and featured pieces."
          href="/admin/collections"
        />
        <DashboardCard
          title="Customers"
          description="View account and order history."
          href="/admin/customers"
        />
        <DashboardCard
          title="Content"
          description="Brand story, banners, and editorial pages."
          href="/admin/content"
        />
        <DashboardCard
          title="Settings"
          description="Store, shipping, and payment configuration."
          href="/admin/settings"
        />
      </div>

      <div className="mt-10 rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
        <h2 className="text-lg font-medium tracking-tight text-[var(--color-text-primary)]">
          Admin preview
        </h2>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
          This admin shell is a stub in the current preview. Real admin pages connect to your database and admin authentication, and keep store operations behind access control.
        </p>
      </div>
    </div>
  );
}

function DashboardCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] p-6 transition-colors hover:border-[var(--color-accent)]/50"
    >
      <h3 className="text-base font-medium tracking-tight text-[var(--color-text-primary)]">
        {title}
      </h3>
      <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-[var(--color-text-muted)] transition-colors group-hover:text-[var(--color-accent)]">
        Open
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  );
}
