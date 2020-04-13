<h1 align="center">Welcome to express-api 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Express API backend with dynamic routing

## Usage

```bash
# Clone the boilerplate
git clone https://github.com/DEVICARUS/express-api.git

# Install dependencies
yarn
# OR
npm install

# Start development server
yarn start-dev # MacOS and Linux
# OR 
yarn start-dev-win # Windows
```

## Commands

| Command              | Description                                   |
| -------------------- | --------------------------------------------- |
| `yarn start`         | Starts production server                      |
| `yarn start-dev`     | Starts a development server (MacOS and Linux) |
| `yarn start-dev-win` | Starts a development server (Windows)         |

## Docs

### Routing

All files in the `routes` directory are automaticaly `required()` as Express routers, meaning all you have to do is to create a new file in this directory (take a look at the `users` example).

*Based on output of the [express-generator](https://github.com/expressjs/generator)*