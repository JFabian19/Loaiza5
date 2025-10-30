/*
  LOAIZA5 ALUMINUM LLC – Single‑page website (EN version)
  Tech: React + TailwindCSS (no external deps). Works as a standalone component.
  How to use:
  - Drop this file in a React/Next.js app and render <Loaiza5Aluminum />.
*/

const CONTACT_EMAIL = "Loaiza5Aluminun@gmail.com";
const CONTACT_PHONE = "+1-813-784-6949"; // Tampa, FL (813)
const BUSINESS_NAME = "LOAIZA5 ALUMINUM LLC";
const HERO_IMG = "Public/images/hero.jpg";

function PhoneLink({ className = "" }) {
  return (
    <a href={`tel:${CONTACT_PHONE}`} className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 font-semibold shadow-sm border border-gray-200 bg-white hover:bg-gray-50 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M2.25 6.75a.75.75 0 01.75-.75h2.508a.75.75 0 01.705.49l1.2 3.2a.75.75 0 01-.189.817l-1.59 1.59a16.5 16.5 0 006.008 6.008l1.59-1.59a.75.75 0 01.817-.189l3.2 1.2a.75.75 0 01.49.705V21a.75.75 0 01-.75.75h-1.5C8.708 21.75 2.25 15.292 2.25 7.5v-1.5z"/></svg>
      Call {CONTACT_PHONE}
    </a>
  );
}

function CTAButton({ children, onClick, href }) {
  const common = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm bg-emerald-600 text-white hover:bg-emerald-700 focus:outline-none";
  if (href) return (<a href={href} className={common}>{children}</a>);
  return (<button onClick={onClick} className={common}>{children}</button>);
}

