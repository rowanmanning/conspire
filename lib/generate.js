'use strict';

var format = require('util').format;
var pluralize = require('pluralize');
var sample = require('underscore').sample;

exports.random = random;
exports.randomPlural = randomPlural;

function random (list) {
    return function () {
        var chosen = sample(list);
        if (typeof chosen === 'string') {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(chosen);
            return format.apply(null, args);
        }
        return chosen;
    };
}

function randomPlural (list) {
    return function () {
        return pluralize(sample(list));
    };
}
