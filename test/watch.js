
var expect = require('chai').expect
var lib = require('./_lib')

describe('watch', () =>
{
	var watch = require('../watch')

	describe('export', () =>
	{
		lib(watch, 'flyd__watch')
	})
})
