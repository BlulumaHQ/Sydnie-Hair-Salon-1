import { Link } from "react-router-dom";

interface Item {
  name: string;
  description: string;
}

const ServiceList = ({ heading, accent, items, cross }: { heading: string; accent: string; items: Item[]; cross: { label: string; to: string } }) => (
  <>
    <section className="wrap pb-24 md:pb-32">
      <div className="flex flex-col justify-between gap-4 border-b border-ivory pb-7 md:flex-row md:items-end">
        <h2 className="text-[44px] md:text-[64px]">
          {heading} <em className="text-champagne">{accent}</em>
        </h2>
        <span className="label !text-smoke">Pricing on consultation</span>
      </div>
      {items.map((s, i) => (
        <div key={s.name} className="grid gap-3 border-b border-graphite py-9 md:grid-cols-12 md:items-baseline">
          <span className="serif text-[24px] text-champagne md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="text-[34px] md:col-span-5 md:text-[44px]">{s.name}</h3>
          <p className="text-[15px] leading-relaxed text-smoke md:col-span-4">{s.description}</p>
          <Link to="/contact-us" className="text-xs font-semibold uppercase tracking-[0.2em] text-ivory hover:text-champagne md:col-span-2 md:text-right">
            Book →
          </Link>
        </div>
      ))}
    </section>

    <section className="border-t border-graphite">
      <div className="wrap flex flex-col justify-between gap-6 py-16 md:flex-row md:items-center">
        <p className="serif text-[32px] md:text-[44px]">
          Looking for <em className="text-champagne">{cross.label}</em>?
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to={cross.to} className="btn-gold">See {cross.label}</Link>
          <Link to="/contact-us" className="btn-light">Book now</Link>
        </div>
      </div>
    </section>
  </>
);

export default ServiceList;
