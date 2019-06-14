const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

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
    notes.addNotes(argv.title, argv.body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Removing note',
  builder: {
    title: {
      describe: 'None title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title)
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
