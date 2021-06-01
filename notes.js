const fs = require('fs')
const chalk = require('chalk')


const addNotes = ((title,body) => {
    const notes =loadNotes()
    const dulicateNotes = notes.filter((note) => note.title == title)
    const duplicateNote = notes.find((note) => note.title === title)
    if(!(duplicateNote)){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    }else{
        console.log(chalk.red.inverse('Title taken'))
    }
}
)
const removeNotes =((title) => {
    const notes = loadNotes()
    const notesTokeep = notes.filter((note) => note.title !== title)
    if(notesTokeep.length == notes.length){
        console.log(chalk.bgRed('Note not found'))
    }
    else
    {
        saveNotes(notesTokeep)
        console.log(chalk.bgGreen('Note removed'))
    }
}
)
const listNotes = (() => {
    const notes = loadNotes()
    console.log(chalk.red.inverse('Your notes'))
    notes.forEach((note) => {
        console.log(chalk.green.inverse(note.title))
    })
}
)
const readNotes = (title) => {
    const notes = loadNotes()
    note = notes.find((note) => note.title === title)
    if(note !== undefined)
        console.log(chalk.yellow.inverse(note.title),note.body)
    else
        console.log(chalk.red.inverse("Note not found"))
}
const saveNotes = ((notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
)
const loadNotes = (() => {
   try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
   }catch(e){
        return[]
   }
}
)

module.exports ={
    addNote: addNotes,
    removeNote: removeNotes,
    listNote : listNotes,
    readNote: readNotes
}