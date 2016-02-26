
var stream = require('flyd').stream

module.exports = function flyd__glob (globlike, options)
{
	var s = stream()

	setTimeout(() => s.end(true), 0)

	return s
}
