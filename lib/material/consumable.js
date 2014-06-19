'use strict';

var generate = require('../generate');

exports.consumables = [
    'air conditioning',
    'air supply',
    'alcohol',
    'beer',
    'fizzy drinks',
    'food',
    'household cleaners',
    'junk food',
    'swimming pools',
    'tobacco',
    'water supply',
];

exports.get = generate.random(exports.consumables);
exports.getPlural = generate.randomPlural(exports.consumables);
