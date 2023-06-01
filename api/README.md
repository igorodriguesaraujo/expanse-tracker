# Processo de criação do boilerplace de REST API (Iniciante)

Este é um estudo para iniciantes de criação e configuração de um projeto de API com node.

#### Instalando dependências

- Vamos inciar criando o package.json com `npm init -y`
- Instalo as depências de produção (Nesse caso o express, mas podendo ser qualquer outra como Koa, fastify e etc..)
  `npm i express`
- Como vamos estar usando typescript no projeto precisamos instalar algumas dependências de desenvolvimento;
  ` npm i typescript tsx -D`
- Agora precisa instalar as tipagens das dependência já instaladas nesse caso vamos instalar como dep. de desenvolvimento pq só vamos precisar delas no momento de execução do projeto(Verificar na doc de cada dependência para ver a necessidade)
  ` npm i @types/express @types/nodes -D`
- Após termos todos as dependência inicias vamos partir para a parte de banco usando o ORM prisma. (O prisma e super ORM com varios recurso e já é em typescript, sem a necessidade de instalarmos tipagem)
  ` npm i prisma`
- Agora vamos instalar o eslint para organização e padronizar o nosso código
  `npm i eslint`

#### Configurando Typescript

- Criando arquivo de configuração do typescript `tsc --init` (Mudar dentro do arquivo tsconfig.json o target para 2020)

```
    {
        "scripts": {
            "dev":"tsx watch ./src/server.ts"
        }
    }
```

#### Configurando ESlint + Prettier

- Configurando o eslint com o comando `npm init @eslint/config` (Nessa passo siga as instruções de acordo com seu projeto).
- Agora vamos adicionar uma linhas aos scripts no arquivo package.json que vai executar o lint.

**\*OBS.:** Neste projeto estou usando o padrão da `eslint-config-standard-with-typescript@latest`\*

#### Estrutura de diretorios

Vamos criar o diretorio **/src** para estruturarmos o projeto, criaremos os arquivos referente ao projeto dentro desse diretório, seguindo um Padrão MVC(Model View Controller), sem a camada de **view**, já que estamos criando um API.

**_OBS.:_** _Precisamos dentro do **package.json** adicionar uma propriedade `"type":"module"` para da suporte ao module(import/export)_;

#### Banco de dados

Para abstrair a conexão e acesso ao banco vamos usar o Super ORM Prisma, que já tem suporte a varios recursos relacionando a banco de dados e da suporte a banco relacionais e não relacionais. `npm i prisma -D`

**\*Obs.:** O Prisma já conta com suporte a typescript, então não vamos precisar instalar qualquer tipagem.\*

Apó instalar o prisma, vamos inicia-lo com o comando `npx prisma init --datasource-provider sqlite`, essa flag `--datasource-provider` vai especificar com qual banco vamos trabalhar nesse caso o **sqlite**.

Esse comando vai criar um novo diretório com todo o suporte ao prisma, com conexão ao banco, models e etc...

#### Conclusão

Terminando todos os processo acima o ambiente está práticamente pronto. só rodar no terminal `npm run dev` para subir o servidor.

---

_Autor: Igor Rodrigues_
_Design e Desenvolvedor Web_
