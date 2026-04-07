export default function AboutUs() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
          About <span className="text-primary">VMN Digital</span>
        </h2>
        
        <div className="space-y-6 text-foreground/80 leading-relaxed">
          <p>
            VMN Digital is a dedicated web design agency committed to helping businesses establish and strengthen their online presence. We believe that a well-designed website is more than just an aesthetic achievement—it&apos;s a strategic tool for business growth.
          </p>
          
          <p>
            With a focus on modern design principles, user experience, and technical excellence, we work with businesses of all sizes to create websites that not only look beautiful but also perform exceptionally. Our approach combines creative vision with practical strategy to deliver solutions that drive measurable results.
          </p>
          
          <p>
            We understand that every business is unique. That&apos;s why we take time to understand your goals, your audience, and your industry before we start designing. This personalized approach ensures that every project we undertake is a true reflection of your brand and vision.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-card rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <p className="text-foreground/70">Projects Completed</p>
          </div>
          <div className="p-6 bg-card rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <p className="text-foreground/70">Happy Clients</p>
          </div>
          <div className="p-6 bg-card rounded-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <p className="text-foreground/70">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
