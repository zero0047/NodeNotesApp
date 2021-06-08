const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')


const addNotes = (title,body)=>{
    const notes = loadNotes();
   // console.log(notes)

    const duplicateNotes = notes.find((note) => note.title===title)

    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green('New Title:New Note Added!'))
    }else{
        console.log(chalk.red('Title repeated:No New Note Added'))
    }
    
   
}

const removeNotes = (title) =>{
    const notes = loadNotes();
   var count=0;
    const selectedTitle = notes.filter((note)=> note.title!==title);
    
    if(notes.length===selectedTitle.length){
        
        console.log(chalk.red('Title not Found: No notes were removed'))
    }else{
        saveNotes(selectedTitle)
        console.log(chalk.green('Title Found:Note removed'))
    }
    
}

const saveNotes = (notes)=>{
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)
}

const readNotes = (title) =>{
    const notes = loadNotes();
    
    const findNote = notes.find((note)=> note.title === title)
    if(!findNote){
        console.log(chalk.red('No such note found'))
    }else{
        console.log(chalk.blue('Here is your note:- ') +'\n'+ chalk.yellow('Title: ')+(findNote.title)+chalk.yellow('\nBody: ')+findNote.body)
    }
    
    

}

const listNotes = () => {
    var i=1;
    const notes = loadNotes();
    console.log(chalk.yellow('Your Notes: '))
    notes.forEach((note) => {
        console.log(i+'. '+note.title+'\n')
        i++;
    })
}

const loadNotes = ()=>{
    try{
        const data = fs.readFileSync('./notes.json')
        const jsonFormat = JSON.parse(data.toString())
        // console.log(data)
        // console.log(jsonFormat)
        return jsonFormat
    }catch(e){
        console.log(e)
        return []
    }
}

module.exports={
    addNotes: addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes

}
