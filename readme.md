# flyd-glob [![Travis](https://img.shields.io/travis/StreetStrider/flyd-glob.svg?style=flat-square)](https://travis-ci.org/StreetStrider/flyd-glob) [![Coveralls](https://img.shields.io/coveralls/StreetStrider/flyd-glob.svg?style=flat-square)](https://coveralls.io/github/StreetStrider/flyd-glob)

```js
var flyd = require('flyd')
var glob = require('flyd-glob')

var gs = glob('**/*.js')

/* subscribe on all filenames matched */
flyd.on(console.log, gs)
```

```js
var flyd  = require('flyd')
var watch = require('flyd-glob/watch')

var gs = watch('**/*.js')

/* watch on changed files, get their filenames */
flyd.on(console.log, gs)
```

## API

**glob** (glob.js):

> Get stream of filenames matching certain glob expr in **string** or any
of glob exprs in **array of strings**. Stream will emit all filenames on next tick and then end.

```js
glob(string) → stream of filenames
glob(array of strings) → stream of filenames
glob(string, options) → stream of filenames
glob(array of strings, options) → stream of filenames
```

**watch** (watch.js):

> Get stream of changes of files matching certain glob expr in **string** or any
of glob exprs in **array of strings**. Stream will emit filenames on file changings.
Stream will never end, unless you do it manually. If you force stream to end,
it will release underlying watch utility.

```js
watch(string) → stream of filenames
watch(array of strings) → stream of filenames
watch(string, options) → stream of filenames
watch(array of strings, options) → stream of filenames
```
