#!/usr/bin/env node
require('colorful').toxic()
const pkg = require('./package')
const updateNotifier = require('update-notifier')
updateNotifier({pkg}).notify()
const argv = require('minimist')(process.argv.slice(2), { '--': true })

if (argv.v || argv.version) {
  console.log(`${pkg.name.cyan} ~ ${pkg.version.magenta}`)
  process.exit()
}

require('./')(argv)
