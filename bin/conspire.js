#!/usr/bin/env node
'use strict';

var conspire = require('../lib/conspire');
var pkg = require('../package.json');
var program = require('commander');

program.version(pkg.version);
program.parse(process.argv);
console.log(conspire());
