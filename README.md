# Câmara Municipal de Ipiranga do Piauí

## 📌 Sobre o projeto

Este projeto foi desenvolvido como parte de um trabalho acadêmico da disciplina de **Programação para a Web 1**, tendo como tema uma Câmara de Vereadores.

A proposta consiste no desenvolvimento de uma interface web institucional para representar, de forma simples e organizada, um portal da **Câmara Municipal de Ipiranga do Piauí – PI**.

O projeto foi desenvolvido utilizando **HTML, CSS e JavaScript**, com foco na organização das informações, acessibilidade, responsividade, facilidade de navegação e interatividade.

A página apresenta informações institucionais, vereadores, sessões legislativas, projetos e leis, transparência e um espaço de contato com a Câmara. Além disso, foram implementadas funcionalidades dinâmicas com JavaScript para melhorar a experiência de navegação e demonstrar a manipulação do DOM por meio de eventos.

> **Observação:** o projeto possui caráter acadêmico e apresenta uma interface demonstrativa para fins de desenvolvimento e estudo de programação web. As informações apresentadas e o formulário de contato não representam, necessariamente, dados oficiais atualizados ou um serviço de comunicação efetivamente integrado à Câmara.

---

## 🎯 Objetivo

O principal objetivo do projeto é desenvolver uma página web institucional que permita ao usuário encontrar de forma simples informações relacionadas ao Poder Legislativo Municipal.

A interface foi planejada para:

- Apresentar informações sobre a Câmara Municipal;
- Facilitar a navegação entre as diferentes áreas da página;
- Apresentar os vereadores em uma seção própria;
- Permitir a pesquisa de vereadores por nome ou partido;
- Disponibilizar uma área com informações sobre sessões legislativas;
- Organizar links para projetos, leis e documentos;
- Disponibilizar uma área de transparência;
- Oferecer um formulário de contato com validação dos campos;
- Exibir mensagens de retorno ao usuário;
- Destacar a seção selecionada no menu de navegação;
- Disponibilizar um botão para retornar ao topo da página;
- Utilizar recursos de acessibilidade;
- Adaptar a interface para diferentes tamanhos de tela;
- Aplicar conceitos fundamentais de JavaScript, incluindo funções, objetos, arrays, eventos e manipulação do DOM.
- Utilizar o localStorage para salvar e recuperar dados de contato;
- Utilizar o sessionStorage para manter a pesquisa de vereadores durante a sessão da aba;
- Utilizar cookies para registrar a preferência do usuário sobre o uso de cookies;
- Permitir a consulta do estado dos dados armazenados e a remoção desses dados pelo usuário.
---

## 💻 Tecnologias utilizadas

O projeto foi desenvolvido utilizando tecnologias fundamentais para o desenvolvimento web.

### HTML5

Utilizado para estruturar o conteúdo da página e organizar suas diferentes seções.

