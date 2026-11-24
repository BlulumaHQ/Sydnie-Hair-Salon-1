interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  label?: string;
  accent?: string;
}

const PageHero = ({ title, subtitle, image, label, accent }: PageHeroProps) => {
  return (
    <section className="wrap grid items-end gap-8 pb-16 pt-12 md:pb-24 md:pt-16 lg:grid-cols-12">
      <div className="flex flex-col gap-6 lg:col-span-6">
        {label && <span className="label">{label}</span>}
        <h1 className="text-[56px] md:text-[88px] lg:text-[104px]">
          {title} {accent && <em className="text-champagne">{accent}</em>}
        </h1>
        {subtitle && <p className="max-w-[460px] text-[17px] leading-relaxed text-smoke">{subtitle}</p>}
      </div>
      <img src={image} alt="" className="h-[360px] w-full object-cover md:h-[520px] lg:col-span-6" />
    </section>
  );
};

export default PageHero;
