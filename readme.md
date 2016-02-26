# flyd-glob [![Travis](https://img.shields.io/travis/StreetStrider/flyd-glob.svg?style=flat-square)](https://travis-ci.org/StreetStrider/flyd-glob) [![Coveralls](https://img.shields.io/coveralls/StreetStrider/flyd-glob.svg?style=flat-square)](https://coveralls.io/github/StreetStrider/flyd-glob)

```js
var flyd = require('flyd')
var glob = require('flyd-glob')

var globstream = glob('**/*.js')

flyd.on(console.log, globstream)
```

## API
```js
glob(string) → stream
glob(array of strings) → stream
glob(string, options) → stream
glob(array of strings, options) → stream
```
> get stream of filenames matching certain glob expr in **string** or any
of glob exprs in **array of strings**. stream will emit all filenames on next tick and then end.
