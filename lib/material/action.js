'use strict';

var generate = require('../generate');

exports.actions = [
    'working on biological weapons',
    'fixing stock prices',
    'searching for alien life',
    'communicating with the dead',
    'building a mass-surveillance system',
    'putting together the ultimate pro-basketball team',
    'communicating with aliens',
    'developing a "cure" for homosexuality',
    'working towards The Singularity',
];

exports.actionsOn = [
    'brainwashing %s',
    'controlling %s',
];

exports.get = generate.random(exports.actions);
exports.getOn = generate.random(exports.actionsOn);
