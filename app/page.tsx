import Button from "@/components/Button";
import ButtonGradiant  from "@/public/assets/svg/ButtonGradient";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl gont-bold underline">Hello World</h1>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-20">
          Sometihng
        </Button>
      </div>
      <ButtonGradiant/>
    </>
  );
}
