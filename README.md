<h1 align="center">
 PROJETO NX MONOREPO + REACT NATIVE
</h1>

<h2 align="center">
   Aplicação 1: ChatText 
   <br />
   Aplicação 2: Delivery
   <br />
   VERSÃO: 1.0.0
</h2>

![NX_REACT_NATIVE](https://img.shields.io/badge/REACT-NATIVE-blue.svg)
<br />
<a href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

<h3 align="center">
	🚧  APLICAÇÃO NX MONOREPO ESTÁ NA PRIMEIRA FASE ...  🚧
</h3>

NX é uma ferramenta de linha de comando que ajuda a desenvolver aplicações em monorepo com várias linguagens, frameworks e bibliotecas. Ele foi criado pela equipe da Nrwl e é open source.

O NX é projetado para trabalhar com muitas tecnologias diferentes, incluindo Angular, React, React Native, Node.js, NestJS, Next.js, e muitas outras. Ele fornece recursos avançados para gerenciamento de dependências, construção, teste, deploy, análise de código e muito mais.

Uma das principais vantagens do NX é que ele permite que você crie um monorepo para todos os seus projetos relacionados. Isso significa que você pode gerenciar vários projetos em um único repositório e compartilhar código e bibliotecas entre eles. Isso pode tornar o desenvolvimento mais fácil, mais rápido e mais eficiente.

O NX também fornece muitas ferramentas e recursos para ajudar a garantir a qualidade do código, incluindo testes automatizados, linting, formatação de código e muito mais. Ele também possui integração com várias plataformas de hospedagem de código, como o GitHub, o GitLab e o Bitbucket.

Em resumo, o NX é uma ferramenta poderosa para desenvolvedores que desejam criar aplicativos em monorepo com várias tecnologias e compartilhar código e bibliotecas entre eles. Ele fornece muitas ferramentas e recursos avançados para ajudar a garantir a qualidade do código e tornar o desenvolvimento mais fácil e eficiente.

# Instrução configurar e executar o projeto NX MONOREPO:
```bash
    # Instale o nx globalmente através do comando:
    $ npm install -g nx

    # Crie um novo projeto nx monorepo utilizando o comando:
    $ nx new my-monorepo --preset=react-native --appName=app

    # Crie um aplicativo React Native dentro do seu monorepo, que será criado em um diretório separado dentro do seu monorepo. Para criar um aplicativo React Native, utilize o comando:
    $ nx generate @nrwl/react-native:application my-app

    # Crie uma biblioteca dentro do seu monorepo, que será criada em um diretório separado dentro do seu monorepo. Para criar uma biblioteca, utilize o comando:
    nx generate @nrwl/react-native:library my-lib

    # Adicione dependências ao seu monorepo. Para adicionar uma dependência, utilize o comando:
    nx generate @nrwl/react-native:add-dependencies --project=my-app --dependencies=my-lib

    # Execute o seu aplicativo no android:
    npx nx run-android nome_projeto

    # Execute o seu aplicativo no ios:
    npx nx run-ios nome_projeto
```

# Tarefas da Primeira fase do projeto:
-   [ X ] Criar projeto My ChatText;
-   [ X ] Criar projeto My Delivery;
-   [ X ] Criar Library;
-   [ X ] Criar Components;
-   [ X ] Criar a Pasta ChatText em Libs;
-   [ X ] Criar a Pasta Delivery em Libs;
-   [ X ] Criar Estrutura da Pasta Shared;
-   [ X ] Criar Estrutura da Pasta Core;
-   [ X ] Criar Estrutura da Pasta Client;
-   [  ] Criar Rotas;
-   [  ] Criar e configurar styles de cada projeto;
-   [  ] Criar componente Button e compartilhar entre os projetos;

# Tarefas da Segunda fase do projeto:
-   [  ] Criar Onboarding de cada Projeto;
-   [  ] Criar Login de cada Projeto;
-   [  ] Criar Cadastro de cada Projeto;
-   [  ] Criar Reset da Senha de Cada Projeto;
-   [  ] Configurar a navegação entre as telas;
-   [  ] Criar Tela Home de cada Projeto;
-   [  ] Configurar a Authentication de cada Projeto;

# Algumas image do projeto:
<h4 align="left">
	Algumas imagens do projeto em desenvolvimento.
</h4>
<h1 align="center">
    <a href="https://imgur.com/phxSDap"><img src="https://i.imgur.com/phxSDap.png" title="source: imgur.com" /></a>
 	<br />
    <a href="https://imgur.com/OFygwXx"><img src="https://i.imgur.com/OFygwXx.png" title="source: imgur.com" /></a>
	<br />
	<a href="https://imgur.com/vof5PM2"><img src="https://i.imgur.com/vof5PM2.png" title="source: imgur.com" /></a>
	<br />
</h1>

# Instrução para clonar o projeto:
```bash
    # Clonar o repositório
    $ git https://github.com/SilvaneiMartins/curso-nx-monorepo-react-native

    # Acessar a pasta do projeto
    $ cd curso-nx-monorepo-react-native
```

# Instrução para instalar as dependências:
```bash
    # Instalar as dependências do projeto
    # Com yarn
    $ yarn

    ou

    # Com npm
    $ npm install
```

## Mais ajuda

Visite a [Documentação da NX](https://nx.dev) aprender mais.

# Tecnologias que estamos utilizando no projeto:
-   [NX](https://nx.dev)
-   [REACT](https://pt-br.reactjs.org/)
-   [REACT NATIVE](https://reactnative.dev/)

# License
Este projeto está sob a licença CC0 1.0 Universal. Caso gostaria de ler, por favor acessar a licença aqui neste link [LICENSE](https://github.com/SilvaneiMartins/curso-nx-monorepo-react-native/blob/master/LICENSE) para maiores informações.

# Desenvolvedor
<a href="https://github.com/SilvaneiMartins">
    <img
        style="border-radius:50%"
        src="https://github.com/SilvaneiMartins.png"
        width="100px;"
        alt="Silvanei Martins"
    />
    <br />
    <sub>
        <b>Silvanei de Almeida Martins</b>🚀
    </sub>
</a>
<br />
Feito com ❤️ por Silvanei Martins
