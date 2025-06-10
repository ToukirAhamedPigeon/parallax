import Benefits from "@/components/Benefits";
import Collaboration from "@/components/Collaboration";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import ButtonGradiant  from "@/public/assets/svg/ButtonGradient";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
        <Benefits/>
        <Collaboration/>
        <Services/>
        <Pricing/>
      </div>
      <ButtonGradiant/>
    </>
  );
}
