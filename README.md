# Minha Aplicação de Filmes

Minha Aplicação de Filmes é um projeto criado em React que permite aos usuários cadastrar, alterar, excluir e visualizar filmes de uma base de dados utilizando Axios para fazer requisições HTTP a uma API mockada.

## Funcionalidades

- **Cadastrar Filme:** Permite adicionar um novo filme à base de dados.
- **Visualizar Filme:** Exibe os detalhes de um filme específico consultado por ID.
- **Alterar Filme:** Permite editar as informações de um filme existente.
- **Excluir Filme:** Remove um filme da base de dados.
- **Navegação:** Implementada com `React Router DOM` para navegar entre as páginas da aplicação.

## Tecnologias Utilizadas

- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Axios**: Biblioteca usada para fazer requisições HTTP (GET, POST, PUT, DELETE).
- **React Router DOM**: Biblioteca para implementar a navegação entre as páginas.
- **CSS Modules**: Para estilização dos componentes, mantendo um escopo de CSS isolado para cada componente.

## Estrutura do Projeto

```bash
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── pages
│   │   ├── AdicionarFilme.js
│   │   ├── AlterarFilme.js
│   │   ├── ApagarFilme.js
│   │   ├── VerFilme.js
│   │   └── Home.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── README.md
├── package.json
└── ...
