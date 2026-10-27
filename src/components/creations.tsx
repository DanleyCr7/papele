import Image from "next/image";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { creations, site } from "@/lib/site";

export function Creations() {
  return (
    <section id="criacoes" aria-labelledby="creations-heading" className="page-container pb-12 md:pb-16">
      <div className="mx-auto mb-6 max-w-[850px] text-center md:mb-9">
        <h2 id="creations-heading" className="section-heading">{site.creations.title}</h2>
        <p className="mx-auto mt-3 max-w-[330px] text-pretty text-[14px] leading-relaxed text-muted sm:max-w-none sm:text-[18px]">{site.creations.description}</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-3 sm:gap-4 md:gap-7 lg:gap-9">
        {creations.map((creation) => (
          <a key={creation.product} href="#contato" data-quote-product={creation.product} className="group block overflow-hidden rounded-2xl border border-line/70 bg-white transition-colors hover:border-brand/35 md:overflow-visible md:rounded-sm md:border-0" aria-label={`${creation.title} — solicitar orçamento`}>
            <div className="aspect-[6/5] overflow-hidden bg-paper sm:aspect-square">
              <Image src={creation.image} alt={creation.alt} width={1024} height={1024} sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1279px) 30vw, 376px" className="size-full object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none sm:object-center" />
            </div>
            <div className="px-4 py-4 md:px-0 md:pb-0 md:pt-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-[20px] font-semibold leading-tight tracking-[-0.035em] group-hover:text-brand sm:text-[17px] md:text-[21px] lg:text-[23px]">{creation.title}</h3>
                <ArrowUpRightIcon size={19} aria-hidden="true" className="shrink-0 text-brand md:hidden" />
              </div>
              <p className="mt-1.5 max-w-[330px] text-[14px] leading-[1.6] text-muted md:mt-2 md:text-[15px] md:leading-[1.5] lg:text-[16px]">{creation.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
