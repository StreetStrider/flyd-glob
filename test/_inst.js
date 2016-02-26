
var stream = require('./_stream')

module.exports = function (fn, name)
{
	it(name + '(string) is ok', () =>
	{
		stream.isStream(fn('*.txt'))
	})
	it(name + '(array of strings) is ok', () =>
	{
		stream.isStream(fn([]))
		stream.isStream(fn([ '*.txt' ]))
	})
	it(name + '(string, options) is ok', () =>
	{
		stream.isStream(fn('*.txt', { cwd: '.' }))
	})
	it(name + '(array of strings, options) is ok', () =>
	{
		stream.isStream(fn([], { cwd: '.' }))
		stream.isStream(fn([ '*.txt' ], { cwd: '.' }))
	})
}
