#!/usr/bin/env node

const got = require('got');
const chalk = require('chalk');
const ora = require('ora');
const insultApi = 'https://insult.mattbas.org/api/en/insult.json';
const spinner = ora('Delving into the depths of indignity...').start()

function getInsult() {
  return got(insultApi).then(response => {
    spinner.stop()
    const body = JSON.parse(response.body);
    console.log(chalk.green(body.insult));
  })
  .catch(error => {
    spinner.stop()
    console.log(chalk.red(`Error talking with ${insultApi}`))
    console.log(error)
  })
}

getInsult();