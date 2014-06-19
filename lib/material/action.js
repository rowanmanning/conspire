'use strict';

var generate = require('../generate');

exports.actions = [
    'brainwashing %s',
    'controlling %s',
];

exports.get = generate.random(exports.actions);
