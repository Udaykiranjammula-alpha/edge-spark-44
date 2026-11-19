import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy — EDGE SPARK",
  description: "EDGE SPARK privacy policy.",
  metadataBase: new URL("https://edgespark.in"),
};

export default function PrivacyPage() {
  return (
    <>
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[var(--color-accent)]">
            Legal
          </p>
          <h1 className="font-display text-[var(--text-display-min)] leading-[0.9] tracking-tight text-[var(--color-text-primary)]">
            Privacy
          </h1>
        </div>
      </header>

      <section aria-labelledby="privacy-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] max-w-3xl mx-auto px-5 py-24 sm:px-8">
        <div className="prose prose-invert max-w-none text-[var(--text-lead-min)] text-[var(--color-text-secondary)]">
          <h2
            id="privacy-heading"
            className="font-display text-[var(--text-headline-min)] tracking-tight text-[var(--color-text-primary)]"
          >
            Privacy policy
          </h2>
          {[
            {
              heading: "1. What we collect",
              body: "We collect information you provide directly, such as contact details and order information, when you create an account, place an order, or contact the studio.",
            },
            {
              heading: "2. How we use it",
              body: "We use your information to fulfill orders, communicate about your account and orders, and improve the site. We do not use it for purposes you have not reasonably expected.",
            },
            {
              heading: "3. Sharing",
              body: "We do not sell your personal data. We may share information with service providers needed to operate the store, fulfill orders, and communicate with you, subject to appropriate safeguards.",
            },
            {
              heading: "4. Your rights",
              body: "Depending on your location, you may have rights to access, correct, delete, or restrict the use of your personal data. Contact the studio to exercise these rights.",
            },
            {
              heading: "5. Security",
              body: "We take reasonable steps to protect the information we hold. No system is completely secure, and we cannot guarantee absolute security.",
            },
            {
              heading: "6. Cookies",
              body: "The site may use cookies and similar technologies for essential functions, analytics, and personalization. You can adjust your browser settings if you do not consent.",
            },
            {
              heading: "7. Changes",
              body: "This policy may be updated from time to time. The current version is available on this page.",
            },
          ].map((section) => (
            <div key={section.heading} className="mt-8">
              <h3 className="text-base font-medium tracking-tight text-[var(--color-text-primary)]">{section.heading}</h3>
              <p className="mt-2 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
