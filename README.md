# \<shadows-dom-element> & \<light-dom-element> test 
This project is a test and build suite for 
[shadow-dom-element](https://github.com/sashafirsov/shadow-dom-element) & 
[light-dom-element](https://github.com/sashafirsov/light-dom-element)  
web components which perform same task of html template rendering and expose identical API.

## Installation

```bash
npm i light-dom-element-test
```

## Usage

```bash
npm run build
npm run test
npm run test:watch
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`
