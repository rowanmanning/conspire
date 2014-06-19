'use strict';

var generate = require('../generate');

exports.living = [
    'Barack Obama',
    'Bill Gates',
    'George Bush',
    'Jamie Oliver',
    'Jeremy Clarkson',
    'Justin Bieber',
    'the Queen',
    'Tony Blair',
];

exports.dead = [
    'Albert Einstein',
    'Jimmy Hendrix',
    'Kurt Cobain',
    'Margaret Thatcher',
    'Michael Jackson',
    'Mother Teresa',
    'Princess Diana',
    'Saddam Hussein',
    'Steve Jobs',
    'Winston Churchill',
];

exports.get = generate.random([].concat(exports.living, exports.dead));
exports.getLiving = generate.random(exports.living);
exports.getDead = generate.random(exports.dead);