Foram utilizados elementos semânticos como:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<form>`
- `<footer>`
- `<table>`

Também foram utilizados formulários com campos identificados por `label`, atributos como `required` e elementos de acessibilidade, como o link para pular diretamente ao conteúdo principal.

A utilização desses recursos contribui para a organização do código, a acessibilidade e a compreensão da estrutura da página.

### CSS3

Utilizado para a estilização e organização visual da interface.

Entre os recursos utilizados, destacam-se:

- Definição de cores, fontes e espaçamentos;
- Organização dos elementos com CSS Grid e Flexbox;
- Criação e estilização dos cartões de vereadores e conteúdos institucionais;
- Aplicação de bordas, sombras e efeitos visuais;
- Estilização de botões, links, tabelas e formulários;
- Definição de estados de foco para navegação por teclado;
- Utilização de media queries para responsividade;
- Adaptação do layout para tablets e celulares;
- Aplicação de recursos de acessibilidade, como a redução de movimentos quando essa preferência está configurada no dispositivo.

### JavaScript

Utilizado para adicionar interatividade à página e permitir que determinados conteúdos e elementos sejam atualizados dinamicamente.

As funcionalidades foram implementadas por meio de funções, objetos, arrays, manipulação do DOM e eventos.

Entre os recursos desenvolvidos, destacam-se:

**1. Geração dinâmica dos vereadores**

Os dados dos vereadores foram organizados em um array de objetos contendo nome, partido e iniciais. A partir dessas informações, o JavaScript cria os cartões e os adiciona à página utilizando métodos de manipulação do DOM.

**2. Pesquisa de vereadores**

Foi implementado um campo de busca que permite localizar vereadores pelo nome ou partido. A pesquisa é realizada conforme o usuário digita, utilizando o evento `input` e o método `filter()` para selecionar os resultados correspondentes.

**3. Geração dinâmica da tabela de sessões**

As informações das sessões foram organizadas em um array de objetos. Uma função percorre os dados e cria automaticamente as linhas e células da tabela, utilizando métodos como `forEach()`, `createElement()` e `appendChild()`.

**4. Interação com o menu de navegação**

Foi implementado um comportamento que destaca visualmente o link correspondente à seção visualizada. Para isso, são utilizados eventos, verificação da posição das seções na tela e manipulação de classes CSS.

**5. Botão para retornar ao topo**

Foi adicionado um botão que aparece quando o usuário rola a página para baixo. O evento `scroll` controla sua visibilidade, enquanto o evento `click` permite retornar ao início da página.

**6. Validação do formulário de contato**

O formulário verifica o preenchimento dos campos obrigatórios e apresenta mensagens de retorno ao usuário. O evento `submit` é utilizado para controlar o envio demonstrativo sem recarregar a página. Os dados preenchidos são organizados em um objeto JavaScript e apresentados no console para fins de demonstração.

O formulário não possui integração com servidor ou serviço externo, portanto, as mensagens não são efetivamente encaminhadas à Câmara Municipal.

**7. Armazenamento de dados com localStorage**

Foi utilizado o `localStorage` para armazenar o nome e o e-mail preenchidos no formulário de contato. Dessa forma, os dados podem ser recuperados quando o usuário retorna à página, mesmo após atualizar ou fechar e abrir novamente o navegador. Os dados permanecem armazenados até serem removidos.

**8. Armazenamento de dados com sessionStorage**

O `sessionStorage` foi utilizado para armazenar o termo digitado no campo de pesquisa de vereadores. Assim, a pesquisa pode ser recuperada durante a sessão da aba do navegador, inclusive após a atualização da página.

**9. Utilização de cookies**

Foram implementados cookies para registrar a preferência do usuário em relação ao uso de cookies no portal. Os botões "Aceitar" e "Recusar" permitem registrar a escolha, que possui validade de 30 dias. A preferência armazenada pode ser recuperada para atualizar a informação apresentada na interface.

**10. Gerenciamento dos dados armazenados**

Foi adicionada uma seção específica para apresentar os recursos de armazenamento utilizados. A interface exibe informações sobre o estado dos dados e disponibiliza o botão "Limpar dados salvos", que remove os dados de contato do `localStorage`, a pesquisa do `sessionStorage` e a preferência registrada no cookie.

---

## 📂 Estrutura do projeto

A estrutura do projeto é organizada da seguinte forma:

```text
Trabalho-Pweb-Camara-de-Vereadores/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### Descrição dos arquivos

- **index.html:** contém a estrutura da página, as seções institucionais, os links de navegação, a tabela de sessões, o formulário de contato e os elementos utilizados pelas funcionalidades dinâmicas.
- **style.css:** contém as regras de estilização, os layouts, as cores, os efeitos visuais e as configurações de responsividade e acessibilidade.
- **script.js:** contém os arrays e objetos de dados, as funções de geração de conteúdo, os eventos e as funcionalidades interativas da página.
- **README.md:** apresenta a documentação do projeto, incluindo sua finalidade, tecnologias, funcionalidades e estrutura.

