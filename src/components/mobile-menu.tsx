"use client";

import { ListIcon, XIcon, WhatsappLogoIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { navigation, site, whatsappUrl } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }

    const desktop = window.matchMedia("(min-width: 1024px)");
    function onViewportChange(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onViewportChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onViewportChange);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={toggle}
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
        className="flex size-11 items-center justify-center rounded-xl border border-line/80 bg-paper/40 text-brand transition-colors hover:bg-paper"
      >
        {open ? <XIcon size={24} aria-hidden="true" /> : <ListIcon size={24} aria-hidden="true" />}
      </button>
      <nav
        id="mobile-navigation"
        aria-label="Navegação principal móvel"
        hidden={!open}
        className="absolute inset-x-0 top-full z-30 max-h-[calc(100dvh-76px)] overflow-y-auto overscroll-contain border-b border-line bg-white px-5 pb-6 pt-3 shadow-xl shadow-ink/5 sm:px-10"
        onClick={(event) => {
          if (event.target instanceof Element && event.target.closest("a")) setOpen(false);
        }}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col gap-1">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="rounded-lg px-3 py-3.5 text-[15px] font-medium hover:bg-paper hover:text-brand">
              {item.label}
            </a>
          ))}
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <a href={whatsappUrl(site.messages.general)} target="_blank" rel="noopener noreferrer" className="button button-secondary" aria-label="WhatsApp (abre em nova aba)">
              <WhatsappLogoIcon size={22} aria-hidden="true" /> {site.actions.whatsapp}
            </a>
            <a href="#contato" className="button button-primary">{site.actions.quote}</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
