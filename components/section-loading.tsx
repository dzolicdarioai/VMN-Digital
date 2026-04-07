/**
 * Placeholder while below-the-fold sections load (dynamic import).
 * Matches section rhythm and dark surfaces so the page doesn’t flash flat gray.
 */
export function SectionSkeleton() {
  return (
    <section
      className="section-padding section-surface relative overflow-hidden"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-[10%] top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-[8%] bottom-0 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />
      </div>
      <div className="relative z-[1] mx-auto max-w-6xl animate-pulse space-y-6">
        <div className="mx-auto h-10 w-[min(100%,20rem)] rounded-lg bg-card/60" />
        <div className="mx-auto h-4 w-[min(100%,28rem)] rounded bg-card/40" />
        <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2">
          <div className="h-52 rounded-xl border border-border/30 bg-card/35" />
          <div className="h-52 rounded-xl border border-border/30 bg-card/35" />
        </div>
      </div>
    </section>
  )
}
