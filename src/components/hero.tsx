import Image from "next/image";
import { assetPath } from "@/lib/assets";
import { WhatsappLink } from "@/components/whatsapp-link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="page-container grid items-center gap-0 pb-5 pt-7 text-center sm:pt-9 md:grid-cols-[1.03fr_1fr] md:gap-6 md:pb-5 md:pt-7 md:text-left lg:min-h-[590px] lg:pt-5 xl:gap-0">
      <div className="relative z-10 md:py-10">
        <p className="mb-4 text-[10px] font-medium tracking-[0.22em] text-brand min-[375px]:text-[11px] sm:mb-5 sm:text-[13px]">{site.hero.eyebrow}</p>
        <h1 id="hero-heading" className="text-[clamp(2rem,9.2vw,2.75rem)] leading-[1.12] tracking-[-0.045em] md:text-[clamp(2.5rem,4.6vw,3.65rem)] md:leading-[1.13]">
          <span className="block font-normal">{site.hero.title}</span>
          <span className="block font-bold">{site.hero.emphasis}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-[350px] text-pretty text-[14px] leading-[1.65] text-muted min-[375px]:text-[15px] sm:max-w-[475px] sm:text-[18px] md:mx-0 md:mt-6 md:leading-[1.55]">
          {site.hero.description}<br className="hidden lg:block" /> {site.hero.supporting}
        </p>
        <div className="mx-auto mt-6 grid max-w-[380px] grid-cols-2 gap-2.5 sm:gap-3 md:mx-0 md:max-w-none lg:mt-8 lg:flex lg:flex-wrap lg:gap-4">
          <a href="#contato" className="button button-primary min-w-0 px-3! sm:px-4! lg:px-[25px]!">{site.actions.quote}</a>
          <WhatsappLink message={site.messages.general} className="min-w-0 px-3! sm:px-4! lg:px-[25px]!">
            <span className="lg:hidden">{site.actions.whatsapp}</span>
            <span className="hidden lg:inline">{site.actions.talk}</span>
          </WhatsappLink>
        </div>
      </div>
      <div className="relative mx-auto mt-3 w-full max-w-[340px] sm:max-w-[400px] md:mx-0 md:mt-0 md:w-auto md:max-w-none xl:-ml-8 xl:-mr-7">
        <Image
          src={assetPath("/images/hero-v2.png")}
          width={1254}
          height={1254}
          alt="Sacola verde sálvia da Papelê, caixa creme com laço, etiqueta personalizada e topo Parabéns."
          preload
          sizes="(max-width: 639px) min(340px, calc(100vw - 40px)), (max-width: 767px) 400px, (max-width: 1279px) 52vw, 640px"
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}
