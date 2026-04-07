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
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    nav: {
      services: 'Services',
      about: 'About',
      process: 'Process',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      contact: 'Contact',
    },
  },
  hero: {
    titleBefore: 'Web design that ',
    titleHighlight: 'drives results',
    subtitle:
      'We create modern, responsive websites that help your business grow. From concept to launch, we deliver quality web solutions tailored to your unique needs.',
    analysisLine:
      'Start with a free analysis—a quick review of your site, goals, and clear next steps before you commit to anything.',
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
          'Custom sites aligned with your brand—built to look sharp and move visitors toward action.',
        bullets: [
          'Clearer positioning and trust signals where it matters',
          'Smoother paths to contact and conversion on key pages',
          'Consistent experience from mobile to desktop',
        ],
      },
      {
        title: 'Performance improvement',
        description:
          'Speed and technical health upgrades for sites that already exist—so they feel fast and stay maintainable.',
        bullets: [
          'Shorter load times and stronger Core Web Vitals',
          'Less friction so visitors stay instead of bouncing',
          'A cleaner technical base for SEO and growth',
        ],
      },
    ],
  },
  about: {
    titleBefore: 'About ',
    titleHighlight: 'VMN Digital',
    brandLine: 'VMN – Visual Marketing Network',
    imageAlt:
      'Two young men shaking hands outdoors: one in a casual black t-shirt, the other in a navy pinstripe suit with a red tie—symbolizing partnership and trust for VMN Digital.',
    summary:
      'We help businesses strengthen their online presence with thoughtful web design—pairing strategy, performance, and clear communication so your site supports real outcomes.',
    readMore: 'Read more',
    readLess: 'Read less',
    p1: 'VMN Digital is the web practice behind VMN – Visual Marketing Network: a focused team helping businesses establish and strengthen their online presence. We believe that a well-designed website is more than an aesthetic achievement—it is a strategic tool for business growth.',
    p2: 'With a focus on modern design principles, user experience, and technical excellence, we work with organizations of different sizes to create websites that look sharp and perform reliably. Our approach combines creative vision with practical strategy so your site supports real business outcomes.',
    p3: 'Every business context is different. We invest time in understanding your goals, audience, and industry before design work begins—so the result reflects your brand with clarity and purpose.',
    softPoints: [
      'Strategy-first thinking from discovery to launch',
      'Performance and UX considered in every build',
      'Clear, steady communication throughout the project',
    ],
  },
  portfolio: {
    titleBefore: 'Selected ',
    titleHighlight: 'work',
    intro:
      'Placeholder case studies—illustrative examples of how we approach problems and outcomes. Real client stories will replace these when available.',
    problemLabel: 'Problem',
    solutionLabel: 'Solution',
    caseStudyCta: 'View case study',
    items: [
      {
        title: 'Regional HVAC services',
        category: 'Local services',
        problem: 'Slow pages and unclear service areas were costing leads on mobile.',
        solution: 'Restructured IA, stronger local proof, and performance-focused templates.',
        metrics: ['Faster LCP on key pages', 'Higher form completion', 'Clearer service-area UX'],
      },
      {
        title: 'B2B analytics product',
        category: 'SaaS',
        problem: 'Visitors struggled to understand the product value within the first screen.',
        solution: 'Sharper hero narrative, modular sections, and focused conversion paths.',
        metrics: ['Stronger scroll depth on hero', 'More demo requests', 'Reduced bounce on pricing'],
      },
      {
        title: 'Independent fashion retail',
        category: 'E-commerce',
        problem: 'Checkout felt heavy and product discovery was weaker on phones.',
        solution: 'Streamlined PDP/checkout flow and lighter assets on mobile breakpoints.',
        metrics: ['Smoother mobile checkout', 'Better category browse', 'Stable Core Web Vitals'],
      },
    ],
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
  faq: {
    titleBefore: 'Frequently asked ',
    titleHighlight: 'questions',
    intro:
      'Straight answers about how we work, what the free analysis covers, and what to expect—without pricing tables or surprises.',
    items: [
      {
        q: 'What does the free analysis include?',
        a: 'A focused review of your current site (or goals if you are pre-launch), your audience and objectives, and quick wins versus bigger bets. You get clear next steps—whether or not we work together afterward.',
      },
      {
        q: 'What timeline should I expect?',
        a: 'Timelines depend on scope: a focused landing refresh differs from a multi-section build. After the first conversation we outline phases and realistic milestones. We prioritize clarity over vague “ASAP” promises.',
      },
      {
        q: 'What should I prepare before we talk?',
        a: 'Optional but helpful: links to your site or references you like, who the site is for, and what “success” means (leads, bookings, credibility, etc.). No perfect brief required—we help you shape it.',
      },
      {
        q: 'I already have a website—can you still help?',
        a: 'Yes. Many projects are redesigns, performance work, or restructuring existing content. We assess what to keep, what to rebuild, and how to get the best outcome without starting from zero unless it makes sense.',
      },
      {
        q: 'Do you list pricing on this site?',
        a: 'No. Scope varies too much to quote responsibly from a table. After we understand your goals, we propose a clear path and engagement—no surprise fees baked into fine print.',
      },
      {
        q: 'What happens after I contact you?',
        a: 'We reply by email, usually with a few clarifying questions or a short call proposal. From there we align on next steps, timing, and whether a formal proposal makes sense.',
      },
    ],
  },
  testimonials: {
    titleBefore: 'What our ',
    titleHighlight: 'clients say',
    carouselDotsLabel: 'Testimonial slides',
    intro:
      'Placeholder quotes for launch—fictional names and companies. We will feature verified testimonials when permissions are in place.',
    items: [
      {
        name: 'Alex Morgan',
        role: 'VP Marketing',
        company: 'Harborline Systems',
        text: 'They reframed our story on the homepage and tightened the path to contact. We saw clearer engagement within weeks—not just prettier pages.',
      },
      {
        name: 'Jordan Blake',
        role: 'Founder',
        company: 'Brightfield Studio',
        text: 'Fast communication, thoughtful structure, and a site that finally matches how we pitch in the room. Exactly the partner we needed.',
      },
      {
        name: 'Priya Nair',
        role: 'Operations Lead',
        company: 'Northwind Logistics',
        text: 'Performance and clarity both improved. Forms are easier to complete and the team actually uses the new content hierarchy.',
      },
      {
        name: 'Tomás Silva',
        role: 'E-commerce Manager',
        company: 'Urban Threads Co.',
        text: 'Mobile checkout used to feel fragile; now it feels intentional. Metrics aside, customers comment that the shop feels more trustworthy.',
      },
      {
        name: 'Nina Kovač',
        role: 'Head of Marketing',
        company: 'Adriatic Craft Co.',
        text: 'VMN Digital balanced design ambition with practical constraints. Launch was smooth and we still iterate with a clear component system.',
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
      subject: 'Subject (optional)',
      subjectPlaceholder: 'e.g. Website redesign',
      message: 'Message',
      messagePlaceholder: 'Tell us about your project…',
      submit: 'Send message',
      stubAfterSubmit:
        'Thanks — your message was not sent yet. A contact backend is not connected; please use the email addresses above for now.',
    },
  },
  legal: {
    backToSite: '← VMN Digital',
    privacy: {
      title: 'Privacy Policy',
      badge: 'Placeholder — replace after legal review',
      intro:
        'This page outlines how VMN Digital may handle information in general terms. It is not legal advice. Replace this content with counsel-approved text before production.',
      sections: [
        {
          heading: 'Who we are',
          body: 'VMN Digital operates as part of VMN – Visual Marketing Network. Contact details appear on the main site’s contact section.',
        },
        {
          heading: 'Information you provide',
          body: 'If you use a contact form or email, you may provide identifiers such as your name, email address, and message content so we can respond.',
        },
        {
          heading: 'How we use information',
          body: 'We use inquiries to communicate about your request and related services. We do not sell personal data. Retention and subprocessors should be described here after review.',
        },
        {
          heading: 'Cookies & analytics',
          body: 'If the site uses analytics or cookies, describe categories and choices here. Update when tooling is finalized.',
        },
        {
          heading: 'Your rights & contact',
          body: 'Depending on your region, you may have rights to access or delete personal data. Add jurisdiction-specific rights and a contact channel for privacy requests after legal review.',
        },
      ],
    },
    terms: {
      title: 'Terms of Service',
      badge: 'Placeholder — replace after legal review',
      intro:
        'These terms are a non-binding placeholder for structuring your future legal page. Have them reviewed before launch.',
      sections: [
        {
          heading: 'Use of this website',
          body: 'Content is provided for general information. We may update pages, features, or availability without notice.',
        },
        {
          heading: 'No professional advice',
          body: 'Nothing on this site constitutes legal, financial, or other professional advice. Engagements are governed by separate agreements when you work with us.',
        },
        {
          heading: 'Intellectual property',
          body: 'Branding, copy, and design elements on this site are owned by VMN Digital or licensors unless stated otherwise. Do not reuse without permission.',
        },
        {
          heading: 'Limitation of liability',
          body: 'To the extent permitted by law, VMN Digital is not liable for indirect or consequential damages arising from use of the site. Refine this clause with counsel.',
        },
        {
          heading: 'Governing law',
          body: 'Add the appropriate jurisdiction and dispute resolution process after legal review.',
        },
      ],
    },
  },
  footer: {
    tagline:
      'Transforming businesses through premium web design and digital solutions.',
    brandLine: 'VMN – Visual Marketing Network',
    colNavigate: 'On this page',
    colLegal: 'Legal',
    colContact: 'Contact',
    linkServices: 'Services',
    linkAbout: 'About',
    linkProcess: 'Process',
    linkTestimonials: 'Testimonials',
    linkPortfolio: 'Portfolio',
    linkFaq: 'FAQ',
    linkContact: 'Contact',
    linkPrivacy: 'Privacy Policy',
    linkTerms: 'Terms of Service',
    copyright: '© {year} VMN Digital · {brandLine}. All rights reserved.',
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
    openMenu: 'Otvori izbornik',
    closeMenu: 'Zatvori izbornik',
    nav: {
      services: 'Usluge',
      about: 'O nama',
      process: 'Proces',
      testimonials: 'Preporuke',
      faq: 'ČPP',
      contact: 'Kontakt',
    },
  },
  hero: {
    titleBefore: 'Web dizajn koji ',
    titleHighlight: 'donosi rezultate',
    subtitle:
      'Stvaramo moderne, responzivne web stranice koje pomažu vašem poslovanju. Od koncepta do lansiranja isporučujemo kvalitetna rješenja prilagođena vašim potrebama.',
    analysisLine:
      'Započnite besplatnom analizom—brz pregled stranice, ciljeva i jasnih sljedećih koraka prije bilo kakve obveze.',
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
          'Prilagođene stranice u skladu s brendom—izrađene da izgledaju uredno i potaknu posjetitelje na akciju.',
        bullets: [
          'Jasnije pozicioniranje i signali povjerenja tamo gdje je bitno',
          'Glatkiji putovi do kontakta i konverzije na ključnim stranicama',
          'Dosljedno iskustvo od mobitela do desktopa',
        ],
      },
      {
        title: 'Poboljšanje performansi',
        description:
          'Nadogradnje brzine i tehničkog zdravlja za postojeće stranice—da budu brze i održive.',
        bullets: [
          'Kraće vrijeme učitavanja i jači Core Web Vitals',
          'Manje trenja kako bi posjetitelji ostali na stranici',
          'Čišlja tehnička osnova za SEO i rast',
        ],
      },
    ],
  },
  about: {
    titleBefore: 'O ',
    titleHighlight: 'VMN Digitalu',
    brandLine: 'VMN – Visual Marketing Network',
    imageAlt:
      'Dvojica mladića u rukovanju na otvorenom: jedan u crnoj majici, drugi u mornarskom odijelu s crvenom kravatom—simbol partnerstva i povjerenja za VMN Digital.',
    summary:
      'Pomažemo tvrtkama ojačati online prisutnost promišljenim web dizajnom—strategija, performanse i jasna komunikacija kako bi stranica podržavala stvarne ishode.',
    readMore: 'Pročitaj više',
    readLess: 'Smanji',
    p1: 'VMN Digital je web praksa unutar VMN – Visual Marketing Networka: fokusirani tim koji pomaže tvrtkama izgraditi i ojačati online prisutnost. Vjerujemo da dobro dizajnirana stranica nije samo estetika—ona je strateški alat za rast.',
    p2: 'S naglaskom na moderne principe dizajna, korisničko iskustvo i tehničku izvrsnost radimo s organizacijama različitih veličina kako bismo izradili stranice koje izgledaju uredno i pouzdano rade. Kombiniramo kreativnu viziju s praktičnom strategijom kako bi vaša stranica podržavala stvarne poslovne ishode.',
    p3: 'Svaki je kontekst drugačiji. Ulažemo vrijeme u razumijevanje vaših ciljeva, publike i industrije prije dizajna—kako bi rezultat jasno odražavao vaš brend.',
    softPoints: [
      'Strateško razmišljanje od istraživanja do lansiranja',
      'Performanse i UX u svakoj fazi izrade',
      'Jasna, dosljedna komunikacija tijekom projekta',
    ],
  },
  portfolio: {
    titleBefore: 'Odabrani ',
    titleHighlight: 'projekti',
    intro:
      'Primjeri studija slučaja—ilustrativni prikazi pristupa i ishoda. Zamijenit ćemo ih stvarnim kad budu dostupni.',
    problemLabel: 'Problem',
    solutionLabel: 'Rješenje',
    caseStudyCta: 'Pogledaj studiju slučaja',
    items: [
      {
        title: 'Regionalne HVAC usluge',
        category: 'Lokalne usluge',
        problem: 'Sporo učitavanje i nejasna područja usluga koštala su leadove na mobitelu.',
        solution: 'Nova informacijska arhitektura, jači lokalni dokazi i predlošci fokusirani na performanse.',
        metrics: ['Brži LCP na ključnim stranicama', 'Viša stopa ispunjavanja formi', 'Jasnije područje usluga'],
      },
      {
        title: 'B2B analitički proizvod',
        category: 'SaaS',
        problem: 'Posjetitelji nisu razumjeli vrijednost proizvoda na prvom ekranu.',
        solution: 'Jači hero narativ, modularne sekcije i fokusirani putovi konverzije.',
        metrics: ['Dublje skrolanje heroa', 'Više zahtjeva za demo', 'Manji bounce na cijenama'],
      },
      {
        title: 'Neovisna modna trgovina',
        category: 'E-trgovina',
        problem: 'Blagajna je bila teška, a otkrivanje proizvoda slabije na mobitelu.',
        solution: 'Pojednostavljen PDP/checkout i lakši resursi na mobilnim breakpointima.',
        metrics: ['Glatkija mobilna blagajna', 'Bolje pregledavanje kategorija', 'Stabilni Core Web Vitals'],
      },
    ],
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
  faq: {
    titleBefore: 'Često postavljena ',
    titleHighlight: 'pitanja',
    intro:
      'Jasni odgovori o načinu rada, što uključuje besplatna analiza i što možete očekivati—bez cjenika i iznenađenja.',
    items: [
      {
        q: 'Što uključuje besplatna analiza?',
        a: 'Fokusirani pregled vaše trenutačne stranice (ili ciljeva ako još nemate lansiranje), publike i prioriteta te brzih dobitaka naspram većih zahvata. Dobivate jasne sljedeće korake—bez obveze nastavka suradnje.',
      },
      {
        q: 'Kakva su očekivanja za rokove?',
        a: 'Rokovi ovise o opsegu: osvježavanje landinga nije isto što i šira izgradnja. Nakon prvog razgovora definiramo faze i realne prekretnice. Izbjegavamo nejasna „čim prije“ obećanja.',
      },
      {
        q: 'Što pripremiti prije razgovora?',
        a: 'Nije obavezno, ali pomaže: poveznice na stranicu ili reference koje vam se sviđaju, tko je publika i što znači „uspjeh“ (upiti, rezervacije, kredibilitet itd.). Savršen brief nije potreban—pomažemo ga oblikovati.',
      },
      {
        q: 'Već imam web stranicu—možete li pomoći?',
        a: 'Da. Mnogi su projekti redizajni, performansne nadogradnje ili restrukturiranje sadržaja. Procjenjujemo što zadržati, što prepraviti i kako dobiti najbolji ishod bez „paljenja svega“ osim ako nema smisla.',
      },
      {
        q: 'Objavljujete li cijene na stranici?',
        a: 'Ne. Opseg varira previše za odgovorno cjenik na stranici. Nakon što razumijemo ciljeve, predlažemo jasan put i suradnju—bez skrivenih naknada u sitnom tisku.',
      },
      {
        q: 'Što se događa nakon što vas kontaktiram?',
        a: 'Odgovaramo e-poštom, često s par pitanja za pojašnjenje ili prijedlogom kratkog poziva. Zatim uskladimo sljedeće korake, vremenski okvir i treba li formalni prijedlog.',
      },
    ],
  },
  testimonials: {
    titleBefore: 'Što kažu ',
    titleHighlight: 'klijenti',
    carouselDotsLabel: 'Slajdovi preporuka',
    intro:
      'Primjer citata za lansiranje—izmišljena imena i tvrtke. Zamijenit ćemo ih potvrđenim preporukama kad budu dostupne.',
    items: [
      {
        name: 'Alex Morgan',
        role: 'VP marketinga',
        company: 'Harborline Systems',
        text: 'Preoblikovali su priču na početnoj stranici i zategli put do kontakta. Jasniji angažman već nakon nekoliko tjedana—ne samo ljepši izgled.',
      },
      {
        name: 'Jordan Blake',
        role: 'Osnivač',
        company: 'Brightfield Studio',
        text: 'Brza komunikacija, promišljena struktura i stranica koja konačno odgovara pitchu. Točno partnerstvo koje nam je trebalo.',
      },
      {
        name: 'Priya Nair',
        role: 'Voditeljica operacija',
        company: 'Northwind Logistics',
        text: 'Performanse i jasnoća su bolje. Forme su jednostavnije, a tim stvarno koristi novu hijerarhiju sadržaja.',
      },
      {
        name: 'Tomás Silva',
        role: 'Voditelj e-trgovine',
        company: 'Urban Threads Co.',
        text: 'Mobilna blagajna je prije djelovala krhko; sada djeluje namjerno. Kupci kažu da trgovina djeluje pouzdanije.',
      },
      {
        name: 'Nina Kovač',
        role: 'Voditeljica marketinga',
        company: 'Adriatic Craft Co.',
        text: 'VMN Digital uravnotežio je dizajn ambiciju s praktičnim ograničenjima. Lansiranje je glatko, a i dalje iteriramo s jasnim sustavom komponenti.',
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
      subject: 'Predmet (neobavezno)',
      subjectPlaceholder: 'npr. Redizajn stranice',
      message: 'Poruka',
      messagePlaceholder: 'Opišite svoj projekt…',
      submit: 'Pošalji poruku',
      stubAfterSubmit:
        'Hvala — poruka još nije poslana. Pozadinski sustav za kontakt nije spojen; zasad koristite adrese e-pošte iznad.',
    },
  },
  legal: {
    backToSite: '← Početna',
    privacy: {
      title: 'Politika privatnosti',
      badge: 'Zamjenski tekst — zamijeniti nakon pravnog pregleda',
      intro:
        'Ova stranica u grubim crtama opisuje kako VMN Digital može postupati s informacijama. Nije pravni savjet. Zamijenite sadržaj odobrenim od strane odvjetnika prije produkcije.',
      sections: [
        {
          heading: 'Tko smo',
          body: 'VMN Digital djeluje u sklopu VMN – Visual Marketing Networka. Kontakt podaci su u sekciji kontakt na glavnoj stranici.',
        },
        {
          heading: 'Informacije koje dostavljate',
          body: 'Ako koristite obrazac ili e-poštu, možete dostaviti identifikatore poput imena, adrese e-pošte i sadržaja poruke kako bismo odgovorili.',
        },
        {
          heading: 'Kako koristimo informacije',
          body: 'Upite koristimo za komunikaciju o vašem zahtjevu i povezanim uslugama. Ne prodajemo osobne podatke. Zadržavanje i podizvođače treba opisati nakon pregleda.',
        },
        {
          heading: 'Kolačići i analitika',
          body: 'Ako stranica koristi analitiku ili kolačiće, ovdje opišite kategorije i izbore. Ažurirajte kad alati budu konačni.',
        },
        {
          heading: 'Vaša prava i kontakt',
          body: 'Ovisno o regiji, možda imate pravo na pristup ili brisanje osobnih podataka. Dodajte prava za jurisdikciju i kanal za zahtjeve vezane uz privatnost nakon pravnog pregleda.',
        },
      ],
    },
    terms: {
      title: 'Uvjeti korištenja',
      badge: 'Zamjenski tekst — zamijeniti nakon pravnog pregleda',
      intro:
        'Ovi uvjeti su neobvezujući zamjenski okvir za buduću pravnu stranicu. Pregledajte ih prije lansiranja.',
      sections: [
        {
          heading: 'Korištenje ove stranice',
          body: 'Sadržaj je informativan. Stranice, značajke ili dostupnost mogu se mijenjati bez najave.',
        },
        {
          heading: 'Bez stručnog savjeta',
          body: 'Ništa na stranici nije pravni, financijski ili drugi stručni savjet. Suradnje uređuju posebni ugovori.',
        },
        {
          heading: 'Intelektualno vlasništvo',
          body: 'Brendiranje, tekst i dizajn pripadaju VMN Digitalu ili davateljima licence osim ako je drugačije navedeno. Ne koristite bez dozvole.',
        },
        {
          heading: 'Ograničenje odgovornosti',
          body: 'U okviru zakona, VMN Digital nije odgovoran za neizravnu ili posljedičnu štetu iz korištenja stranice. Pojasnite s odvjetnikom.',
        },
        {
          heading: 'Mjerodavno pravo',
          body: 'Dodajte odgovarajuću jurisdikciju i način rješavanja sporova nakon pravnog pregleda.',
        },
      ],
    },
  },
  footer: {
    tagline:
      'Transformiramo poslovanje kroz vrhunski web dizajn i digitalna rješenja.',
    brandLine: 'VMN – Visual Marketing Network',
    colNavigate: 'Na stranici',
    colLegal: 'Pravno',
    colContact: 'Kontakt',
    linkServices: 'Usluge',
    linkAbout: 'O nama',
    linkProcess: 'Proces',
    linkTestimonials: 'Preporuke',
    linkPortfolio: 'Portfolio',
    linkFaq: 'ČPP',
    linkContact: 'Kontakt',
    linkPrivacy: 'Politika privatnosti',
    linkTerms: 'Uvjeti korištenja',
    copyright: '© {year} VMN Digital · {brandLine}. Sva prava pridržana.',
  },
} as const

export type Dictionary = typeof en

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  hr: hr as unknown as Dictionary,
}
