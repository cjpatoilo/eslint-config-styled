# eslint-config-styled

> ESLint shareable config for JavaScript Styled.


## Install

```
$ npm install --save-dev eslint-config-styled
```


## Usage

Add some ESLint config to your `package.json`:

```
{
	"name": "my-project",
	"eslintConfig": {
			"extends": "styled"
	}
}
```

Or to `.eslintrc`:

```
{
	"extends": "styled"
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


## Contributing

Want to contribute? Follow these [recommendations](https://github.com/cjpatoilo/eslint-config-styled/blob/master/.github/contributing.md).


## License

Designed with ♥ by [CJ Patoilo](https://twitter.com/cjpatoilo). Licensed under the [MIT License](https://cjpatoilo.mit-license.org).
