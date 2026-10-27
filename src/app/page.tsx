import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Categories } from "@/components/categories";
import { Creations } from "@/components/creations";
import { Companies } from "@/components/companies";
import { Christmas } from "@/components/christmas";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div id="inicio">
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Categories />
        <Creations />
        <Companies />
        <Christmas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
