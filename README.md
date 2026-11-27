# Câmara Municipal de Ipiranga do Piauí — Trabalho 3 — Parcial 2

Aplicação institucional acadêmica da disciplina Programação para a Web I. Esta entrega apresenta a segunda etapa da modernização do projeto original para uma **Single-Page Application (SPA)**.

## Tecnologias

- React: componentes e estado da interface.
- Vite: build tool e servidor de desenvolvimento.
- React Router: roteamento no cliente sem recarregamento completo.
- Bootstrap: grid e classes utilitárias.
- ESLint: análise estática do código.
- Prettier: formatação padronizada.

## Executar

É necessário ter Node.js 18 ou superior instalado.

```bash
npm install
npm run dev
```

Para validar a entrega:

```bash
npm run lint
npm run build
npm run preview
```

## Estrutura

```text
.
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── .prettierrc
├── public/
│   └── data/
│       ├── vereadores.json
│       └── sessoes.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── app.css
│   ├── style.css
│   └── services/api.js
├── PLANO-ENTREGAS.md
└── changelog.txt
```

## O que foi feito na Parcial 2

Nesta etapa, os dados de vereadores e sessões foram retirados do código JavaScript e armazenados em arquivos JSON dentro de `public/data`. A aplicação faz requisições assíncronas `GET` utilizando a Fetch API por meio do serviço `src/services/api.js`.

As telas de vereadores e sessões apresentam estado de carregamento, tratamento de erro HTTP e botão para tentar novamente. A busca de vereadores continua usando `sessionStorage`, os dados de contato continuam usando `localStorage` e a preferência de cookies pode ser aceita, recusada, consultada e removida.

A divisão das entregas está detalhada em `PLANO-ENTREGAS.md`.
