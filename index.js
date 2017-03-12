#!/usr/bin/env node

const program = require("commander");

program.version(require("./package.json").version)
  .option('-t, --test', 'Starts a test')

program.command('test <file>')
  .description('run setup test')
  .option("-s, --silent", "Uses the silent mode")
  .action(function( file, options){
    if(!options.silent){
      console.log("TEST on file", file);
      console.log("  TEST DONE")
    }
  });

program.parse(process.argv);
