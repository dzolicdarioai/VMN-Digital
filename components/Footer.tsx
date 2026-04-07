'use client'

interface FooterProps {
  onCTAClick: () => void
}

export default function Footer({ onCTAClick }: FooterProps) {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold mb-4">
              <span className="text-primary">VMN</span>
              <span className="text-foreground ml-2">Digital</span>
            </div>
            <p className="text-foreground/60 text-sm">
              Transforming businesses through premium web design and digital solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors">Web Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Performance Improvement</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consultation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="mailto:dzolicdario@vmn-digital.com" className="hover:text-primary transition-colors">dzolicdario@vmn-digital.com</a></li>
              <li><a href="mailto:info@vmn-digital.com" className="hover:text-primary transition-colors">info@vmn-digital.com</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t border-border">
          <p className="text-foreground/60 text-sm">
            © 2024 VMN Digital. All rights reserved.
          </p>
          <button
            onClick={onCTAClick}
            className="btn-primary text-sm"
          >
            Check My Website
          </button>
        </div>
      </div>
    </footer>
  )
}
