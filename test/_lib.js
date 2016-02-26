
var expect = require('chai').expect

module.exports = function (fn, name)
{
	it('exposes function', () =>
	{
		expect(fn).a('function')
	})
	it('has arity of 2', () =>
	{
		expect(fn).lengthOf(2)
	})
	it('has descriptive name', () =>
	{
		expect(fn.name).equal(name)
	})
}
