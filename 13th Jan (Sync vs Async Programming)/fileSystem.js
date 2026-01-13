const fileSystem = require("fs") // fs -> file System module. 
const path = require("path")

//fs module in js is used to interact with the file. 
// Create, Update, Append, Delete, Read ....

//Read the file-1 asynchronously.
// fileSystem.readFile("f1.txt", 'utf-8', (error, data) => {
//     if(error) {
//         console.log("There's some error while reading the f1.txt")
//     }

//     console.log(data)
// })

//Write
// let content = "Updated content for file-2"
// fileSystem.writeFile("f2.txt", content, (error) => {
//     if(error) {
//         console.log("Some error occurred while writing the data.")
//     }

//     console.log("Data writing done")
// })


// let updatedContent = "\nMasai School"
// fileSystem.appendFile("f2.txt", updatedContent, (error) => {
//     if(error) {
//         console.log("Some error while appending to the file.")
//     }

//     console.log("File appended successfuly")
// })

//delete a file.
// fileSystem.unlink("f1.txt", (error) => {
//     if(error) {
//         console.log("Some error while deleting the file.")
//     } else {
//         console.log("File deleted successfuly.")
//     }
// })

fileSystem.stat("f2.txt", (err, masai) => {
    if(err) {
        console.log("Some error while reading the file stats.")
    } else {
        console.log(masai.birthtime)
    }
})

const f2Extenstion = path.extname("f2.txt")

console.log(f2Extenstion)