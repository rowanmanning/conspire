
Conspire
========

Generate frightening and very believable conspiracy theories.

**Current Version:** *0.0.0*  
**Node Support:** *0.10.x, 0.11.x*  
**License:** [MIT][mit]  
**Build Status:** [![Build Status][travis-img]][travis]


Examples
--------

- The Queen's diamond jubilee never actually happened. It was faked by News International.
- CERN have been using dolphins for arms trafficking since the 1970s.
- The CIA are brainwashing cats for a Washington takeover.


Install
-------

Install Conspire with [npm][npm]:

```sh
npm install conspire
```

If you just want to use the command-line tool, you might want to install globally:

```sh
npm install -g conspire
```


Usage (Command-Line)
--------------------

```sh
conspire # The Queen's diamond jubilee never actually happened. It was faked by News International.
```


Usage (JavaScript)
------------------

```js
var conspire = require('conspire');
var theory = conspire();
console.log(theory); // CERN have been using dolphins for arms trafficking since the 1970s.
```


Contributing
------------

To contribute to Conspire, clone this repo locally and commit your code on a separate branch.

Please check that everything works by running the following before opening a pull-request:

```sh
make lint test
```


License
-------

Conspire is licensed under the [MIT][mit] license.  
Copyright &copy; 2014, Rowan Manning



[mit]: http://opensource.org/licenses/mit-license.php
[npm]: https://npmjs.org/
[travis]: https://travis-ci.org/rowanmanning/conspire
[travis-img]: https://travis-ci.org/rowanmanning/conspire.svg?branch=master
