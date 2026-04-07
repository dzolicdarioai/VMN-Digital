/**
 * Subtle fixed backdrop: slow gradient drift + soft floating “3D” orb (CSS only).
 * Respects prefers-reduced-motion via CSS.
 */
export function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {/* Slow-moving gradient wash */}
      <div className="animated-bg-gradient absolute inset-[-20%] opacity-[0.72]" />

      {/* Floating soft glow orbs */}
      <div className="animated-bg-orb animated-bg-orb-a absolute -left-[15%] top-[12%] h-[min(42rem,85vw)] w-[min(42rem,85vw)] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgb(102_252_241_/_0.1),transparent_62%)] blur-3xl" />
      <div className="animated-bg-orb animated-bg-orb-b absolute -right-[12%] bottom-[8%] h-[min(36rem,75vw)] w-[min(36rem,75vw)] rounded-full bg-[radial-gradient(circle_at_70%_60%,rgb(69_162_158_/_0.09),transparent_65%)] blur-3xl" />

      {/* Abstract geometric shape — slow 3D-ish tilt (CSS perspective) */}
      <div
        className="absolute left-1/2 top-[38%] h-[min(28rem,70vw)] w-[min(28rem,70vw)] -translate-x-1/2 -translate-y-1/2 opacity-[0.085] [perspective:1200px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <svg
          className="animated-bg-shape h-full w-full text-primary"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="currentColor" strokeWidth="0.6" strokeLinejoin="round">
            <path d="M100 12 L168 52 L168 128 L100 168 L32 128 L32 52 Z" />
            <path d="M100 12 L100 88 M32 52 L100 88 L168 52 M32 128 L100 88 L168 128" />
            <path d="M100 88 L100 168" opacity="0.5" />
          </g>
        </svg>
      </div>
    </div>
  )
}
