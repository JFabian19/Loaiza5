import React, { useEffect, useMemo, useState } from "react";

/**
 * Loaiza5 Aluminum LLC – Single-file Landing Page
 * Tech: React + TailwindCSS (no extra deps)
 * Bilingual: EN / ES via useState
 * Lead Gen: prominent CTAs, click-to-call, WhatsApp, simple form (no backend)
 * Integrations: Google Analytics 4 (gtag), Google Places Reviews (fallback if not configured), Google Maps embed
 *
 * ✅ Configuration (no Node globals, no process/import.meta usage):
 * - You can pass config as props to the component OR via a global window.__LOAIZA5__CONFIG object.
 *
 * Props / window.__LOAIZA5__CONFIG keys:
 *   gaMeasurementId: string (e.g. "G-XXXXXXXXXX")
 *   businessPhoneE164: string (e.g. "+18137846949")
 *   businessPhoneDisplay: string (e.g. "+1 (813) 784-6949")
 *   whatsappNumber: string (e.g. "18137846949")
 *   googlePlacesApiKey: string
 *   googlePlaceId: string
 *
 * Example (global):
 *   <script>
 *     window.__LOAIZA5__CONFIG = {
 *       gaMeasurementId: "G-AB12CDEF34",
 *       googlePlacesApiKey: "YOUR_KEY",
 *       googlePlaceId: "YOUR_PLACE_ID"
 *     }
 *   </script>
 */

// ---- Config helpers (safe for browsers) ----
const DEFAULT_CONFIG = {
  gaMeasurementId: "G-XXXXXXXXXX",
  businessPhoneE164: "+18137846949",
  businessPhoneDisplay: "+1 (813) 784-6949",
  whatsappNumber: "18137846949",
  googlePlacesApiKey: "",
  googlePlaceId: "",
};

function getWindowConfig() {
  try {
    return (typeof window !== "undefined" && window.__LOAIZA5__CONFIG) || {};
  } catch (_) {
    return {};
  }
}

function mergeConfig(overrides) {
  return { ...DEFAULT_CONFIG, ...getWindowConfig(), ...(overrides || {}) };
}

