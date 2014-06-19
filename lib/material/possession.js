'use strict';

var generate = require('../generate');

exports.possessions = [
    'book',
    'car',
    'CD',
    'computer',
    'DVD',
    'furniture',
    'phone',
    'TV',
];

exports.modifiers = [
    'burn',
    'censor',
    'decrease the value of',
    'electrify',
    'explode',
    'militarize',
    'raise the price of',
    'slow down',
    'weaponize',
];

exports.get = generate.random(exports.possessions);
exports.getPlural = generate.randomPlural(exports.possessions);
exports.getModifier = generate.random(exports.modifiers);
