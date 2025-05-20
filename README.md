# Angular Web App

Projeto criado em Angular utilizando Typescript para implementações de diversas funcionalidades de âmbito geral, para fins de treinamento, estudos e atualizações.

Este projeto está hospedado utilizando **GitHub Actions** e pode ser acessado através da seguinte URL:  
[https://diegoferreirax.github.io/angular-web-app](https://diegoferreirax.github.io/angular-web-app)    

Na pasta `.github/workflows` contém o arquivo `deploy.yml` com as configurações de publicação com **GitHub Actions**. No mesmo, há também configurações de variáveis secrets configuradas internamente no repositório para maior segurança.     

## ⚙️ Configuração ambiente

Para configurar o ambiente de desenvolvimento, siga os passos abaixo:

1. **Instalar Node.js**
   - Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina. Recomenda-se a versão LTS.
   - Certifique-se que a instalação foi realizada com sucesso:
     ```sh
     node --version
     ```

2. **Instalar pnpm (caso não esteja instalado)**
   - Verifique se o `pnpm` está instalado:
     ```sh
     pnpm --version
     ```
   - Caso não esteja instalado, instale-o globalmente utilizando o `npm`:
     ```sh
     npm install -g pnpm
     ```

3. **Instalar Docker (opcional para rodar o projeto em container)**
   - Baixe e instale o [Docker Desktop](https://www.docker.com/products/docker-desktop/) para seu sistema operacional.
   - Após a instalação, verifique se o Docker está funcionando corretamente:
     ```sh
     docker --version
     ```

## 🛠️ Baixar projeto

1. **Baixar o projeto**
   - Clone o repositório utilizando o comando:
     ```sh
     git clone https://github.com/diegoferreirax/angular-web-app.git
     ```
   - Alternativamente, faça o download do código-fonte manualmente e extraia os arquivos.
   - No diretório atual, entre no projeto:
     ```sh
     cd angular-web-app
     ```

## 🚀 Rodar projeto

Você pode rodar o projeto de duas formas:

1. **Rodar com PNPM**   
   - Execute os comandos para baixar as dependências e iniciar o projeto:
     ```sh
     pnpm install
     pnpm start
     ```

2. **Rodar com Docker**
   - Com o Docker instalado, você pode rodar o projeto em um container utilizando o comando:
     ```sh
     docker compose -f docker-compose.yml up -d --force-recreate
     ```

Após iniciar o servidor (por PNPM ou Docker), acesse a aplicação no navegador em:  
```
http://localhost:4200
```

## 🧪 Testes da aplicação

O projeto está configurado com o **Jest** para execução dos testes automatizados.  
Para rodar todos os testes e visualizar o resultado, incluindo o relatório de cobertura de código (coverage), utilize o comando abaixo:

```sh
pnpm test
```

O comando exibirá no terminal o resultado dos testes e o percentual de cobertura do código.