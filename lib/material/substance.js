'use strict';

var generate = require('../generate');

exports.substances = [
    'bacteria',
    'chemical',
    'drug',
    'medicine'
];

exports.get = generate.random(exports.substances);
exports.getPlural = generate.randomPlural(exports.substances);
