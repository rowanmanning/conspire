'use strict';

var random = require('underscore').random;

exports.get = getYear;

function getYear (start, end) {
    start = Math.max(start, 1600);
    end = end || start + 100;
    return random(start, end);
}
