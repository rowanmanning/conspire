'use strict';

var generate = require('../generate');

exports.consumables = [
    'air supply',
    'alcohol',
    'beer',
    'fizzy drinks',
    'food',
    'household cleaners',
    'junk food',
    'tobacco',
    'water supply'
];

exports.get = generate.random(exports.consumables);
exports.getPlural = generate.randomPlural(exports.consumables);
