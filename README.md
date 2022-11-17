<h1 align="center">
     FimlsSA

</h1>

<h3 align="center">
    Streaming de animes
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/MiguelMarcola/project-filmsSA?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/MiguelMarcola/project-filmsSA">
  
  <a href="https://github.com/MiguelMarcola/project-filmsSA/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MiguelMarcola/project-filmsSA">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  
  <img alt="Feito pelo Miguel" src="https://img.shields.io/badge/feito%20por-Miguel-%237519C1">
  
 
</p>

<h4 align="center">
	🚧   Concluído 🚀 🚧
</h4>

## 💻 Sobre o projeto

FilmsSA - é uma aplicação desenvolvida em React.js com Vite e Typescript que consome uma api Nodejs construida com Nestjs, trata-se de uma página que lista os filmes da api, realiza uma listagem páginada de 10 em 10 e possui uma side bar que mostra os 3 filmes com as maiores notas, o usuários pode apertar o botão atualizar no medu para chamar a api para consultar se existem novos filmes para salvar na base, essa ação retorna uma mensagem de acordo com o resultado dessa requisição.

---

## ⚙️ Funcionalidades

- [x] Consulta 50 filmes, extrai as informações.
- [x] End-point de consulta com paginação de 10 em 10 a todos os filmes que estão no nosso banco de dado.
- [x] End-point de consulta dos 3 filmes com maior nota no banco de dado.
- [x] End-point que faz a consulta aos 50 filmes e atualiza nosso banco de dados.
- [x] Tela com a exibição dos filmes consultando de forma paginada ao back-end da aplicação.
- [x] Tela com a exibição dos 3 filmes com maior nota.
- [x] Botão de atualizar que acessará o end-point que faz a consulta aos 50 filmes e atualiza nosso banco de dados.
- [x] Testes unitários.
---

## 🎨 Layout

<p align="center">

  <img alt="Visual" title="#Visual" src="./layout1.png" width="800px" style="margin-top: 30px;">

</p>

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node](https://nodejs.org/), [Docker Desktop](https://docs.docker.com/desktop/). 
Além disto é bom ter um editor para trabalhar com o código como o [VSCode](https://code.visualstudio.com/).

#### 🎲 Clonando o repositório e instalando as dependências

```bash

# Clone este repositório
$ git clone https://github.com/MiguelMarcola/project-filmsSA.git

# Acesse a pasta do projeto no terminal/cmd
$ cd project-filmsSA

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000

```

#### 🎲 Rodando Back-end

```bash

# Clone este repositório
$ git clone https://github.com/MiguelMarcola/project-filmsSA.git

# Acesse a pasta do projeto no terminal/cmd
$ cd project-filmsSA

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000

```

Para o funcionamento de todas as funcionalidades do App será necessário criar um arquivo ".env.local" na raiz do projeto contendo as variáveis de ambiente locai.

```
STRIPE_API_KEY="Chave privada da API de teste do Stripe"
NEXT_PUBLIC_STRIPE_PUBLIC_KEY="Chave pública da API do Stripe"
STRIPE_WEBHOOK_SECRET="Chave dos webhooks do stripe"

STRIPE_SUCESS_URL=http://localhost:3000/posts
STRIPE_CANCEL_URL=http://localhost:3000/

GITHUB_CLIENT_ID="Chave pública do GitHub"
GITHUB_CLIENT_SECRET="Chave privada do GitHub"

NEXTAUTH_SECRET=pBlsP1KH4X
NEXTAUTH_URL=http://localhost:3000


FAUNADB_KEY="Chave privada do FaunaDB"


PRISMIC_ACESS_TOKEN="Token da API privada do Prismic"
PRISMIC_ENDPOINT="ENDPOINT do Prismic"
```

Para iniciar os webhooks do Stripe utilize no terminal o comando >>> ./stripe listen --forward-to localhost:3000/api/webhooks
## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Website**  ([Reactjs](https://reactjs.org/)  +  [TypeScript](https://www.typescriptlang.org/) + [Nextjs](https://nextjs.org/))

-   Sass
-   JAMStack
-   FaunaDB
-   Stripe
-   Prismic CMS

> Veja o arquivo  [package.json](https://github.com/MiguelMarcola/project-filmsSA/blob/main/package.json)

## 🦸 Autor

<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/95949825?s=400&u=71abea02fa5086704e648496f0de845501599ca0&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Miguel Marçola</b></sub></a> 🚀
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Miguel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/miguel-mar%C3%A7ola-28535a151/)](https://www.linkedin.com/in/miguel-mar%C3%A7ola-28535a151/) 
[![Gmail Badge](https://img.shields.io/badge/Miguel%20Mar%C3%A7ola-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:miguelmarcola@gmail.com)](miguelmarcola@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com muita dedicação por Miguel Marçola 👋🏽 [Entre em contato!](https://www.linkedin.com/in/miguel-mar%C3%A7ola-28535a151/)

---

