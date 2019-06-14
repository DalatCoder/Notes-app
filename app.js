const chalk = require('chalk')
const yargs = require('yargs')

yargs.command({
  command: 'add',
  describe: 'Add new notes',
  builder: {
    title: {
      describe: 'None title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'None body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    console.log(`Title: ${argv.title}`)
    console.log(`Body: ${argv.body}`)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Removing note',
  handler: function () {
    console.log('Removing note!')
  }
})

yargs.command({
  command: 'list',
  describe: 'Listing notes',
  handler: function () {
    console.log('Listing out notes')
  }
})

yargs.command({
  command: 'read',
  describe: 'read notes',
  handler: function () {
    console.log('Reading notes')
  }
})

yargs.parse()
