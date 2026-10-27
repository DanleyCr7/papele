import { QuoteForm } from "@/components/quote-form";
import { WhatsappLink } from "@/components/whatsapp-link";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contact-heading" className="page-container">
      <div className="grid gap-7 pb-9 pt-2 md:grid-cols-[0.8fr_1.2fr] md:gap-10 md:border-t md:border-line md:py-9 lg:gap-16 lg:py-10">
        <div className="text-center md:border-r md:border-line/60 md:pr-7 md:text-left lg:pr-12">
          <h2 id="contact-heading" className="section-heading md:mt-3">{site.contact.title}</h2>
          <p className="mx-auto mt-3 max-w-[320px] text-pretty text-[15px] leading-[1.65] text-muted md:mx-0 md:mt-4 md:text-[16px] md:leading-[1.5] lg:text-[18px]">{site.contact.description}</p>
          <div className="mt-5 md:mt-14 lg:mt-16">
            <p className="mb-2 text-[12px] text-muted md:mb-3 md:text-[14px]">{site.contact.conversation}</p>
            <WhatsappLink message={site.messages.contact} className="w-full sm:w-auto md:px-3! md:text-[13px]! lg:px-[25px]! lg:text-[14px]!">{site.actions.conversation}</WhatsappLink>
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
