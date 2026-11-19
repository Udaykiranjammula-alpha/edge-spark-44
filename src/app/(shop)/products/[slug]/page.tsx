import type { Metadata } from "next";
import Link from "next/link";
import { getCollection, getProduct } from "@/lib/products";
import ProductPage from "./product-page";

export async function generateStaticParams() {
  const collection = getCollection("new");
  if (!collection) return [];
  return collection.productIds
    .map((id) => {
      const product = getProduct(id);
      return product ? { slug: product.slug } : null;
    })
    .filter((p): p is { slug: string } => p != null);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Product — EDGE SPARK" };
  }

  return {
    title: `${product.name} — EDGE SPARK`,
    description: product.description,
    metadataBase: new URL("https://edgespark.in"),
    openGraph: {
      title: `${product.name} — EDGE SPARK`,
      description: product.description,
      images: product.images.map((img) => ({
        url: img.url,
        width: 1200,
        height: 1200,
        alt: img.alt,
      })),
      type: "website",
      locale: "en_IN",
    },
  };
}

export default async function ProductRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8">
        <h1 className="font-display text-[var(--text-display-min)] text-[var(--color-text-primary)]">
          Product not found
        </h1>
        <p className="mt-4 text-[var(--color-text-secondary)]">
          This piece is not in the current edit.
        </p>
        <Link
          href="/collections/new"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm uppercase tracking-widest text-[var(--color-text-primary)] transition-colors hover:border-[var(--color-text-secondary)]"
        >
          Back to the new edit
        </Link>
      </div>
    );
  }

  return <ProductPage product={product} />;
}
