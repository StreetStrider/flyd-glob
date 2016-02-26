
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
		it('has arity of 2', () =>
		{
			expect(glob).lengthOf(2)
		})
		it('has descriptive name', () =>
		{
			expect(glob.name).equal('flyd__glob')
		})
	})

	describe('instantiates', () =>
	{
		it('glob(string) is ok', () =>
		{
			isStream(glob('*.txt'))
		})
		it('glob(array of strings) is ok', () =>
		{
			isStream(glob([]))
			isStream(glob([ '*.txt' ]))
		})
		it('glob(string, options) is ok', () =>
		{
			isStream(glob('*.txt', { cwd: '.' }))
		})
		it('glob(array of strings, options) is ok', () =>
		{
			isStream(glob([], { cwd: '.' }))
			isStream(glob([ '*.txt' ], { cwd: '.' }))
		})
	})

	describe('works', () =>
	{
		var lil = __dirname + '/lil-fs'

		it('glob(string)', () =>
		{
			var s = glob('*', { cwd: lil })
			return streamEquals(s, [ 'dir', 'file-2.txt', 'file.txt' ])
		})
	})

	function isStream (it)
	{
		expect(flyd.isStream(it)).true
	}

	function streamEquals (target, standard)
	{
		return concat(target)
		.then((result) =>
		{
			expect(result).eql(standard)
		})
	}

	function concat (stream)
	{
		var cat = flyd.scan((memo, next) =>
		{
			return memo.concat([ next ])
		}
		, [])

		stream = cat(stream)

		return new Promise((rs) =>
		{
			flyd.on(() => rs(stream()), stream.end)
		})
	}
})
