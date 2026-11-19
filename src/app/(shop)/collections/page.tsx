import { getCollections } from "@/lib/products";
import { CollectionGrid } from "./collection-grid";

export async function generateMetadata(): Promise<import("next").Metadata> {
  return {
    title: "Collections — EDGE SPARK",
    description:
      "Shop the current edit and the permanent archive. New arrivals, statement pieces, and the quiet essentials from EDGE SPARK.",
    metadataBase: new URL("https://edgespark.in"),
  };
}

export default function CollectionsPage() {
  const collections = getCollections();

  return (
    <>
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg-primary)]">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <p className="mb-4 text-sm uppercase tracking-[0.32em] text-[var(--color-text-secondary)]">
            The edits
          </p>
          <h1 className="font-display text-[var(--text-display-min)] leading-[0.9] tracking-tight text-[var(--color-text-primary)]">
            Collections
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[var(--text-lead-min)] text-[var(--color-text-secondary)]">
            A small set of deliberate edits. Each one holds a point of view;
            each piece is built to stay in rotation.
          </p>
        </div>
      </header>

      <CollectionGrid collections={collections} />
    </>
  );
}
