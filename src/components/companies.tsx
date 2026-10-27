import Image from "next/image";
import { site } from "@/lib/site";

export function Companies() {
  return (
    <section id="empresas" aria-labelledby="companies-heading" className="page-container pb-8 md:pb-8">
      <div className="grid overflow-hidden rounded-[20px] bg-mist md:grid-cols-[0.95fr_1.05fr] md:rounded-xl">
        <div className="relative z-10 px-6 pb-2 pt-8 sm:px-8 sm:pt-10 md:px-8 md:py-12 lg:px-12 lg:py-14">
          <p className="eyebrow text-sage-dark">{site.companies.eyebrow}</p>
          <h2 id="companies-heading" className="section-heading mt-3 max-w-[390px] text-balance md:mt-4">{site.companies.title}</h2>
          <p className="mt-4 max-w-[440px] text-pretty text-[14px] leading-[1.65] text-muted md:text-[15px] md:leading-[1.5] lg:text-[17px]">{site.companies.description}</p>
          <a href="#contato" data-quote-product="empresas" className="button button-primary mt-5 w-full sm:w-auto md:mt-6">{site.companies.cta}</a>
        </div>
        <div className="flex items-center pt-4 md:-ml-8 md:p-0">
          <Image src="/images/empresas-v2.png" alt="Sacola creme Papelê, embalagem kraft, cartões de visita e adesivos personalizados para empresas." width={1536} height={1024} sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 767px) calc(100vw - 80px), (max-width: 1279px) 52vw, 630px" className="h-auto w-full object-contain md:mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
}
