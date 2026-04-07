export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Consultation',
      description: 'We start by understanding your business, goals, target audience, and vision. Through detailed consultation, we gather all essential information to inform our design strategy.',
    },
    {
      number: '02',
      title: 'Design & Strategy',
      description: 'Our team creates a comprehensive design strategy and mockups that align with your brand. We focus on user experience, modern aesthetics, and conversion optimization.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'We build your website with clean, efficient code following industry best practices. Every line of code is optimized for performance, security, and scalability.',
    },
    {
      number: '04',
      title: 'Testing & Launch',
      description: 'Rigorous testing ensures your website works flawlessly across all devices and browsers. Once approved, we launch your site and provide ongoing support.',
    },
  ]

  return (
    <section className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
          Our <span className="text-primary">Process</span>
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          We follow a structured, collaborative process to deliver excellent results every time.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-8 bg-background rounded-lg border border-border"
            >
              <div className="text-5xl font-bold text-primary/30 mb-4">{step.number}</div>
              <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
