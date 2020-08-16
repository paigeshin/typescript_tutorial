# typescript_tutorial

# What is TypeScript? And Why?

- Improving Javascript
- TypeScript compiles javascript to run again
- TypeScript is a Superset to JavaScript
- Avoid unwanted behavior at runtime!
- You could add an "if" check to avoid error
- "Unnecessary" step that could be avoided with strict types

⇒ TypeScript adds strict typing.
 
 
# TypeScript adds...

- Types!
- Non-JavaScript Features like Interfaces or Generics
- Rich Configuration Options
- Next-gen JavaScript Features (Compiled down for older Browsers)
- Meta-Programming Features like Decorators
- Modern Tooling that helps even in non-TypeScript Projects


# TypeScript SetUp Process

- Install Typescript Compiler

```bash
npm install -g typescript
```

- type file name you want to compile

```bash
tsc app.ts
```

# Typescript config

```tsx
tsc init
```

- Make sure `"strict"` to be set `true`
- Use `es6`

```tsx
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es6",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    // "outDir": "./",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "skipLibCheck": true,                     /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  }
}
```

# Assign Type

```tsx
function add(num1: number, num2: number) {
	return num1 + num2;
}
```

### Core Types

- `number`, All numbers, no differentiation between integers or floats
- `string`, All text values
- `boolean` , Just these two, no "truthy" or "falsy" values
- `object`, Any JavaScript object, more specific types (type of object) are possible
- `Array` , Any JavaScript array, type can be flexible or strict (regarding the element types)

# Type Inference & Type Casting

```tsx
const num1Element: HTMLInputElement = document.getElementById('num1') as HTMLInputElement;
const num2Element: HTMLInputElement = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button'); // it can be null

function add(num1: number, num2: number) {
	return num1 + num2;
}

if (buttonElement) {
	buttonElement.addEventListener('click', () => {
		const num1 = num1Element.value;
		const num2 = num2Element.value;
		const result = add(+num1, +num2);
		console.log(result);
	});
}
```

# Union Type Example

`number | string`

```tsx
const num1Element: HTMLInputElement = document.getElementById('num1') as HTMLInputElement;
const num2Element: HTMLInputElement = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button'); // it can be null

//Learning - allow only number & string as parameters, except for the boolean value
//Learning - in order to achieve this, you need to use `union`

//Learning - Union Type, number | string
//Learning - any Type, any
function add(num1: number | string, num2: number | string) {
	//Learning - Type Guard
	if (typeof num1 === 'number' && typeof num2 === 'number') {
		return num1 + num2;
	} else if (typeof num1 === 'string' && typeof num2 === 'string') {
		return num1 + num2;
	} else {
		return +num1 + +num2;
	}
}

if (buttonElement) {
	buttonElement.addEventListener('click', () => {
		const num1 = num1Element.value;
		const num2 = num2Element.value;
		const result = add(+num1, +num2);
		const stringResult = add(num1, num2);
		console.log(result);
		console.log(stringResult);
	});
}
```

# Using Objects & Array Types

```tsx
//Learning - array
const numResults: number[] = []; //or const numResults: Array<number> = [];
const textResults: string[] = [];

//Learning - Using Objects & Array Types
//Learning - define objects as paramters
function printResult(resultObj: { val: number; timestamp: Date }) {
	console.log(resultObj.val);
}
```

# TypeAlias

```tsx
//This is type alias
type NumOrString = string | number;

function add(num1: NumOrString, num2: NumOrString) {
	//Learning - Type Guard
	if (typeof num1 === 'number' && typeof num2 === 'number') {
		return num1 + num2;
	} else if (typeof num1 === 'string' && typeof num2 === 'string') {
		return num1 + num2;
	} else {
		return +num1 + +num2;
	}
}

//This is type alias
type Result = { val: number; timestamp: Date };

function printResult(resultObj: Result) {
	console.log(resultObj.val);
}
```

# Interface

```tsx
interface ResultObj {
    val: Number,
    timestamp: Date
}

function printResult(resultObj: ResultObj) {
	console.log(resultObj.val);
}
```

# What's the difference between TypeAlias and Interface?

- Basically, `TypeAlias` and `Interface` do the same thing.
- But, `Interface` unlike `TypeAlias` can force `classes` to implement it.

# Understanding Generics

- Promise

    ⇒ It interacts with other types

- Array

    ⇒ It interacts with other types

```tsx
const myPromise = new Promise<string>((resolve, reject) => {
	setTimeout(() => {
		resolve('It worked!'); //resolve is generic type
	}, 1000);
});

myPromise.then((result) => {
	console.log(result.split('w'));
});
```