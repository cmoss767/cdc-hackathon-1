# Turborepo react-native starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest -e with-react-native-web
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting

### Install/Setup Project

1. Prerequisites include git, terminal, node, and a code editor such as VSCODE

2. Open terminal and run

```sh
npm install -g yarn
npm install -g expo-cli
```

3. Install MySQL community server and MySQL Workbench app

4. In MySQL Workbench app, create a connection to localhost (the default settings when you create a new connection in Workbench will connect to localhost.) Name this connection whatever you like. If you already have a connection to localhost and have schemas in your local DB, those schemas will not interfere with our setup.

5. Clone the project from GIT

6. Open a terminal in the project's root directory and run:

```sh
  yarn install
```

7. Have fun and be yourself :)
