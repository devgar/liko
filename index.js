#!/usr/bin/env node

const program = require("commander");

program
  .version(require("./package.json").version)
  .option('-t, --test', 'Starts a test')

  .parse(process.argv);

console.log("INDEX");
if (program.test) console.log('  - Doing a test');
