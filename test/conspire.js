/* jshint maxstatements: false, maxlen: false */
/* global beforeEach, describe, it */
'use strict';

var assert = require('proclaim');

describe('conspire', function () {
    var conspire;

    beforeEach(function () {
        conspire = require('../lib/conspire');
    });

    it('should be a function', function () {
        assert.isFunction(conspire);
    });

});
