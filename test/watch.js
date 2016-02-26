
var expect = require('chai').expect

describe('watch', () =>
{
	var watch = require('../watch')

	describe('export', () =>
	{
		it('exposes function', () =>
		{
			expect(watch).a('function')
		})
		it('has arity of 2', () =>
		{
			expect(watch).lengthOf(2)
		})
		it('has descriptive name', () =>
		{
			expect(watch.name).equal('flyd__watch')
		})
	})
})
