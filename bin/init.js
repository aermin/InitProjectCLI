#!/usr/bin/env node

const commander = require('commander');
const packageJson = require('../package');
const { run } = require('../src/run');

commander
  .command('init')
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage('<project-directory> [options]')
  .action(run)

commander.parse(process.argv)
