import Image from "next/image";
import { assetPath } from "@/lib/assets";
import { site } from "@/lib/site";

export function Christmas() {
  return (
    <section id="natal" aria-labelledby="christmas-heading" className="page-container mb-9 grid items-center gap-0 overflow-hidden rounded-[20px] border border-line/70 md:mb-0 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:rounded-none md:border-0 md:pb-8 lg:gap-14">
      <div className="order-2 aspect-[6/5] overflow-hidden md:order-1 md:aspect-square">
        <Image src={assetPath("/images/natal-v2.png")} alt="Kit de Natal com caneca, chocolates com laço verde e cartão Boas Festas em uma caixa Papelê aberta." width={1254} height={1254} sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 767px) calc(100vw - 80px), (max-width: 1279px) 50vw, 590px" className="size-full object-cover md:h-auto md:object-contain" />
      </div>
      <div className="order-1 px-6 pb-2 pt-8 sm:px-8 md:order-2 md:px-1 md:py-10 lg:pr-3">
        <p className="eyebrow text-coral">{site.christmas.eyebrow}</p>
        <h2 id="christmas-heading" className="section-heading mt-3 max-w-[410px] text-balance md:mt-4">{site.christmas.title}</h2>
        <p className="mt-4 max-w-[470px] text-pretty text-[14px] leading-[1.65] text-muted md:mt-5 md:text-[16px] md:leading-[1.5] lg:text-[18px]">{site.christmas.description}</p>
        <a href="#contato" data-quote-product="natal" className="button button-primary mt-5 w-full sm:w-auto md:mt-6">{site.christmas.cta}</a>
      </div>
    </section>
  );
}
