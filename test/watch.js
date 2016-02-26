
var lib = require('./_lib')
var inst = require('./_inst')

describe('watch', () =>
{
	var watch = require('../watch')

	describe('export', () =>
	{
		lib(watch, 'flyd__watch')
	})

	describe('instantiates', () =>
	{
		inst(watch, 'watch')
	})
})
