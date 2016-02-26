
var lib = require('./_lib')
var stream = require('./_stream')

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
			stream.isStream(glob('*.txt'))
		})
		it('glob(array of strings) is ok', () =>
		{
			stream.isStream(glob([]))
			stream.isStream(glob([ '*.txt' ]))
		})
		it('glob(string, options) is ok', () =>
		{
			stream.isStream(glob('*.txt', { cwd: '.' }))
		})
		it('glob(array of strings, options) is ok', () =>
		{
			stream.isStream(glob([], { cwd: '.' }))
			stream.isStream(glob([ '*.txt' ], { cwd: '.' }))
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
			return stream.streamEquals(s, [ 'dir', 'file-2.txt', 'file.txt' ])
		})

		it('glob(string)', () =>
		{
			var s = glob('**/*', { cwd: lil })
			return stream.streamEquals(s, [ 'dir', 'file-2.txt', 'file.txt', 'dir/file.txt' ])
		})

		it('glob(array of strings)', () =>
		{
			var s = glob([ '*.txt', '*/*' ], { cwd: lil })
			return stream.streamEquals(s, [ 'file-2.txt', 'file.txt', 'dir/file.txt' ])
		})

		it('glob(empty array)', () =>
		{
			var s = glob([], { cwd: lil })
			return stream.streamEquals(s, [])
		})
	})
})
