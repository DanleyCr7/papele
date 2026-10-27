import Image from "next/image";
import { assetPath } from "@/lib/assets";
import { site } from "@/lib/site";

export function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#inicio" aria-label={`${site.name} — início`} className="inline-flex shrink-0 flex-col items-center rounded-sm">
      <Image
        src={assetPath("/images/logo.png")}
        width={174}
        height={58}
        alt={site.name}
        className="h-auto w-[135px] sm:w-[155px] lg:w-[174px]"
      />
      {footer && <span className="mt-1 text-[9px] tracking-wide text-brand">{site.tagline}</span>}
    </a>
  );
}
