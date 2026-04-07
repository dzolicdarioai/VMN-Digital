export default function Services() {
  const services = [
    {
      title: 'Web Design',
      description: 'Custom web design tailored to your brand. We build responsive, modern websites that look great on all devices and engage your audience. Every design decision supports your business objectives.',
    },
    {
      title: 'Performance Improvement',
      description: 'Optimize your existing website for better speed, user experience, and search rankings. We identify and fix performance bottlenecks to ensure your site runs efficiently and keeps visitors engaged.',
    },
  ]

  return (
    <section className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          We offer specialized services designed to elevate your web presence and drive business growth.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-background rounded-lg border border-border hover:border-primary transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
