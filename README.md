# NMD MERN Template

Template for the course **Mobile Development II** specialisation **New Media Development** in the department **Graphical and Digital Media** within **Artevelde University College Ghent**.

Template consists of:

- Node.js
- Express
- React

## Getting Started

### Environment settings

Create a `.env`-file under the root of the project with the following contents:

```
NMD_BASELINE='Like Graphics Love Code'  
NODE_ENV={your node environment} (Development, Production or Staging)  
NODE_SERVER_HOSTNAME={your ip-addres or domainname} (ex.: 127.0.0.1, 192.168.0.6)  
NODE_SERVER_PORT={your port for the server} (ex.: 8080)  
MONGODB_CONNECTION={your mongodb connection string}
```

### Installing

Under the root execute:

```
yarn install
```

### Scripts

#### Running the Express-server

Under the root execute:

```
yarn server:start
```

#### Running the tests for Express-server

Under the root execute:

```
yarn server:test
```

#### Check eslint for the server

Under the root execute:

```
yarn server:lint
```

#### Running the React-app

Under the root execute:

```
yarn client:start
```

## API Specification

### Urls

- [Swagger Ui for Express](http://{your domain}:{your port]/api/v1/docs/)
- [ReDoc](http://{your domain}:{your port]/docs/)

## Built With

- Node.js
- Express
- React

## Authors

Philippe De Pauw - Waterschoot | [drdynscript](https://github.com/drdynscript)

## License

This project is licensed under the Apache License - see the LICENSE file for details