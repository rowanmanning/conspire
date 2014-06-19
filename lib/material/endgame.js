'use strict';

var generate = require('../generate');

exports.endgames = [
    'a plot against the queen',
    'a terrorist plot',
    'a Washington takeover',
    'nefarious purposes',
    'world domination',
];

exports.get = generate.random(exports.endgames);
