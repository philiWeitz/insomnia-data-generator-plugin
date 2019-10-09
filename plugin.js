const Chance = require('chance');
const moment = require('moment');
const { keys, isNil } = require('lodash');

function getInstance(seed) {
    const chance = seed ? new Chance(seed) : new Chance();

    chance.mixin({
        /*
         * Generates a timestamp
         * If no arguments are given, the current time is returned
         * Generate a random day with a range of 0 to 10 days: options = { `dayMin`: -10, `dayMax`: 0 }
         *
         * @param {Object} [options={}] can specify a min and/or max
         */
        'timestamp': function(options = {}) {
            let result = moment();

            if (!isNil(options.dayMin) && !isNil(options.dayMax)) {
                result.add(chance.integer({
                    min: options.dayMin,
                    max: options.dayMax,
                }), 'days');
            }
            if (!isNil(options.monthMin) && !isNil(options.monthMax)) {
                result.add(chance.integer({
                    min: options.monthMin,
                    max: options.monthMax,
                }), 'months');
            }
            if (!isNil(options.yearMin) && !isNil(options.yearMax)) {
                result.add(chance.integer({
                    min: options.yearMin,
                    max: options.yearMax,
                }), 'years');
            }
            return result.toISOString();
        }
    });

    return chance;
}

const availableFunctions = keys(getInstance().__proto__).sort().filter(item => {
    return !['VERSION', 'd10', 'd100', 'd12', 'd20', 'd30', 'd4', 'd6', 'd8'].includes(item);
});

toInsomniaOption = function(stringValue) {
    return {
        displayName: stringValue,
        value: stringValue,
    }
};

module.exports.templateTags = [{
    name: 'generator',
    displayName: 'Generator',
    description: 'Generates random resources. For all options objects, please ` instead of ".',
    args: [
        {
            displayName: 'Function',
            description: 'Type of data you want to generate',
            type: 'enum',
            options: availableFunctions.map(toInsomniaOption)
        },
        {
            displayName: 'JSON Options',
            description: 'Additional options passed to function (as JSON)',
            type: 'string',
        },
        {
            displayName: 'Seed',
            description: 'Used to always create the same values',
            type: 'string',
        }
    ],

    async run (context, func, options, seed) {
        let parsedOptions = undefined;

        if (options) {
            parsedOptions = JSON.parse(options.replace(new RegExp('\`', 'g'),'"'));
        }
        const instance = getInstance(seed);
        return instance.__proto__[func].call(instance, parsedOptions);
    }
}];
