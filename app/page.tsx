import Button from "@/components/Button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ButtonGradiant  from "@/public/assets/svg/ButtonGradient";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
      </div>
      <ButtonGradiant/>
    </>
  );
}
