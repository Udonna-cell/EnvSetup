#!/usr/bin/env node

import chalk from "chalk"
import app from "../dist/app.js"

let argument = process.argv.slice(2)
let msg = "Setting up development environment"
let warn = "argument can only contain the folder Name"

if (argument.length == 1){
  msg += ` for ${chalk.green(argument[0])}`
  console.log(chalk.gray(msg))
  app(argument)
}else if (argument.length == 0){
  console.log(chalk.gray(msg))
  app(argument)
}else {
  console.log(chalk.red("ERROR: commands not found"))
  console.log(chalk.gray(warn))
}
