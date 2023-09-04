import About from "@/components/About";
import Mission from "@/components/Mission";
import Vision from "@/components/Vision";
import Pillar from "@/components/Pillar";
import Invest from "@/components/Invest";

export default function Home() {
  return (
    <main>
      <div>
        <About />
      </div>
      <div className="relative">
        <Mission />
        <div className="gradient-03 z-0" />
        <Vision />
      </div>
      <div className="relative">
        <Pillar />
        <div className="gradient-04 z-0" />
      <Invest />
      </div>
    </main>
  );
}
