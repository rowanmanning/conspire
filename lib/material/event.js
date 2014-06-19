'use strict';

var generate = require('../generate');

exports.events = [
    '9/11',
    'the Dot-Com bust',
    'the moon landing',
    'the Queen\'s diamond jubilee',
    'the last Superbowl',
    'the last World Cup',
    'the Wall Street crash',
];

exports.get = generate.random(exports.events);
