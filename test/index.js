const test = require('ava')
const isPlainObj = require('is-plain-obj')
const eslint = require('eslint')
const tempWrite = require('temp-write')

const hasRule = (error, ruleId) => error.some(x => x.ruleId === ruleId)

function runESLint (string, config) {
	const linter = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: tempWrite.sync(JSON.stringify(config))
	})

	return linter.executeOnText(string).results[0].messages
}

test('main file', t => {
	const config = require('../')

	t.true(isPlainObj(config))
	t.true(isPlainObj(config.rules))

	const errors = runESLint('\'use strict\'\nconsole.log("Hello World!")\n', config)
	t.true(hasRule(errors, 'quotes'))
})
