'use strict';

var generate = require('../generate');

exports.reasons = [
    'bacteria',
    'chemical',
    'drug',
    'medicine',
];

exports.get = generate.random(exports.reasons);
