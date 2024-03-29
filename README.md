# BotCrypto

###

### Dependencias FrontEnd(Angular9)

- npm install -g @angular/cli

  - Instalação do angular global

- Toaster (ngx-toastr)

  - npm install ngx-toastr --save

- Decode JWT

  - npm install @auth0/angular-jwt

- Jquery

  - npm install jquery --save
  - npm install @types/jquery --save-dev

- DataTables Automatica

  - ng add angular-datatables

- DataTables Manual
  - Precisa do Jquery
  - npm install datatables.net --save
  - npm install datatables.net-dt --save
  - npm install angular-datatables --save -
  - npm install @types/datatables.net --save-dev

**Comandos**

- ng new (Nome do projeto)
  - Cria o projeto
- ng serve --open
  - Start a aplicacao
- ng generate component (ng g c (nome))
  - Cria os componentes
- ng generate model (

**Structure**

|-- modules

    |-- module1
        |-- [+] components
        |-- [+] models
        |-- [+] enums
        |-- [+] utils
        |-- module1.service.ts
        |-- module1.module.ts
        |-- module1.routes.ts

|-- shared
|-- [+] components
|-- [+] mocks
|-- [+] models
|-- [+] directives
|-- [+] pipes

|-- core
|-- [+] authentication
|-- [+] footer
|-- [+] guards
|-- [+] http
|-- [+] interceptors
|-- [+] mocks
|-- [+] services
|-- [+] header

|-- app.module.ts
|-- app.component.ts

**Helpers**

- [Angular](https://cli.angular.io/)

- [Format GitHub](https://help.github.com/en/articles/basic-writing-and-formatting-syntax)

- [Toastr](https://www.npmjs.com/package/ngx-toastr)

- [DataTables](http://l-lin.github.io/angular-datatables/#/advanced/router-link)
