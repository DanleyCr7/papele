import { BrandLogo } from "@/components/brand-logo";
import { navigation } from "@/lib/site";

export function Footer() {
  return (
    <footer className="page-container">
      <div className="flex flex-col items-center gap-4 border-t border-line pb-7 pt-6 sm:flex-row sm:justify-between sm:gap-8 sm:py-7 lg:justify-start lg:gap-40">
        <BrandLogo footer />
        <nav aria-label="Navegação do rodapé" className="grid w-full max-w-[320px] grid-cols-2 gap-x-4 text-[13px] text-ink/85 sm:flex sm:w-auto sm:max-w-none sm:flex-wrap sm:justify-center sm:gap-x-7 lg:gap-x-10">
          {navigation.map((item) => <a key={item.href} href={item.href} className="flex min-h-11 items-center justify-center rounded-sm py-2 transition-colors hover:text-brand">{item.label}</a>)}
        </nav>
      </div>
    </footer>
  );
}
