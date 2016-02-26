
var lib = require('./_lib')
var inst = require('./_inst')
var stream = require('./_stream')

describe('watch', () =>
{
	var watch = require('../watch')

	describe('exports', () =>
	{
		lib(watch, 'flyd__watch')
	})

	describe('instantiates', () =>
	{
		inst(watch, 'watch')
	})

	describe('works', () =>
	{
		/*
			This test case only ensures that stream is working,
			it does not test watch engine itself.
			The watch functionality provided by `chokidar`,
			please consult its tests for details
			https://www.npmjs.com/package/chokidar
		 */
		var lil = __dirname + '/lil-fs'

		it('watch(string)', () =>
		{
			var s = watch('*', { cwd: lil })

			setTimeout(() => s.end(true), 10)

			return stream.streamEquals(s,
			[
				[ 'addDir', 'dir' ],
				[ 'add', 'file-2.txt' ],
				[ 'add', 'file.txt' ]
			])
		})

		it('watch(string)', () =>
		{
			var s = watch('**/*', { cwd: lil })

			setTimeout(() => s.end(true), 10)

			return stream.streamEquals(s,
			[
				[ 'addDir', 'dir' ],
				[ 'add', 'file-2.txt' ],
				[ 'add', 'file.txt' ],
				[ 'add', 'dir/file.txt' ]
			])
		})

		it('watch(array of strings)', () =>
		{
			var s = watch([ '*.txt', '*/*' ], { cwd: lil })

			setTimeout(() => s.end(true), 10)

			return stream.streamEquals(s,
			[
				[ 'add', 'file-2.txt' ],
				[ 'add', 'file.txt' ],
				[ 'add', 'dir/file.txt' ]
			])
		})

		it('watch(empty array)', () =>
		{
			var s = watch([], { cwd: lil })

			setTimeout(() => s.end(true), 10)

			return stream.streamEquals(s, [])
		})
	})
})