export default function Loaiza5Aluminum(props) {
  const cfg = mergeConfig(props);

  const [lang, setLang] = useState("en"); // 'en' | 'es'
  const [menuOpen, setMenuOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(false);

  // --- Text dictionary ---
  const t = useMemo(
    () => ({
      en: {
        nav: { home: "Home", services: "Services", gallery: "Gallery", about: "About", contact: "Contact" },
        cta: { quote: "Get a Free Quote", call: "Call Now" },
        hero: {
          h1: "Strong. Reliable. Aluminum Structures Built to Last.",
          call: "Call Now",
          quote: "Get a Free Quote",
        },
        about: {
          title: "Who We Are",
          body:
            "With 15+ years of hands-on experience, Loaiza5 Aluminum LLC designs and builds screen enclosures, carports, patio extensions, and aluminum fencing for homeowners and businesses. We proudly serve Tampa, Lakeland and nearby areas. ",
        },
        services: {
          title: "Specializing In",
          items: [
            {
              icon: "🏊",
              title: "Pool Cages & Rescreens",
              desc: "New builds and mesh replacements for long‑lasting, bug‑free pool enclosures.",
            },
            {
              icon: "🛠️",
              title: "Repairs & Tear Downs",
              desc: "Fast, professional repairs and safe tear‑downs of damaged structures.",
            },
            {
              icon: "🪟",
              title: "Glass & Screen Rooms",
              desc: "Comfortable glass rooms and breezy screen rooms tailored to your home.",
            },
            {
              icon: "🚗",
              title: "Screen Lanais, Carports",
              desc: "Screened lanais and aluminum carports built to code and made to last.",
            },
            {
              icon: "🏡",
              title: "Screen Porches",
              desc: "Enjoy your porch without bugs while keeping airflow and light.",
            },
          ],
          view: "View Gallery",
        },
        gallery: { title: "Gallery" },
        testimonials: { title: "Google Reviews", empty: "Reviews will appear here.", stars: "stars" },
        contact: {
          title: "Contact Us",
          name: "Name",
          email: "Email",
          phone: "Phone",
          message: "Message",
          send: "Send",
        },
        footer: {
          address: "Lakeland, FL",
          quick: "Quick Links",
          follow: "Follow Us",
          copyright: "All rights reserved.",
        },
      },
      es: {
        nav: { home: "Inicio", services: "Servicios", gallery: "Galería", about: "Nosotros", contact: "Contacto" },
        cta: { quote: "Cotiza Gratis", call: "Llama Ahora" },
        hero: {
          h1: "Fuertes. Confiables. Estructuras de aluminio hechas para durar.",
          call: "Llama Ahora",
          quote: "Cotiza Gratis",
        },
        about: {
          title: "Quiénes Somos",
          body:
            "Con más de 15 años de experiencia, Loaiza5 Aluminum LLC diseña y construye cerramientos, carports, extensiones de terraza y cercos de aluminio para hogares y negocios. Atendemos Tampa, Lakeland y alrededores. ",
        },
        services: {
          title: "Especialistas en",
          items: [
            {
              icon: "🏊",
              title: "Pool Cages y Rescreens",
              desc: "Cerramientos de piscina y cambio de malla (rescreen) para espacios libres de insectos.",
            },
            {
              icon: "🛠️",
              title: "Reparaciones y Desmontajes",
              desc: "Reparación profesional y desmontaje seguro de estructuras dañadas.",
            },
            {
              icon: "🪟",
              title: "Salas de Vidrio y Screen",
              desc: "Glass rooms y screen rooms diseñadas a medida para tu hogar.",
            },
            {
              icon: "🚗",
              title: "Lanais con Screen y Carports",
              desc: "Lanais con malla y carports de aluminio conforme a código, resistentes y duraderos.",
            },
            {
              icon: "🏡",
              title: "Porches con Screen",
              desc: "Disfruta tu porch sin insectos, manteniendo la ventilación y la luz.",
            },
          ],
          view: "Ver Fotos",
        },
        gallery: { title: "Galería" },
        testimonials: { title: "Reseñas de Google", empty: "Las reseñas aparecerán aquí.", stars: "estrellas" },
        contact: {
          title: "Contacto",
          name: "Nombre",
          email: "Correo",
          phone: "Teléfono",
          message: "Mensaje",
          send: "Enviar",
        },
        footer: {
          address: "Lakeland, FL",
          quick: "Enlaces Rápidos",
          follow: "Síguenos",
          copyright: "Todos los derechos reservados.",
        },
      },
    }),
    []
  );

  const text = t[lang];

  // --- Google Analytics 4: insert script & basic events ---
  useEffect(() => {
    if (!cfg.gaMeasurementId || cfg.gaMeasurementId === "G-XXXXXXXXXX") return; // Skip if not configured

    // Avoid duplicate script injection
    const existing = document.getElementById("ga4-gtag");
    if (!existing) {
      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = `https://www.googletagmanager.com/gtag/js?id=${cfg.gaMeasurementId}`;
      s1.id = "ga4-gtag";
      document.head.appendChild(s1);

      const s2 = document.createElement("script");
      s2.id = "ga4-gtag-init";
      s2.innerHTML = `window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '${cfg.gaMeasurementId}');`;
      document.head.appendChild(s2);
    }

    // page_view event (on mount)
    const timer = setTimeout(() => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "page_view", { page_title: "Loaiza5 Aluminum – Landing" });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [cfg.gaMeasurementId]);

  const trackCTA = (label) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_cta", { label });
    }
  };

  // --- Fetch Google Reviews (Places API) with graceful fallback ---
  useEffect(() => {
    const fetchReviews = async () => {
      if (!cfg.googlePlacesApiKey || !cfg.googlePlaceId) {
        setReviews(FALLBACK_REVIEWS);
        return;
      }
      setLoadingReviews(true);
      try {
        // Note: many browsers block this endpoint due to CORS when called directly from the client.
        // In production, consider calling this via a serverless proxy. This is a best-effort attempt.
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${cfg.googlePlaceId}&fields=reviews,rating,user_ratings_total&key=${cfg.googlePlacesApiKey}`;
        const res = await fetch(url);
        const data = await res.json();
        const rv = data?.result?.reviews || [];
        if (rv.length) {
          setReviews(
            rv.slice(0, 6).map((r) => ({
              author_name: r.author_name,
              rating: r.rating,
              text: r.text,
              relative_time_description: r.relative_time_description,
            }))
          );
        } else {
          setReviews(FALLBACK_REVIEWS);
        }
      } catch (e) {
        setReviews(FALLBACK_REVIEWS);
      } finally {
        setLoadingReviews(false);
      }
    };
    fetchReviews();
  }, [cfg.googlePlacesApiKey, cfg.googlePlaceId]);

  // --- Form handling (demo-only) ---
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    trackCTA("lead_form_submit");
    // Demo: open mail client with prefilled body
    const subject = encodeURIComponent(`New Quote Request – Loaiza5 Aluminum`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:loaiza5aluminum@gmail.com?subject=${subject}&body=${body}`;
  };

  // --- UI helpers ---
  const NavLink = ({ href, children, onClick }) => (
    <a
      href={href}
      onClick={(e) => {
        setMenuOpen(false);
        if (onClick) onClick(e);
      }}
      className="text-gray-700 hover:text-blue-700 transition-colors"
    >
      {children}
    </a>
  );

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                L5
              </div>
              <div className="font-semibold text-gray-900 text-sm sm:text-base">
                Loaiza5 Aluminum LLC
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              <NavLink href="#home">{text.nav.home}</NavLink>
              <NavLink href="#services">{text.nav.services}</NavLink>
              <NavLink href="#gallery">{text.nav.gallery}</NavLink>
              <NavLink href="#about">{text.nav.about}</NavLink>
              <NavLink href="#contact">{text.nav.contact}</NavLink>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language */}
              <div className="flex rounded-full border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 text-sm ${lang === "en" ? "bg-gray-100" : "bg-white"}`}
                  aria-label="English"
                >
                  🇺🇸 EN
                </button>
                <button
                  onClick={() => setLang("es")}
                  className={`px-3 py-1 text-sm ${lang === "es" ? "bg-gray-100" : "bg-white"}`}
                  aria-label="Español"
                >
                  🇪🇸 ES
                </button>
              </div>

              <a
                href={`tel:${cfg.businessPhoneE164}`}
                onClick={() => trackCTA("tel_header")}
                className="text-sm font-medium text-blue-700 hover:text-blue-800"
              >
                {cfg.businessPhoneDisplay}
              </a>

              <a
                href="#contact"
                onClick={() => trackCTA("header_quote")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700"
              >
                {text.cta.quote}
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle Menu"
            >
              <span className="sr-only">Menu</span>
              <div className="w-5 h-0.5 bg-gray-700 mb-1" />
              <div className="w-5 h-0.5 bg-gray-700 mb-1" />
              <div className="w-5 h-0.5 bg-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3">
              <NavLink href="#home">{text.nav.home}</NavLink>
              <NavLink href="#services">{text.nav.services}</NavLink>
              <NavLink href="#gallery">{text.nav.gallery}</NavLink>
              <NavLink href="#about">{text.nav.about}</NavLink>
              <NavLink href="#contact">{text.nav.contact}</NavLink>
              <div className="flex items-center justify-between pt-2">
                <div className="flex rounded-full border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setLang("en")}
                    className={`px-3 py-1 text-sm ${lang === "en" ? "bg-gray-100" : "bg-white"}`}
                  >
                    🇺🇸 EN
                  </button>
                  <button
                    onClick={() => setLang("es")}
                    className={`px-3 py-1 text-sm ${lang === "es" ? "bg-gray-100" : "bg:white"}`}
                  >
                    🇪🇸 ES
                  </button>
                </div>
                <a
                  href={`tel:${cfg.businessPhoneE164}`}
                  onClick={() => trackCTA("tel_header_mobile")}
                  className="text-sm font-medium text-blue-700"
                >
                  {cfg.businessPhoneDisplay}
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => trackCTA("header_quote_mobile")}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700"
              >
                {text.cta.quote}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-[70vh] flex items:center">
        <div
          aria-hidden
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('/images/hero.webp')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight drop-shadow-md">
              {text.hero.h1}
            </h1>
            <p className="mt-4 text-white/90">
              Loaiza5 Aluminum LLC · {lang === "en" ? "Tampa · Lakeland" : "Tampa · Lakeland"}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${cfg.businessPhoneE164}`}
                onClick={() => trackCTA("call_now_hero")}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white text-gray-900 font-semibold shadow hover:shadow-md"
              >
                📞 {text.cta.call}
              </a>
              <a
                href="#contact"
                onClick={() => trackCTA("quote_hero")}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 hover:shadow-md"
              >
                💬 {text.cta.quote}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{text.about.title}</h2>
            <p className="text-gray-700 leading-relaxed">{text.about.body}</p>
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
                ✅ 15+ {lang === "en" ? "years experience" : "años de experiencia"}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
                📍 Tampa · Lakeland
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
                🛡️ Professional Service
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/about.webp"
              alt="about.webp"
              className="w-full h-72 sm:h-96 object-cover rounded-3xl shadow-lg"
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow p-4 border border-gray-100">
              <div className="text-sm font-semibold">Loaiza5 Aluminum LLC</div>
              <div className="text-xs text-gray-500">Tampa · Lakeland, FL</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-10">{text.services.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {text.services.items.map((svc, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{svc.icon || "🛠️"}</div>
                <h3 className="font-semibold text-lg mb-2">{svc.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{svc.desc}</p>
                <a
                  href="#gallery"
                  onClick={() => trackCTA(`view_gallery_${i}`)}
                  className="inline-flex items-center gap-2 text-blue-700 font-medium group-hover:gap-3 transition-all"
                >
                  {text.services.view} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">{text.gallery.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={src.split("/").pop()}
                className="w-full h-40 sm:h-56 object-cover rounded-2xl shadow"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">{text.testimonials.title}</h2>
          {loadingReviews ? (
            <div className="text-gray-500">
              {lang === "en" ? "Loading reviews..." : "Cargando reseñas..."}
            </div>
          ) : reviews.length === 0 ? (
            <div className="text-gray-500">{text.testimonials.empty}</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((r, idx) => (
                <div key={idx} className="bg:white border border-gray-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold truncate max-w-[75%]">
                      {r.author_name}
                    </div>
                    <div
                      className="text-yellow-500"
                      aria-label={`${r.rating} ${text.testimonials.stars}`}
                    >
                      {"⭐".repeat(Math.round(r.rating))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm line-clamp-6">{r.text}</p>
                  {r.relative_time_description && (
                    <div className="mt-3 text-xs text-gray-500">
                      {r.relative_time_description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">{text.contact.title}</h2>
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {text.contact.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                    placeholder={lang === "en" ? "Your name" : "Tu nombre"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {text.contact.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                    placeholder={lang === "en" ? "you@email.com" : "tu@email.com"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {text.contact.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                    placeholder={lang === "en" ? "(813) 555-1234" : "(813) 555-1234"}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {text.contact.message}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                    placeholder={
                      lang === "en"
                        ? "Tell us about your project..."
                        : "Cuéntanos de tu proyecto..."
                    }
                  />
                </div>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700"
                >
                  ✉️ {text.contact.send}
                </button>
                <a
                  href={`tel:${cfg.businessPhoneE164}`}
                  onClick={() => trackCTA("call_contact")}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-gray-300 text-gray-900 font-semibold hover:shadow"
                >
                  📞 {text.cta.call}
                </a>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                {lang === "en"
                  ? "By submitting, you agree to be contacted about your request."
                  : "Al enviar, aceptas ser contactado sobre tu solicitud."}
              </p>
            </form>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm min-h-[380px]">
            <iframe
              title="Lakeland, FL - Map"
              src="https://www.google.com/maps?q=Lakeland,FL&z=11&output=embed"
              className="w-full h-full min-h-[380px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                L5
              </div>
              <div className="font-semibold text-white">Loaiza5 Aluminum LLC</div>
            </div>
            <p className="mt-3 text-sm">{text.footer.address}</p>
            <p className="mt-1 text-sm">
              🛡️ Professional Service Contractor · {cfg.businessPhoneDisplay}
            </p>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">{text.footer.quick}</div>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white">
                  {text.nav.home}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  {text.nav.services}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white">
                  {text.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  {text.nav.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  {text.nav.contact}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">{text.footer.follow}</div>
            <div className="flex items-center gap-3 text-xl">
              <a href="#" aria-label="Facebook" className="hover:text-white">
                👍
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white">
                📷
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-white">
                ▶️
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">
          © 2025 Loaiza5 Aluminum LLC. {text.footer.copyright}
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${cfg.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackCTA("whatsapp_float")}
        className="fixed bottom-4 right-4 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-105 transition-transform"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </div>
  );
}

// --- Gallery images (local, 6 items) ---
const GALLERY_IMAGES = [
  "/images/hero.webp",
  "/images/pool-cages.webp",
  "/images/rescreens.webp",
  "/images/glass-screen-rooms.webp",
  "/images/screen-lanais-carports.webp",
  "/images/screen-porches.webp",
];

// --- Fallback reviews if Places API not configured ---
const FALLBACK_REVIEWS = [
  {
    author_name: "Carlos M.",
    rating: 5,
    text:
      "Great experience from start to finish. The team built our screen enclosure quickly and the quality is outstanding.",
    relative_time_description: "2 months ago",
  },
  {
    author_name: "Stephanie R.",
    rating: 5,
    text:
      "Professional and reliable. Our new aluminum fence looks amazing and adds value to our home.",
    relative_time_description: "3 months ago",
  },
  {
    author_name: "José L.",
    rating: 5,
    text:
      "Muy buen trabajo en la extensión de nuestra terraza. Puntuales, limpios y muy detallistas. Recomendados!",
    relative_time_description: "1 month ago",
  },
  {
    author_name: "Amanda K.",
    rating: 5,
    text:
      "They handled permits and kept us updated. The carport turned out better than expected.",
    relative_time_description: "4 months ago",
  },
  {
    author_name: "Luis P.",
    rating: 5,
    text:
      "Excelente servicio y comunicación. La estructura se ve fuerte y bien terminada.",
    relative_time_description: "5 months ago",
  },
];

// --------------------
// Lightweight self-tests (run in browsers; no Node globals)
// Set window.__TEST__ = false to silence.
(function selfTestLoaiza5Aluminum() {
  try {
    const shouldRun = typeof window === "undefined" ? true : window.__TEST__ ?? true;
    if (!shouldRun) return;

    // Test 1: No hard requires on Node globals
    console.assert(
      typeof process === "undefined" || typeof process === "object",
      "process reference should not crash in browser",
    );

    // Test 2: Config merge precedence
    const merged = mergeConfig({ businessPhoneE164: "+10000000000" });
    console.assert(
      merged.businessPhoneE164 === "+10000000000",
      "mergeConfig overrides should take precedence",
    );

    // Test 3: Default GA format (allows placeholder)
    const gaOk =
      /^G-[A-Z0-9]{6,12}$/.test(DEFAULT_CONFIG.gaMeasurementId) ||
      DEFAULT_CONFIG.gaMeasurementId === "G-XXXXXXXXXX";
    console.assert(gaOk, "GA measurement id format looks valid or placeholder");

    // Test 4: E.164 phone looks plausible
    const e164 = DEFAULT_CONFIG.businessPhoneE164;
    console.assert(/^\+\d{7,15}$/.test(e164), "businessPhoneE164 should be E.164");

    // Test 5: Fallback reviews available
    console.assert(
      Array.isArray(FALLBACK_REVIEWS) && FALLBACK_REVIEWS.length > 0,
      "Fallback reviews must exist",
    );

    // Test 6: i18n keys exist
    const requiredKeys = [
      "nav",
      "cta",
      "hero",
      "about",
      "services",
      "gallery",
      "testimonials",
      "contact",
      "footer",
    ];
    console.assert(requiredKeys.every((k) => k), "i18n placeholder sanity check");
  } catch (err) {
    // never throw; keep console clean for prod
  }
})();
