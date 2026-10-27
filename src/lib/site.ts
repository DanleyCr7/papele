import { assetPath } from "@/lib/assets";

export const navigation = [
  { label: "Criações", href: "#criacoes" },
  { label: "Para empresas", href: "#empresas" },
  { label: "Natal", href: "#natal" },
  { label: "Contato", href: "#contato" },
] as const;

export const products = [
  { value: "festas", label: "Festas e celebrações" },
  { value: "embalagens", label: "Sacolas e embalagens" },
  { value: "presentes", label: "Presentes personalizados" },
  { value: "empresas", label: "Papelaria para empresas" },
  { value: "natal", label: "Kits de Natal" },
  { value: "outros", label: "Outra ideia" },
] as const;

export type Product = (typeof products)[number]["value"];

export const categories = [
  { label: "Festas", href: "#criacoes", icon: "cake", color: "text-coral" },
  { label: "Embalagens", href: "#criacoes", icon: "bag", color: "text-sage" },
  { label: "Presentes", href: "#criacoes", icon: "gift", color: "text-gold" },
  { label: "Empresas", href: "#empresas", icon: "buildings", color: "text-brand" },
  { label: "Natal", href: "#natal", icon: "tree", color: "text-pine" },
] as const;

export const creations = [
  {
    title: "Para celebrar",
    description: "Topos de bolo, lembrancinhas e banners.",
    image: assetPath("/images/celebrar-v2.png"),
    alt: "Bolo com topo Parabéns e lembrancinhas em creme com laços verde sálvia.",
    product: "festas",
  },
  {
    title: "Para sua marca",
    description: "Sacolas, cartões de visita, etiquetas e adesivos.",
    image: assetPath("/images/marca-v2.png"),
    alt: "Sacola verde sálvia, cartões de visita e etiquetas personalizados da Papelê.",
    product: "empresas",
  },
  {
    title: "Para presentear",
    description: "Caixas de flores e chocolates.",
    image: assetPath("/images/presentear-v2.png"),
    alt: "Caixa de presente creme com rosas pêssego e chocolates artesanais.",
    product: "presentes",
  },
] as const satisfies readonly {
  title: string;
  description: string;
  image: string;
  alt: string;
  product: Product;
}[];

export const site = {
  name: "Papelê",
  description: "Papelaria personalizada para festas, presentes e empresas. Feitos para combinar com a sua ideia.",
  whatsapp: "5586995666594",
  messages: {
    general: "Olá, Papelê! Gostaria de conversar sobre uma ideia de personalizado.",
    contact: "Olá, Papelê! Quero contar a minha ideia e saber mais sobre os personalizados.",
  },
  actions: {
    quote: "Pedir orçamento",
    whatsapp: "WhatsApp",
    talk: "Falar no WhatsApp",
    conversation: "Conversar no WhatsApp",
  },
  categoriesHeading: "Personalizados para cada momento",
  creations: {
    title: "Para cada ideia, um personalizado.",
    description: "Conheça algumas possibilidades para criar com a Papelê.",
  },
  tagline: "Sua ideia em cada detalhe",
  hero: {
    eyebrow: "Papelaria personalizada",
    title: "Sua ideia,",
    emphasis: "em cada detalhe.",
    description: "Personalizados para festas, presentes e empresas.",
    supporting: "Feitos para combinar com a sua ideia.",
  },
  companies: {
    eyebrow: "Para empresas",
    title: "Sua marca presente em cada entrega.",
    description: "Sacolas, cartões, etiquetas e adesivos personalizados para acompanhar as encomendas recorrentes da sua empresa.",
    cta: "Orçamento para empresas",
  },
  christmas: {
    eyebrow: "Natal personalizado",
    title: "Um Natal com a sua identidade.",
    description: "Kits personalizados para presentear pessoas, equipes e clientes. Caixas, chocolates e detalhes que combinam com a sua ideia.",
    cta: "Quero um kit de Natal",
  },
  contact: {
    title: "Conte a sua ideia.",
    description: "Diga o que você quer personalizar. Vamos conversar sobre os detalhes do seu pedido.",
    conversation: "Prefere conversar?",
  },
  quote: {
    fields: {
      name: "Nome ou empresa",
      whatsapp: "WhatsApp",
      product: "Produto desejado",
      quantity: "Quantidade estimada",
      date: "Data desejada",
      message: "Mensagem",
    },
    productPlaceholder: "O que você quer personalizar?",
    messagePlaceholder: "Conte um pouco sobre a sua ideia",
    submit: "Solicitar orçamento",
    explanation: "Você será direcionado ao WhatsApp para concluir o envio do pedido.",
    ready: "Sua mensagem está pronta. Conclua o envio no WhatsApp. Se a conversa não abriu,",
    fallback: "abrir a conversa",
    greeting: "Olá, Papelê! Gostaria de solicitar um orçamento.",
  },
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
