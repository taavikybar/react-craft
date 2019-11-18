# Linters

**Set up a set of rules for linters, agreed upon in the team.**

Instead of spending time arguing what style is better, decide upon a linter rule and enforce it.

## [ESLint](https://eslint.org/)

For TypeScript use also ESLint via [`typescript-eslint`](https://github.com/typescript-eslint/typescript-eslint) since [TSLint is deprecating](https://medium.com/palantir/tslint-in-2019-1a144c2317a9). [Migration guide](https://github.com/palantir/tslint/issues/4534).

### Shared configuration repository

If you have a lot of Node.js based applications, you can create a separate repository to store ESLint rules and use those rules in all the web applications for consistent linting. Then you effectively separate linting concerns from your production code and ensure changes to linting rules via Pull Requests concentrate on linting rules only and are not lost in long feature PR-s.

For that you can create a Node.js module starting with `eslint-config-` e.g `eslint-config-myconfig`, and include an `index.js` file with all your configurations. Publish it to NPM registry, install it in your web app and use as so:

	// .eslintrc
	{
	    "extends": "myconfig"
	}

[Exact details how to do shareable ESLint configurations](https://eslint.org/docs/developer-guide/shareable-configs)

## [SassLint](https://github.com/sasstools/sass-lint)

CSS can get extremely complex and contain conflicting rules. Do not underestimate the power and influence of CSS in your projects. With a single misplaced or unsupported rule you can hide an entire button making it impossible to complete checkout or advance to the next page.

In addition to using a structured approach to writing CSS like [SASS+BEM](/sass-bem), use SassLint in order to enforce an agreed set of rules.

## When to run linters

There are multiple ways how and when to run linters:

- As a `precommit` hook before committing using [Husky](https://github.com/typicode/husky#readme)
- In CI tools

For example, scripts in `package.json`:

	"scripts": {
	    "eslint": "eslint",
	    "sasslint": "sass-lint --config .sasslintrc",
	    "lint": "yarn run eslint && yarn run sasslint",
	}

Now `yarn lint` or `npm run lint` can be run in CI tools or as a `precommit` hook.

## What to run linters on

You may choose to always run linters on all files, which might get slow if the codebase is big. Instead, you can run linters on staged files only (files added by `git add`) using `lint-staged` [package](https://github.com/okonet/lint-staged).

You need to also install [Husky](https://github.com/typicode/husky#readme) in order to run git hooks easily.

An example configuration in `package.json` file:

	"scripts": {
		"eslint": "eslint",
		"sasslint": "sass-lint --config .sasslintrc",
		"lint": "yarn run eslint && yarn run sasslint",
		"precommit": "lint-staged",
	},
	"lint-staged": {
		"src/**/*.{ts,tsx,scss}": [
			"yarn lint",
			"git add"
		]
	}

Once you have Husky installed, it will run all the [Git Hooks](https://githooks.com/) including `precommit` hook meaning any script you put under the `precommit` script, will be run before `git commit` command. In this case, `lint-staged` script is run.

If there are any linting errors, `git commit` will not run and instead the errors are listed in your terminal. If there are no errors, `git commit` will run committing your changes.
