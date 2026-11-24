import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import ServiceList from "@/components/ServiceList";
import heroImg from "@/assets/salon-services.jpg";

const services = [
  { name: "Haircuts", description: "Customized cuts tailored to your individual bone structure and facial features." },
  { name: "Hair Color", description: "From highlights and balayage to full color services, our colorists deliver stunning results." },
  { name: "Hair Styling", description: "Updos, blowouts and special-occasion styles for every event." },
  { name: "Manicures", description: "Pamper your hands with professional nail care and polish services." },
  { name: "Pedicures", description: "Relax and rejuvenate with our soothing pedicure treatments." },
  { name: "Waxing", description: "Professional waxing services for smooth, long-lasting results." },
];

const HairSalonServices = () => (
  <>
    <SEO title="Hair Salon Services | Sydnie Hair Salon & Day Spa" description="Haircuts, color, styling, manicures, pedicures and waxing at Sydnie Hair Salon & Day Spa — a design case study." />
    <PageHero
      label="Salon services"
      title="Cutting-edge"
      accent="styles."
      subtitle="From color and cuts to styling, our stylists create a look for every occasion that is individually you."
      image={heroImg}
    />
    <ServiceList heading="The salon" accent="menu" items={services} cross={{ label: "spa services", to: "/spa-services-massages-facials" }} />
  </>
);

export default HairSalonServices;
