<h1 align="center">
  <img src=".github/logo.svg" alt="GoFinances" width="250px">
</h1>

<h3 align="center">
  Finances control application
</h3>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="#-license">License</a>
</p>

<img alt="Layout" src=".github/screenshot.png">

## 💰 About the project

GoFinances is the application for the ones who wants to control their finances. With the feature to import a CSV (Comma-separated values) file you can bulk insert a lot of transactions. Project was a challenge developed during GoStack Bootcamp offered by [Rocketseat](https://rocketseat.com.br/) in order to practise CRUD concepts using ReactJS and TypeScript. GoStack Bootcamp is an online experience with lots of practical content, challenges and hacks.

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)
- [Express](https://expressjs.com/pt-br/)
- [PostgreSQL](https://www.postgresql.org/)
- [Jest](https://jestjs.io/)
- [SuperTest](https://github.com/visionmedia/supertest)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [React Icons](https://react-icons.netlify.com/#/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/)
- One instance of [PostgreSQL](https://www.postgresql.org/)

> Note: I recommend you using docker

**Clone the project and access the folder**

```bash
$ git clone https://github.com/raphaelswk/go-finances.git && cd go-finances
```

**Install dependencies**

```bash
$ yarn
```

**Follow the steps below**

### Backend

```bash
$ cd go-finances-backend

# Create the instance of postgreSQL using docker
$ docker run --name gofinances-postgres -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=gofinances -p 5432:5432 -d postgres

# Make sure the keys in '/server/ormconfig.json'
# to connect with your database are set up correctly.

# Once the DB is running, run the migrations
$ yarn server typeorm migration:run

# To finish, run the api service
$ yarn dev:server

# Well done, project is started!
```

### Web

Note: Before you continue, make sure the API is running

```bash
$ cd go-finances-web

# Make sure on the file '/src/services/api.ts' the IP pointing your API

# Start the client
$ yarn start
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ♥ &nbsp;by Raphael Socolowski 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/raphaelswk/)
