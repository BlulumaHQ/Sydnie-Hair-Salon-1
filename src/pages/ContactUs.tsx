import { useState } from "react";
import SEO from "@/components/SEO";
import { SITE } from "@/lib/site";

const field =
  "w-full border border-graphite bg-transparent px-4 py-4 text-[15px] text-ivory placeholder:text-smoke/60 focus:outline-none focus:ring-2 focus:ring-champagne";

const ContactUs = () => {
  const [sent, setSent] = useState(false);

  return (
    <>
      <SEO title="Contact & Book | Sydnie Hair Salon & Day Spa" description="Book an appointment at Sydnie Hair Salon & Day Spa — a fictional salon created as a Bluluma design case study." />

      <section className="wrap pb-16 pt-12 md:pb-20 md:pt-16">
        <span className="label">Contact</span>
        <h1 className="mt-6 text-[64px] md:text-[120px]">
          Book your <em className="text-champagne">chair.</em>
        </h1>
      </section>

      <section className="wrap grid gap-6 pb-24 md:pb-32 lg:grid-cols-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="flex flex-col gap-5 border border-graphite p-8 md:p-12 lg:col-span-3"
        >
          <h2 className="text-[36px] md:text-[44px]">
            Send a <em className="text-champagne">message</em>
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="label !text-smoke">Name</label>
              <input id="name" type="text" required className={field} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="label !text-smoke">Phone</label>
              <input id="phone" type="tel" className={field} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="label !text-smoke">Email</label>
            <input id="email" type="email" required placeholder="you@email.com" className={field} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="service" className="label !text-smoke">Service</label>
            <select id="service" className={`${field} appearance-none`}>
              <option className="bg-ink">Haircut &amp; styling</option>
              <option className="bg-ink">Color</option>
              <option className="bg-ink">Extensions &amp; wigs</option>
              <option className="bg-ink">Nails</option>
              <option className="bg-ink">Spa</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="label !text-smoke">Message</label>
            <textarea id="message" rows={5} required className={`${field} resize-none`} />
          </div>
          <button type="submit" className="btn-light self-start">Send message</button>
          {sent && (
            <p className="text-sm text-smoke" role="status">
              Thanks! This is a design case study, so the form is a demo and no message was sent.
            </p>
          )}
        </form>

        <div className="flex flex-col gap-6 lg:col-span-2">
          <div className="flex flex-col gap-3 border border-graphite p-8">
            <span className="label">Visit</span>
            <span className="serif text-[32px] leading-[1.15]">
              {SITE.street}
              <br />
              {SITE.city}
            </span>
          </div>
          <div className="flex flex-col gap-2.5 border border-graphite p-8 text-[15px]">
            <span className="label mb-1">Hours</span>
            {SITE.hours.map((h) => (
              <span key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-smoke">{h.time}</span>
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3 bg-champagne p-8 text-ink">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em]">Call or email</span>
            <a href={SITE.phoneHref} className="serif text-[36px] leading-none">{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="text-[15px]">{SITE.email}</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
