'use strict';

var generate = require('../generate');

exports.agencies = [
    'CERN',
    'The CIA',
    'The FBI',
    'The Government',
    'The Police'
];

exports.get = generate.random(exports.agencies);
