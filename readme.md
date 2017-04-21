# JavaScript Styled

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d8600d0317ef470285aaa93c4438e163)](https://www.codacy.com/app/cjpatoilo/eslint-config-styled?utm_source=github.com&utm_medium=referral&utm_content=cjpatoilo/eslint-config-styled&utm_campaign=badger)

> ESLint shareable config for JavaScript Styled.

[![Travis Status](https://travis-ci.org/cjpatoilo/eslint-config-styled.svg?branch=master)](https://travis-ci.org/cjpatoilo/eslint-config-styled?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/hldpjyx1g99g3748?svg=true)](https://ci.appveyor.com/project/cjpatoilo/eslint-config-styled)
[![Codacy Status](https://img.shields.io/codacy/grade/d8600d0317ef470285aaa93c4438e163/master.svg)](https://www.codacy.com/app/cjpatoilo/eslint-config-styled/dashboard)
[![Dependencies Status](https://david-dm.org/cjpatoilo/eslint-config-styled/status.svg)](https://david-dm.org/cjpatoilo/eslint-config-styled)
[![Version Status](https://badge.fury.io/js/eslint-config-styled.svg)](https://www.npmjs.com/package/eslint-config-styled)
[![Download Status](https://img.shields.io/npm/dt/eslint-config-styled.svg)](https://www.npmjs.com/package/eslint-config-styled)
[![Gitter Chat](https://img.shields.io/badge/gitter-join_the_chat-4cc61e.svg)](https://gitter.im/cjpatoilo/eslint-config-styled)


## Install

```
$ npm install --save-dev eslint-config-styled
```


## Usage

Add some ESLint config to your `.eslintrc`:

```
{
	"extends": "styled"
}
```

Or to command line options:

```
eslint --config=styled
```

Or to `package.json`:

```
{
	"name": "my-project",
	"eslintConfig": {
			"extends": "styled"
	}
}
```

Or to command line options:

```
--config=styled
```


## Rules

- No semicolons.
- No unused variables.
- Use tab for indentation.
- Use `===` instead of `==`.
- Use single quotes for strings except to avoid escaping.
- Add a space after keywords.
- Add a space before a function declaration's parentheses.
- Infix operators must be spaced.
- Commas should have a space after them.
- Keep else statements on the same line as their curly braces.
- For multi-line if statements, use curly braces.
- Always handle the `err` function parameter.
- Always prefix browser globals with `window.`.
- Multiple blank lines not allowed.
- For the ternary operator in a multi-line setting, place `?` and `:` on their own lines.
- For var declarations, write each declaration in its own statement.
- Wrap conditional assignments with additional parentheses. This makes it clear that the expression is intentionally an assignment (`=`) rather than a typo for equality (`===`).

*NOTE: The best way to learn about that is to just install it and give it a try on your code.*


## Rules

- No semicolons.
- No unused variables.
- Use tab for indentation.
- Use `===` instead of `==`.
- Use single quotes for strings except to avoid escaping.
- Add a space after keywords.
- Add a space before a function declaration's parentheses.
- Infix operators must be spaced.
- Commas should have a space after them.
- Keep else statements on the same line as their curly braces.
- For multi-line if statements, use curly braces.
- Always handle the `err` function parameter.
- Always prefix browser globals with `window.`.
- Multiple blank lines not allowed.
- For the ternary operator in a multi-line setting, place `?` and `:` on their own lines.
- For var declarations, write each declaration in its own statement.
- Wrap conditional assignments with additional parentheses. This makes it clear that the expression is intentionally an assignment (`=`) rather than a typo for equality (`===`).

*NOTE: The best way to learn about that is to just install it and give it a try on your code.*


## Contributing

Want to contribute? Follow these [recommendations](https://github.com/cjpatoilo/eslint-config-styled/blob/master/.github/contributing.md).


## License

Designed with ♥ by [CJ Patoilo](https://twitter.com/cjpatoilo). Licensed under the [MIT License](https://cjpatoilo.mit-license.org).
