# insomnia-data-generator-plugin
This is insomnia plugin for generating random data using chancejs

<img alt="Preview" src="https://raw.githubusercontent.com/philiWeitz/insomnia-data-generator-plugin/HEAD/documentation/preview.gif" />

## Options
The option description can be found under https://chancejs.com/.
Unfortunately, all option objects have to use ` instead of ". This is because of some insomnia limitations

Possible options:
- integer: {`min`: 100, `max`: 999}
- timestamp with date range: {`minDay`: -20, `maxDay`: 20}
- timestamp with month range: {`minMonth`: -20, `maxMonth`: 20}
