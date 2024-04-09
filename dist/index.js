#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const figlet_1 = __importDefault(require("figlet"));
console.log(figlet_1.default.textSync('About.js'));
const program = new commander_1.Command();
program.version('1.0.0').description('A little app for text rendering').option('-r', 'Render text').parse(process.argv);
const options = program.opts();
function renderText() {
    console.log('rendered');
}
if (options.r) {
    renderText();
}
//# sourceMappingURL=index.js.map