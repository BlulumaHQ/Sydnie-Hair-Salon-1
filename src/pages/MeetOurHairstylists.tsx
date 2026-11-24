import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import { TEAM } from "@/lib/site";
import heroImg from "@/assets/hero-salon.jpg";
import modelImg from "@/assets/hair-model.jpg";

const MeetOurHairstylists = () => (
  <>
    <SEO title="Meet Our Stylists | Sydnie Hair Salon & Day Spa" description="Meet the independent stylists, colorists, nail technicians and aesthetician at Sydnie Hair Salon & Day Spa." />
    <PageHero
      label="The team"
      title="Meet the"
      accent="stylists."
      subtitle="Independent hair stylists, nail technicians and an aesthetician — talented professionals with personalized service."
      image={heroImg}
    />

    <section className="wrap pb-24 md:pb-32">
      <div className="border-t border-ivory">
        {TEAM.map((m, i) => (
          <article key={m.name} className="grid gap-4 border-b border-graphite py-10 md:grid-cols-12 md:items-baseline md:py-12">
            <span className="serif text-[28px] text-champagne md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="text-[40px] md:col-span-5 md:text-[56px]">{m.name}</h2>
            <span className="label md:col-span-2">{m.role}</span>
            <p className="text-[15px] leading-relaxed text-smoke md:col-span-4">{m.bio}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-ivory py-24 text-ink md:py-32">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-bronze">Careers</span>
          <h2 className="text-[48px] md:text-[72px]">
            Sydnie is <em>hiring.</em>
          </h2>
          <p className="text-[17px] leading-relaxed text-[#4C4842]">
            We’re looking for experienced, licensed cosmetologists to join our team. We are a full-service salon, active in our community, and we love what we do.
          </p>
          <Link to="/contact-us" className="btn-ink self-start">Get in touch</Link>
        </div>
        <img src={modelImg} alt="" className="h-[420px] w-full object-cover md:h-[520px]" />
      </div>
    </section>
  </>
);

export default MeetOurHairstylists;
