import type { Metadata } from "next";
import { getCollection, getProductsForCollection } from "@/lib/products";
import { CollectionHeader } from "./collection-header";
import { ProductGrid } from "./product-grid";

export async function generateStaticParams() {
  const collections = [
    { slug: "new" },
    { slug: "archives" },
    { slug: "statement" },
    { slug: "classics" },
  ];
  return collections;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);

  if (!collection) {
    return { title: "Collection — EDGE SPARK" };
  }

  return {
    title: `${collection.title} — EDGE SPARK`,
    description: collection.description,
    metadataBase: new URL("https://edgespark.in"),
    openGraph: {
      title: `${collection.title} — EDGE SPARK`,
      description: collection.description,
      type: "website",
      locale: "en_IN",
    },
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  const products = getProductsForCollection(slug);

  if (!collection) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8">
        <h1 className="font-display text-[var(--text-display-min)] text-[var(--color-text-primary)]">
          Collection not found
        </h1>
        <p className="mt-4 text-[var(--color-text-secondary)]">
          This edit does not exist yet.
        </p>
      </div>
    );
  }

  return (
    <>
      <CollectionHeader collection={collection} />
      <ProductGrid products={products} />
    </>
  );
}
