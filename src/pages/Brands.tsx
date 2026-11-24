import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import heroImg from "@/assets/spa-treatment.jpg";

const brands = [
  { name: "Jon Renau", description: "Industry-leading wigs, extensions and hair additions with 1,500+ styles." },
  { name: "Milkshake", description: "Premium hair care crafted with natural ingredients for healthy, vibrant hair." },
  { name: "Pureology", description: "Sulfate-free formulas designed for color-treated hair." },
  { name: "Babe Hair Extensions", description: "Professional-grade extensions for seamless, natural-looking length and volume." },
  { name: "Gelish", description: "Professional gel polish for long-lasting, salon-quality manicures." },
];

const Brands = () => (
  <>
    <SEO title="Brands We Carry | Sydnie Hair Salon & Day Spa" description="Jon Renau, Milkshake, Pureology, Babe Hair Extensions and Gelish at Sydnie Hair Salon & Day Spa — a design case study." />
    <PageHero
      label="Our brands"
      title="The product"
      accent="edit."
      subtitle="Premium products for beautiful results — used in the salon and available to take home."
      image={heroImg}
    />
    <section className="wrap pb-24 md:pb-32">
      <div className="grid gap-px border border-graphite bg-graphite sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((b) => (
          <div key={b.name} className="flex min-h-[240px] flex-col justify-between gap-6 bg-ink p-9">
            <h2 className="text-[36px] md:text-[42px]">{b.name}</h2>
            <p className="text-[15px] leading-relaxed text-smoke">{b.description}</p>
          </div>
        ))}
        <div className="flex min-h-[240px] flex-col justify-between gap-6 bg-champagne p-9 text-ink">
          <h2 className="text-[36px] md:text-[42px]">Ask your <em>stylist</em></h2>
          <p className="text-[15px] leading-relaxed">We’ll recommend the right products for your hair and routine.</p>
        </div>
      </div>
    </section>
  </>
);

export default Brands;
