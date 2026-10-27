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

## GitHub Pages

O workflow `.github/workflows/pages.yml` prepara a publicação por GitHub Actions a cada push na `main`, com execução manual disponível em Actions. A origem do Pages deve ser configurada como **GitHub Actions** em **Settings → Pages**. Repositórios privados exigem um plano compatível com GitHub Pages.

O destino previsto é `https://danleycr7.github.io/papele/`. O build recebe `GITHUB_PAGES=true` para exportar arquivos estáticos para `out/`, e `NEXT_PUBLIC_BASE_PATH` com o subdiretório informado pelo Pages. O helper `src/lib/assets.ts` aplica esse prefixo às imagens, incluindo o logo. Os links por âncora e o orçamento pelo WhatsApp continuam locais ao documento ou externos, respectivamente.

No modo Pages, as imagens são servidas como arquivos estáticos, sem depender do otimizador de imagens do servidor Next.js. O desenvolvimento local continua na raiz, sem exigir essas variáveis. A publicação não requer API, banco de dados ou segredo adicional além do token temporário disponibilizado pelo GitHub Actions.

Compilações e a primeira execução do workflow dependem de autorização explícita, conforme as instruções de execução do projeto.
