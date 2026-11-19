import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/types/commerce";
import { ArrowRight } from "lucide-react";

interface CollectionHeaderProps {
  collection: Collection;
}

export function CollectionHeader({ collection }: CollectionHeaderProps) {
  return (
    <header className="relative border-b border-[var(--color-border)] bg-[var(--color-bg-primary)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-secondary)] via-transparent to-transparent" />

      {collection.coverImage && (
        <div className="relative aspect-[3/2] sm:aspect-[4/1]">
          <Image
            src={collection.coverImage}
            alt={`${collection.title} collection cover`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[var(--color-bg-primary)]/70" />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <p className="mb-3 text-sm uppercase tracking-[0.32em] text-[var(--color-accent)]">
          Edit {collection.sortOrder}
        </p>
        <h1 className="font-display text-[var(--text-display-min)] leading-[0.9] tracking-tight text-[var(--color-text-primary)]">
          {collection.title}
        </h1>
        <p className="mt-4 text-lg uppercase tracking-[0.28em] text-[var(--color-text-secondary)]">
          {collection.subtitle}
        </p>
        <p className="mt-5 max-w-2xl text-[var(--text-lead-min)] leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
          {collection.description}
        </p>

        <div className="mt-8 flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]">
          <span>View the collection</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </div>
      </div>
    </header>
  );
}
