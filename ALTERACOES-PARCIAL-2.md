# Alterações da Parcial 2

Para atualizar o projeto da Parcial 1, substitua ou adicione os arquivos abaixo.

## Arquivos modificados

- `src/App.jsx`: passa a carregar vereadores e sessões por Fetch API, com carregamento, erro e tentativa novamente.
- `src/app.css`: recebe os estilos das mensagens de erro e dos estados da comunicação assíncrona.
- `README.md`: atualizado com a documentação da Parcial 2, os endpoints e a nova estrutura.
- `changelog.txt`: registra a versão 3.0.0 — Trabalho 3 — Parcial 2.
- `PLANO-ENTREGAS.md`: indica o que foi concluído em cada parcial.

## Arquivos novos

- `src/services/api.js`: serviço reutilizável para requisições HTTP GET.
- `public/data/vereadores.json`: dados dos vereadores.
- `public/data/sessoes.json`: dados das sessões.

## Arquivo removido

- `src/data/conteudo.js`: os dados que estavam neste arquivo foram transferidos para os arquivos JSON.

## Como atualizar a cópia local

Copie os arquivos modificados e novos para a pasta correspondente do projeto. Remova `src/data/conteudo.js` se ele ainda existir. Não é necessário alterar `package.json`, `main.jsx`, `style.css` ou as configurações do Vite, ESLint e Prettier.

Depois, no terminal da pasta que contém `package.json`, execute:

```powershell
npm install
npm run lint
npm run build
npm run dev
```

No navegador, acesse a rota `/vereadores` para verificar o carregamento de `public/data/vereadores.json` e a rota `/sessoes` para verificar o carregamento de `public/data/sessoes.json`.
