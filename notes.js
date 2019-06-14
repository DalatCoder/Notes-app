const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
  const notes = loadNotes()

  const isTitleTaken = notes.find(el => el.title === title)

  if (!isTitleTaken) {
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

const readNote = title => {
  const notes = loadNotes()

  const note = notes.find(el => el.title === title)

  if (note) {
    // print note
    console.log(chalk.green.inverse(`${note.title}`) + ' : ' + note.body)
  } else {
    // note not found
    console.log(chalk.red.inverse('Note not found!'))
  }
}

module.exports = {
  addNotes,
  removeNote,
  listNotes,
  readNote
}
