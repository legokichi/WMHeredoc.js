# WMHeredoc.js [![Build Status](https://travis-ci.org/duxca/WMHeredoc.js.png)](http://travis-ci.org/duxca/WMHeredoc.js)

[![npm](https://nodei.co/npm/duxca.wmheredoc.js.png?downloads=true&stars=true)](https://nodei.co/npm/duxca.wmheredoc.js/)

WMHeredoc.js can use Heredocument in JavaScript.

## Document

- [WMHeredoc.js wiki](https://github.com/duxca/WMHeredoc.js/wiki/WMHeredoc)
- [WebModule](https://github.com/uupaa/WebModule)
    - [Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html)
    - [Development](https://github.com/uupaa/WebModule/wiki/Development)

## How to use

### Browser

```js
<script src="lib/WMHeredoc.js"></script>
<script>
var str = WMHeredoc(function({/*

here

*/}));
</script>
```

### WebWorkers

```js
importScripts("lib/WMHeredoc.js");

var str = WMHeredoc(function({/*

here

*/}));
```

### Node.js

```js
var WMHeredoc = require("lib/WMHeredoc.js");

var str = WMHeredoc(function({/*

here

*/}));
```
