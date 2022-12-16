## Projeto final {Reprograma} Todas em Tech Back-end

Center Kids é uma API com o objetivo de reunir produtos ou serviços ofertados famílias que queiram comprar, trocar ou desapegar de produtos infantis,  
além de dar a opção para que famílias emprendedoras também divulguem serviços ou produtos.


### Introdução e objetivo

Os bebês e as crianças crescem rápido, as roupas e acessórios muitas vezes tem um tempo de utilização curto. 
A ideia desse projeto surgiu por uma necessidade pessoal, e também com a convivência e diálogo com outras famílias.

Muitas vezes, um objeto que nunca foi usado ou que não serve mais para seu filho pode ser divulgado para que outros usuários tenham interesse. 
O usuário pode comprar e/ou vender produtos de categoria infantil.

Além de permitir que fornecedores de serviços infantis como: escolas, decoradores de festa, costureira, cuidadoras, confeiteira, transporte escolar entre outros.

A API é um Projeto do bootcamp Back-end da {Reprograma}, como forma de avaliação final, utilizando Javascript para criar um CRUD de busca, cadastro, 
atualização ou exclusão de usuários, produtos ou emprendedores Center Kids.Algumas funcionalidades passam por uma autenticação, gerando um token que permite
ou não o acesso de informações que estarão no sistema.

### Tecnologias e pacotes utilizados no projeto:
*[ JavaScript](https://www.javascript.com/)

*[ Git/Github](https://github.com/)

*[ Node.js](https://nodejs.org/en/)

*[ MongoDb](https://www.mongodb.com/)

*[ MongoDBatlas](https://www.mongodb.com/atlas/database)

*[ Insomnia](https://insomnia.rest/)

*[ Vscode](https://code.visualstudio.com/)

*[ Vercel](https://vercel.com/)

Pacotes Utilizados:

*[ Express](https://expressjs.com/pt-br/)

*[ Nodemon](https://nodemon.io/)

*[ dotenv](https://www.npmjs.com/package/dotenv)

*[ Mongoose](https://mongoosejs.com/)

*[ cors](https://www.npmjs.com/package/cors)

*[ jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

*[ bcrypt](https://www.npmjs.com/package/bcrypt)

### Arquitetura MVC

PROJETO-FINAL   |

```
   |-  📁 src
   |    |- 📁 config
   |         |- 📑 database.js
   |    |- 📁 controllers
   |         |- 📑 authController.js
   |         |- 📑 emprendoresController.js
   |         |- 📑 produtosController.js
   |         |- 📑 userController.js   |
   |
   |    |  - 📁 middlewares
   |         |- 📑 auth.js
   |
   |    |  - 📁 models
   |         |- 📑 empreendedoresSchema.js
   |         |- 📑 produtosSchema.js
   |         |- 📑 userSchema.js
   |
   |    |  - 📁 routes
   |         |- 📑 emprendedoresRoutes.js
   |         |- 📑 indexRoutes.js
   |         |- 📑 produtosRoutes.js
   |         |- 📑 userRoutes.js
   | 
   |    |- 📑 app.js   |
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js
   |- 📑 vercel.json


```
## Utilização da API
### 1º Passo - Clonar o respositório
Clone este projeto para a sua máquina local.

``` git clone https://github.com/Andressavilela/projeto-final-Andressa```

### 2º Passo - Instalar as dependências
Para instalar as dependências do projeto, digite o comando no terminal:

``` npm i ```
### 3º Passo - Configurar o ambiente
Para configurar o ambiente é necessário duplicar o arquivo .env.example e renomea-lo somente para .env.
Em seguida, altere as informações contidas no arquivo .env para as informações correspondentes a sua máquina e e inclua os valores para o DATABASE_URL com a URL do MongoDb e SECRET com o secret.

### 4º Passo - Executar a aplicação
Com a aplicação clonada e as dependências configuradas basta rodar a aplicação com o comando no terminal:

``` npm start ``` 

### Mapeamento das rotas

| <p align="center">Método HTTP </p>  |<p align="center"> Endpoint    </p>    | <p align="center">Usuário  </p>    |
| ------------------------ | ---------------------------- | ------------------------------------------ |
| <p align="center">POST </p>         | <p align="center">`/users/create`   </p>      | <p align="center">Cadastro de usuários  </p>          |
| <p align="center">POST  </p>        |<p align="center"> `/users/login`</p>         | <p align="center">Faz o login do usuário</p>          |
| <p align="center">GET  </p>        | <p align="center">`/users/all`</p>         | <p align="center">Lista todos os usuários</p>          |
| <p align="center">GET  </p>      | <p align="center">`/users/all`</p>     | <p align="center">Lista todos usuários por ID </p>  |
| <p align="center">DELETE  </p>     |<p align="center"> `/users/:id` </p>        | <p align="center">Deleta o usuário. </p>


#### Método HTTP	Endpoint	Produtos

| <p align="center">Método HTTP </p>  |<p align="center"> Endpoint    </p>    | <p align="center">Produtos  </p>    |
| ------------------------ | ---------------------------- | ------------------------------------------ |
| <p align="center">POST </p>         | <p align="center">`/produtos/cadastro` </p> |  <p align="center">Cria um perfil para cadastrar informações dos produtos  </p>
| <p align="center">GET  </p>        |<p align="center"> `/produtos/todos`</p>         | <p align="center">Lista todos os produtos disponíveis</p>          |
| <p align="center">GET  </p>        | <p align="center">`/produtos/todos/:id`</p>         | <p align="center">Lista todos os produtos por ID</p>  
| <p align="center">PATCH  </p>        | <p align="center">`/produtos/:id`</p>         | <p align="center">Faz o update de produtos</p> |
| <p align="center">DELETE  </p>     |<p align="center"> `/produtos/:id` </p>        | <p align="center">Deleta o cadastro de produtos. </p>

#### Método HTTP	Endpoint	Emprendedores

| <p align="center">Método HTTP </p>  |<p align="center"> Endpoint    </p> | <p align="center">Emprendedores  </p>    |
| ------------------------ | ---------------------------- | ------------------------------------------ |
| <p align="center">POST </p>  | <p align="center">`/emprendedores/cadastro`   </p> | <p align="center">Cria um perfil para cadastrar informações dos emprendedores/p>
| <p align="center">GET  </p>    |<p align="center"> `/emprendedores/todos`</p>         | <p align="center">Lista todas os emprendores disponíveis</p>          |
| <p align="center">GET  </p>    | <p align="center">`/emprendedores/todos/:id`</p>         | <p align="center">Lista todos emprendedores por ID</p>  
| <p align="center">PATCH  </p>  | <p align="center">`/emprendedores/:id`</p>         | <p align="center">Faz o update de emprendedores</p> |
| <p align="center">DELETE  </p> |<p align="center"> `/emprendedores/:id` </p>        | <p align="center">Deleta o cadastro de emprendores </p>


## Futuras melhorias

* Implementação dos testes em todas as rotas.
* Implementação do front-end.
* Implementação de filtros de pesquisa de produtos e emprendedores.


## Sobre a Autora

Andressa Vilela, bacharel em Nutrição e em transição de carreira para a área tech.

*[LinkedIn](https://www.linkedin.com/in/andressavsantos/)

*[GitHub](https://github.com/Andressavilela)
