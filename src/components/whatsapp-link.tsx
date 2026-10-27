import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { whatsappUrl } from "@/lib/site";

type Props = {
  children: React.ReactNode;
  message: string;
  className?: string;
};

export function WhatsappLink({ children, message, className = "" }: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`button button-secondary ${className}`}
      aria-label={`${typeof children === "string" ? children : "Conversar no WhatsApp"} (abre em nova aba)`}
    >
      <WhatsappLogoIcon size={22} weight="regular" aria-hidden="true" className="shrink-0" />
      {children}
    </a>
  );
}
