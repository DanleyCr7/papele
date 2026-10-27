import { BrandLogo } from "@/components/brand-logo";
import { MobileMenu } from "@/components/mobile-menu";
import { WhatsappLink } from "@/components/whatsapp-link";
import { navigation, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-white/95 backdrop-blur-md lg:relative lg:border-0 lg:bg-white lg:backdrop-blur-none">
      <div className="page-container flex min-h-[76px] items-center justify-between gap-4 sm:min-h-[88px] lg:min-h-[112px]">
        <BrandLogo />
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 text-[14px] font-medium lg:flex xl:gap-10">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="rounded-sm py-3 transition-colors hover:text-brand">{item.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <WhatsappLink message={site.messages.general} className="hidden! min-h-11! px-4! text-[13px]! sm:inline-flex!">{site.actions.whatsapp}</WhatsappLink>
          <a href="#contato" className="button button-primary hidden! min-h-11! px-5! text-[13px]! md:inline-flex!">{site.actions.quote}</a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
