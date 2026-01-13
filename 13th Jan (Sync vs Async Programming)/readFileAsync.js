const fileSystem = require("fs")

console.log("start")

fileSystem.readFile("f1.txt", (error, data) => {
    if(error) {
        console.log("Some error while reading f1")
    }

    console.log("File-1 -> ")
})

fileSystem.readFile("f2.txt", (error, data) => {
    if(error) {
        console.log("Some error while reading f2")
    }

    console.log("File-2 -> ")
})

fileSystem.readFile("f3.txt", (error, data) => {
    if(error) {
        console.log("Some error while reading f3")
    }

    console.log("File-3 -> ")
})

console.log("end")