export type Locale = 'en' | 'hr'

export const STORAGE_KEY = 'vmn-digital-locale'

const en = {
  lang: {
    switch: 'Language',
    en: 'English',
    hr: 'Croatian',
  },
  cta: {
    primary: 'Request a free analysis',
  },
  header: {
    brand: 'VMN Digital',
  },
  hero: {
    titleBefore: 'Web design that ',
    titleHighlight: 'drives results',
    subtitle:
      'We create modern, responsive websites that help your business grow. From concept to launch, we deliver quality web solutions tailored to your unique needs.',
  },
  services: {
    titleBefore: 'Our ',
    titleHighlight: 'services',
    intro:
      'We offer specialized services designed to elevate your web presence and drive business growth.',
    items: [
      {
        title: 'Web design',
        description:
          'Custom web design tailored to your brand. We build responsive, modern websites that look great on all devices and engage your audience. Every design decision supports your business objectives.',
      },
      {
        title: 'Performance improvement',
        description:
          'Optimize your existing website for better speed, user experience, and search rankings. We identify and fix performance bottlenecks so your site runs efficiently and keeps visitors engaged.',
      },
    ],
  },
  about: {
    titleBefore: 'About ',
    titleHighlight: 'VMN Digital',
    p1: 'VMN Digital is a dedicated web design agency committed to helping businesses establish and strengthen their online presence. We believe that a well-designed website is more than an aesthetic achievement—it is a strategic tool for business growth.',
    p2: 'With a focus on modern design principles, user experience, and technical excellence, we work with businesses of all sizes to create websites that not only look beautiful but also perform exceptionally. Our approach combines creative vision with practical strategy to deliver solutions that drive measurable results.',
    p3: 'We understand that every business is unique. That is why we take time to understand your goals, your audience, and your industry before we start designing. This personalized approach ensures that every project we undertake is a true reflection of your brand and vision.',
    statValues: ['100+', '50+', '5+'] as const,
    stat1: 'Projects completed',
    stat2: 'Happy clients',
    stat3: 'Years experience',
  },
  process: {
    titleBefore: 'Our ',
    titleHighlight: 'process',
    intro:
      'We follow a structured, collaborative process to deliver excellent results every time.',
    steps: [
      {
        number: '01',
        title: 'Discovery & consultation',
        description:
          'We start by understanding your business, goals, target audience, and vision. Through detailed consultation, we gather all essential information to inform our design strategy.',
      },
      {
        number: '02',
        title: 'Design & strategy',
        description:
          'Our team creates a comprehensive design strategy and mockups that align with your brand. We focus on user experience, modern aesthetics, and conversion optimization.',
      },
      {
        number: '03',
        title: 'Development',
        description:
          'We build your website with clean, efficient code following industry best practices. Every line of code is optimized for performance, security, and scalability.',
      },
      {
        number: '04',
        title: 'Testing & launch',
        description:
          'Rigorous testing ensures your website works flawlessly across all devices and browsers. Once approved, we launch your site and provide ongoing support.',
      },
    ],
  },
  testimonials: {
    titleBefore: 'What our ',
    titleHighlight: 'clients say',
    intro: 'Real feedback from businesses we have helped succeed online.',
    items: [
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
    ],
  },
  contact: {
    titleBefore: 'Ready to get ',
    titleHighlight: 'started?',
    heading: 'Let’s work together',
    body:
      'We are excited to learn about your project and discuss how we can help your business thrive online. Reach out through any of the channels below.',
    emailLabel: 'Email addresses',
    form: {
      name: 'Your name',
      namePlaceholder: 'John Doe',
      email: 'Email address',
      emailPlaceholder: 'you@example.com',
      message: 'Message',
      messagePlaceholder: 'Tell us about your project…',
      submit: 'Send message',
    },
  },
  footer: {
    tagline:
      'Transforming businesses through premium web design and digital solutions.',
    colServices: 'Services',
    colCompany: 'Company',
    colContact: 'Contact',
    linkWebDesign: 'Web design',
    linkPerformance: 'Performance improvement',
    linkConsultation: 'Consultation',
    linkAbout: 'About us',
    linkProcess: 'Our process',
    linkContact: 'Contact',
    copyright: '© {year} VMN Digital. All rights reserved.',
  },
} as const

