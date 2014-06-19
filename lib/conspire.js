'use strict';

var sample = require('underscore').sample;

var action = require('./material/action');
var agency = require('./material/agency');
var animal = require('./material/animal');
var consumable = require('./material/consumable');
var decade = require('./material/decade');
var substance = require('./material/substance');
var year = require('./material/year');

module.exports = conspire;

function conspire () {
    var conspiracy = sample([

        // <agency> have been using <animal>s for <usage> since the <decade>s.
        function () {
            return [
                agency.get(),
                ' have been using ',
                animal.getPlural(),
                ' for ',
                animal.getUsage(),
                ' since the ',
                decade.get(year.get(1930, 1999)),
                's.'
            ].join('');
        },

        // <agency> are <action> us through <substance> in our <consumable>.
        function () {
            return [
                agency.get(),
                ' are ',
                action.get('us'),
                ' through ',
                substance.getPlural(),
                ' in our ',
                consumable.get(),
                '.'
            ].join('');
        }

    ]);
    return conspiracy();
}
