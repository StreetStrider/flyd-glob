
var expect = require('chai').expect
var lib = require('./_lib')

var flyd   = require('flyd')
var diff   = require('lodash.difference')

describe('glob', () =>
{
	var glob = require('../')

	describe('export', () =>
	{
		lib(glob, 'flyd__glob')
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
		/*
			This test case only ensures that stream is working,
			it does not test globs itself.
			The glob functionality provided by `globule`,
			please consult its tests for details
			https://www.npmjs.com/package/globule
		 */
		var lil = __dirname + '/lil-fs'

		it('glob(string)', () =>
		{
			var s = glob('*', { cwd: lil })
			return streamEquals(s, [ 'dir', 'file-2.txt', 'file.txt' ])
		})

		it('glob(string)', () =>
		{
			var s = glob('**/*', { cwd: lil })
			return streamEquals(s, [ 'dir', 'file-2.txt', 'file.txt', 'dir/file.txt' ])
		})

		it('glob(array of strings)', () =>
		{
			var s = glob([ '*.txt', '*/*' ], { cwd: lil })
			return streamEquals(s, [ 'file-2.txt', 'file.txt', 'dir/file.txt' ])
		})

		it('glob(empty array)', () =>
		{
			var s = glob([], { cwd: lil })
			return streamEquals(s, [])
		})
	})

	function isStream (it)
	{
		expect(flyd.isStream(it)).true
	}

	function streamEquals (target, standard)
	{
		return concat(target)
		.then((target) =>
		{
			expect(diff(target, standard)).empty
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
