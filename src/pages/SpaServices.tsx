import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ServiceList from "@/components/ServiceList";
import heroImg from "@/assets/hero-spa.jpg";

const services = [
  { name: "Facials", description: "Customized facial treatments tailored to your skin — rejuvenate and pamper." },
  { name: "Massages", description: "Relax and restore with professional massage designed to melt away tension." },
  { name: "Body Treatments", description: "Luxurious treatments that leave you feeling refreshed and renewed." },
  { name: "Skin Care", description: "Together, we choose a customized treatment for your specific needs." },
  { name: "Waxing", description: "Smooth, long-lasting results in a calm, comfortable setting." },
];

const SpaServices = () => (
  <>
    <SEO title="Spa Services – Massages & Facials | Sydnie Hair Salon & Day Spa" description="Facials, massages, body treatments and skin care at Sydnie Hair Salon & Day Spa — a design case study." />
    <PageHero
      label="Day spa"
      title="Wellness &"
      accent="relaxation."
      subtitle="Treat yourself and pamper your skin, body and mind with treatments tailored to you."
      image={heroImg}
    />
    <ServiceList heading="The spa" accent="menu" items={services} cross={{ label: "hair services", to: "/hair-salon-services" }} />
  </>
);

export default SpaServices;
