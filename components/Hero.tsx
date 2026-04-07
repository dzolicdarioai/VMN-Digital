'use client'

interface HeroProps {
  onCTAClick: () => void
}

export default function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
          Web Design That <span className="text-primary">Drives Results</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          We create modern, responsive websites that help your business grow. From concept to launch, we deliver quality web solutions tailored to your unique needs.
        </p>
        <button
          onClick={onCTAClick}
          className="btn-primary text-base md:text-lg"
        >
          Check My Website
        </button>
      </div>
    </section>
  )
}
