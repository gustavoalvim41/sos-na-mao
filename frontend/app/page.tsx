import Container from "@/components/ui/container";
import NavBar from "@/components/home/navbar"
import Hero from "@/components/home/hero";
import Feature from "@/components/home/feature";
import Process from "@/components/home/process";
// import Gallery from "@/components/home/gallery";
// import Services from "@/components/home/services";
import { Pricing } from "@/components/home/pricing";
import { Cta } from "@/components/home/cta";
import Faq from "@/components/home/faq";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <Container>
      <NavBar />
      <Hero />
      <div className="hidden md:flex w-full justify-end">
        <div className="bg-foreground/5 w-200 p-5 border border-border flex justify-center">
          <p className="text-muted-foreground lg:text-md italic">Tenha acesso rápido às suas informações médicas quando cada segundo conta.</p>
        </div>
      </div>
      <Feature />
      <Process />
      <Pricing />
      <Cta />
      {/* <Gallery /> */}
      {/* <Services /> */}
      <Faq />
      <Footer />
    </Container>
  );
}
