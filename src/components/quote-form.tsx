"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { products, site, whatsappUrl } from "@/lib/site";

const copy = site.quote;

export function QuoteForm() {
  const productSelect = useRef<HTMLSelectElement>(null);
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [preparedUrl, setPreparedUrl] = useState("");

  useEffect(() => {
    function onQuoteLink(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[data-quote-product]");
      const value = link?.dataset.quoteProduct;

      if (value && products.some((product) => product.value === value) && productSelect.current) {
        productSelect.current.value = value;
        setStatus("idle");
      }
    }

    document.addEventListener("click", onQuoteLink);
    return () => document.removeEventListener("click", onQuoteLink);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const phone = form.elements.namedItem("whatsapp") as HTMLInputElement;

    name.setCustomValidity(name.value.trim() ? "" : "Informe seu nome ou o nome da empresa.");
    phone.setCustomValidity(/^[\d\s()+.-]+$/.test(phone.value) && phone.value.replace(/\D/g, "").length >= 10 ? "" : "Informe seu WhatsApp com DDD.");
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const product = products.find((item) => item.value === value("product"));
    const date = value("date");
    const formattedDate = date ? date.split("-").reverse().join("/") : "";
    const lines = [
      copy.greeting,
      "",
      `${copy.fields.name}: ${value("name")}`,
      `${copy.fields.whatsapp}: ${value("whatsapp")}`,
      `${copy.fields.product}: ${product?.label ?? value("product")}`,
      value("quantity") ? `${copy.fields.quantity}: ${value("quantity")}` : "",
      formattedDate ? `${copy.fields.date}: ${formattedDate}` : "",
      value("message") ? `${copy.fields.message}: ${value("message")}` : "",
    ].filter((line, index) => line || index === 1);

    const url = whatsappUrl(lines.join("\n"));
    setPreparedUrl(url);
    setStatus("ready");
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      onInput={(event) => {
        if (event.target instanceof HTMLInputElement) event.target.setCustomValidity("");
        setStatus("idle");
      }}
      onChange={() => setStatus("idle")}
      className="grid grid-cols-1 gap-x-4 gap-y-4 rounded-2xl border border-line/70 bg-paper/55 p-5 min-[420px]:grid-cols-2 sm:p-6 md:gap-x-5 md:rounded-none md:border-0 md:bg-transparent md:p-0"
    >
      <div className="form-field min-[420px]:col-span-2 sm:col-span-1">
        <label htmlFor="quote-name">{copy.fields.name} <span className="sr-only">(obrigatório)</span></label>
        <input id="quote-name" name="name" autoComplete="name" required maxLength={120} />
      </div>
      <div className="form-field min-[420px]:col-span-2 sm:col-span-1">
        <label htmlFor="quote-whatsapp">{copy.fields.whatsapp} <span className="sr-only">(obrigatório)</span></label>
        <input id="quote-whatsapp" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" required maxLength={25} />
      </div>
      <div className="form-field min-[420px]:col-span-2">
        <label htmlFor="quote-product">{copy.fields.product} <span className="sr-only">(obrigatório)</span></label>
        <select ref={productSelect} id="quote-product" name="product" defaultValue="" required>
          <option value="" disabled>{copy.productPlaceholder}</option>
          {products.map((product) => <option key={product.value} value={product.value}>{product.label}</option>)}
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="quote-quantity">{copy.fields.quantity}</label>
        <input id="quote-quantity" name="quantity" type="number" inputMode="numeric" min={1} step={1} />
      </div>
      <div className="form-field">
        <label htmlFor="quote-date">{copy.fields.date}</label>
        <input id="quote-date" name="date" type="date" />
      </div>
      <div className="form-field min-[420px]:col-span-2">
        <label htmlFor="quote-message">{copy.fields.message}</label>
        <textarea id="quote-message" name="message" rows={3} maxLength={2000} placeholder={copy.messagePlaceholder} />
      </div>
      <button type="submit" className="button button-primary mt-1 w-full min-[420px]:col-span-2">{copy.submit}</button>
      <p className="text-center text-[11px] leading-relaxed text-muted min-[420px]:col-span-2 md:text-left">{copy.explanation}</p>
      <div role="status" aria-live="polite" aria-atomic="true" className="empty:hidden min-[420px]:col-span-2">
        {status === "ready" && (
          <p className="rounded-md border border-sage/25 bg-mist px-4 py-3 text-sm leading-relaxed text-ink">
            {copy.ready}{" "}
            <a href={preparedUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand underline underline-offset-4">{copy.fallback}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
