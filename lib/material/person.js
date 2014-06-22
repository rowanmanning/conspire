'use strict';

var generate = require('../generate');

exports.living = [
    'Barack Obama',
    'Bill Gates',
    'George Bush',
    'Jamie Oliver',
    'Jeremy Clarkson',
    'Justin Bieber',
    'Lady Gaga',
    'the Queen',
    'Tony Blair',
];

exports.dead = [
    'Albert Einstein',
    'Elvis',
    'Jimmy Hendrix',
    'Kurt Cobain',
    'Margaret Thatcher',
    'Marilyn Monroe',
    'Michael Jackson',
    'Mother Teresa',
    'Princess Diana',
    'Saddam Hussein',
    'Steve Jobs',
    'Winston Churchill',
];

exports.realIdentities = [
    'a robot',
    'an alien trying to understand our way of life',
    'a Neo-Nazi spy',
    'Elvis Presley with extensive plastic surgery',
    '120 years old',
    'Osama bin Laden in disguise',
    'Jimmy Savile\'s reanimated corpse'
];

exports.get = generate.random([].concat(exports.living, exports.dead));
exports.getLiving = generate.random(exports.living);
exports.getDead = generate.random(exports.dead);
exports.getRealIdentity = generate.random(exports.realIdentities);
