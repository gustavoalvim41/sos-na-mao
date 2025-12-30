import Container from "@/components/ui/container";
import NavBar from "@/components/home/navbar"
import Hero from "@/components/home/hero";
import Feature from "@/components/home/feature";
import Process from "@/components/home/process";
import { Pricing } from "@/components/home/pricing";
import { Cta } from "@/components/home/cta";
import Faq from "@/components/home/faq";
import Footer from "@/components/home/footer";
import { Compare } from "@/components/home/compare";

export default function Home() {
  return (
    <Container>
      <NavBar />
      <Hero />
      <div className="hidden md:flex w-full justify-end">
        <div className="bg-foreground/5 w-200 p-5 border border-border flex justify-center">
          <p className="text-muted-foreground lg:text-md italic">Em uma emergência, cada segundo conta. E as informações certas podem salvar sua vida.</p>
        </div>
      </div>
      <Feature />
      <Process />
      <Pricing />
      <Compare />
      <Cta />
      <Faq />
      <Footer />
    </Container>
  );
}
