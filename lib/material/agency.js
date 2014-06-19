'use strict';

var generate = require('../generate');

exports.agencies = [
    'Anonymous',
    'Apple',
    'CERN',
    'Google',
    'Microsoft',
    'News International',
    'Silicon Valley investors',
    'the CIA',
    'the FBI',
    'the Freemasons',
    'the Government',
    'the Illuminati',
    'the Police',
];

exports.get = generate.random(exports.agencies);
