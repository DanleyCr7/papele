import { BuildingsIcon, CakeIcon, GiftIcon, HandbagIcon, TreeEvergreenIcon } from "@phosphor-icons/react/dist/ssr";
import { categories, site } from "@/lib/site";

const icons = {
  cake: CakeIcon,
  bag: HandbagIcon,
  gift: GiftIcon,
  buildings: BuildingsIcon,
  tree: TreeEvergreenIcon,
};

export function Categories() {
  return (
    <section aria-label={site.categoriesHeading} className="page-container pb-11 pt-3 sm:pb-14 md:pb-20 md:pt-1">
      <p className="text-center text-[12px] text-muted min-[375px]:text-[13px] sm:text-[15px]">{site.categoriesHeading}</p>
      <div className="mt-5 grid grid-cols-5 gap-1 sm:mt-7 sm:gap-0">
        {categories.map((category) => {
          const Icon = icons[category.icon];
          return (
            <a key={category.label} href={category.href} className="category-link group relative flex min-h-[80px] min-w-0 flex-col items-center justify-center gap-2 rounded-xl bg-paper/75 px-0.5 text-[10px] font-medium tracking-[-0.03em] transition-colors hover:bg-paper min-[375px]:text-[11px] sm:min-h-[96px] sm:gap-3 sm:rounded-sm sm:bg-transparent sm:text-[15px] sm:font-semibold sm:tracking-normal sm:hover:bg-transparent">
              <Icon size={48} weight="light" aria-hidden="true" className={`${category.color} size-8 transition-transform duration-200 group-hover:-translate-y-1 motion-reduce:transform-none sm:size-12`} />
              <span className="transition-colors group-hover:text-brand">{category.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
