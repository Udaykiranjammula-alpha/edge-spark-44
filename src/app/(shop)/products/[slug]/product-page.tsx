"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import dynamic from "next/dynamic";
import { useCartContext } from "@/components/cart/cart-provider";
import { Price } from "@/components/ui/price";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, ChevronRight } from "lucide-react";
import type { Product, ProductVariant } from "@/types/commerce";
import { findVariant } from "@/lib/products";
import { formatCurrency } from "@/lib/format";

const ProductViewer = dynamic(
  () => import("@/components/product/product-viewer").then((m) => m.ProductViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center text-sm uppercase tracking-widest text-[var(--color-text-muted)]">
        Loading viewer
      </div>
    ),
  }
);

interface ProductPageProps {
  product: Product;
}

export default function ProductPageInner({ product }: ProductPageProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name ?? "");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.name ?? "");
  const variant = findVariant(product, selectedColor, selectedSize);
  const [addedId, setAddedId] = useState<string | null>(null);
  const { addItem } = useCartContext();

  const selectableVariant = product.variants.find(
    (v) => v.colorName === selectedColor && v.sizeName === selectedSize
  );

  const handleAddToCart = () => {
    if (!selectableVariant) return;
    addItem({
      productId: product.id,
      variantId: selectableVariant.id,
      productSlug: product.slug,
      productName: product.name,
      colorName: selectableVariant.colorName,
      sizeName: selectableVariant.sizeName,
      price: selectableVariant.price,
      currency: "INR",
      imageUrl: product.images[0]?.url,
    });
    setAddedId(selectableVariant.id);
    setTimeout(() => setAddedId(null), 1800);
  };

  const alternateImages = product.images.slice(1);

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm uppercase tracking-widest text-[var(--color-text-muted)]">
        <Link href="/" className="hover:text-[var(--color-text-secondary)]">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        <Link
          href={`/collections/${product.collectionIds[0] ?? "new"}`}
          className="hover:text-[var(--color-text-secondary)]"
        >
          {product.collectionIds[0] ?? "Collections"}
        </Link>
        <span aria-hidden="true"> / </span>
        <span className="text-[var(--color-text-secondary)]">{product.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[var(--color-bg-tertiary)]">
          <ProductViewer product={product} />
          {alternateImages.length > 0 && (
            <div className="absolute right-3 top-3 flex gap-2">
              {product.images.slice(0, 4).map((img, idx) => (
                <button
                  key={img.id}
                  type="button"
                  className={`h-9 w-9 overflow-hidden rounded-full border border-[var(--color-border)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] ${
                    idx === 0 ? "ring-2 ring-[var(--color-accent)]" : "hover:border-[var(--color-text-secondary)]"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <Image src={img.url} alt="" fill className="object-cover" sizes="36px" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--color-accent)]">
              {product.tagline}
            </p>
            <h1 className="mt-2 font-display text-[var(--text-display-min)] leading-[0.95] tracking-tight text-[var(--color-text-primary)]">
              {product.name}
            </h1>
          </div>

          <div className="flex items-baseline gap-3">
            <Price amountInPaise={product.price} compareAtAmountInPaise={product.compareAtPrice} />
            {product.compareAtPrice && (
              <span className="text-sm uppercase tracking-widest text-[var(--color-text-muted)]">
                Was {formatCurrency(product.compareAtPrice)}
              </span>
            )}
          </div>

          <p className="text-[var(--text-lead-min)] leading-relaxed text-[var(--color-text-secondary)]">
            {product.description}
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
                Color
              </h2>
              <div className="flex flex-wrap gap-3" role="group" aria-label="Select color">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    type="button"
                    onClick={() => setSelectedColor(color.name)}
                    className={`group flex items-center gap-3 rounded-full border transition-colors ${
                      selectedColor === color.name
                        ? "border-[var(--color-accent)] bg-[var(--color-bg-tertiary)]"
                        : "border-[var(--color-border)] hover:border-[var(--color-text-secondary)]"
                    }`}
                    aria-pressed={selectedColor === color.name}
                  >
                    <span
                      className="block h-5 w-5 rounded-full ring-1 ring-inset ring-[var(--color-border)]"
                      style={{ backgroundColor: color.hex }}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[var(--color-text-primary)]">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
                Size
              </h2>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Select size">
                {product.sizes.map((size) => (
                  <button
                    key={size.name}
                    type="button"
                    onClick={() => setSelectedSize(size.name)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] ${
                      selectedSize === size.name
                        ? "border-[var(--color-accent)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)]"
                        : size.available
                        ? "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-secondary)]"
                        : "border-[var(--color-border)] text-[var(--color-text-muted)] line-through cursor-not-allowed opacity-60"
                    }`}
                    aria-pressed={selectedSize === size.name}
                    disabled={!size.available}
                  >
                    {size.label}
                    {size.available === false && <span className="ml-1 text-[var(--color-text-muted)]"> — sold out</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              className="flex-1"
              onClick={handleAddToCart}
              disabled={!variant?.available}
            >
              <ShoppingBag className="mr-2 h-4 w-4" aria-hidden="true" />
              {addedId === selectableVariant?.id ? "Added" : "Add to cart"}
            </Button>
            <Link
              href={`/products/${product.slug}/details`}
              className="inline-flex h-12 w-28 items-center justify-center rounded-full border border-[var(--color-border)] text-sm uppercase tracking-widest transition-colors hover:border-[var(--color-text-secondary)]"
            >
              Details
              <ChevronRight className="ml-1 h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-3 text-sm text-[var(--color-text-secondary)] rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-[var(--color-accent)]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg></span>
              <div>
                <p className="font-medium text-[var(--color-text-primary)]">Delivery</p>
                <p>{product.deliveryNote}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-[var(--color-accent)]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 12h18M3 6h18M3 18h18"/></svg></span>
              <div>
                <p className="font-medium text-[var(--color-text-primary)]">Returns</p>
                <p>{product.returnPolicy}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
