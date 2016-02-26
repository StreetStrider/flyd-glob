# flyd-glob [![Travis](https://img.shields.io/travis/StreetStrider/flyd-glob.svg?style=flat-square)](https://travis-ci.org/StreetStrider/flyd-glob)

```js
var flyd = require('flyd')
var glob = require('flyd-glob')

var globstream = glob('**/*.js')

flyd.on(console.log, globstream)
```

## API
glob(string) → stream
glob(array of strings) → stream
glob(string, options) → stream
glob(array of strings, options) → stream
