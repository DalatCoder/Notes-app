const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
  const notes = loadNotes()

  const duplicated = notes.filter(el => el.title === title)
  if (duplicated.length === 0) {
    notes.push({
      title,
      body
    })
    console.log(chalk.green.inverse('Adding new note!'))
    saveNotes(notes)
  } else {
    console.log(chalk.red.inverse('Title taken!'))
  }
}

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (err) {
    return []
  }
}

const removeNote = title => {
  const notes = loadNotes()

  const newNotes = notes.filter(el => el.title !== title)

  if (notes.length === newNotes.length) {
    console.log(chalk.red.inverse('No note found!'))
  } else {
    console.log(chalk.green.inverse('Note remoted!'))
  }

  saveNotes(newNotes)
}

const listNotes = () => {
  const notes = loadNotes()

  console.log(chalk.green('Your notes!'))

  notes.forEach(element => {
    console.log(`${element.title}`)
  });
}

module.exports = {
  addNotes,
  removeNote,
  listNotes
}
