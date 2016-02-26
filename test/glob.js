
var lib = require('./_lib')
var inst = require('./_inst')
var stream = require('./_stream')

describe('glob', () =>
{
	var glob = require('../')

	describe('exports', () =>
	{
		lib(glob, 'flyd__glob')
	})

	describe('instantiates', () =>
	{
		inst(glob, 'glob')
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
