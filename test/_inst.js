
var stream = require('./_stream')

module.exports = function (fn, name)
{
	it(name + '(string) is ok', () =>
	{
		against(fn, '*.txt')
	})
	it(name + '(array of strings) is ok', () =>
	{
		against(fn, [])
		against(fn, [ '*.txt' ])
	})
	it(name + '(string, options) is ok', () =>
	{
		against(fn, '*.txt', { cwd: '.' })
	})
	it(name + '(array of strings, options) is ok', () =>
	{
		against(fn, [], { cwd: '.' })
		against(fn, [ '*.txt' ], { cwd: '.' })
	})
}

function against (fn, ...args)
{
	var s = fn(...args)

	stream.isStream(s)

	setTimeout(() => s.end(true), 10)
}
