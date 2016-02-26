
var stream = require('flyd').stream
var defer  = require('lodash.defer')
var glob   = require('globule').find

module.exports = function flyd__glob (globlike, options)
{
	var s = stream()

	defer(() =>
	{
		glob(globlike, options).forEach(s)
		s.end(true)
	})

	return s
}
