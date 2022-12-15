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



PROJETO_FINAL   |

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
### Utilização da API
1º Passo - Clonar o respositório
Clone este projeto para a sua máquina local.

git clone https://github.com/Andressavilela/projeto-final-Andressa



### Mapeamento das rotas

### Futuras melhorias

### Sobre a autora
