export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Solutions Inc.',
      text: 'VMN Digital transformed our online presence. Their attention to detail and professional approach resulted in a website that exceeded our expectations. Highly recommend!',
    },
    {
      name: 'Michael Chen',
      company: 'Digital Marketing Co.',
      text: 'Working with VMN Digital was a seamless experience. They understood our vision and delivered a modern, responsive website that has significantly improved our client engagement.',
    },
    {
      name: 'Emma Rodriguez',
      company: 'Creative Studio',
      text: 'The team at VMN Digital is professional, responsive, and talented. They not only built our website but provided valuable insights on optimizing our web strategy. Outstanding service!',
    },
  ]

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
          What Our <span className="text-primary">Clients Say</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Real feedback from businesses we&apos;ve helped succeed online.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-lg border border-border"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-lg">★</span>
                ))}
              </div>
              <p className="text-foreground/80 mb-6 leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <p className="font-semibold text-primary">{testimonial.name}</p>
                <p className="text-foreground/60 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