const hr = {
  lang: {
    switch: 'Jezik',
    en: 'Engleski',
    hr: 'Hrvatski',
  },
  cta: {
    primary: 'Zatraži besplatnu analizu',
  },
  header: {
    brand: 'VMN Digital',
  },
  hero: {
    titleBefore: 'Web dizajn koji ',
    titleHighlight: 'donosi rezultate',
    subtitle:
      'Stvaramo moderne, responzivne web stranice koje pomažu vašem poslovanju. Od koncepta do lansiranja isporučujemo kvalitetna rješenja prilagođena vašim potrebama.',
  },
  services: {
    titleBefore: 'Naše ',
    titleHighlight: 'usluge',
    intro:
      'Nudimo specijalizirane usluge dizajnirane da podignu vašu web prisutnost i poslovni rast.',
    items: [
      {
        title: 'Web dizajn',
        description:
          'Prilagođen web dizajn u skladu s vašim brendom. Gradimo moderne, responzivne stranice koje izgledaju odlično na svim uređajima i angažiraju posjetitelje. Svaka odluka o dizajn podržava vaše poslovne ciljeve.',
      },
      {
        title: 'Poboljšanje performansi',
        description:
          'Optimizirajte postojeću stranicu radi bolje brzine, korisničkog iskustva i SEO-a. Otklanjamo uska grla kako bi stranica bila učinkovita i zadržala posjetitelje.',
      },
    ],
  },
  about: {
    titleBefore: 'O ',
    titleHighlight: 'VMN Digitalu',
    p1: 'VMN Digital je web agencija posvećena pomoći tvrtkama da izgrade i ojačaju svoju online prisutnost. Vjerujemo da dobro dizajnirana stranica nije samo estetika—ona je strateški alat za rast.',
    p2: 'S fokusom na moderne principe dizajna, korisničko iskustvo i tehničku izvrsnost radimo s tvrtkama svih veličina kako bismo stvorili stranice koje ne samo da izgledaju odlično, nego i izvrsno funkcioniraju. Kombiniramo kreativnu viziju s praktičnom strategijom kako bismo donijeli mjerljive rezultate.',
    p3: 'Svako je poslovanje jedinstveno. Zato prvo razumijemo vaše ciljeve, publiku i industriju prije nego što krenemo u dizajn. Tako osiguravamo da svaki projekt odražava vaš brend i viziju.',
    statValues: ['100+', '50+', '5+'] as const,
    stat1: 'Završenih projekata',
    stat2: 'Zadovoljnih klijenata',
    stat3: 'Godina iskustva',
  },
  process: {
    titleBefore: 'Naš ',
    titleHighlight: 'proces',
    intro:
      'Pratimo strukturiran, suradnički proces kako bismo svaki put isporučili izvrsne rezultate.',
    steps: [
      {
        number: '01',
        title: 'Istraživanje i konzultacije',
        description:
          'Prvo razumijemo vaše poslovanje, ciljeve, publiku i viziju. Detaljnim konzultacijama prikupljamo sve bitno za strategiju dizajna.',
      },
      {
        number: '02',
        title: 'Dizajn i strategija',
        description:
          'Naš tim izrađuje strategiju dizajna i makete usklađene s vašim brendom. Fokusiramo se na UX, moderan izgled i optimizaciju konverzija.',
      },
      {
        number: '03',
        title: 'Razvoj',
        description:
          'Gradimo vašu stranicu čistim, učinkovitim kodom prema najboljim praksama. Svaka linija koda optimizirana je za performanse, sigurnost i skalabilnost.',
      },
      {
        number: '04',
        title: 'Testiranje i lansiranje',
        description:
          'Temeljito testiranje osigurava da stranica radi besprijekorno na svim uređajima i preglednicima. Nakon odobrenja lansiramo stranicu i pružamo podršku.',
      },
    ],
  },
  testimonials: {
    titleBefore: 'Što kažu ',
    titleHighlight: 'klijenti',
    intro: 'Stvarne povratne informacije tvrtki kojima smo pomogli online uspjeh.',
    items: [
      {
        name: 'Sarah Johnson',
        company: 'Tech Solutions Inc.',
        text: 'VMN Digital transformirao je našu online prisutnost. Pažnja prema detaljima i profesionalan pristup rezultirali su stranicom koja je nadmašila očekivanja. Topla preporuka!',
      },
      {
        name: 'Michael Chen',
        company: 'Digital Marketing Co.',
        text: 'Suradnja s VMN Digitalom bila je jednostavna. Razumjeli su našu viziju i isporučili modernu, responzivnu stranicu koja je značajno poboljšala angažman klijenata.',
      },
      {
        name: 'Emma Rodriguez',
        company: 'Creative Studio',
        text: 'Tim VMN Digitala profesionalan je, brz i talentiran. Ne samo da su izgradili stranicu, nego su dali i korisne smjernice za optimizaciju web strategije. Izvrsna usluga!',
      },
    ],
  },
  contact: {
    titleBefore: 'Spremni za ',
    titleHighlight: 'prvi korak?',
    heading: 'Radimo zajedno',
    body:
      'Jedva čekamo čuti o vašem projektu i kako vam možemo pomoći online rastu. Javite se putem bilo kojeg kanala u nastavku.',
    emailLabel: 'Adrese e-pošte',
    form: {
      name: 'Vaše ime',
      namePlaceholder: 'Ivan Horvat',
      email: 'E-adresa',
      emailPlaceholder: 'vi@primjer.hr',
      message: 'Poruka',
      messagePlaceholder: 'Opišite svoj projekt…',
      submit: 'Pošalji poruku',
    },
  },
  footer: {
    tagline:
      'Transformiramo poslovanje kroz vrhunski web dizajn i digitalna rješenja.',
    colServices: 'Usluge',
    colCompany: 'Tvrtka',
    colContact: 'Kontakt',
    linkWebDesign: 'Web dizajn',
    linkPerformance: 'Poboljšanje performansi',
    linkConsultation: 'Konzultacije',
    linkAbout: 'O nama',
    linkProcess: 'Naš proces',
    linkContact: 'Kontakt',
    copyright: '© {year} VMN Digital. Sva prava pridržana.',
  },
} as const

export type Dictionary = typeof en

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  hr: hr as unknown as Dictionary,
}
