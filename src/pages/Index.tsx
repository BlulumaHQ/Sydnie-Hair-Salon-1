import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import OfferBand from "@/components/OfferBand";
import { SITE } from "@/lib/site";
import modelImg from "@/assets/hair-model.jpg";
import cutImg from "@/assets/salon-services.jpg";
import nailsImg from "@/assets/nail-services.jpg";
import spaImg from "@/assets/hero-spa.jpg";
import spaTreatImg from "@/assets/spa-treatment.jpg";

const SERVICES = [
  { n: "01", label: "Hair", title: "Cutting-edge styles", desc: "Color, cuts and styling that is individually you.", img: cutImg, to: "/hair-salon-services" },
  { n: "02", label: "Spa", title: "Wellness & relaxation", desc: "Customized treatments for skin, body and mind.", img: spaImg, to: "/spa-services-massages-facials" },
  { n: "03", label: "Nails", title: "Hands & feet", desc: "Manicures and pedicures, done with care.", img: nailsImg, to: "/hair-salon-services" },
];

const Index = () => {
  return (
    <>
      <SEO
        title="Sydnie Hair Salon & Day Spa | Hair, Color & Spa — Design Case Study"
        description="Sydnie Hair Salon & Day Spa is a fictional salon created as a Bluluma design case study: haircuts, color, styling, extensions, nails and spa treatments in a fashion-editorial design."
      />

      {/* Masthead */}
      <section className="wrap pt-8">
        <div className="flex flex-wrap justify-between gap-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-smoke">
          <span>Issue Nº {new Date().getFullYear() - Number(SITE.since)} · Est. {SITE.since}</span>
          <span>Hair Salon &amp; Day Spa</span>
        </div>
        <h1 className="text-center text-[25vw] font-semibold leading-[0.8] tracking-[-0.04em] md:text-[240px] lg:text-[300px]">SYDNIE</h1>
      </section>

      {/* Cover */}
      <section className="wrap grid gap-7 pb-24 pt-8 md:pb-32 lg:grid-cols-12">
        <div className="flex flex-col justify-between gap-8 lg:col-span-3">
          <p className="serif text-[34px] leading-[1.12]">
            Relax. Refresh. <em className="text-champagne">Renew.</em>
          </p>
          <p className="text-[15px] leading-relaxed text-smoke">
            Your visit will leave you glowing inside and out. Color, cuts, styling, extensions and spa care — since {SITE.since}.
          </p>
          <Link to="/contact-us" className="btn-gold self-start">Book an Appointment</Link>
        </div>
        <img src={modelImg} alt="Model with glossy, styled brunette hair" className="h-[520px] w-full object-cover md:h-[720px] lg:col-span-6" />
        <div className="flex flex-col gap-7 lg:col-span-3">
          <img src={cutImg} alt="Stylist finishing a cut" className="h-[300px] w-full object-cover md:h-[380px]" />
          <div className="flex flex-col gap-3.5 border-t border-graphite pt-5 text-[15px]">
            <span className="label">In this issue</span>
            <span>Independent stylists &amp; colorists</span>
            <span>Nail technicians &amp; aesthetician</span>
            <span>Wigs, extensions &amp; hairpieces</span>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-ivory py-24 text-ink md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-bronze">The story</span>
            <h2 className="text-[48px] md:text-[72px]">
              Come see what all the <em>buzz</em> is about.
            </h2>
          </div>
          <div className="flex flex-col gap-6 lg:pt-10">
            <p className="text-[19px] leading-relaxed">
              Founder <strong className="font-semibold">Sydnie Laurent</strong> built the salon to change the way you think about hair salons: full-service comfort, friendly stylists and a calm, considered atmosphere.
            </p>
            <p className="text-base leading-relaxed text-[#4C4842]">
              Our independent stylists, nail technicians and aesthetician customize every service — so each visit starts with you.
            </p>
            <Link to="/meet-our-hairstylists" className="self-start border-b border-ink pb-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
              Meet the team
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="wrap py-24 md:py-32">
        <div className="flex flex-col justify-between gap-4 border-b border-graphite pb-7 md:flex-row md:items-end">
          <h2 className="text-[48px] md:text-[72px]">
            The <em className="text-champagne">services</em>
          </h2>
          <span className="label !text-smoke">Hair · Spa · Nails</span>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Link key={s.n} to={s.to} className="group relative flex h-[520px] items-end overflow-hidden md:h-[600px]">
              <img src={s.img} alt={s.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
              <div className="relative flex flex-col gap-2 p-8">
                <span className="label">{s.n} — {s.label}</span>
                <span className="serif text-[36px] leading-[1.05]">{s.title}</span>
                <span className="text-[15px] text-[#D8D2C8]">{s.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote strip */}
      <section className="border-y border-graphite py-9">
        <div className="wrap flex flex-wrap justify-center gap-x-10 gap-y-3 text-center">
          {["Lived-in color", "Precision cuts", "Event styling", "Extensions", "Spa rituals"].map((t, i) => (
            <span key={t} className="serif text-[24px] italic text-champagne md:text-[34px]">
              {t}
              {i < 4 && <span className="ml-10 not-italic text-graphite">/</span>}
            </span>
          ))}
        </div>
      </section>

      {/* Spa feature */}
      <section className="wrap grid items-center gap-12 py-24 md:py-32 lg:grid-cols-2">
        <img src={spaTreatImg} alt="Stones, oils and towels for a spa treatment" className="h-[420px] w-full object-cover md:h-[560px]" />
        <div className="flex flex-col gap-6">
          <span className="label">The day spa</span>
          <h2 className="text-[48px] md:text-[64px]">
            Pamper your skin, body <em className="text-champagne">&amp; mind.</em>
          </h2>
          <p className="text-[17px] leading-relaxed text-smoke">
            Facials, massages, body treatments and skin care — each one tailored to what you need that day.
          </p>
          <Link to="/spa-services-massages-facials" className="btn-gold self-start">Explore the spa</Link>
        </div>
      </section>

      <OfferBand />
    </>
  );
};

export default Index;
