'use strict';

var sample = require('underscore').sample;

var action = require('./material/action');
var agency = require('./material/agency');
var animal = require('./material/animal');
var consumable = require('./material/consumable');
var decade = require('./material/decade');
var endgame = require('./material/endgame');
var event = require('./material/event');
var person = require('./material/person');
var possession = require('./material/possession');
var substance = require('./material/substance');
var year = require('./material/year');

module.exports = conspire;

function conspire () {
    var generateConspiracy = sample([

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
                's'
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
                consumable.get()
            ].join('');
        },

        // <agency> are <action> <animal>s for <endgame>
        function () {
            return [
                agency.get(),
                ' are ',
                action.get(animal.getPlural()),
                ' for ',
                endgame.get()
            ].join('');
        },

        // <live-person> has been working with <agency> to <modifier> our <possession>s
        function () {
            return [
                person.getLiving(),
                ' has been working with ',
                agency.get(),
                ' to ',
                possession.getModifier(),
                ' our ',
                possession.getPlural()
            ].join('');
        },

        // <dead-person> kept hundreds of <animal>s illegally for <usage>
        function () {
            return [
                person.getDead(),
                ' kept hundreds of ',
                animal.getPlural(),
                ' illegally for ',
                animal.getUsage()
            ].join('');
        },

        // <world-event> was all about <substance> in our <consumable>.
        function () {
            return [
                event.get(),
                ' was all about ',
                substance.getPlural(),
                ' in our ',
                consumable.get()
            ].join('');
        },

        // <world-event> never actually happened. It was faked by <agency>.
        function () {
            return [
                event.get(),
                ' never actually happened. It was faked by ',
                agency.get()
            ].join('');
        },

    ]);
    var conspiracy = generateConspiracy();
    return conspiracy[0].toUpperCase() + conspiracy.substr(1) + '.';
}
