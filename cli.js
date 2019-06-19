#!/usr/bin/env node
'use strict';

const importJsx = require('import-jsx');
const {h, render} = require('ink');
const meow = require('meow');

const App = importJsx('./App');

const cli = meow(`
	Usage
	  $ ink-test [input]

	Options
	  --name  Lorem ipsum [Default: false]

	Examples
	  $ ink-test
	  I love Ink
	  $ ink-test --name=ponies
	  I love ponies
`);

render(h(App, cli.flags));
