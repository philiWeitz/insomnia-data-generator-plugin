# insomnia-data-generator-plugin
This is insomnia plugin gives you full access to all functions provided by chancejs

<img alt="Preview" src="https://raw.githubusercontent.com/philiWeitz/insomnia-data-generator-plugin/HEAD/documentation/preview.gif" />

## Options
The option description can be found under https://chancejs.com/.
Unfortunately, all option objects have to use ` instead of ". This is because of some insomnia limitations

Possible options:
- integer: {\`min\`: 100, \`max\`: 999}
- timestamp with date range: {\`dayMin\`: -20, \`dayMax\`: 20}
- timestamp with month range: {\`monthMin\`: -20, \`monthMax\`: 20}

## Manual installation
Go to:
- MacOS: `~/Library/Application\ Support/Insomnia/plugins/`
- Windows: `%APPDATA%\Insomnia\plugins\`
- Linux: `$XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/`

Clone the repository:
- clone https://github.com/philiWeitz/insomnia-data-generator-plugin.git

Install dependencies:
- cd insomnia-data-generator-plugin
- npm install
