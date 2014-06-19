'use strict';

var generate = require('../generate');

exports.animals = [
    'Cat',
    'Dog',
    'Goat'
];

exports.usages = [
    'canteen food',
    'cheap labor',
    'sexual release',
    'target practice'
];

exports.get = generate.random(exports.animals);
exports.getPlural = generate.randomPlural(exports.animals);
exports.getUsage = generate.random(exports.usages);
