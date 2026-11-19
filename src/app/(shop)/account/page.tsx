import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in — EDGE SPARK",
  description: "Sign in to your EDGE SPARK account.",
  metadataBase: new URL("https://edgespark.in"),
};

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <header className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-[var(--color-text-secondary)]">
          Your account
        </p>
        <h1 className="mt-2 font-display text-[var(--text-display-min)] leading-[0.9] tracking-tight text-[var(--color-text-primary)]">
          Sign in
        </h1>
      </header>

      <div className="mx-auto max-w-lg">
        <div className="rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-6">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Accounts and authentication are stubbed in this preview.
          </p>
          <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
            In the full build, this route will connect to your auth provider and render sign-in, registration, and password reset flows.
          </p>
        </div>
      </div>
    </div>
  );
}
