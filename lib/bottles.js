const fs = require('fs');

// () -> string
song = () => String(fs.readFileSync('lib/song.txt'))

// num -> string
verse = (num) => song().split(/\n\n/)[99-num]

// num -> num -> string
verses = (num1, num2) => [...Array(num2 - num1 + 1).keys()].reverse().map((el) => verse(el + num1)).join("\n")
