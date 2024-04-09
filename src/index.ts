#! /usr/bin/env node

import { Command } from 'commander';
import figlet from 'figlet';
import fs from 'fs';
import * as emoji from 'node-emoji';
import { sleep } from './utils';
import { terminal } from 'terminal-kit';

console.log(figlet.textSync('About.js'));
const program = new Command();

program
  .version('1.0.0')
  .description('A little app for text rendering')
  .option('-r', 'Render text')
  .parse(process.argv);
const options = program.opts();

function importFile(filename: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const filePath = `./assets/${filename}.md`;

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

async function renderText() {
  const file = await importFile('greetings');
  await sleep(1500);
  const text = emoji.emojify(file);
  terminal.slowTyping(text, { delay: 50, style: terminal.white }, async function () {
    await sleep(3000);
    process.exit();
  });
}

if (options.r) {
  renderText();
}
