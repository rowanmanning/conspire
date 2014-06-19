'use strict';

var generate = require('../generate');

exports.animals = [
    'cat',
    'chimp',
    'cow',
    'dog',
    'dolphin',
    'goat',
    'gorilla',
    'horse',
    'monkey',
    'mouse',
    'orca',
    'pig',
    'rat',
];

exports.usages = [
    'canteen food',
    'cheap labor',
    'sexual release',
    'target practice',
    'drug smuggling',
    'arms trafficking',
];

exports.get = generate.random(exports.animals);
exports.getPlural = generate.randomPlural(exports.animals);
exports.getUsage = generate.random(exports.usages);
