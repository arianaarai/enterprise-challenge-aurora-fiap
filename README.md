# Aurora Landing Page — People First Cup · FIAP

Landing page B2B de conversão para a [Aurora](https://aurorapro.com.br) — plataforma de HR Tech / People Analytics que ajuda empresas a tomar decisões sobre pessoas com base em dados.

**Protagonize o fenômeno.**

## Links

- **Repositório:** https://github.com/arianaarai/enterprise-challenge-aurora-fiap
- **Demo online:** _(adicionar URL Vercel após deploy)_

## Sobre o projeto

Página única, responsiva e acessível, voltada a líderes de RH, CEOs e gestores. O objetivo é apresentar a solução Aurora e capturar leads via formulário de demonstração.

**Entregas do desafio:**
- Landing page publicada (HTML, CSS e JavaScript)
- PDF com justificativas de design e acessibilidade
- Vídeo-pitch de 2–3 minutos

## Estrutura do repositório

```
├── index.html      # Estrutura e conteúdo da página
├── style.css       # Identidade visual e layout responsivo
├── js/main.js      # Interatividade
├── assets/
└── README.md
```

## Seções da página

| Seção | Descrição |
|-------|-----------|
| **Hero** | Proposta de valor + tabs por persona (RH, CEO, Gestor) |
| **Dores** | Problemas do cliente (dados espalhados, falta de direcionamento, turnover) |
| **Solução** | Como a Aurora organiza dados e gera insights |
| **Funcionalidades** | Dashboard, performance, engajamento, turnover, recomendações e IA Boreal |
| **ROI** | Calculadora de impacto estimado do turnover |
| **Contato** | Formulário de lead com validação |
| **FAQ** | Perguntas frequentes em accordion |

## Funcionalidades interativas

- **Tabs do hero** — alterna conteúdo por perfil (RH / CEO / Gestor), com suporte a teclado
- **Calculadora de turnover** — estima custo anual com base em colaboradores, salário médio e taxa de turnover
- **FAQ accordion** — expande e recolhe respostas com `aria-expanded`
- **Formulário de lead** — validação de campos obrigatórios, e-mail e consentimento LGPD
- **Menu mobile** — navegação hambúrguer em telas pequenas
- **Scroll suave** — âncoras internas com rolagem animada
- **Cookies** — banner de consentimento com preferência salva em `localStorage`

## Stack

- HTML5 semântico
- CSS3 (Grid, Flexbox, variáveis, media queries)
- JavaScript vanilla (sem frameworks)
- Fonte [Outfit](https://fonts.google.com/specimen/Outfit) via Google Fonts

## Rodar localmente

```bash
python3 -m http.server 8080
```

Acesse http://localhost:8080

## Deploy

1. Importar o repositório no [Vercel](https://vercel.com)
2. Framework: **Other**
3. Root: `/`

## Equipe

| Nome | RM |
|------|-----|
| Ariana Cristina Arai Jesus | 570051 |
| Gabriela di Sousa Rodrigues | 570213 |
| Hugo D'Angelo | 571523 |
| Larissa Sayuri Ribeiro Oyama | 573300 |
