import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-graphite bg-ink/95 backdrop-blur">
      <div className="wrap flex h-[76px] items-center justify-between gap-6">
        <Link to="/" className="serif text-[30px] font-semibold tracking-[0.18em] text-ivory" aria-label={`${SITE.fullName} home`}>
          SYDNIE
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
                pathname === l.to ? "text-champagne" : "text-ivory hover:text-champagne"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={SITE.phoneHref} className="text-[13px] text-champagne">{SITE.phone}</a>
          <Link to="/contact-us" className="btn-light !px-5 !py-3">Book</Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center border border-graphite text-ivory lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="wrap flex flex-col pb-8 lg:hidden" aria-label="Mobile">
          {NAV.map((l) => (
            <Link key={l.to} to={l.to} className="serif border-b border-graphite py-4 text-[28px] text-ivory">
              {l.label}
            </Link>
          ))}
          <Link to="/contact-us" className="btn-light mt-6">Book an Appointment</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