---

## 🧩 Funcionalidades da página

### 1. Cabeçalho e navegação

O cabeçalho apresenta a identificação institucional da Câmara Municipal de Ipiranga do Piauí e um menu com links para as principais seções.

A navegação utiliza âncoras HTML para permitir o acesso direto às áreas da página. Com JavaScript, o menu também recebe um destaque visual conforme a seção acessada.

### 2. Seção inicial

Apresenta uma introdução ao portal e botões de acesso rápido para as sessões legislativas e a lista de vereadores.

Também disponibiliza links para transparência, leis e contato.

### 3. Área institucional

Apresenta cartões com informações sobre o processo legislativo, as sessões e a participação popular, facilitando o acesso às diferentes áreas do portal.

### 4. Vereadores

Apresenta os vereadores em cartões com suas iniciais, nomes e partidos.

Os cartões são gerados dinamicamente a partir dos dados armazenados no JavaScript. A seção também possui um campo de pesquisa que filtra os resultados conforme o nome ou partido informado.

### 5. Sessões legislativas

Apresenta uma tabela com informações sobre data, horário, tipo de sessão e local de realização.

As linhas da tabela são criadas automaticamente a partir de um array de objetos, demonstrando a utilização de estruturas de dados e manipulação do DOM.

### 6. Projetos, leis e documentos

Disponibiliza links para consulta de legislação municipal, projetos de lei, atas das sessões e regimento interno.

### 7. Transparência

Apresenta links para áreas relacionadas à transparência pública, licitações e contratos, acesso à informação e dados abertos.

### 8. Formulário de contato

Permite preencher nome, e-mail, assunto e mensagem.

O JavaScript verifica os campos obrigatórios e apresenta mensagens de retorno. O comportamento implementado é demonstrativo e não realiza o encaminhamento real das mensagens.

### 9. Botão de retorno ao topo

Permite voltar rapidamente ao início da página após a rolagem, oferecendo uma alternativa de navegação para o usuário.

### 10. Rodapé

Apresenta a identificação da Câmara Municipal, links rápidos para as seções e informações sobre a localidade.

### 11. Armazenamento de dados no navegador

Apresenta uma seção informativa sobre as três tecnologias de armazenamento utilizadas no projeto: `localStorage`, `sessionStorage` e cookies. Cada cartão explica a finalidade do recurso e apresenta o estado dos dados armazenados.

### 12. Preferências de cookies

Disponibiliza os botões "Aceitar" e "Recusar", permitindo registrar a preferência do usuário. A escolha é armazenada em um cookie com validade de 30 dias e pode ser recuperada durante o carregamento da página.

### 13. Limpeza dos dados armazenados

Permite remover os dados de contato salvos, o termo da pesquisa de vereadores e a preferência registrada no cookie. Após a operação, os textos de status são atualizados para informar o resultado da limpeza.
---

## ♿ Acessibilidade

O projeto utiliza recursos que buscam facilitar o acesso ao conteúdo por diferentes usuários.

Entre eles estão:

- Elementos HTML semânticos;
- Link para pular diretamente ao conteúdo principal;
- Rótulos associados aos campos do formulário;
- Atributos `aria-label` e `aria-live` em elementos específicos;
- Indicadores de foco visíveis para navegação por teclado;
- Contraste visual entre textos e fundos;
- Tabelas com cabeçalhos identificados;
- Layout responsivo;
- Respeito à preferência do usuário por redução de movimento.

Esses recursos contribuem para tornar a navegação mais clara e acessível.

---

## 📱 Responsividade

O layout foi desenvolvido para se adaptar a diferentes tamanhos de tela.

Foram utilizadas media queries para modificar a organização dos elementos em dispositivos menores.

Em telas mais largas, os conteúdos são distribuídos em colunas. Em tablets e celulares, os cartões, as áreas institucionais, os documentos e o rodapé passam a utilizar menos colunas, facilitando a leitura e a navegação.

