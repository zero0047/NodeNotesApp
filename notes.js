const fs = require('fs')

const getNotes = function(){
    return 'Your notes...'
}

const addNotes = function(title,body){
    const notes = loadNotes();
    console.log(notes)
    
    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
}

const saveNotes = function(notes){
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json',data)
}

const loadNotes = function(){
    try{
        const data = fs.readFileSync('./notes.json')
        const jsonFormat = JSON.parse(data.toString())
        console.log(data)
        console.log(jsonFormat)
        return jsonFormat
    }catch(e){
        console.log(e)
        return []
    }
}

module.exports={
    addNotes: addNotes,
    getNotes: getNotes

}