function Badge({ children, className = "" }) {
  return <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${className}`}>{children}</span>;
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">{title}</h2>
            {subtitle && <p className="mt-2 max-w-3xl text-gray-600">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Icon({ name }) {
  const cls = "w-6 h-6";
  switch (name) {
    case 'pool':
      return (<svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 17c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0"/><path d="M4 13c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0"/><path d="M6 6h8"/><path d="M10 6v8"/></svg>);
    case 'wrench':
      return (<svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 3l-7 7"/><path d="M8 14l-5 5"/><circle cx="15" cy="9" r="1"/><path d="M18 2a4 4 0 01-6 4L3 15l6 6 11-9a4 4 0 00-2-10z"/></svg>);
    case 'glass':
      return (<svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 3v18M3 9h18M7 3v6M17 3v6"/></svg>);
    case 'porch':
      return (<svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 10l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M9 21v-8h6v8"/></svg>);
    case 'carport':
      return (<svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 10l10-6 10 6"/><path d="M4 10v8a2 2 0 002 2h12a2 2 0 002-2v-8"/><path d="M7 20v-6h10v6"/></svg>);
    default:
      return (<svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>);
  }
}

function QuoteForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name');
    const phone = data.get('phone');
    const email = data.get('email');
    const city = data.get('city');
    const service = data.get('service');
    const message = data.get('message');
    const subject = encodeURIComponent(`${BUSINESS_NAME} – Quote request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nCity: ${city}\nService: ${service}\n\nMessage:\n${message}\n\nSent from the website.`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <input name="name" required placeholder="Full name" className="rounded-xl border px-4 py-3" />
      <input name="phone" required placeholder="Phone" className="rounded-xl border px-4 py-3" />
      <input name="email" type="email" placeholder="Email (optional)" className="rounded-xl border px-4 py-3 sm:col-span-2" />
      <input name="city" placeholder="City / Area (e.g., Tampa, Brandon)" className="rounded-xl border px-4 py-3 sm:col-span-2" />
      <select name="service" className="rounded-xl border px-4 py-3 sm:col-span-2">
        <option>Pool cages & rescreens</option>
        <option>Repairs & tear downs</option>
        <option>Glass & screen rooms</option>
        <option>Screen lanais</option>
        <option>Carports</option>
        <option>Screen porches & more</option>
      </select>
      <textarea name="message" rows={5} placeholder="Tell us about your project (dimensions, photos, timelines)" className="rounded-xl border px-4 py-3 sm:col-span-2" />
      <div className="sm:col-span-2 flex items-center gap-3">
        <CTAButton>Get a quote</CTAButton>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-gray-600 underline">or email us at {CONTACT_EMAIL}</a>
      </div>
    </form>
  );
}

export default function Loaiza5Aluminum() {
  const services = [
    { icon: <Icon name="pool" />, title: "Pool Cages & Rescreens", desc: "Installations and re‑screening for pool enclosures – keep pests and leaves out." },
    { icon: <Icon name="wrench" />, title: "Repairs & Tear Downs", desc: "Repairs, structural reinforcements, and safe tear‑downs of existing structures." },
    { icon: <Icon name="glass" />, title: "Glass & Screen Rooms", desc: "Glass and screen rooms to extend your living area with comfort and airflow." },
    { icon: <Icon name="porch" />, title: "Screen Lanais", desc: "High‑strength aluminum lanai enclosures for patios and terraces." },
    { icon: <Icon name="carport" />, title: "Carports", desc: "Aluminum carports – fixed or sliding options to protect your vehicles." },
    { icon: <Icon name="porch" />, title: "Screen Porches & More", desc: "Porches, walkways, and custom aluminum + screen solutions." },
  ];

  const projects = [
    {
      title: "Pool Cage Rescreen – Riverview, FL",
      img: "public/images/project1.jpg",
      features: ["Super Screen 17/14 mesh", "Wind‑brace hardware upgrade", "2‑day turnaround"],
      alt: "Pool enclosure with aluminum frame and screen around a backyard pool"
    },
    {
      title: "Screen Lanai Enclosure – Brandon, FL",
      img: "public/images/project2.jpg",
      features: ["2×2 aluminum framing", "Self‑closing door with kickplate", "Gutter tie‑in"],
      alt: "Screened patio lanai enclosure built in aluminum"
    },
    {
      title: "Aluminum Carport – Valrico, FL",
      img: "public/images/project3.jpg",
      features: ["Insulated roof panels", "LED wiring prep", "Permit‑ready drawings"],
      alt: "Aluminum carport covering a driveway beside a home"
    },
    {
      title: "Glass & Screen Room – Tampa, FL",
      img: "public/images/project4.jpg",
      features: ["Tinted glass sliders", "No‑see‑um screen", "Seamless floor‑to‑ceiling look"],
      alt: "Glass and screen room addition in a backyard patio"
    }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS_NAME,
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    areaServed: "Tampa Bay, FL",
    url: "https://example.com/", // replace when deployed
    description: "Pool cages & rescreens, screen lanais, carports, glass & screen rooms, repairs & tear downs.",
    offers: {
      "@type": "Offer",
      name: "15% Off for New Customers",
      price: 0,
      priceCurrency: "USD"
    }
  };

  // --- DEV sanity checks (simple runtime tests) ---
  if (typeof console !== "undefined") {
    console.assert(Array.isArray(services) && services.length >= 6, "Expected at least 6 services.");
    console.assert(Array.isArray(projects) && projects.length === 4, "Expected exactly 4 projects in the gallery.");
    console.assert(projects.every(p => typeof p.img === 'string' && p.img.startsWith('/images/')), "Projects should use local images under /public/images");
    console.assert(/@/.test(CONTACT_EMAIL), "CONTACT_EMAIL should look like an email address.");
    console.assert(typeof HERO_IMG === 'string' && HERO_IMG.startsWith('/images/'), "HERO_IMG should be /images/hero.jpg under /public");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-900">
      {/* SEO structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white grid place-items-center font-black">L5</div>
            <div>
              <p className="text-sm uppercase tracking-widest text-emerald-700 font-semibold">Quality You Can Trust</p>
              <h1 className="text-base sm:text-lg font-extrabold">{BUSINESS_NAME}</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">15% OFF new customers</Badge>
            <PhoneLink />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="bg-white/70 backdrop-blur border-gray-200">Aluminum • Screens • Patios</Badge>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight">Aluminum structures for your home</h2>
              <p className="mt-4 text-lg text-gray-700 max-w-prose">
                Specialists in <strong>pool cages & rescreens</strong>, <strong>screen lanais</strong>, <strong>carports</strong>,
                <strong> glass & screen rooms</strong> and <strong>repairs & tear downs</strong>. Reliable service in Tampa Bay and surrounding areas.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <CTAButton href="#quote">Get a quote</CTAButton>
                <PhoneLink />
              </div>
              <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-600"/> 24–48h response time</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-600"/> High‑grade materials</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-600"/> Skilled craftsmanship</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-600"/> Free inspection & advice</li>
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border shadow-lg">
                <img src={HERO_IMG} alt="Aluminum patio structure" className="h-full w-full object-cover" loading="lazy"/>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white p-4 shadow-xl border">
                <p className="text-xs uppercase tracking-widest text-gray-500">Offer</p>
                <p className="font-bold">15% OFF</p>
                <p className="text-sm text-gray-600">for new customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section id="services" title="Services" subtitle="Durable aluminum & screen solutions, custom‑built for your space.">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} icon={s.icon} title={s.title} desc={s.desc} />
          ))}
        </div>
      </Section>

      {/* Why Us */}
      <Section id="why-us" title="Why choose us" subtitle="Quality, safety, and a hassle‑free experience.">
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-3 text-gray-700">
            {[
              "Local service in Tampa Bay & nearby cities",
              "Clear quotes and honest advice",
              "Professional, tidy installations",
              "Heavy‑duty screens for long‑term use",
              "Reinforcement and repair options",
              "Workmanship guarantee (ask for details)",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-600"/><span>{t}</span></li>
            ))}
          </ul>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold">New customers</h3>
            <p className="mt-1 text-sm text-gray-600">Enjoy <strong>15% off</strong> your first project.</p>
            <div className="mt-4"><CTAButton href="#quote">Claim discount</CTAButton></div>
          </div>
        </div>
      </Section>

      {/* Projects (fixed: no escaped quotes) */}
      <Section id="projects" title="Our Projects" subtitle="A few recent installs across the Tampa Bay area. Ask for references.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="rounded-2xl border bg-white shadow-sm overflow-hidden">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={p.img} alt={p.alt} className="h-full w-full object-cover hover:scale-105 transition-transform" loading="lazy"/>
              </div>
              <div className="p-5">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">{p.title}</h3>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2"><span className="mt-2 h-2 w-2 rounded-full bg-emerald-600"/> {f}</li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-3">
                  <a href="#quote" className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm bg-emerald-600 text-white hover:bg-emerald-700">Request a similar project</a>
                  <span className="text-xs text-gray-500">LOAIZA5 portfolio</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Service Area + Map */}
      <Section id="service-area" title="Service area" subtitle="We serve Tampa, Brandon, Riverview, Valrico, Wesley Chapel, and nearby communities.">
        <div className="rounded-2xl overflow-hidden border shadow-sm">
          <iframe
            title="Tampa Bay map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56335.048441204226!2d-82.527!3d27.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c4c1b3bf3e9f%3A0x63a5c1b0c!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>

      {/* Quote */}
      <Section id="quote" title="Request a quote" subtitle="Tell us what you need and we'll reply with an estimate and material options.">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <QuoteForm />
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold">Contact</h3>
            <p className="mt-2 text-gray-700">Prefer to talk now? Call us or send an email.</p>
            <div className="mt-4 flex flex-col gap-3">
              <PhoneLink className="w-full sm:w-auto" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 font-semibold shadow-sm border border-gray-200 bg-white hover:bg-gray-50 w-full sm:w-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0l8 6 8-6"/></svg>
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              <p>Hours: Mon–Sat 8:00am–6:00pm</p>
              <p>Project manager: Cristian Loaiza</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-8 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6 items-start">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-emerald-600 text-white grid place-items-center font-black">L5</div>
              <div>
                <p className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">Quality You Can Trust</p>
                <p className="font-extrabold">{BUSINESS_NAME}</p>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-600 max-w-sm">We build and repair aluminum structures focused on safety, looks, and durability.</p>
          </div>
          <div className="text-sm text-gray-700">
            <p className="font-semibold">Services</p>
            <ul className="mt-2 space-y-1">
              {services.map((s, i) => <li key={i}>{s.title}</li>)}
            </ul>
          </div>
          <div className="text-sm text-gray-700">
            <p className="font-semibold">Contact</p>
            <p className="mt-2">Phone: <a className="underline" href={`tel:${CONTACT_PHONE}`}>{CONTACT_PHONE}</a></p>
            <p>Email: <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
            <p className="mt-2 text-xs text-gray-500">License/Insurance: 9060192052CC.</p>
          </div>
        </div>
        <div className="border-t py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</div>
      </footer>
    </div>
  );
}