A tabela de sessões também possui um contêiner com rolagem horizontal para evitar que seu conteúdo prejudique a visualização em telas estreitas.

---

## ⚙️ Conceitos de programação aplicados

O desenvolvimento das funcionalidades dinâmicas permitiu aplicar diferentes conceitos de JavaScript:

| Conceito | Aplicação no projeto |
|---|---|
| Variáveis e constantes | Armazenamento de dados e referências aos elementos HTML. |
| Arrays | Organização dos dados dos vereadores e das sessões. |
| Objetos | Representação dos dados por meio de propriedades. |
| Funções | Organização das tarefas de geração e atualização dos conteúdos. |
| Manipulação do DOM | Criação, seleção, alteração e inserção de elementos HTML. |
| Eventos | Resposta às ações de digitação, clique, envio de formulário e rolagem. |
| `forEach()` | Percorrer os dados para criar os cartões e as linhas da tabela. |
| `filter()` | Selecionar os vereadores que correspondem à pesquisa. |
| `createElement()` | Criar elementos HTML dinamicamente. |
| `appendChild()` | Inserir elementos criados na estrutura da página. |
| `classList` | Adicionar e remover classes CSS para controlar estados visuais. |
| Estruturas condicionais | Verificar resultados de pesquisa e campos do formulário. |
| localStorage | Armazenamento persistente dos dados de contato no navegador. |
| sessionStorage | Armazenamento do termo de pesquisa durante a sessão da aba. |
| Cookies | Registro e recuperação da preferência do usuário sobre cookies. |
| encodeURIComponent() | Codificação do valor armazenado no cookie. |
| document.cookie | Criação, leitura e remoção de cookies por JavaScript. |
| Eventos de clique | Registro das preferências e limpeza dos dados armazenados. |

Esses conceitos demonstram como o JavaScript pode complementar o HTML e o CSS, permitindo que a interface responda às ações do usuário e atualize seus elementos dinamicamente.

---

## ▶️ Como executar o projeto

Para visualizar a página, siga os passos:

1. Faça o download ou clone o repositório.
2. Abra a pasta do projeto.
3. Verifique se os arquivos `index.html`, `style.css` e `script.js` estão no mesmo diretório.
4. Abra o arquivo `index.html` em um navegador.
5. Utilize o menu para navegar pelas seções e teste as funcionalidades interativas.

Não é necessário instalar dependências ou configurar um servidor para executar a versão demonstrativa atual.

---

## 📌 Considerações finais

O projeto permitiu desenvolver uma interface institucional utilizando HTML5 e CSS3, além de ampliar suas funcionalidades por meio do JavaScript.

A implementação de arrays, objetos, funções, eventos e manipulação do DOM tornou a página mais interativa, permitindo a geração dinâmica dos vereadores e das sessões, a pesquisa por nome ou partido, o destaque do menu de navegação, o retorno ao topo e a validação demonstrativa do formulário.

Além dos aspectos funcionais, foram considerados a organização do conteúdo, a acessibilidade e a responsividade, buscando oferecer uma experiência de navegação clara em diferentes dispositivos.

Também foram aplicados mecanismos de armazenamento no navegador, por meio do localStorage, sessionStorage e cookies, permitindo demonstrar a persistência de dados de contato, a manutenção temporária de pesquisas e o registro de preferências do usuário. A seção de armazenamento e o recurso de limpeza complementam as funcionalidades interativas do portal.

Por se tratar de um trabalho acadêmico, o projeto demonstra conceitos fundamentais de desenvolvimento web e pode ser ampliado futuramente com integração a banco de dados, atualização automática das informações legislativas e envio real de mensagens por meio de um servidor.

---

**Projeto acadêmico — Programação para a Web 1**

Câmara Municipal de Ipiranga do Piauí — PI

Ano: 2026
