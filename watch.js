
var stream = require('flyd').stream
var on     = require('flyd').on
var watch  = require('chokidar').watch

module.exports = function flyd__watch (globlike, options)
{
	var s = stream()

	var w = watch(globlike, options)

	w.on('all', (event, path) =>
	{
		s([ event, path ])
	})

	on(w.close.bind(w), s.end)

	return s
}
