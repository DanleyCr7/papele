# Assets da Papelê

Imagens raster produzidas com a ferramenta integrada ImageGen. A referência visual é o screenshot fornecido pelo usuário; os produtos são representações geradas, não fotografias de um catálogo real. A marca é provisória.

Os arquivos selecionados ficam em `public/images/`. As primeiras versões foram preservadas como alternativas; a interface utiliza as versões `-v2`, com a identidade padronizada.

| Arquivo final | Uso | Prompt de geração |
| --- | --- | --- |
| `logo.png` | Cabeçalho, rodapé e referência da marca | Logo horizontal transparente, folha com canto superior direito dobrado em traço marrom quente e palavra exata “Papelê” em caligrafia, sem slogan, sombras ou fundo. |
| `hero-v2.png` | Hero | Fotografia quadrada de produto em estúdio branco: sacola sálvia, presente creme com laço verde, tag suspensa e topper “Parabéns”; papel texturizado, iluminação difusa e sombras suaves. |
| `celebrar-v2.png` | Card Para celebrar | Fotografia quadrada com bolo branco, topper “Parabéns”, caixas e saquinho creme com laços sálvia e bandeirolas suaves ao fundo. |
| `marca-v2.png` | Card Para sua marca | Fotografia quadrada com sacola sálvia, embalagem kraft, pilhas de cartões creme e adesivos, perspectiva de três quartos e iluminação suave. |
| `presentear-v2.png` | Card Para presentear | Fotografia quadrada de caixa creme aberta com rosas pêssego de um lado e chocolates marrons e verdes do outro, marca na tampa e fundo claro. |
| `empresas-v2.png` | Faixa para empresas | Fotografia horizontal 3:2 com sacola creme, caixa kraft, cartões, cartela de adesivos e pequeno ramo verde, fundo verde quase branco e sombras suaves. |
| `natal-v2.png` | Seção de Natal | Fotografia quadrada de kit em caixa creme aberta: caneca, chocolates com laço sálvia, cartão “Boas Festas”, pinheiro, pinha e palha kraft sobre fundo branco. |

## Refinamento comum

Cada fotografia recebeu uma edição por ImageGen usando a primeira versão como alvo e `logo.png` como referência: preservar cena, objetos, câmera e iluminação; aplicar a mesma folha com canto dobrado e wordmark caligráfico Papelê em marrom nas embalagens; manter os textos decorativos. Nas imagens com fitas ou sacola verde, aproximar a cor do verde sálvia claro do screenshot, reduzindo o tom oliva.

O logo tem transparência real. As fotos preservam fundos claros e sombras próprias. Não foram usados desenhos em CSS ou SVG para substituir as imagens.
