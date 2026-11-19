import type { Product } from "@/types/commerce";
import { ProductCard } from "@/components/shop/product-card";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section aria-labelledby="products-heading" className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {products.length > 0 ? (
          <>
            <h2
              id="products-heading"
              className="sr-only"
            >
              Products
            </h2>

            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
              {products.map((product) => (
                <li key={product.id}>
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="mx-auto max-w-xl border border-dashed border-[var(--color-border)] py-16 text-center">
            <p className="text-sm uppercase tracking-widest text-[var(--color-text-muted)]">
              No products in this collection yet.
            </p>
            <p className="mt-2 text-[var(--color-text-secondary)]">
              Check back soon for new arrivals.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
