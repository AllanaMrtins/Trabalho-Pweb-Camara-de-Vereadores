# Tutorial de execução do projeto

## Câmara Municipal de Ipiranga do Piauí — Trabalho 3 — Parcial 1

Este tutorial explica como instalar os requisitos, abrir e executar o projeto no Windows utilizando o Visual Studio Code.

## 1. Requisitos

É necessário ter o Windows 10 ou Windows 11, o Node.js instalado e o Visual Studio Code instalado.

O Node.js é responsável por executar o npm, que instala as bibliotecas e inicia o projeto React.

## 2. Instalar o Node.js pelo terminal

Abra o PowerShell. Se possível, execute-o como administrador e rode:

```powershell
winget install --id OpenJS.NodeJS.LTS --exact
```

Se aparecer uma confirmação, aceite a instalação. Caso seja informado que o Node.js já está instalado, não há problema.

Depois da instalação, feche todas as janelas do PowerShell e abra uma nova. Isso permite que o Windows atualize o PATH dos comandos.

Verifique se a instalação funcionou:

```powershell
node --version
npm --version
```

Devem aparecer as versões instaladas, por exemplo:

```text
v26.13.1
11.20.0
```

As versões podem ser diferentes. O importante é que os dois comandos funcionem.

## 3. Baixar ou receber o projeto

Extraia o arquivo do projeto recebido pelo grupo. A pasta correta é aquela que contém diretamente o arquivo `package.json`.

A estrutura deve ser semelhante a esta:

```text
Trabalho-Pweb-Camara-de-Vereadores/
├── package.json
├── package-lock.json
├── index.html
├── README.md
├── public/
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── style.css
    ├── app.css
    └── data/
        └── conteudo.js
```

## 4. Abrir o projeto no VS Code

Abra o PowerShell e entre na pasta do projeto. Exemplo:

```powershell
cd "C:\Users\SEU_NOME\Music\Trabalho-Pweb-Camara-de-Vereadores"
```

Substitua `SEU_NOME` pelo nome do usuário do computador.

Para abrir a pasta diretamente no VS Code, execute:

```powershell
code .
```

Se o comando `code .` não funcionar, abra o Visual Studio Code pelo menu Iniciar e escolha:

```text
File > Open Folder...
```

Depois selecione a pasta que contém o arquivo `package.json`.

## 5. Abrir o terminal do VS Code

No VS Code, abra o terminal integrado pelo menu:

```text
Terminal > New Terminal
```

O caminho exibido no terminal deve terminar com o nome da pasta do projeto, por exemplo:

```text
PS C:\Users\SEU_NOME\Music\Trabalho-Pweb-Camara-de-Vereadores>
```

Confira se o arquivo `package.json` está no local correto:

```powershell
dir
```

Se o arquivo aparecer na lista, a pasta está correta.

## 6. Instalar as dependências

Na primeira execução, ou depois de baixar o projeto em outro computador, execute:

```powershell
npm install
```

Esse comando instala React, Vite, React Router, Bootstrap, ESLint e Prettier.

A instalação pode demorar alguns minutos. É necessário estar conectado à internet.

## 7. Iniciar o projeto

Depois que o `npm install` terminar, execute:

```powershell
npm run dev
```

O terminal exibirá um endereço parecido com:

```text
Local: http://localhost:5173/
```

Abra esse endereço no navegador. Se ele não abrir automaticamente, copie e cole na barra de endereço.

## 8. Trabalhar no projeto

Com o servidor em execução, edite os arquivos dentro da pasta `src`.

Os principais arquivos são:

- `src/App.jsx`: componentes, páginas e rotas da aplicação;
- `src/main.jsx`: inicialização do React;
- `src/style.css`: estilos principais;
- `src/app.css`: ajustes complementares;
- `src/data/conteudo.js`: dados dos vereadores e sessões.

Ao salvar um arquivo, o Vite atualiza a página automaticamente. Normalmente não é necessário reiniciar o servidor.

## 9. Parar o projeto

Para encerrar o servidor, volte ao terminal onde o projeto está rodando e pressione:

```text
Ctrl + C
```

## 10. Comandos de validação

Para verificar se existem problemas no código, execute:

```powershell
npm run lint
```

Para gerar a versão de produção, execute:

```powershell
npm run build
```

Se os comandos terminarem sem mensagens de erro, o projeto está funcionando corretamente.

Para visualizar a versão de produção localmente:

```powershell
npm run preview
```

## 11. Problemas comuns

### O comando `node` ou `npm` não é reconhecido

Feche o PowerShell e abra uma nova janela. Se continuar acontecendo, verifique se o Node.js está instalado:

```powershell
Get-ChildItem "C:\Program Files\nodejs"
```

A pasta deve conter `node.exe`, `npm.cmd` e `npx.cmd`.

Como solução temporária, execute:

```powershell
$env:Path += ";C:\Program Files\nodejs"
```

Depois teste novamente:

```powershell
node --version
npm --version
```

### O comando `npm install` informa que não encontrou o package.json

Você está na pasta errada. Localize o arquivo com:

```powershell
Get-ChildItem -Recurse -Filter package.json
```

Entre na pasta que contém o arquivo e execute novamente:

```powershell
npm install
```

### A porta 5173 já está em uso

O Vite poderá escolher outra porta automaticamente, como `5174`. Use o endereço exibido no terminal.

Também é possível encerrar o processo anterior pressionando `Ctrl + C` no terminal em que ele está rodando.

### A página não atualiza

Confira se o terminal do Vite ainda está aberto e sem mensagens de erro. Se necessário, pare o servidor com `Ctrl + C` e execute novamente:

```powershell
npm run dev
```

### O navegador apresenta uma página em branco

Verifique as mensagens do terminal e do console do navegador. Em seguida, confirme que você está executando o projeto na pasta correta e que o comando foi iniciado com:

```powershell
npm run dev
```

## 12. Resumo rápido

Depois que o Node.js estiver instalado, a execução normal será:

```powershell
cd "C:\caminho\do\projeto"
npm install
npm run dev
```

Depois, abra o endereço exibido pelo Vite, normalmente:

```text
http://localhost:5173/
```
