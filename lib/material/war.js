'use strict';

var generate = require('../generate');

exports.wars = [
    'the American Civil War',
    'the English Civil War',
    'the Falklands War',
    'the French Revolution',
    'the Gulf War',
    'the Iraq War',
    'the Vietnam War',
    'World War 1',
    'World War 2',
];

exports.causes = [
    'animal testing',
    'Atlantis',
    'control of alien specimens',
    'how to pronounce "scone"',
    'Scientology',
    'stock price fixing',
    'tabs vs spaces',
    'the holy grail',
    'whether tea should be taken with milk',
];

exports.get = generate.random(exports.wars);
exports.getCause = generate.random(exports.causes);
