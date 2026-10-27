import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Papelê | Sua ideia, em cada detalhe",
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: "Papelê | Sua ideia, em cada detalhe",
    description: site.description,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        {children}
      </body>
    </html>
  );
}
