import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms — EDGE SPARK",
  description: "EDGE SPARK terms of service.",
  metadataBase: new URL("https://edgespark.in"),
};

export default function TermsPage() {
  return (
    <>
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[var(--color-accent)]">
            Legal
          </p>
          <h1 className="font-display text-[var(--text-display-min)] leading-[0.9] tracking-tight text-[var(--color-text-primary)]">
            Terms
          </h1>
        </div>
      </header>

      <section aria-labelledby="terms-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] max-w-3xl mx-auto px-5 py-24 sm:px-8">
        <div className="prose prose-invert max-w-none text-[var(--text-lead-min)] text-[var(--color-text-secondary)]">
          <h2
            id="terms-heading"
            className="font-display text-[var(--text-headline-min)] tracking-tight text-[var(--color-text-primary)]"
          >
            Terms of service
          </h2>
          {[
            {
              heading: "1. Acceptance",
              body: "By using this site you agree to these terms. If you do not agree, do not use the site.",
            },
            {
              heading: "2. Products and pricing",
              body: "All products, descriptions, and prices are indicative and may change without notice. Where a price is shown, it is listed in INR unless otherwise stated.",
            },
            {
              heading: "3. Orders",
              body: "Orders are subject to availability, price accuracy, and acceptance by EDGE SPARK. We reserve the right to refuse or cancel an order where needed.",
            },
            {
              heading: "4. Delivery",
              body: "Delivery times, shipping options, and any applicable duties or taxes are described on the delivery page and may vary by destination.",
            },
            {
              heading: "5. Returns",
              body: "Returns are handled per the returns policy. This site does not guarantee returns outside the stated window or for items not meeting the stated conditions.",
            },
            {
              heading: "6. Intellectual property",
              body: "The brand name, logo, design elements, and content on this site are owned or controlled by EDGE SPARK and may not be used without permission.",
            },
            {
              heading: "7. Limitation",
              body: "To the fullest extent permitted by law, EDGE SPARK is not liable for indirect, incidental, or consequential losses arising from use of the site or purchase of products.",
            },
            {
              heading: "8. Changes",
              body: "These terms may be updated from time to time. The current version is available on this page.",
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
