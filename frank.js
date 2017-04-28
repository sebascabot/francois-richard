#!/usr/bin/env node

const figlet = require('figlet')
const colors = require('colors')
const debug = require('debug')('frank')

const count = 3
const fonts = figlet.fontsSync()

console.log(`
            This programm Display «Francois Richard» in ${count} differents ASCII fonts.
            among the ${fonts.length} choices of different font.
`)

new Array(count)
    .fill(1)
    .map(x => ({
        font: fonts.splice(Math.floor(Math.random() * fonts.length), 1).pop()
    }))
    .forEach(x => {
        console.log(x.font)

        var options = { font: x.font }
        console.log(figlet.textSync('Francois', options).green)
        console.log(figlet.textSync('Richard', options).yellow)
    })
