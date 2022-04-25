# Wait group

This project is a module for create wait groups in javascript.

## Getting started

This instructions will help you to get started with Sidonie.

### Prerequisites

- Node.js version 16.0.0 or higher [nodejs.org](https://nodejs.org/en/download/)
- TypeScript version 4.5.0 or higher [typescriptlang.org](https://www.typescriptlang.org/) (optional, only if you want to compile yourself the code)

### Installation

#### Using npm

```bash
npm install @smaug6739/wait-group
```

#### Using yarn

```bash
yarn add @smaug6739/wait-group
```

### Importation

#### Using CommonJS

```js
const { WaitGroup, WaitGroupSync } = require("@smaug6739/wait-group");
```

#### Using modules syntax

```js
import { WaitGroup, WaitGroupSync } from "@smaug6739/wait-group";
```

## Usage

### Create a new instance of WaitGroup

```js
const group = new WaitGroup();
```

### Add a new task to the group

#### Add function

This function will add one or more task(s) to the group.

Parameters : number of tasks. Type: Number.

```js
group.add(1);
```

### Remove a new task to the group

#### Remove function

This function will remove one or more task(s) to the group.

Parameters : number of tasks. Type: Number.

```js
group.remove(1);
```

### Wait for all tasks to finish

#### wait()

This function return a promise (or take a callback with WaitGroupSync) to wait for all tasks to finish.

Parameters: callback. Type: Function.

```js
group.wait().then(() => {
  // All tasks are finished
});
```

## Example

```js
const { WaitGroup } = require("..");

const group = new WaitGroup();

group.add(2);

setTimeout(() => {
  group.remove(1);
}, 1500);

setTimeout(() => {
  group.remove(1);
}, 1000);

console.log(1);

group.wait().then(() => {
  console.log(2);
});
```

## License

This project is licensed under the MIT license.
