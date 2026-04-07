'use client'

export default function ContactUs() {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
          Ready to Get <span className="text-primary">Started?</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Let&apos;s Work Together</h3>
            <p className="text-foreground/80 leading-relaxed">
              We&apos;re excited to learn about your project and discuss how we can help your business thrive online. Reach out to us through any of the channels below.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-foreground/60 text-sm mb-2">Email Addresses:</p>
                <a href="mailto:dzolicdario@vmn-digital.com" className="text-primary hover:text-secondary transition-colors block">
                  dzolicdario@vmn-digital.com
                </a>
                <a href="mailto:info@vmn-digital.com" className="text-primary hover:text-secondary transition-colors block">
                  info@vmn-digital.com
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 bg-background rounded-lg border border-border">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
