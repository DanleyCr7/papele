# Papelê

Landing page de papelaria personalizada, implementada em Next.js (App Router), TypeScript e Tailwind CSS. Página única com vitrine de criações, empresas, Natal e orçamento pelo WhatsApp.

## Requisitos

- Node.js 20.9 ou superior.
- npm.

## Instalação e comandos

```sh
npm install
npm run lint
npm run typecheck
```

Depois de autorizar a inicialização local, execute `npm run dev` e abra o endereço informado pelo Next.js. `npm run build` e `npm start` estão disponíveis para compilação e execução de produção, também sujeitos à autorização prévia.

Não há scripts ou dependências de testes. Análise estática não comprova comportamento em execução.

## Conteúdo e contato

`src/lib/site.ts` centraliza o número comercial, as mensagens, os produtos e os textos principais. O formulário prepara uma mensagem e abre o WhatsApp; o visitante precisa concluir o envio no aplicativo. Não há API, banco de dados ou armazenamento local dos pedidos.

As imagens de produto e a marca provisória ficam em `public/images`. São assets raster gerados com ImageGen a partir da direção visual da referência fornecida. O logo é provisório e pode ser substituído por um arquivo oficial de mesmas proporções.

O catálogo de arquivos e prompts está em [docs/assets.md](docs/assets.md). O estado da revisão visual está em [design-qa.md](design-qa.md).

## Organização

- `src/app`: layout global, página inicial e estilos.
- `src/components`: seções da landing page, menu móvel e formulário.
- `src/lib/site.ts`: configuração tipada de conteúdo e contato.

A fonte Inter é distribuída localmente por Fontsource. Os ícones são da biblioteca Phosphor. Não é necessário configurar variáveis de ambiente para esta versão.
