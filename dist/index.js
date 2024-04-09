#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const figlet_1 = __importDefault(require("figlet"));
const fs_1 = __importDefault(require("fs"));
console.log(figlet_1.default.textSync('About.js'));
const program = new commander_1.Command();
program.version('1.0.0').description('A little app for text rendering').option('-r', 'Render text').parse(process.argv);
const options = program.opts();
function importFile(filename) {
    return new Promise((resolve, reject) => {
        const filePath = `./assets/${filename}.txt`;
        fs_1.default.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
}
function renderText() {
    return __awaiter(this, void 0, void 0, function* () {
        const file = yield importFile('greetings');
        console.log('rendered', file);
    });
}
if (options.r) {
    renderText();
}
//# sourceMappingURL=index.js.map