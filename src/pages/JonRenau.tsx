import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import modelImg from "@/assets/hair-model.jpg";

const items = [
  { name: "Wigs", description: "Hand-tied and ready-to-wear styles, fitted and finished in the salon." },
  { name: "Extensions", description: "Seamless added length and volume, color-matched to you." },
  { name: "Hair additions", description: "Toppers and pieces for targeted volume and coverage." },
];

const JonRenau = () => (
  <>
    <SEO title="Wigs & Extensions | Sydnie Hair Salon & Day Spa" description="Wigs, hair extensions, additions and hairpieces from the Jon Renau collection at Sydnie Hair Salon — a design case study." />
    <PageHero
      label="Jon Renau collection"
      title="Wigs &"
      accent="extensions."
      subtitle="Premium wigs, extensions and hairpieces from Jon Renau — over 1,500 styles to choose from, fitted by our stylists."
      image={modelImg}
    />
    <section className="wrap grid gap-px border border-graphite bg-graphite md:grid-cols-3">
      {items.map((it, i) => (
        <div key={it.name} className="flex flex-col gap-3 bg-ink p-10">
          <span className="serif text-[24px] text-champagne">{String(i + 1).padStart(2, "0")}</span>
          <h2 className="text-[40px]">{it.name}</h2>
          <p className="text-[15px] leading-relaxed text-smoke">{it.description}</p>
        </div>
      ))}
    </section>
    <section className="wrap flex flex-col items-start gap-6 py-24 md:py-32">
      <h2 className="max-w-[820px] text-[44px] md:text-[64px]">
        Explore the collection <em className="text-champagne">in-store.</em>
      </h2>
      <Link to="/contact-us" className="btn-light">Book a fitting</Link>
    </section>
  </>
);

export default JonRenau;
