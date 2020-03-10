# TypeScript - RocketSeat
Studying TypeScript

Install
instalar typescript por projeto para poder controlar a versão utilizada em cada um

- yarn init -y
- yarn add -D typescript


- yarn add @types/express -D // adiciona o express para typescript para que o node consiga ler


- yarn tsc src/index.ts para converter o ts para js

- yarn tsc --init // gera um arquito de tsconfig.json com algumas configurações pré definidas

- para configurar pasta dist é dentro do tsconfig.json



Pesquisar depois
Ex.: sucrase não entende decorators*
- typeorm


-ts-node-dev é ideal para decorators - utilizado para rodar scripts
- yarn add ts-node-dev -D


/*
function getUsername(): string {
    return 'ana3g';
}

const username = getUsername();
*/


- SOLID - impossível de implementar sem tipagem

para req e res é necessário fazer uma importação da definição de tipos para que eles sejam reconhecidos pelo TS



Front End
criar
 yarn create react-app frontend --template=typescript

 por ter front e back para ligação é obrigatorio instalar o cors para permitir quais urls vão acessar o backend
- yarn add cors

Não encontrou a tipagem do cors
- yarn add @types/cors -D

- yarn tsc converte todos os arquivos typescript para js dentro da pasta dist