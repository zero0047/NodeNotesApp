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
    handler: function(argv){
       notes.addNotes(argv.title,argv.body)
   }
})

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    handler: function(){
        console.log('Removing a note')
    }
})

yargs.command({
    command:'list',
    describe:'My list',
    handler:function(){
        console.log('My list is showing')
    }
})

yargs.command({
    command:'read',
    describe:'Read my notes',
    handler:function(){
        console.log('Reading my notes')
    }
})

yargs.parse()





