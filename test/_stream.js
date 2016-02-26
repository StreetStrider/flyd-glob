
var stream = module.exports = {}

var flyd = require('flyd')

var diff  = require('lodash.differencewith')
var equal = require('lodash.isequal')


var expect = require('chai').expect


stream.isStream = function isStream (it)
{
	expect(flyd.isStream(it)).true
}

stream.streamEquals = function streamEquals (target, standard)
{
	return concat(target)
	.then((target) =>
	{
		var delta = diff(target, standard, equal)

		expect(delta).empty
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
