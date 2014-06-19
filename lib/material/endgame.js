'use strict';

var generate = require('../generate');

exports.endgames = [
    'nefarious purposes',
    'a Washington takeover',
    'a terrorist plot',
    'world domination',
    'a plot against the queen'
];

exports.get = generate.random(exports.endgames);
