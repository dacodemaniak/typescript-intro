# Configure a typescript project
Need to init a npm project. From the root project folder :

`$ npm init`


## Install dependencies
`$ npm i -D webpack webpack-cli webpack-dev-server @types/webpack-dev-server`
`$ npm i -D babel-loader`
`$ npm i -D ts-node`

## Configure webpack options
Add a new ts file at the root of your project folder.

## Update scripts from package.json
In the package.json file, locate "scripts" attribute and add the following :

`"start": "webpack-dev-server --mode development",`

`"build": "webpack --mode production"`

## Install JEST to make unit tests

`$ npm i -D jest @types/jest ts-jest`

### Create a jest.config.ts file at the root of your project

The content of the file :

``` 
import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
  '^.+\\.tsx?$': 'ts-jest',
  },
};
export default config;
```

### Update package.json to make jest as default testing framework

```
...
scripts: {
    ...
    "test": "jest",
}
```

## Write your first class

Create a folder named "src" and write your first Typescript class "main.ts" :

```
export class Main {
    public sayHello(): string {
        return "Hello Typescript"
    }
}
```

## Test the first class

Create a "test" folder at the root of your project, then a "unit" folder. Create a file named "main.test.ts" and add the following :

```
import { Main } from './../../src/main'

describe(`Main testing`, () => {
    test('Return value of sayHello must be "Hello Typescript"', () => {
        const main: Main = new Main()
        expect(main.sayHello()).toBe('Hello Typescript')
    })
})
```
Once done, you can run test suites :

`$ npm run test`

You should see the output from your console (terminal) saying that main.test.ts ran and all tests PASSED