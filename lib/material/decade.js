'use strict';

exports.get = getDecade;

function getDecade (year) {
    return Math.floor(year / 10) * 10;
}
