# Veritas Exacta — Landing Page

Landing page moderna e focada em conversão via WhatsApp para a **Veritas Exacta Contabilidade**, construída com Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

---

## Pré-requisitos

- **Node.js 18+** — [nodejs.org/pt-br](https://nodejs.org/pt-br)
- **npm** (incluído com o Node.js)

---

## Início rápido

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (hot reload) |
| `npm run build` | Build de produção |
| `npm run start` | Inicia o servidor em modo produção |
| `npm run lint` | Verifica erros de lint |

---

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 14.x | Framework (App Router) |
| React | 18.x | UI library |
| TypeScript | 5.x | Tipagem estática |
| Tailwind CSS | 3.x | Estilização utility-first |
| Framer Motion | 11.x | Animações |
| Lucide React | 0.400+ | Ícones |
| Radix UI Accordion | 1.x | FAQ accordion |

---

## Estrutura do projeto

```
veritas-lp/
├── app/
│   ├── globals.css          # CSS base e design tokens
│   ├── layout.tsx           # Layout raiz (fonts, meta, schema.org)
│   ├── page.tsx             # Composição das seções
│   ├── sitemap.ts           # Sitemap dinâmico
│   └── robots.ts            # Robots.txt
├── components/
│   ├── sections/            # Seções da landing page
│   │   ├── Hero.tsx
│   │   ├── SocialProof.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Differentials.tsx
│   │   ├── CtaBanner.tsx
│   │   ├── Faq.tsx
│   │   └── Contact.tsx
│   ├── shared/              # Componentes globais
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFloat.tsx
│   └── ui/
│       └── accordion.tsx    # Accordion baseado no Radix UI
├── lib/
│   ├── constants.ts         # WhatsApp, telefone, e-mail, endereço
│   ├── motion.ts            # Variantes Framer Motion reutilizáveis
│   └── utils.ts             # cn() helper
├── public/                  # Favicons, og-image.jpg
├── tailwind.config.ts       # Design tokens (cores, tipografia)
└── BRAND_NOTES.md           # Pesquisa de marca
```

---

## Personalização rápida

### Atualizar contatos

Edite [`lib/constants.ts`](lib/constants.ts):

```ts
export const WA_NUMBER_RAW = '5511999325877'  // número sem + ou espaços
export const PHONE = '(11) 2059-3032'
export const EMAIL = 'contato@veritasexacta.com.br'
export const ADDRESS = 'R. Tuiuti, 1161 — Tatuapé, São Paulo — SP'
```

### Adicionar logo

Substitua o logo em texto no [`components/shared/Header.tsx`](components/shared/Header.tsx) pela tag `<Image>` com o arquivo SVG/PNG colocado em `public/`.

### Adicionar OG Image

Coloque o arquivo `og-image.jpg` (1200×630px) em `public/`. A meta tag já está configurada no layout.

### Cores e tokens

Todos os tokens de cor estão em [`tailwind.config.ts`](tailwind.config.ts). As cores principais são:

```
ink:   #0D1117   (fundo escuro principal)
navy:  #0F1F3D   (azul-marinho profundo)
gold:  #C9A84C   (destaque dourado)
cream: #F8F6F1   (branco quente)
```

---

## Deploy na Vercel

1. Faça push do código para GitHub
2. Importe o repositório em [vercel.com](https://vercel.com)
3. Selecione o diretório `veritas-lp` como root (ou ajuste nas configurações)
4. Deploy automático a cada push na branch principal

> Não são necessárias variáveis de ambiente — todos os dados de contato estão em `lib/constants.ts`.

---

## SEO

- Meta tags completas em `app/layout.tsx`
- OpenGraph + Twitter Card configurados
- Schema.org JSON-LD (`AccountingService`) injetado no `<head>`
- `sitemap.xml` gerado dinamicamente em `/sitemap`
- `robots.txt` em `/robots`

---

## Dados ausentes (a preencher)

Ver [`BRAND_NOTES.md`](../BRAND_NOTES.md) para lista completa. Os principais:

- **CNPJ** — adicionar no Footer (`components/shared/Footer.tsx`)
- **Logo vetorial** — substituir texto-logo por SVG
- **Foto da equipe** — para a seção Sobre
- **OG Image** — `public/og-image.jpg`
- **Horário de atendimento** — adicionar no Footer e Contato

---

## Acessibilidade

- HTML semântico (header, main, section, nav, article, address, footer)
- `aria-label` em todos os elementos interativos e seções
- `:focus-visible` customizado (outline dourado)
- Navegação por teclado funcional
- Alt text descritivo em todas as imagens
- Contraste verificado: texto principal ≥ 4.5:1
