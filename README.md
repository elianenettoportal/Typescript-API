# Project TypeScript

TypeScript is a strongly typed, object-oriented, compiled programming language that builds on JavaScript.
It is a superset of the JavaScript language, designed to give you better tooling at any scale.

Typescript is a compiled language. The compiler TCS(Transcript compiler script) will transcript the code to javascript to be able to run in NodeJS or Web Browser
The TypeScript compiler is written in TypeScript.<br>
As a result, it can be compiled into regular JavaScript and can then be executed in any JavaScript engine (e.g. a browser).<br>
The compiler package comes bundled with a script host that can execute the compiler.

---

install npm ^9.5 <br>
intall latest nodejs ^18.2 <br>
Create a package folder<br>
Open it from VSCode code . <br>

1- run package manager - Will simply generate an empty npm project without going through an interactive process. The -y stands for yes

> npm init -y

2- Install bascic dependencies for typescript and node-dev

> npm i typescript @types/node ts-node-dev -D

3- Create a file wit the typescript configuration -> tsconfig.json

> npx tsc --init

4- Create src in the root of the project

5- Create inside src a file index.ts

6- Go to tsconfig and change: <br>
a) 'target' -> "target": "es2016", -> "target": "es2020", <br>
b) 'rootDir' -> uncomment if so and add src as your root diretory "rootDir": "./src", <br>
c) 'outDir' -> uncomment if so and add "outDir": "./dist" (emitted files, after run to deploy)<br>
d) 'strictPropertyInitialization' -> uncomment if so and add "strictPropertyInitialization":"<br>
7- Create a acript file to run th project in localmachine. Edit "package.json"

> inside scripts add -> "dev": "ts-node-dev src/server.ts"

8- Install Express JS

> npm i express

9- Install the expressJS typtes These are dev dependencies, no need to publish, install using -D command

> npm i -D @types/express

10- Database

> not applied<br>

To run o to the terninal and run the file that is in the package json test scripts

> npm run dev ( trigger index.ts file)

# Docker Image

### Create a Dockerfile for the Typescript Project - backend.dockerfile

    FROM node:18-slim as base
    RUN mkdir -p /app
    WORKDIR /app
    COPY backend_typescript/package*.json ./
    COPY backend_typescript/tsconfig.json ./
    RUN npm install
    COPY backend_typescript/ .
    EXPOSE 3333
    CMD [ "npm", "start" ]

# Deploy Heroku process

dev: run localy with nodemom that auto trinspile
npm run dev 

npm run build  
transpile the file to JavaScript before we run it with node.
TypeScript files in your build directory.

prod:
npm run start 

GITHUB
1- create a repository in Github
2- copy new github URL
3- access your Backend code in VScode 
4- create a git track 
>>git init 
5- Add copied remote URL to where the files will be send to 
>git remote add origin https://github.com/elianenettoportal/backend_typescript.git
>git add .
>git push

HEROKU
1- create a new app name =backend-typescript
2- configure deploy method. We can use heroku client or github, since we pushed the project to heroku this will be the method used here
3- deploy method git can automaticaly deploy all changes when it detects new pushes into the master branch.
3.1 - connect to your github 
3.2 - select the repository created in guthub step above
3.3 - enable auto deploy
3.5 - Create a procfile (see it below)
3.6 - configure heroku settings (see it below)
3.4 do the first deploy manually from master

PROCFILE
Procfile is a heroku file created in the root folder of the backend code. It has no extension only 'Procfile' This file says to heroku what alwas when the app
receives a new update and the deploy process is done, the server should execute this command to start the app. The command  
you should use the same command configured in the package.json in the script session. Copy the command 'start' fron scripts
Since heroku app are dynos that receive http requests, we need to create a web command.
> web: node dist/index.js

SETTINGS
In the heroku dashboard go to Settings tab -> Revew Config vars. Create the vars we have in the .env, the config variables we want to read from process.env
pluss the heroku app url
 
