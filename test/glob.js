
var expect = require('chai').expect
var flyd   = require('flyd')

describe('glob', () =>
{
	var glob = require('../')

	describe('export', () =>
	{
		it('exposes function', () =>
		{
			expect(glob).a('function')
		})
		it('has arity of 1', () =>
		{
			expect(glob).lengthOf(1)
		})
		it('has descriptive name', () =>
		{
			expect(glob.name).equal('flyd__glob')
		})
	})

	describe('arguments', () =>
	{
		it('glob(string) is ok', () =>
		{
			expect(flyd.isStream(glob('*.txt'))).true
		})
		it('glob(array of strings) is ok', () =>
		{
			expect(flyd.isStream(glob([]))).true
			expect(flyd.isStream(glob([ '*.txt' ]))).true
		})
	})
})
