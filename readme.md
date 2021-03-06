# flyd-glob [![Travis](https://img.shields.io/travis/StreetStrider/flyd-glob.svg?style=flat-square)](https://travis-ci.org/StreetStrider/flyd-glob) [![Coveralls](https://img.shields.io/coveralls/StreetStrider/flyd-glob.svg?style=flat-square)](https://coveralls.io/github/StreetStrider/flyd-glob) [![MIT licensed](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](license.txt) [![npm: flyd-glob](http://img.shields.io/badge/npm-flyd--glob-CB3837.svg?style=flat-square)](https://www.npmjs.org/package/flyd-glob)

file glob and watch for [Flyd](https://www.npmjs.com/package/flyd).

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

/* watch on changed files, get changes */
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

glob engine is provided by [`globule`](https://www.npmjs.com/package/globule),
check its documentation for full list of options.

**watch** (watch.js):

> Get stream of changes of files matching certain glob expr in **string** or any
of glob exprs in **array of strings**. Stream will emit changes.
Stream will never end, unless you do it manually. If you force stream to end,
it will release underlying watch utility.

```js
watch(string) → stream of changes
watch(array of strings) → stream of changes
watch(string, options) → stream of changes
watch(array of strings, options) → stream of changes

change = [ event, filename ]
event  = watch event
```

watch engine is provided by [`chokidar`](https://www.npmjs.com/package/chokidar),
check its documentation for full list of options.

## license
MIT © 2016 StreetStrider.
