import { useState } from "react";
import heroSalon from "@/assets/hero-salon.jpg";

const OfferBand = () => {
  const [sent, setSent] = useState(false);
  return (
    <section className="wrap pb-24 md:pb-32">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col gap-5 bg-champagne p-8 text-ink md:p-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">Special offer</span>
          <h2 className="text-[72px] leading-[0.9] tracking-[-0.03em] md:text-[110px]">10% off</h2>
          <p className="max-w-[440px] text-base leading-relaxed">
            your first salon or spa service when you join our e-newsletter.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="flex flex-col gap-2"
          >
            <label htmlFor="offer-email" className="text-[13px] font-semibold">Email address</label>
            <div className="flex flex-wrap gap-2">
              <input
                id="offer-email"
                type="email"
                required
                placeholder="you@email.com"
                className="min-w-0 flex-1 border border-ink bg-transparent px-4 py-4 text-[15px] text-ink placeholder:text-ink/60 focus:outline-none focus:ring-2 focus:ring-ink"
              />
              <button type="submit" className="btn-ink">Join</button>
            </div>
            {sent && <span className="text-[13px]" role="status">Thanks! This is a design case study, so nothing was sent.</span>}
          </form>
        </div>
        <img src={heroSalon} alt="Inside Sydnie Hair Salon" className="h-[320px] w-full object-cover lg:h-full" />
      </div>
    </section>
  );
};

export default OfferBand;
