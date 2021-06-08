const chalk = require('chalk')
const { clear } = require('console')
//const { argv } = require('process')
const notes = require('./notes.js')
const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type: 'string'
        },

        body:{
            describe:'Your note',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv) => notes.addNotes(argv.title,argv.body)
})

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv) => notes.removeNotes(argv.title)
})

yargs.command({
    command:'list',
    describe:'My list',
    handler(){
        notes.listNotes();
    }
})

yargs.command({
    command:'read',
    describe:'Read my notes',
    builder:{
        title:{
        describe:'Enter Title',
        demandOption:true,
        type:'string'
    }
    },
    handler(argv){
        notes.readNotes(argv.title);
    }
})

yargs.parse()





