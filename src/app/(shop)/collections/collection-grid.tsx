"use client";

import Link from "next/link";
import type { Collection } from "@/types/commerce";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CollectionGridProps {
  collections: Collection[];
}

export function CollectionGrid({ collections }: CollectionGridProps) {
  return (
    <section
      aria-labelledby="collections-heading"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)] px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="collections-heading"
          className="sr-only"
        >
          Collections
        </h2>

        <ul
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {collections.map((collection, index) => (
            <motion.li
              key={collection.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50% 0px -50% 0px" }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
            >
              <a
                href={`/collections/${collection.slug}`}
                className="group block overflow-hidden rounded-sm border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] transition-shadow hover:border-[var(--color-accent)]/50"
              >
                <div className="relative aspect-[3/4] bg-[var(--color-bg-primary)]">
                  {collection.coverImage ? (
                    <img
                      src={collection.coverImage}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-6xl font-bold text-[var(--color-accent)]/20" aria-hidden="true">
                        {index + 1}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-tertiary)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="mb-1 text-xs uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
                    Edit {collection.sortOrder}
                  </p>
                  <h3 className="text-lg font-medium tracking-tight text-[var(--color-text-primary)]">
                    {collection.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                    {collection.subtitle}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-[var(--color-text-secondary)] transition-colors group-hover:text-[var(--color-accent)]">
                    <span>Shop the edit</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                </div>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
