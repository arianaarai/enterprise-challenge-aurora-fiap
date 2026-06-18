# Aurora Landing Page — People First Cup · FIAP

Landing page B2B da [Aurora](https://aurorapro.com.br) — HR Tech / People Analytics.

## Links

- **Repositório:** https://github.com/arianaarai/enterprise-challenge-aurora-fiap
- **Demo online:** _(adicionar URL Vercel após deploy)_

## JavaScript — `js/main.js`

Interatividade da landing page (Ariana Cristina Arai Jesus · RM 570051):

- Tabs hero (RH / CEO / Gestor) — alterna `.hero-panel[data-persona]` (textos no HTML)
- Calculadora de turnover — `#calc-colaboradores`, `#calc-salario`, `#calc-turnover`, `#calc-btn`, `#calc-resultado`
- FAQ accordion — `.faq-question` / `.faq-answer`
- Validação do formulário de lead — `#lead-form`, `#form-success`
- Menu mobile (hambúrguer) — `#nav-toggle`, `#nav-menu`, `.nav-menu`
- Scroll suave em links âncora
- Banner de cookies — `#cookie-banner`, `#cookie-accept`, `#cookie-decline`

### Contrato HTML (Integrante 1 — Gabriela)

Tabs do hero exigem um bloco `.hero-panel[data-persona]` por persona (textos no HTML, não no JS). Exemplo:

```html
<div class="hero-tabs" role="tablist">...</div>
<div class="hero-panels">
  <div class="hero-panel" data-persona="rh" role="tabpanel">...</div>
  <div class="hero-panel" data-persona="ceo" role="tabpanel" hidden>...</div>
  <div class="hero-panel" data-persona="gestor" role="tabpanel" hidden>...</div>
</div>
```

Cada tab precisa de `data-persona` igual ao painel correspondente.

### Rodar localmente

```bash
python3 -m http.server 8080
```

Acesse http://localhost:8080

Teste o menu mobile com a janela ≤ 768px de largura.

## Deploy (Vercel)

1. Importar o repo no [Vercel](https://vercel.com)
2. Framework: **Other**
3. Root: `/`
4. Após o deploy, atualizar a URL em **Demo online** acima

## Equipe

| Nome | RM |
|------|-----|
| Ariana Cristina Arai Jesus | 570051 |
| Gabriela di Sousa Rodrigues | 570213 |
| Hugo D'Angelo | 571523 |
| Larissa Sayuri Ribeiro Oyama | 573300 |
