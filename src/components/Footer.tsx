import { Link } from "react-router-dom";
import { NAV, SITE } from "@/lib/site";

const Footer = () => {
  return (
    <footer className="border-t border-[#D6CFC4] bg-ivory text-ink">
      <div className="wrap flex flex-col gap-14 pb-8 pt-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-bronze">Visit</span>
            <span className="serif text-[30px] leading-[1.15]">
              {SITE.street}
              <br />
              {SITE.city}
            </span>
            <a href={SITE.phoneHref} className="text-lg font-semibold hover:text-bronze">{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="text-[15px] text-[#5E5952] hover:text-bronze">{SITE.email}</a>
          </div>
          <div className="flex flex-col gap-2.5 text-[15px]">
            <span className="mb-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-bronze">Hours</span>
            {SITE.hours.map((h) => (
              <span key={h.days}>{h.days} · {h.time}</span>
            ))}
            <span className="text-[#5E5952]">Appointments available upon request</span>
          </div>
          <div className="flex flex-col gap-2.5 text-[15px]">
            <span className="mb-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-bronze">Explore</span>
            {NAV.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-bronze">{l.label}</Link>
            ))}
          </div>
        </div>

        <Link to="/" className="serif text-center text-[22vw] font-semibold leading-[0.8] tracking-[-0.02em] md:text-[200px] lg:text-[240px]" aria-label="Home">
          SYDNIE
        </Link>

        <div className="flex flex-col gap-2 border-t border-[#D6CFC4] pt-6 text-xs text-[#5E5952] md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} {SITE.fullName} · A fictional brand created as a design case study.</span>
          <span>Web Design by Bluluma | Powered by SwiftLift</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
