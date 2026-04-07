'use client'

interface HeaderProps {
  onContactClick: () => void
}

export default function Header({ onContactClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <span className="text-primary">VMN</span>
          <span className="text-foreground ml-2">Digital</span>
        </div>
        <button
          onClick={onContactClick}
          className="btn-primary text-sm md:text-base"
        >
          Check My Website
        </button>
      </div>
    </header>
  )
}
