#! /usr/bin/env node

import { Command } from 'commander';
import figlet from 'figlet';

console.log(figlet.textSync('About.js'));
const program = new Command();

program.version('1.0.0').description('A little app for text rendering').option('-r', 'Render text').parse(process.argv);
const options = program.opts();

function renderText() {
  console.log('rendered');
}

if (options.r) {
  renderText();
}
