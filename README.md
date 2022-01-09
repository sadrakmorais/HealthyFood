# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Acesso remoto através do Heroku:
`https://healthy-food-teste.herokuapp.com/`

## Considerações sobre o teste:

O teste foi desenvolvido utilizando react e as principais bibliotecas que são utilizadas juntamente com ele. O código está estruturado de uma maneira que consiga escalar com novas páginas, rotas, componentes e com estrura para receber dados de api e compartilhar propriedades entre os componentes criados. A landing page também conta com responsividade tanto para desktop quanto para tablets e smartphone.

## Intalação e inicialização

### 1º Passo (Clonando Repositório)

`git clone https://github.com/sadrakmorais/HealthyFood.git`

### 2º Passo (Abrir pasta e instalar dependências)

`cd healthy-food`
Instalando dependências com YARN:
`yarn`
Instalando dependências com NPM:
`npm i`

### 3º Passo (Inicializando projeto)

Inicializando com YARN:
`yarn start`
Inicializando com NPM:
`npm start`

### Ao iniciar, será redirecionado ao endereço http://localhost:3000/home
### A segunda rota disponível é a rota de cadastro http://localhost:3000/signup que pode ser acessada ao clicar no botão REGISTER

Após a validação dos dados do formulário da pagina Register, o usuário é redirecionado para a página Home, e seus dados são gravados no LocalStorage e nos Cookies.


## Funcionalidades

- O menu conta com um scroll suave que alcança toda a extenção da Landing Page, tanto no menu normal quanto no menu mobile.
- A partir de uma certa distancia do topo, surge um mbotão apra voltar ao topo da Landing Page.

## Bibliotecas utilizadas

### react-hook-form
### react-scroll
### styled-components
### @mui/material
### react-multi-carousel



